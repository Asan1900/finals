const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Dev NFT
  const metadataURL = METADATA_URL;
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so DevsContract here is a factory for instances of our Devs contract.
  */

 // here we deploy the contract
 const DevsContract = await hre.ethers.deployContract("Devs", [
   metadataURL,
   whitelistContract
 ]);

 // wait for the contract to deploy
 await DevsContract.waitForDeployment();

 // print the address of the deployed contract
 console.log("Devs Contract Address:", DevsContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
