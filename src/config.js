const app = window.require('electron').remote;
const electron = app.require('electron');
const path = app.require('path');

export default {
  name: 'OkinaGame',
  defaults: {
    rememberme: false,
    clientToken: '',
    accessToken: '',
    maxRam: 1e9 * 4,
    minRam: 1e9 * 1,
  },
  yggdrasilServerURL: 'https://authserver.mojang.com/',
  newsURL: 'https://hastebin.com/raw/cigibewopo',
  gamePath: path.join((electron.app || electron.remote.app).getPath('userData'), 'game'),
};
