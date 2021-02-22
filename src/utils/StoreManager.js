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
   * Set user profile
   * @param {Object} profile User profile
   * @returns {CustomStore}
   */
  setUserProfile(profile) {
    this.set('userProfile', profile);
    return this;
  }

  /**
   * Retrieve User profile
   * @returns {Object} User profile
   */
  getUserProfile() {
    return this.get('userProfile');
  }

  /**
   * Reset user profile
   * @returns {CustomStore}
   */
  resetUserProfile() {
    this.setUserProfile(config.defaults.userProfile);
    return this;
  }
}
