pragma solidity 0.5.11;

contract GreenBlockchain {
    /**
     * Propertie FIELD
     **/
    // This contract address will execute the transaction and save process data in storage of present contract
    address private contractLogicAddress;

    /**
     * Event FIELD
     **/
    event UpdateContractNewVer(address newVer); 

    /**
     * Constructor FIELD
     **/
    constructor(address _contractLogicAddress) payable public {
        contractLogicAddress = _contractLogicAddress;
    }

    /**
     * Function FIELD
     **/
    function updateContractNewVer(address _contractNewVer) external{
        contractLogicAddress = _contractNewVer;
        
        emit UpdateContractNewVer(contractLogicAddress);
    }

    function() external payable  {
        // Do nothing if we haven't properly set up the logic contract address.
        if (contractLogicAddress == address(0x0)) {
            return;
        }
        address temp = contractLogicAddress;

        assembly {
            //0x40 is the address where the next free memory slot is stored in Solidity
            let _calldataMemoryOffset := mload(0x40)
            // new "memory end" including padding. The bitwise operations here ensure we get rounded up to the nearest 32 byte boundary
            let _size := and(add(calldatasize, 0x1f), not(0x1f))
            // Update the pointer at 0x40 to point at new free memory location so any theoretical allocation doesn't stomp our memory in this call
            mstore(0x40, add(_calldataMemoryOffset, _size))
            // Copy method signature and parameters of this call into memory
            calldatacopy(_calldataMemoryOffset, 0x0, calldatasize)
            // Call the actual method via delegation
            let _retval := delegatecall(gas, temp, _calldataMemoryOffset, calldatasize, 0, 0)
            switch _retval
            case 0 {
                // 0 == it threw, so we revert
                revert(0,0)
            } default {
                // If the call succeeded return the return data from the delegate call
                let _returndataMemoryOffset := mload(0x40)
                // Update the pointer at 0x40 again to point at new free memory location so any theoretical allocation doesn't stomp our memory in this call
                mstore(0x40, add(_returndataMemoryOffset, returndatasize))
                returndatacopy(_returndataMemoryOffset, 0x0, returndatasize)
                return(_returndataMemoryOffset, returndatasize)
            }
        }
    }
}