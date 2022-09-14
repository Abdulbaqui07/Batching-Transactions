const { ethers } = require("ethers");
const abi = require('./contractABI/Batching.json')
const { data } = require("./details.json");

const privateKey = data.acc1.privateKey;
const rpcProvider = data.infura.rpcProvider;
const ABI = abi.abi;
const contractAddress = '0x1658Ef43c935ed2cFb9E2f10a4F0f4275D5D0325';

const account1 = data.acc1.address;
const account2 = data.acc2.address;
const account3 = data.acc3.address;

const provider = new ethers.providers.JsonRpcProvider(rpcProvider);

const signer = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, ABI, signer);

async function main() {
    const sendETH = await contract.batchTransactionCall([account2, account3], [1, 1],{
        gasLimit: 100000,
    });
    console.log("Transaction hash: ",sendETH.hash);
}
main()
// console.log(contract);
// const tx = await contract.safeTransferFrom(from, to, tokenId, amount, [], {
//     gasLimit: 100000,
//     nonce: nonce || undefined,
//   });