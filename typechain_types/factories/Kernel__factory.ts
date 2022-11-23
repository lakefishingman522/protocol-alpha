/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Kernel, KernelInterface } from "../Kernel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pho",
        type: "address",
      },
      {
        internalType: "address",
        name: "_TONGovernance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "NotModuleManager",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "NotTONGovernance",
    type: "error",
  },
  {
    inputs: [],
    name: "SameAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "SameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroValue",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "ModuleManagerDelayUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newModuleManager",
        type: "address",
      },
    ],
    name: "ModuleManagerUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "TONGovernance",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnPHO",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "mintPHO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleDelay",
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
    name: "moduleManager",
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
    name: "moduleManagerDelay",
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
    inputs: [
      {
        internalType: "address",
        name: "newModuleManager",
        type: "address",
      },
    ],
    name: "updateModuleManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateModuleManagerDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526224ea006001556212750060025534801561001e57600080fd5b5060405161062538038061062583398101604081905261003d916100c5565b6001600160a01b038216158061005a57506001600160a01b038116155b156100785760405163d92e233d60e01b815260040160405180910390fd5b600080546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790556100f8565b80516001600160a01b03811681146100c057600080fd5b919050565b600080604083850312156100d857600080fd5b6100e1836100a9565b91506100ef602084016100a9565b90509250929050565b61051e806101076000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806373f02bf21161006657806373f02bf2146101035780637bd55cfd1461011a5780639d0562eb1461012d578063a2e68a2714610140578063b3516bdd1461014957600080fd5b8063391b11411461009857806353017a83146100ad5780635fd59790146100dd57806372b39532146100f0575b600080fd5b6100ab6100a6366004610483565b61015c565b005b6000546100c0906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6004546100c0906001600160a01b031681565b6003546100c0906001600160a01b031681565b61010c60015481565b6040519081526020016100d4565b6100ab610128366004610483565b610241565b6100ab61013b3660046104ad565b6102ef565b61010c60025481565b6100ab6101573660046104c6565b61039a565b6003546001600160a01b0316331461018e57604051632b9b3bc760e11b81523360048201526024015b60405180910390fd5b6001600160a01b0382166101b55760405163d92e233d60e01b815260040160405180910390fd5b806000036101d657604051637c946ed760e01b815260040160405180910390fd5b6000546040516340c10f1960e01b81526001600160a01b03848116600483015260248201849052909116906340c10f19906044015b600060405180830381600087803b15801561022557600080fd5b505af1158015610239573d6000803e3d6000fd5b505050505050565b6003546001600160a01b0316331461026e57604051632b9b3bc760e11b8152336004820152602401610185565b6001600160a01b0382166102955760405163d92e233d60e01b815260040160405180910390fd5b806000036102b657604051637c946ed760e01b815260040160405180910390fd5b60005460405163079cc67960e41b81526001600160a01b03848116600483015260248201849052909116906379cc67909060440161020b565b6004546001600160a01b0316331461031c5760405163e7211b1960e01b8152336004820152602401610185565b8060000361033d57604051637c946ed760e01b815260040160405180910390fd5b600154810361035f5760405163c23f6ccb60e01b815260040160405180910390fd5b60018190556040518181527fcc71f7739ad52402f1e34e5103ab73ee15245c6db2fd20b5fe987791d800bacf9060200160405180910390a150565b6004546001600160a01b031633146103c75760405163e7211b1960e01b8152336004820152602401610185565b6001600160a01b0381166103ee5760405163d92e233d60e01b815260040160405180910390fd5b6003546001600160a01b039081169082160361041d5760405163367558c360e01b815260040160405180910390fd5b600380546001600160a01b0319166001600160a01b0383169081179091556040517f8e402b1ce0c82ae6311ef452373eeda8d9c761ae31b529ac3accb18455e6508c90600090a250565b80356001600160a01b038116811461047e57600080fd5b919050565b6000806040838503121561049657600080fd5b61049f83610467565b946020939093013593505050565b6000602082840312156104bf57600080fd5b5035919050565b6000602082840312156104d857600080fd5b6104e182610467565b939250505056fea2646970667358221220259b56e473a5311fffce5aa68d71715ec50a0c4aa673bb7b7e76345a5949c96464736f6c634300080d0033";

type KernelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KernelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Kernel__factory extends ContractFactory {
  constructor(...args: KernelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _pho: PromiseOrValue<string>,
    _TONGovernance: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Kernel> {
    return super.deploy(
      _pho,
      _TONGovernance,
      overrides || {}
    ) as Promise<Kernel>;
  }
  override getDeployTransaction(
    _pho: PromiseOrValue<string>,
    _TONGovernance: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_pho, _TONGovernance, overrides || {});
  }
  override attach(address: string): Kernel {
    return super.attach(address) as Kernel;
  }
  override connect(signer: Signer): Kernel__factory {
    return super.connect(signer) as Kernel__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KernelInterface {
    return new utils.Interface(_abi) as KernelInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Kernel {
    return new Contract(address, _abi, signerOrProvider) as Kernel;
  }
}
