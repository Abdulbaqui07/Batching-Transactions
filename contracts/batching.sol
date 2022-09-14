// SPDX-License-Identifier: GPL3.0
pragma solidity ^0.8.0;

contract Batching {

    event BatchTransfer(uint256 index, address from, address[] _receiver, uint256[] _sentAmounts);

    struct BatchTransferStruct {
        address sender;
        address[] receiverArray;
        uint256[] sentAmountArray;
        string message;
        uint256 timestamp;
    }

    BatchTransferStruct[] batchCallTransactions;

    function getMultiCallTransactions(uint256 index) public view returns(BatchTransferStruct memory){
        return batchCallTransactions[index];
    }

    function batchTransactionCall(address[] memory _receivers, uint256[] memory _sentAmounts) external payable {
        uint256 total = msg.value;
        require(total > 0, "Insufficient Balance");
        require(_receivers.length == _sentAmounts.length, "less input provided");
        for(uint256 i=0; i <_receivers.length; i++) {
            require(total >= _sentAmounts[i]);
            total = total - _sentAmounts[i];
            address receiver = payable(_receivers[i]);
            (bool success, ) = receiver.call{value: _sentAmounts[i]}("");
            require(success, "Transfer failed.");
        }
        if(total>0){
            (bool success, ) = msg.sender.call{value: total}("");
            require(success, "From: tx failed");
        }
        batchCallTransactions.push(BatchTransferStruct(msg.sender, _receivers, _sentAmounts, "txCompleted", block.timestamp));
        emit BatchTransfer(batchCallTransactions.length, msg.sender, _receivers, _sentAmounts);
    }

}