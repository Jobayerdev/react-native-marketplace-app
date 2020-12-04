import axios from 'axios-observable';

const BASE_URL = 'https://api.unsplash.com/';
export const CLIENT_ID =
  'client_id=8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6';
export const CoreAxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});
