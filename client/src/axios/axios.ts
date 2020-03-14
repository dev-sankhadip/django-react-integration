import axios from 'axios';

// Create axios instance with default baseurl
const Axios = axios.create({
    baseURL: "http://localhost:8000"
})


// Create axios request interceptor
Axios.interceptors.request.use((config) => {
    if (config.url !== '/api/auth/login' && config.url !== '/api/auth/signup') {
        config.headers = { ...config.headers, 'Authorization': "Token " + window.localStorage.getItem("token") }
    }
    return config;
}, (err) => {
    console.log(err);
    return Promise.reject(err);
})

// Create axios response interceptor
Axios.interceptors.response.use((res) => {
    return res;
}, (err) => {
    console.log(err);
    return Promise.reject(err);
})


export default Axios;