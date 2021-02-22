import Store from './StoreManager';
import config from '../config';
import * as yggdrasil from './YGGDRASILAuthClient';

const store = new Store();

/**
 * Returns true if we find an accessToken. This is not checking if it is good-to-use
 * @returns {boolean} Whether the user is authenticated or not
 */
export function isAuthenticated() {
  return !!store.getUserProfile()?.access_token;
}

/**
 * Check if the current accessToken (Store) is good-to-use
 * @returns {Promise<boolean>} Whether the current accessToken (Store) is good or not
 */
export function isAccessTokenGood() {
  return yggdrasil
    .validate({
      accessToken: store.getUserProfile().access_token,
      clientToken: store.getUserProfile().client_token,
      serverURL: config.yggdrasilServerURL,
      name: store.getUserProfile().name,
      id: store.getUserProfile().uuid,
    })
    .then(() => true)
    .catch(() => false);
}

/**
 * @param {string} username User's name
 * @param {string} password User's password
 * @param {boolean} rememberme Remember info. or not after launcher closes
 * @returns {Promise<Object>}
 */
export function login({ username, password, rememberme }) {
  return yggdrasil
    .auth({
      username,
      password,
      serverURL: config.yggdrasilServerURL,
      clientToken: store.getUserProfile().client_token,
    })
    .then((body) => {
      store.setUserProfile({
        access_token: body.accessToken,
        client_token: body.clientToken,
        uuid: body.selectedProfile.id,
        name: body.selectedProfile.name,
        selected_profile: body.selectedProfile,
        user_properties: JSON.stringify(body?.user?.properties || {}),
      });
      store.setRememberme(rememberme);
      return body;
    });
}

/**
 * Refresh the current accessToken (Store)
 * @returns {Promise<boolean>} Token refreshed or not
 */
export function refresh() {
  return yggdrasil
    .refreshToken({
      serverURL: config.yggdrasilServerURL,
      clientToken: store.getUserProfile().client_token,
      accessToken: store.getUserProfile().access_token,
      selectedProfile: store.getUserProfile().selected_profile,
      name: store.getUserProfile().name,
      id: store.getUserProfile().uuid,
    })
    .then((body) => {
      store.setUserProfile({
        access_token: body.accessToken,
        client_token: body.clientToken,
        uuid: body.selectedProfile.id,
        name: body.selectedProfile.name,
        selected_profile: body.selectedProfile,
        user_properties: JSON.stringify(body?.user?.properties || {}),
      });
      return true;
    })
    .catch(() => false);
}

/**
 * Invalidate (logout) the current accessToken (Store)
 * @returns {Promise<boolean>} Token invalidated or not
 */
export function invalidate() {
  return yggdrasil
    .invalidate({
      serverURL: config.yggdrasilServerURL,
      clientToken: store.getUserProfile().client_token,
      accessToken: store.getUserProfile().access_token,
    })
    .then(() => {
      store.setUserProfile({});
      store.setRememberme(false);
      return true;
    })
    .catch(() => false);
}
