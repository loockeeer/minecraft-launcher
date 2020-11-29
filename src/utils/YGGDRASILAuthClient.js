const app = window.require('electron').remote;
const axios = app.require('axios');

/**
 * @param {string} username User's name
 * @param {string} password User's password
 * @param {string} serverURL YGGDRASIL Server URL
 * @returns {Promise<{name: string, id: string, accessToken: string}>}
 */
export function auth({
  username, password, serverURL,
}) {
  if (!username) throw new Error('Need username to auth to YGGDRASIL Server.');
  if (!password) throw new Error('Need password to auth to YGGDRASIL Server.');
  if (!serverURL) throw new Error('Need YGGDRASIL ServerURL to auth.');

  return axios.post(`${serverURL}/authenticate`, {
    agent: {
      name: 'Minecraft',
      version: 1,
    },
    username,
    password,
  }).then((res) => {
    if (res.data) {
      console.log(res.data.accessToken, res.data.selectedProfile.name)
      return {
        name: res.data.selectedProfile.name,
        id: res.data.selectedProfile.id,
        accessToken: res.data.accessToken,
        clientToken: res.data.clientToken,
      };
    }
    return false;
  });
}

/**
 * Refresh an accessToken
 * @param {string} serverURL YGGDRASIL Server URL
 * @param {string} accessToken The accessToken you want to refresh
 * @param {string} name User's name
 * @param {string} id User's id
 * @param {string} clientToken Your clientToken
 * @returns {Promise<string>} The new accessToken
 */
export function refreshToken({
  serverURL, accessToken, name, id, clientToken,
}) {
  if (!name) throw new Error('Need username to refresh accessToken.');
  if (!id) throw new Error('Need user id refresh accessToken.');
  if (!serverURL) throw new Error('Need YGGDRASIL ServerURL to refresh accessToken.');
  if (!clientToken) throw new Error('Need clientToken to refresh accessToken.');
  if (!accessToken) throw new Error('Need accessToken to refresh it.');

  return axios.post(`${serverURL}/refresh`, {
    accessToken,
    clientToken,
    selectedProfile: {
      name,
      id,
    },
  }).then((res) => res.data.accessToken);
}

/**
 * Check if an accessToken is good-to-use
 * @param {string} serverURL YGGDRASIL Server URL
 * @param {string} accessToken The accessToken you want to check
 * @param {string} clientToken Your clientToken
 * @returns {Promise<boolean>} Whether the accessToken is good-to-use (true) or not (false)
 */
export function validate({ serverURL, accessToken, clientToken }) {
  if (!serverURL) throw new Error('Need YGGDRASIL ServerURL to validate accessToken.');
  if (!clientToken) throw new Error('Need clientToken to validate accessToken.');
  if (!accessToken) throw new Error('Need accessToken to validate it.');
  return axios.post(`${serverURL}/validate`, {
    accessToken,
    clientToken,
  }).then(() => true).catch(() => false);
}

/**
 * Invalidate (logout) an accessToken
 * @param {string} serverURL YGGDRASIL Server URL
 * @param {string} accessToken The accessToken you want to invalidate
 * @param {string} clientToken Your clientToken
 * @returns {Promise<boolean>} Whether it worked (true) or not (false)
 */
export function invalidate({ serverURL, accessToken, clientToken }) {
  if (!serverURL) throw new Error('Need YGGDRASIL ServerURL to invalidate accessToken.');
  if (!clientToken) throw new Error('Need clientToken to invalidate accessToken.');
  if (!accessToken) throw new Error('Need accessToken to invalidate it.');
  return axios.post(`${serverURL}/invalidate`, {
    accessToken,
    clientToken,
  }).then(() => true).catch(() => false);
}
