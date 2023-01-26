import axios from 'axios';

export const url = 'https://random.dog/';

export const dogs = axios.create({
  baseURL: `${url}woof`,
});
