import walk from './walk';

const app = window.require('electron').remote;
const axios = app.require('axios');
const fs = app.require('fs');
const path = app.require('path');
const hashwasm = app.require('hash-wasm');

async function hashFile(filePath) {
  const hash = await hashwasm.md5(await fs.promises.readFile(filePath));
  return hash;
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

    const normalized = path.normalize(file);

    files.push({
      relativePath: normalized.replace(path.normalize(`${gamePath}/`), ''),
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
    if (toDownload.op === 'download') {
      // eslint-disable-next-line no-await-in-loop
      await fs.promises.mkdir(
        path.dirname(path.join(gamePath, toDownload.relativePath)),
        { recursive: true },
      );

      const file = fs.createWriteStream(
        path.join(gamePath, path.normalize(toDownload.relativePath)),
      );
      // eslint-disable-next-line no-await-in-loop
      await axios({
        method: 'get',
        url: `/download/${encodeURIComponent(
          toDownload.relativePath,
        )}`.toString(),
        baseURL: url,
        responseType: 'stream',
      })
        .then((res) => res.data.pipe(file))
        .then(() => fb(path.normalize(toDownload.relativePath), toDownloadFiles.length));
    } else if (toDownload.op === 'remove') {
      // eslint-disable-next-line no-await-in-loop
      await fs.promises
        .unlink(path.join(gamePath, path.normalize(toDownload.relativePath)))
        .then(() => fb(path.normalize(toDownload.relativePath), toDownloadFiles.length));
    }
  }
}
