import config from '../config';
import Store from './Store';

export default class CustomStore extends Store {
  constructor() {
    super(config.defaults);
  }

  /**
   * Set java path
   * @param {string} path Java path
   * @returns {CustomStore}
   */
  setJavaPath(path) {
    this.set('javaPath', path);
    return this;
  }

  /**
   * Retrieve Java Path
   * @returns {string}
   */
  getJavaPath() {
    return this.get('javaPath');
  }

  /**
   * Remember settings and user info after exit
   * @param {boolean} rememberme
   * @returns {CustomStore}
   */
  setRememberme(rememberme) {
    this.set('rememberme', rememberme);
    return this;
  }

  /**
   * Retrieve rememberme value
   * @returns {string} rememberme
   */
  getRememberme() {
    return this.get('rememberme');
  }

  /**
   * Stores a clientToken in the Store.
   * @param {string} clientToken The new clientToken
   * @returns {CustomStore}
   */
  setClientToken(clientToken) {
    this.set('clientToken', clientToken);
    return this;
  }

  /**
   * Retrieve the clientToken of the current logged-in user from the Store.
   * @returns {string} The clientToken for invalidate or refresh accessToken
   */
  getClientToken() {
    return this.get('clientToken');
  }

  /**
   * Stores the the accessToken of the current logged-in user.
   * @returns {CustomStore}
   */
  setAccessToken(accessToken) {
    this.set('accessToken', accessToken);
    return this;
  }

  /**
   * Retrieve the accessToken of the current logged-in user from the Store.
   * @returns {string} The accessToken of the current logged-in user
   */
  getAccessToken() {
    return this.get('accessToken');
  }

  /**
   * Stores the Maximum JVM RAM in Bytes.
   * @param {int} Maximum JVM RAM in Bytes
   * @returns {CustomStore}
   */
  setMaxRam(maxRam) {
    this.set('maxRam', maxRam);
    return this;
  }

  /**
   * Retrieve Maximum JVM RAM in Bytes from the Store.
   * @returns {int} Maximum JVM RAM in Bytes
   */
  getMaxRam() {
    return this.get('maxRam');
  }

  /**
   * Stores the Minimum JVM RAM in Bytes.
   * @param {int} Minimum JVM RAM in Bytes
   * @returns {CustomStore}
   */
  setMinRam(minRam) {
    this.set('minRam', minRam);
    return this;
  }

  /**
   * Retrieve Minimum JVM RAM in Bytes from the Store.
   * @returns {int} Minimum JVM RAM in Bytes
   */
  getMinRam() {
    return this.get('minRam');
  }

  /**
   * Set User information (name, UUID)
   * @param {string} name User's name
   * @param {string} id User's ID
   * @returns {CustomStore}
   */
  setUserInfo({ name, id }) {
    this.set('username', name);
    this.set('userID', id);
    return this;
  }

  /**
   * Retrieve User information
   * @returns {{name: string, id: string}} User Info
   */
  getUserInfo() {
    return { name: this.get('username'), id: this.get('userID') };
  }
}
