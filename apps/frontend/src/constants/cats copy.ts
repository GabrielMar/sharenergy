import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://http.cat/',
});

export default instance;
