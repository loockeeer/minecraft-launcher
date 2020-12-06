import config from '../../config';

const app = window.require('electron').remote;
const axios = app.require('axios');

/**
 * Make a GET request to news server
 * @returns {Promise<string>}
 */
export default function fetchNews() {
  return axios.get(config.newsURL).then((res) => res.data);
}
