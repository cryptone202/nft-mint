const fs = require('fs');
const util = require('util');
const pin = require('./pin');
const mintNFT = require('./mint-nft');
require("dotenv").config()

const ASSET_DIR = process.env.ASSET_DIR

async function processDirectory() {    
    const readdir = util.promisify(fs.readdir);
    try {
        const src = ASSET_DIR;

        //we gather the files from a local directory in this example, but a valid readStream is all that's needed for each file in the directory.
        const files = await readdir(src);

        for (const file of files) {
            console.log(`%s: Processing %s`, new Date().toLocaleTimeString(), file)
            let imageHash = await pin.blob(`${src}/${file}`);

            if (true) {
                console.log(`%s: Pinned image %s : %s`, new Date().toLocaleTimeString(), file, imageHash);
                imageURL = `https://gateway.pinata.cloud/ipfs/${imageHash}`
                metadata = {
                    "attributes": [],
                    "description": "",
                    "image": imageURL,
                    "name": file
                  };
                
                let name = file.split('.')[0];
                metaHash = await pin.json(`${name}_meta`, metadata);
                if (metaHash) {
                    console.log(`%s: Pinned metadata %s : %s`,  new Date().toLocaleTimeString(), `${name}_meta`, metaHash);
                    let metaURL = `https://gateway.pinata.cloud/ipfs/${metaHash}`;
                    await mintNFT(metaURL);
                    console.log(`%s: Minted %s`, new Date().toLocaleTimeString(), metaHash);
                }
            }
        }
    } catch(e) {
        console.log(e);
    }
};

processDirectory();