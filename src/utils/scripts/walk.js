const app = window.require('electron').remote;
const path = app.require('path');
const fs = app.require('fs').promises;

/**
 * Resolves every file of a directory recursively
 * @param {string} dir The directory you want to make the tree
 * @returns {string[]} A file path array of all the files in the folder
 */
async function* walk(dir) {
  await fs.mkdir(dir, { recursive: true })
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  // eslint-disable-next-line no-restricted-syntax
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* walk(res);
    } else {
      yield res;
    }
  }
}

export default walk;
