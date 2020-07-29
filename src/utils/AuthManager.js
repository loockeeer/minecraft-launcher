import Store from './StoreManager';
import config from '../config';
import * as yggdrasil from './YGGDRASILAuthClient';

const store = new Store();

/**
 * Returns true if we find an accessToken. This is not checking if it is good-to-use
 * @returns {boolean} Whether the user is authenticated or not
 */
export function isAuthenticated() {
  return !!store.getAccessToken();
}

/**
 * Check if the current accessToken (Store) is good-to-use
 * @returns {Promise<boolean>} Whether the current accessToken (Store) is good or not
 */
export function isAccessTokenGood() {
  return yggdrasil.validate({
    accessToken: store.getAccessToken(),
    clientToken: store.getClientToken(),
    serverURL: config.serverURL,
    ...store.getUserInfo(),
  }).then(() => true).catch(() => false);
}

/**
 * @param {string} username User's name
 * @param {string} password User's password
 * @param {string} rememberme Remember info. or not
 * @returns {Promise<{name: string, id: string, accessToken: string}>}
 */
export function login({ username, password, rememberme }) {
  return yggdrasil.auth({
    username,
    password,
    serverURL: config.serverURL,
    clientToken: store.getClientToken(),
  }).then((user) => {
    store.setAccessToken(user.accessToken);
    store.setClientToken(user.clientToken);
    store.setUserInfo({ name: user.name, id: user.id });
    store.setRememberme(rememberme);
    return user;
  });
}

/**
 * Refresh the current accessToken (Store)
 * @returns {Promise<boolean>} Token refreshed or not
 */
export function refresh() {
  return yggdrasil.refreshToken({
    serverURL: config.serverURL,
    clientToken: store.getClientToken(),
    accessToken: store.getAccessToken(),
    selectedProfile: store.getUserInfo(),
  }).then((user) => {
    store.setAccessToken(user.accessToken);
    return true;
  }).catch(() => false);
}

/**
 * Invalidate (logout) the current accessToken (Store)
 * @returns {Promise<boolean>} Token invalidated or not
 */
export function invalidate() {
  return yggdrasil.invalidate({
    serverURL: config.serverURL,
    clientToken: store.getClientToken(),
    accessToken: store.getAccessToken(),
  }).then(() => {
    store.setAccessToken(undefined);
    store.setRandomClientToken();
    return true;
  }).catch(() => false);
}
