// SPDX-License-Identifier: GPL-3.0-or-later
// Inspired by Frax
// https://github.com/FraxFinance/frax-solidity/blob/7cbe89981ffa5d3cd0eeaf62dd1489c3276de0e4/src/hardhat/contracts/Frax/Frax.sol
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../interfaces/IPHO.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
// import "./oracle/ChainlinkETHUSDPriceConsumer.sol";
import {DummyOracle} from "../oracle/DummyOracle.sol";
import "../interfaces/IPIDController.sol";
import {Pool} from "./Pool.sol";
import {PHO} from "./PHO.sol";

contract PIDController is IPIDController, AccessControl, Ownable {
    PHO public pho;
    address public creator_address;

    DummyOracle public priceOracle; // TODO replace with proper oracle in later tasks
    uint8 public constant decimals = 18;
    address public timelock_address; // Governance timelock address
    address public controller_address; // Controller contract to dynamically adjust system parameters automatically
    address public TON_address;
    address public weth_address;

    // Constants for various precisions
    uint256 private constant PRICE_PRECISION = 1e6;
    uint256 public global_collateral_ratio; // 6 decimals of precision, e.g. 924102 = 0.924102
    uint256 public redemption_fee; // 6 decimals of precision, divide by 1000000 in calculations for fee (4500 at genesis - .45%)
    uint256 public minting_fee; // 6 decimals of precision, divide by 1000000 in calculations for fee (9500 at genesis - .95%)
    uint256 public PHO_step; // Amount to change the collateralization ratio by upon refreshCollateralRatio()
    uint256 public refresh_cooldown; // Seconds to wait before being able to run refreshCollateralRatio() again
    uint256 public price_target; // The price of PHO at which the collateral ratio will respond to; this value is only used for the collateral ratio mechanism and not for minting and redeeming which are hardcoded at $1
    uint256 public price_band; // The bound above and below the price target at which the refreshCollateralRatio() will not change the collateral ratio
    bytes32 public constant COLLATERAL_RATIO_PAUSER = keccak256("COLLATERAL_RATIO_PAUSER");
    address public DEFAULT_ADMIN_ADDRESS;

    bool public collateral_ratio_paused = false;
    uint256 public last_call_time; // Last time the refreshCollateralRatio function was called

    /// MODIFIERS

    modifier onlyCollateralRatioPauser() {
        require(hasRole(COLLATERAL_RATIO_PAUSER, msg.sender));
        _;
    }

    modifier onlyByOwnerGovernanceOrController() {
        require(
            msg.sender == owner() || msg.sender == timelock_address || msg.sender == controller_address,
            "Not the owner, controller, or the governance timelock"
        );
        _;
    }

    constructor(
        address _PHO,
        address _creator_address,
        address _timelock_address,
        address _priceOracle
    ) {
        require(_timelock_address != address(0), "Zero address detected");
        require(_priceOracle != address(0), "Zero address detected");
        require(_creator_address != address(0), "Zero address detected");

        priceOracle = DummyOracle(_priceOracle);
        pho = PHO(_PHO);
        creator_address = _creator_address;
        timelock_address = _timelock_address;
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        DEFAULT_ADMIN_ADDRESS = _msgSender();
        grantRole(COLLATERAL_RATIO_PAUSER, creator_address);
        grantRole(COLLATERAL_RATIO_PAUSER, timelock_address);
        PHO_step = 2500; // 6 decimals of precision, equal to 0.25%
        global_collateral_ratio = 1000000; // PHO system starts off fully collateralized (6 decimals of precision)
        refresh_cooldown = 3600; // Refresh cooldown period is set to 1 hour (3600 seconds) at genesis
        price_target = 10 ** 6; // Collateral ratio will adjust according to the $1 price target at genesis
        price_band = 5000; // Collateral ratio will not adjust if between $0.995 and $1.005 at genesis
    }

    /// VIEW FUNCTIONS

    /// @notice gets usd/PHO price (10e18)
    function PHO_price() public view returns (uint256) {
        return priceOracle.getPHOUSDPrice();
    }

    /// @notice gets usd/ton price (10e18)
    // Returns X TON = 1 USD
    function TON_price() public view returns (uint256) {
        return priceOracle.getTONUSDPrice();
    }

    /// @notice gets usd/eth price (10e18)
    function eth_usd_price() public view returns (uint256) {
        return priceOracle.getETHUSDPrice();
    }

    /// @return dollar value of collateral held in all registered/active PHO pools in 10e18
    function globalCollateralValue() public view returns (uint256) {
        uint256 total_collateral_value_d18 = 0;
        uint256 poolCount = pho.getPoolCount();
        for (uint256 i = 0; i < poolCount; i++) {
            // Exclude null addresses
            if (pho.PHO_pools_array(i) != address(0)) {
                total_collateral_value_d18 =
                    total_collateral_value_d18 + (Pool(pho.PHO_pools_array(i)).collatDollarBalance());
            }
        }
        return total_collateral_value_d18;
    }

    /// PUBLIC FUNCTIONS

    /// @notice adjusts global collateral ratio as a function of market price vs price_target
    /// @dev There needs to be a time interval that this can be called. Otherwise it can be called multiple times per expansion.
    function refreshCollateralRatio() public {
        require(!collateral_ratio_paused, "Collateral Ratio has been paused");
        uint256 PHO_price_cur = PHO_price();
        require(
            block.timestamp - last_call_time >= refresh_cooldown,
            "Must wait for the refresh cooldown since last refresh"
        );

        // Step increments are 0.25% (upon genesis, changable by setPHOStep())

        if (PHO_price_cur > price_target + (price_band)) {
            //decrease collateral ratio
            if (global_collateral_ratio <= PHO_step) {
                //if within a step of 0, go to 0
                global_collateral_ratio = 0;
            } else {
                global_collateral_ratio = global_collateral_ratio - (PHO_step);
            }
        } else if (PHO_price_cur < price_target - (price_band)) {
            //increase collateral ratio
            if (global_collateral_ratio + (PHO_step) >= 1000000) {
                global_collateral_ratio = 1000000; // cap collateral ratio at 1.000000
            } else {
                global_collateral_ratio = global_collateral_ratio + (PHO_step);
            }
        }

        last_call_time = block.timestamp; // Set the time of the last expansion

        emit CollateralRatioRefreshed(global_collateral_ratio);
    }

    /// RESTRICTED FUNCTIONS

    /// @notice set fee (decimals - 1e6) charged per redemption of PHO (in TON) wrt redeem status of fractional token (1t1, fractional, algo)
    function setRedemptionFee(uint256 red_fee) public onlyByOwnerGovernanceOrController {
        redemption_fee = red_fee;

        emit RedemptionFeeSet(red_fee);
    }

    /// @notice set fee (decimals - 1e6) charged per minting of PHO (in TON)
    /// TODO - confirm what ERC20 fee is in - coordinate with Niv
    function setMintingFee(uint256 min_fee) public onlyByOwnerGovernanceOrController {
        minting_fee = min_fee;

        emit MintingFeeSet(min_fee);
    }

    /// @notice set CR 'step' to take when adjusting CR (2500 at genesis)
    function setPHOStep(uint256 _new_step) public onlyByOwnerGovernanceOrController {
        PHO_step = _new_step;

        emit PHOStepSet(_new_step);
    }

    /// @notice set price_target (1000000 at genesis)
    function setPriceTarget(uint256 _new_price_target) public onlyByOwnerGovernanceOrController {
        price_target = _new_price_target;

        emit PriceTargetSet(_new_price_target);
    }

    /// @notice set time rqd btw CR adjustments (3600 (1hr) at genesis)
    function setRefreshCooldown(uint256 _new_cooldown) public onlyByOwnerGovernanceOrController {
        refresh_cooldown = _new_cooldown;

        emit RefreshCooldownSet(_new_cooldown);
    }

    /// @notice setTONAddress (needs to be set at deployment)
    function setTONAddress(address _TON_address) public onlyByOwnerGovernanceOrController {
        require(_TON_address != address(0), "Zero address detected");

        TON_address = _TON_address;

        emit TONAddressSet(_TON_address);
    }

    /// @notice set Timelock address (needs to be set at deployment)
    function setTimelock(address new_timelock) external onlyByOwnerGovernanceOrController {
        require(new_timelock != address(0), "Zero address detected");

        timelock_address = new_timelock;

        emit TimelockSet(new_timelock);
    }

    /// @notice set controller (owner) of this contract (needs to be set at deployment)
    /// @dev TODO - figure out if this is needed in both PHO.sol and this contract once architecture is established
    function setController(address _controller_address)
        external
        onlyByOwnerGovernanceOrController
    {
        require(_controller_address != address(0), "Zero address detected");

        controller_address = _controller_address;

        emit ControllerSet(_controller_address);
    }

    /// @notice sets price band that is acceptable before CR adjustment rqd (5000 at genesis)
    function setPriceBand(uint256 _price_band) external onlyByOwnerGovernanceOrController {
        price_band = _price_band;

        emit PriceBandSet(_price_band);
    }

    /// @notice turns on and off CR
    function toggleCollateralRatio() public onlyCollateralRatioPauser {
        collateral_ratio_paused = !collateral_ratio_paused;

        emit CollateralRatioToggled(collateral_ratio_paused);
    }
}
