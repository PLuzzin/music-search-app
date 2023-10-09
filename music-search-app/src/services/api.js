import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://itunes.apple.com'
  baseURL: 'https://gorest.co.in/public/v2'
});

export default api;