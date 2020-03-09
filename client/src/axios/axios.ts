import axios from 'axios';

// Create axios instance with default baseurl
const Axios = axios.create({
    baseURL: "http://localhost:8000"
})


// Create axios request interceptor
Axios.interceptors.request.use((config) => {
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