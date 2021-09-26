const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
require("dotenv").config()
const pinataSDK = require('@pinata/sdk');

const PINATA_API_KEY = process.env.PINATA_API_KEY
const PINATA_API_SECRET = process.env.PINATA_API_SECRET
const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET);

async function blob(filePath) {
    const readableStreamForFile = fs.createReadStream(filePath);
    let name = path.basename(filePath, path.extname(filePath))
    const options = {
        pinataMetadata: {
            name: name
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    let response = await pinata.pinFileToIPFS(readableStreamForFile, options);
    return response.IpfsHash;
};

async function json(name, content) {
    const options = {
        pinataMetadata: {
            name: name
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    let response = await pinata.pinJSONToIPFS(content, options);
    return response.IpfsHash;
};

module.exports = {blob, json}