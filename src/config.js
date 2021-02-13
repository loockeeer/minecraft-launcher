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
  newsURL:
    'https://gist.githubusercontent.com/loockeeer/6337cc0c551f6248d2571940d2639379/raw/90cc7e6fb477f4d85debeb6f7891a0470a191064/okina.md',
  gamePath: path.join(
    (electron.app || electron.remote.app).getPath('userData'),
    'game',
  ),
  downloadServerURL: 'http://localhost:8080',
};
