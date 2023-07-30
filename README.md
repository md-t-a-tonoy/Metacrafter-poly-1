# Polygon-Module-1 Transfer Token from one network to another network

## Getting Started

### Step 1
Download the entire repository to your local machine.

### Step 2
Run the command `npm install` to install all the necessary project dependencies.

### Step 3
Once the dependencies are installed, run the test file using the command `npx hardhat compile`.

## Deploying the ERC721 Contract

Before deploying the ERC721 contract, ensure that you have your wallet private key available (`PRIVATE_KEY='your wallet private key'`).

To deploy the ERC721 contract to the Goerli Ethereum Testnet, use the following command:


npx hardhat run scripts/deploy.js --network goerli


After deploying the contract, an address will be generated. Copy this address and update `contractAddress.js` (located in the metadata folder) and `batchMint.js` (located in the scripts folder) with the new contract address.

## Batch Mint NFTs

To batch-mint NFTs using the deployed ERC721 contract, run the following command:



npx hardhat run scripts/batchMint.js --network mumbai


This script will mint the specified number of NFTs and assign them to your address.

## Approve and Deposit NFTs to Polygon Mumbai

To approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge, follow these steps:

1. Map the FxPortal Bridge address to the file.
2. Execute the following command:


npx hardhat run scripts/approveDeposit.js --network goerli



## BalanceOf NFTs

To check the balance of NFTs using the deployed ERC721 contract on the Mumbai Testnet, first, on the Polygon Mumbai testnet site, go to the tokens and then to the view ERC721 transfers to find your transferred NFTs transaction. Click on the NFT name to see more details and copy the address shown in the profile summary box. Then, paste this address into the `getBalance.js` file at the token address, and finally, run the following command:


npx hardhat run scripts/getBalance.js --network mumbai



This script will return the balance of the NFTs from your contract in the specified network.

## Authors

Md Thouhedul Alam Tonoy
Mail: thouhedul.alam.tonoy@gmail.com

## License

This project is licensed under the MIT License.
