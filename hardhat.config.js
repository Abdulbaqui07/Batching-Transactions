require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY = "738d607b3d294eb58ad33862a792d0bc";
const ROPSTEN_PRIVATE_KEY = "ea5b6d32c0b20ca55844a554be835abb43ec614b54caa5afaed1aa1db03dba75";

module.exports = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: "3IWWJT6PRBD4F25CY6RCUIH17DI79AS63W",
  },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
  },
};
