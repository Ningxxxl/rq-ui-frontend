import axios from 'axios';
// import Qs from 'qs';
import {BASE_URL} from './api'

axios.defaults.baseURL = BASE_URL;

axios.interceptors.response.use(
    response => {
        console.log(response.data, "NETWORK OK")
        return response.data
    }, error => {
        console.log(error, "ERROR")
        return Promise.reject(error)
    }
)

export default axios

