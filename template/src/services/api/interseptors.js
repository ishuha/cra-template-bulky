import axios from 'axios'

// LocalStorageService
import LocalStorageService from '../storage/LocalStorageService'

// Add a request interseptor
axios.interceptors.request.use(
    config => {
        const token = LocalStorageService.getAccessToken()
        if (token) {
            config.headers.Authorization = 'Bearer' + token;
            console.log("requesT WITH TOKEN");
        } else {
            console.log("request without token");
        }

        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        console.log("Error in Interseptor request");
        Promise.reject(error);
    }
)

// Add a request Interseptor
axios.interceptors.response.use(
    response => {
        console.log("response with succss");
        return response;
    },
    error => {
        console.log("err", error);
        const originalRequest = error.config
        console.log("originalRequest", originalRequest);
        if (error?.response?.status === 401) {
            // router.push('/login')
            return Promise.reject(error)
        } else {
            return Promise.reject(error)
        }
    }
)