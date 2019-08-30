import axios from 'axios';
import axios2 from 'axios';
import { rota } from '../env';

axios.interceptors.request.use(config => {
    config.baseURL = rota;

    if (localStorage.getItem('access')) {
        config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access')}`;
    };

    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const { config, response: { status } } = error;
        const originalRequest = config;

        if (status === 401 && config && !config.__isRetryRequest && localStorage.getItem('refresh')) {
            return axios.post('api/token-refresh/', { refresh: localStorage.getItem('refresh') }).then(res => {
                localStorage.setItem('access', res.data.access);
                originalRequest.headers['Authorization'] = `Bearer ${res.data.access}`;
                return Promise.resolve(axios.request(originalRequest));
            }, error => {
                localStorage.clear();
                return Promise.reject(error);
            });
        } else if (status === 401) {
            localStorage.clear();
            return Promise.reject(error);
        };

        return Promise.reject(error);
    }
);

axios2.interceptors.request.use(config => {
    config.baseURL = rota;
    return config;
}, error => {
    return Promise.reject(error);
});

export { axios2 as apiNotToken };

export default axios;
