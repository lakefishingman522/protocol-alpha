/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  ZeroCouponBondModule,
  ZeroCouponBondModuleInterface,
} from "../ZeroCouponBondModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_moduleManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_kernel",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pho",
        type: "address",
      },
      {
        internalType: "address",
        name: "_depositToken",
        type: "address",
      },
      {
        internalType: "string",
        name: "_bondTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_bondTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_depositWindowOpen",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_depositWindowEnd",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotDepositAfterWindowEnd",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotDepositBeforeWindowOpen",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRedeemBeforeWindowEnd",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotRedeemMoreThanIssued",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositWindowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyModuleManager",
    type: "error",
  },
  {
    inputs: [],
    name: "OverEighteenDecimals",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressDetected",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintAmount",
        type: "uint256",
      },
    ],
    name: "BondIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "redeemer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
    ],
    name: "BondRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "interestRate",
        type: "uint256",
      },
    ],
    name: "InterestRateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "INTEREST_RATE_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "depositBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositToken",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositTokenDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositWindowEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositWindowOpen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "interestRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "issuedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleManager",
    outputs: [
      {
        internalType: "contract IModuleManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pho",
    outputs: [
      {
        internalType: "contract IPHO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_interestRate",
        type: "uint256",
      },
    ],
    name: "setInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200188138038062001881833981016040819052620000349162000410565b8451859085906200004d90600390602085019062000280565b5080516200006390600490602084019062000280565b505050620000806200007a6200022a60201b60201c565b6200022e565b60016006556001600160a01b0389161580620000a357506001600160a01b038816155b80620000b657506001600160a01b038716155b80620000c957506001600160a01b038616155b15620000e857604051632887dd7560e11b815260040160405180910390fd5b8181111580620000f85750428211155b15620001175760405163799b5bff60e11b815260040160405180910390fd5b600a80546001600160a01b0319166001600160a01b0388169081179091556040805163313ce56760e01b8152905163313ce567916004808201926020929091908290030181865afa15801562000171573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001979190620004e3565b600f805460ff191660ff92909216918217905560121015620001cc5760405163ce69d49560e01b815260040160405180910390fd5b600980546001600160a01b03808a166001600160a01b03199283161790925560078054928c1692909116919091179055600b839055600c829055600d8190556200021782826200050f565b600e555062000571975050505050505050565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200028e9062000535565b90600052602060002090601f016020900481019282620002b25760008555620002fd565b82601f10620002cd57805160ff1916838001178555620002fd565b82800160010185558215620002fd579182015b82811115620002fd578251825591602001919060010190620002e0565b506200030b9291506200030f565b5090565b5b808211156200030b576000815560010162000310565b80516001600160a01b03811681146200033e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200036b57600080fd5b81516001600160401b038082111562000388576200038862000343565b604051601f8301601f19908116603f01168101908282118183101715620003b357620003b362000343565b81604052838152602092508683858801011115620003d057600080fd5b600091505b83821015620003f45785820183015181830184015290820190620003d5565b83821115620004065760008385830101525b9695505050505050565b60008060008060008060008060006101208a8c0312156200043057600080fd5b6200043b8a62000326565b98506200044b60208b0162000326565b97506200045b60408b0162000326565b96506200046b60608b0162000326565b60808b01519096506001600160401b03808211156200048957600080fd5b620004978d838e0162000359565b965060a08c0151915080821115620004ae57600080fd5b50620004bd8c828d0162000359565b94505060c08a0151925060e08a015191506101008a015190509295985092959850929598565b600060208284031215620004f657600080fd5b815160ff811681146200050857600080fd5b9392505050565b6000828210156200053057634e487b7160e01b600052601160045260246000fd5b500390565b600181811c908216806200054a57607f821691505b6020821081036200056b57634e487b7160e01b600052602260045260246000fd5b50919050565b61130080620005816000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c8063715018a6116100f9578063a9059cbb11610097578063d4aae0c411610071578063d4aae0c41461039e578063dd62ed3e146103b1578063f2fde38b146103c4578063f6faae20146103d757600080fd5b8063a9059cbb1461036b578063c09412141461037e578063c89039c51461038b57600080fd5b806383dbec70116100d357806383dbec701461031f5780638da5cb5b1461033f57806395d89b4114610350578063a457c2d71461035857600080fd5b8063715018a6146102fb57806372b39532146103035780637c3a00fd1461031657600080fd5b806337525805116101665780635049b278116101405780635049b2781461028c57806353017a83146102945780635f84f302146102bf57806370a08231146102d257600080fd5b8063375258051461025a57806339509351146102645780634dcb05f91461027757600080fd5b806312d4ddf8116101a257806312d4ddf81461022157806318160ddd1461022a57806323b872dd14610232578063313ce5671461024557600080fd5b806306fdde03146101c9578063095ea7b3146101e75780630fb5a6b41461020a575b600080fd5b6101d16103e0565b6040516101de9190610f8d565b60405180910390f35b6101fa6101f5366004610ffe565b610472565b60405190151581526020016101de565b610213600e5481565b6040519081526020016101de565b610213600d5481565b600254610213565b6101fa610240366004611028565b61048c565b60125b60405160ff90911681526020016101de565b610213620f424081565b6101fa610272366004610ffe565b6104b0565b61028a610285366004611064565b6104d2565b005b61028a6106a6565b6009546102a7906001600160a01b031681565b6040516001600160a01b0390911681526020016101de565b61028a6102cd366004611064565b6107a6565b6102136102e036600461107d565b6001600160a01b031660009081526020819052604090205490565b61028a61080c565b6007546102a7906001600160a01b031681565b610213600b5481565b61021361032d36600461107d565b60106020526000908152604090205481565b6005546001600160a01b03166102a7565b6101d161081e565b6101fa610366366004610ffe565b61082d565b6101fa610379366004610ffe565b6108ad565b600f546102489060ff1681565b600a546102a7906001600160a01b031681565b6008546102a7906001600160a01b031681565b6102136103bf36600461109f565b6108bb565b61028a6103d236600461107d565b6108e6565b610213600c5481565b6060600380546103ef906110d2565b80601f016020809104026020016040519081016040528092919081815260200182805461041b906110d2565b80156104685780601f1061043d57610100808354040283529160200191610468565b820191906000526020600020905b81548152906001019060200180831161044b57829003601f168201915b5050505050905090565b60003361048081858561095c565b60019150505b92915050565b60003361049a858285610a81565b6104a5858585610afb565b506001949350505050565b6000336104808185856104c383836108bb565b6104cd9190611122565b61095c565b6104da610c9f565b600c544210156104fd57604051635a17872d60e11b815260040160405180910390fd5b600d5442111561052057604051630b9a479b60e21b815260040160405180910390fd5b600f546000906105349060ff16601261113a565b61053f90600a611241565b6105499083611250565b600a546040516323b872dd60e01b8152336004820152306024820152604481018590529192506001600160a01b0316906323b872dd906064016020604051808303816000875af11580156105a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c5919061126f565b506000600c5442146105fd57600e54600c546105e19042611291565b600b546105ee9190611250565b6105f891906112a8565b610601565b600b545b90506000620f42406106138382611122565b61061d9085611250565b61062791906112a8565b3360009081526010602052604081208054929350839290919061064b908490611122565b9091555061065b90503382610cf8565b604080518581526020810183905233917fc7f101cd893547ed94b213df84d6f6c162b79d94f012e0939358b1e2aabbb0f1910160405180910390a25050506106a36001600655565b50565b6106ae610c9f565b600d544210156106d1576040516308e11e1b60e01b815260040160405180910390fd5b3360009081526010602052604081208054918291906106f08380611291565b9091555061070090503382610db7565b60075460405163391b114160e01b8152336004820152602481018390526001600160a01b039091169063391b114190604401600060405180830381600087803b15801561074c57600080fd5b505af1158015610760573d6000803e3d6000fd5b50506040518381523392507fbbb59c50b3cd05fe4982a9bc1fbab45bd421ac707f4fba6b080522e3a9cc03b3915060200160405180910390a2506107a46001600655565b565b6007546001600160a01b031633146107d1576040516307fbac3960e21b815260040160405180910390fd5b600b8190556040518181527f532f252238b3b0d2b8c8a257b087fb3fdbdc775e3e0acca8e680a2f36aafa34b9060200160405180910390a150565b610814610ee1565b6107a46000610f3b565b6060600480546103ef906110d2565b6000338161083b82866108bb565b9050838110156108a05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6104a5828686840361095c565b600033610480818585610afb565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6108ee610ee1565b6001600160a01b0381166109535760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610897565b6106a381610f3b565b6001600160a01b0383166109be5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610897565b6001600160a01b038216610a1f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610897565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6000610a8d84846108bb565b90506000198114610af55781811015610ae85760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610897565b610af5848484840361095c565b50505050565b6001600160a01b038316610b5f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610897565b6001600160a01b038216610bc15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610897565b6001600160a01b03831660009081526020819052604090205481811015610c395760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610897565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610af5565b600260065403610cf15760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610897565b6002600655565b6001600160a01b038216610d4e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610897565b8060026000828254610d609190611122565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b038216610e175760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610897565b6001600160a01b03821660009081526020819052604090205481811015610e8b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610897565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610a74565b6005546001600160a01b031633146107a45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610897565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b81811015610fba57858101830151858201604001528201610f9e565b81811115610fcc576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610ff957600080fd5b919050565b6000806040838503121561101157600080fd5b61101a83610fe2565b946020939093013593505050565b60008060006060848603121561103d57600080fd5b61104684610fe2565b925061105460208501610fe2565b9150604084013590509250925092565b60006020828403121561107657600080fd5b5035919050565b60006020828403121561108f57600080fd5b61109882610fe2565b9392505050565b600080604083850312156110b257600080fd5b6110bb83610fe2565b91506110c960208401610fe2565b90509250929050565b600181811c908216806110e657607f821691505b60208210810361110657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156111355761113561110c565b500190565b600060ff821660ff8416808210156111545761115461110c565b90039392505050565b600181815b8085111561119857816000190482111561117e5761117e61110c565b8085161561118b57918102915b93841c9390800290611162565b509250929050565b6000826111af57506001610486565b816111bc57506000610486565b81600181146111d257600281146111dc576111f8565b6001915050610486565b60ff8411156111ed576111ed61110c565b50506001821b610486565b5060208310610133831016604e8410600b841016171561121b575081810a610486565b611225838361115d565b80600019048211156112395761123961110c565b029392505050565b600061109860ff8416836111a0565b600081600019048311821515161561126a5761126a61110c565b500290565b60006020828403121561128157600080fd5b8151801515811461109857600080fd5b6000828210156112a3576112a361110c565b500390565b6000826112c557634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212200ff144dcff2018ab8de733c84e8c2df8da3d0e8879f7606257ae39542dc023b064736f6c634300080d0033";

type ZeroCouponBondModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroCouponBondModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroCouponBondModule__factory extends ContractFactory {
  constructor(...args: ZeroCouponBondModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _moduleManager: PromiseOrValue<string>,
    _kernel: PromiseOrValue<string>,
    _pho: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    _bondTokenName: PromiseOrValue<string>,
    _bondTokenSymbol: PromiseOrValue<string>,
    _interestRate: PromiseOrValue<BigNumberish>,
    _depositWindowOpen: PromiseOrValue<BigNumberish>,
    _depositWindowEnd: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZeroCouponBondModule> {
    return super.deploy(
      _moduleManager,
      _kernel,
      _pho,
      _depositToken,
      _bondTokenName,
      _bondTokenSymbol,
      _interestRate,
      _depositWindowOpen,
      _depositWindowEnd,
      overrides || {}
    ) as Promise<ZeroCouponBondModule>;
  }
  override getDeployTransaction(
    _moduleManager: PromiseOrValue<string>,
    _kernel: PromiseOrValue<string>,
    _pho: PromiseOrValue<string>,
    _depositToken: PromiseOrValue<string>,
    _bondTokenName: PromiseOrValue<string>,
    _bondTokenSymbol: PromiseOrValue<string>,
    _interestRate: PromiseOrValue<BigNumberish>,
    _depositWindowOpen: PromiseOrValue<BigNumberish>,
    _depositWindowEnd: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _moduleManager,
      _kernel,
      _pho,
      _depositToken,
      _bondTokenName,
      _bondTokenSymbol,
      _interestRate,
      _depositWindowOpen,
      _depositWindowEnd,
      overrides || {}
    );
  }
  override attach(address: string): ZeroCouponBondModule {
    return super.attach(address) as ZeroCouponBondModule;
  }
  override connect(signer: Signer): ZeroCouponBondModule__factory {
    return super.connect(signer) as ZeroCouponBondModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroCouponBondModuleInterface {
    return new utils.Interface(_abi) as ZeroCouponBondModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZeroCouponBondModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZeroCouponBondModule;
  }
}
