import config from '../../config';

const app = window.require('electron').remote;
const axios = app.require('axios');

export default function fetchNews() {
  return axios.get(config.newsURL).then((res) => res.data);
}
