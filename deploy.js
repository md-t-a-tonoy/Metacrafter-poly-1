const hre = require("hardhat");

async function main() {

  const token = await hre.ethers.deployContract("Alam");

  console.log("Address:", await token.getAddress());
}

// This pattern is recommanded to be able to use async/await everywhere and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
