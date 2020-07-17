const shell = window.require('electron').shell

export default function openBrowser(link) {
	shell.openExternal(link);
}