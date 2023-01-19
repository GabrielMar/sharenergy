import axios from 'axios';

export const searchParams = {
  page: 1,
  results: 10,
};

const instance = axios.create({
  baseURL: 'https://randomuser.me/api',
  params: {
    seed: 'sharenergy',
    inc: ['login', 'picture', 'name', 'email', 'dob'].join(),
    results: '10',
  },
});

export default instance;
