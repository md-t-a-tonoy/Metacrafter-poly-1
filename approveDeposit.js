const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/Alam.sol/Alam.json");

const tokenAddress = ""; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "";
const walletAddress = ""; // place your public address for your wallet here

async function main() {

    const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC721RootAddress);
    const totalSupply = await tokenContract.totalSupply();

    for (let i = 0; i < totalSupply; i++) {
    const tokenId = await tokenContract.tokenByIndex(i);
    
    const approveTx = await tokenContract.approve(fxERC721RootAddress, tokenId);
    await approveTx.wait();
    console.log(`NFT with Token ID ${[i]} approved for transfer.`);
    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, tokenId, "0x6556");
    await depositTx.wait();
    }
    console.log("NFT added");
  }
  
  // This pattern is recommanded to be able to use async/await everywhere and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
