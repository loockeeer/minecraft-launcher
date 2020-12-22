import walk from './walk';

const app = window.require('electron').remote;
const axios = app.require('axios');
const crypto = app.require('crypto');
const http = app.require('http');
const fs = app.require('fs');
const path = app.require('path');

function hashFile(filePath) {
  const hash = crypto.createHash("sha1")

  const file = fs.createReadStream(filePath)
  const stream = file.pipe(hash).setEncoding('hex')

  return new Promise((resolve, reject) => {
    stream
      .on('error',  reject)
      .on('finish', function () {
        resolve(this.data)
      })
  })
}

/**
 * Downloads the game
 * @param {string} url Download Server URL
 * @param {string} path Game path
 * @param {Function} fb FallBack for when a file is downloaded
 */
export default async function downloadGame({ url, gamePath, fb }) {
  const files = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const file of walk(gamePath)) {
    const hash = await hashFile(file);
    console.log(hash)
    files.push({
      relativePath: file.replace(
        gamePath.endsWith('/') ? gamePath : `${gamePath}/`,
        '',
      ),
      hash,
    });
  }


  const toDownloadFiles = await axios({
    url: '/compare',
    baseURL: 'http://localhost:8080',
    method: 'POST',
    data: { files },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.request.data) {
        throw err.request.data.message;
      } else {
        throw err;
      }
    });

  // eslint-disable-next-line no-restricted-syntax
  for (const toDownload of toDownloadFiles) {
    // eslint-disable-next-line no-await-in-loop
      await fs.promises.mkdir(
        path.dirname(path.join(gamePath, toDownload.relativePath)),
        { recursive: true },
      );
      console.log(path.join(gamePath, toDownload.relativePath))
      const file = fs.createWriteStream(
        path.join(gamePath, toDownload.relativePath),
      );

      console.log(`${url}/download/${toDownload.relativePath}`)
      await axios.get({
        method: 'get',
        url: `${url}/download/${toDownload.relativePath}`,
        responseType: 'stream'
      })
        .then((res) => {
          return res.data.pipe(file)
        })
        .then(_ => fb(toDownload.relativePath, toDownloadFiles.length))

  }
}
