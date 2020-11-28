const axios = app.require('axios');
import config from '../../config';

export default function fetchNews() {
    return axios.get(config.newsURL).then(res=>res.body)
}