# Batching Transactions using smart contract and web3js

## What Is Batch Transactions?

Batch transactions is the processing of transactions in a group or batch. This differentiates batch transaction from single transaction, which involves processing one hash at a time with batch of transactions.

## Advantages of Batch Transactions

Faster and Lower Cost

## Applications

While batch transactions can be carried out at when, it's particularly suited to end-of-cycle processing, such as for processing a bank's reports at the end of a day or generating monthly or biweekly payrolls.

## Steps for Implementing

You need to create an npm project by going to an empty folder, running ```npm init -y```, and following its instructions. You can use another package manager, like yarn, but I recommend you to use npm 7 or later, as it makes installing Hardhat plugins simpler.

Once your project is ready, you should run

```
npm install --save-dev hardhat
```

To create the sample project, run npx hardhat in your project folder:
```
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.9.9 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create an empty hardhat.config.js
  Quit
```
## Compiling Smart Contract

To compile it, simply run:

```
npx hardhat compile
```

## Deploying Smart Contract

To deploy the contract we will use a Hardhat script.

Inside the <a href="https://github.com/Abdulbaqui07/Batching-Transactions/blob/master/scripts/deploy_2.js" />scripts/deploy_2</a> folder you will find a file with the following code:

```
const hre = require("hardhat");

async function main() {
  const [batching] = await hre.ethers.getSigners();
  console.log("Batching Contract with the account: ", batching.address);

  const Instance = await hre.ethers.getContractFactory("Batching");
  const batchingContract = await Instance.deploy();
  await batchingContract.deployed()

  console.log("Batching Contract Deployed at: ", batchingContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  })
```

You can run it using npx hardhat run:

```
$ npx hardhat run scripts/deploy_2.ts
```

or

If you want to deploy on testnet then you can run: (Like I've deployed on ropsten)

```
$ npx hardhat run scripts/deploy_2.js --network ropsten
Downloading compiler 0.8.9
Compiled 1 Solidity file successfully
Batching Contract with the account:  0x47f526Ac3BbECcC6bA8c4544Dd81803F46ac83bB
Batching Contract Deployed at:  0x1658Ef43c935ed2cFb9E2f10a4F0f4275D5D0325
```

## To interact with smartcontract
node batchApp.js
Transaction hash:  0x7430b85abe2f7d40414ea400caa642c07391e29e978676c64e17cc87ddfa8883
