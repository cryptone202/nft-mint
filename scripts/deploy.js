async function main() {
    const DizzyNFT = await ethers.getContractFactory("DizzyNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const dizzyNFT = await DizzyNFT.deploy()
    console.log("Contract deployed to address:", dizzyNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  