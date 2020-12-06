import walk from './walk';

const app = window.require('electron').remote;
const axios = app.require('axios');
const hasha = app.require('hasha');
const http = app.require('http');
const fs = app.require('fs');

/**
 * Downloads the game
 * @param {string} url Download Server URL
 * @param {string} path Game path
 * @param {Function} fb FallBack for when a file is downloaded
 */
export default async function downloadGame({ url, path, fb }) {
  const files = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const file of walk(path)) {
    const hash = await hasha.fromFile(file, { algorithm: 'sha1' });
    files.push({
      relativePath: file.replace(path.endsWith('/') ? path : `${path}/`, ''),
      hash,
    });
  }

  const toDownloadFiles = await axios({
    url: `${url}/compare`,
    method: 'POST',
    data: { files },
  })
    .then((res) => res.data)
    .catch((err) => {
      if (err.request) {
        throw err.request.data.message;
      } else {
        throw err;
      }
    });

  // eslint-disable-next-line no-restricted-syntax
  for (const toDownload of toDownloadFiles) {
    // eslint-disable-next-line no-await-in-loop
    await fs.promises.mkdir(
      path.dirname(path.join(path, toDownload.relativePath)),
      { recursive: true },
    );
    const file = fs.createWriteStream(path.join(path, toDownload.relativePath));

    http.get(`${url}/download/${toDownload.relativePath}`, (res) => {
      res.pipe(file);
      res.on('end', () => fb(toDownload.relativePath, toDownloadFiles.length));
    });
  }
}
