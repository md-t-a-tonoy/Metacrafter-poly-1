const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Alam.sol/Alam.json");
require('dotenv').config()

const tokenAddress = ""; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = ""; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    const tx = await token.minting(5);
    await tx.wait();

    console.log("Alam have: " + await token.balanceOf(walletAddress) + " NFT");
  }
  
  // This pattern is recommanded to be able to use async/await everywhere and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
