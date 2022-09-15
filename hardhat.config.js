require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const INFURA_API_KEY = "Place your infura key here";
const ROPSTEN_PRIVATE_KEY = "Place your account private key here";

module.exports = {
  solidity: "0.8.9",
  etherscan: {
    apiKey: "etherscan api for verifying contract",
  },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
  },
};
