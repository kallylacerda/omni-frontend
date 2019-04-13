import axios from 'axios';

const api = axios.create({
    baseURL: 'https://k3l-omnistack-backend.herokuapp.com',
});

export default api;