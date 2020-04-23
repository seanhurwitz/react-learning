import axios from 'axios';

const axiosForOrders = axios.create({
  baseURL: 'https://burger-builder-5f5d2.firebaseio.com/',
});

export { axiosForOrders };
