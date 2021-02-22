const app = window.require('electron').remote;
const electron = app.require('electron');
const path = app.require('path');

export default {
  name: 'OkinaGame',
  minRam: 1,
  defaults: {
    rememberme: false,
    maxRam: 4,
    recommendedRAM: 4,
    javaPath: '',
    userProfile: {
      name: undefined,
      uuid: undefined,
      access_token: undefined,
      client_token: undefined,
      selected_profile: undefined,
      user_properties: undefined,
    },
  },
  yggdrasilServerURL: 'https://authserver.mojang.com/',
  newsURL:
    'https://gist.githubusercontent.com/loockeeer/6337cc0c551f6248d2571940d2639379/raw/90cc7e6fb477f4d85debeb6f7891a0470a191064/okina.md',
  gamePath: path.join(
    (electron.app || electron.remote.app).getPath('userData'),
    'game',
  ),
  downloadServerURL: 'http://localhost:8080',
  relativeForgePath: 'forge.jar',
  gameVersion: {
    type: 'release',
    number: '1.16',
  },
};
