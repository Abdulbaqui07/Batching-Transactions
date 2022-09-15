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
```
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

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
