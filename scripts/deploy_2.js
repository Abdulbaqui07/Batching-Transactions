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