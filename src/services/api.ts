import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.68.109:3333',
});

export default api;
