import Axios from 'axios';

const axios = Axios.create({ baseURL: 'http://localhost:8584/' });

export default axios;
