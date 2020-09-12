import Vue from 'vue'
import axios from 'axios'

let baseUrl = 'http://127.0.0.1:3000/';
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "X-Requested-With": "XMLHttpRequest"
    },

});
//regra de declaração de token
axiosInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


//Cadastrado o axios no this


Vue.prototype.$axios = axiosInstance

