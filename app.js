const Web3 = require('web3');
const abi = require('./contractABI/Batching.json')
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { data } = require("./details.json");
// const web3 = new Web3('https://ropsten.infura.io/v3/738d607b3d294eb58ad33862a792d0bc');
const address = data.acc1.address;
console.log(address);
const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/738d607b3d294eb58ad33862a792d0bc");

// Create web3.js middleware that signs transactions locally
const localKeyProvider = new HDWalletProvider({
  privateKeys: ["ea5b6d32c0b20ca55844a554be835abb43ec614b54caa5afaed1aa1db03dba75"],
  providerOrUrl: provider,
});
const web3 = new Web3(localKeyProvider);
console.log(web3.eth.accounts.privateKeyToAccount("ea5b6d32c0b20ca55844a554be835abb43ec614b54caa5afaed1aa1db03dba75"));
// const provider = new HDWalletProvider(privateKeys, "https://ropsten.infura.io/v3/738d607b3d294eb58ad33862a792d0bc",0,2);

// const account1 = '0x47f526Ac3BbECcC6bA8c4544Dd81803F46ac83bB';
// const account2 = '0xF36d78037987A1244D0aafc85C1cB4d7B135d4C1';
// const account3 = '0xbe12cDD73DFdD4EF2f8725994dfeB2A8977bb4A3';

let contract = new web3.eth.Contract(abi.abi, address);
// console.log(contract);

contract.methods.getMultiCallTransactions().call((error, data)=> {
    if(error){
        console.error(error);
    }
    else {
        console.log(data);
    }
});



// batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
// batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
// batch.execute();