const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Alam.sol/Alam.json");

const tokenAddress = "0x348342317E6CC9B05Df093794B408B27Cf2ADA2f"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xc9c652DE83AE799549a6Fc0306cBd0eB5bc0899b"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Having: " + await token.balanceOf(walletAddress) + " NFTs .");
  }
  
// This pattern is recommanded to be able to use async/await everywhere and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });