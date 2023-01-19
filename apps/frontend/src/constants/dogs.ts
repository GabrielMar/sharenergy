import axios from 'axios';

export const url = 'https://random.dog/';

const instance = axios.create({
  baseURL: `${url}woof`,
});

export default instance;
