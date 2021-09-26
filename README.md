# Toolset for NFT minting on Ethereum

Based on the [How to write and deploy an nft](https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/)

## Deploy NFT contract
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network ropsten

## Mint
node ./scripts/orchestration.js