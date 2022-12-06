// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "@protocol/interfaces/IModuleManager.sol";
import "./Addresses.s.sol";

/// Script to deploy Stablecoin Deposit module
contract UpdateModulePHOCeiling is Script, Addresses {

    IModuleManager public moduleManager;

    function run(string memory network, address moduleAddress, uint256 newPHOCeiling) external {
        vm.startBroadcast();

        address moduleManagerAddress = getAddress(network, ".ModuleManager");
        moduleManager = IModuleManager(moduleManagerAddress);
        moduleManager.setPHOCeilingForModule(moduleAddress, newPHOCeiling);

        vm.stopBroadcast();
    }
}
