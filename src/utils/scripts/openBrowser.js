const { shell } = window.require('electron');

export default function openBrowser(link) {
  shell.openExternal(link);
}
