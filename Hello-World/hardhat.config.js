require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/D5ote-ppmTOt2piUgm1sOcvigHbhmdHk",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
