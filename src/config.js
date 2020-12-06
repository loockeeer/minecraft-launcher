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
};
