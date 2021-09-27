async function main() {
    const MojoPunks = await ethers.getContractFactory("MojoPunks")
  
    // Start deployment, returning a promise that resolves to a contract object
    const mojoPunks = await MojoPunks.deploy()
    console.log("Contract deployed to address:", mojoPunks.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  