const hre = require("hardhat");

async function main() {
  const Whitelist = await hre.ethers.getContractFactory("Whitelist");
  const whitelistContract = await Whitelist.deploy(10);
  await whitelistContract.deployed();
  console.log("Whitelist Contract Address:", whitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

