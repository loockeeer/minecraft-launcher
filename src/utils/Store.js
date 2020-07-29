// eslint-disable-next-line no-undef
const app = window.require('electron').remote;
const electron = app.require('electron');
const fs = app.require('fs');
const path = app.require('path');

export default class Store {
  constructor(defaultdata) {
    const userDataPath = (electron.app || electron.remote.app).getPath('userData');

    this.path = path.join(userDataPath, 'store.json');

    try {
      this.data = JSON.parse(fs.readFileSync(this.path));
    } catch (e) {
      this.data = defaultdata || {};
    }
  }

  get(key) {
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;

    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}
