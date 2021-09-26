# Toolset for NFT minting on Ethereum

Based on the [How to write and deploy an nft](https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/)

0. Set configuration
Update .env file with your keys (all except for the contract address should be known)

1. Deploy NFT contract
```
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network ropsten
```
2. Set contract address in .env

3. Mint
```
node ./scripts/orchestration.js
```