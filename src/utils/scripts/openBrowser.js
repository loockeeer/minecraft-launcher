const { shell } = window.require('electron');

/**
 * Opens a web browser with given URL
 * @param {string} url The url the browser will point to
 */
export default function openBrowser(url) {
  shell.openExternal(url);
}
