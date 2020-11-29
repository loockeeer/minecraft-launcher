import Store from './StoreManager';
import config from '../config';
import launchMinecraft from './scripts/launchMinecraft';

const store = new Store()

export default async function downloadGame() {
    // Download game files from URL and save them to path
    // 1. Ask API if we have last version
    // 2. If we don't, then download the last version and return true
    // 3. If we have the last version, then return false

    const gameVersion = store.getCurrentGameVersion()

    const serverVersion = await Axios.get(config.downloadServerURL+"/version.txt").then(res=>{
        return res.data
    })

    if(gameVersion === serverVersion) {
        return false
    } else {
        // Download game
    }
}

export default function runGame() {
    // Run the game with scripts/launchMinecraft.js
}