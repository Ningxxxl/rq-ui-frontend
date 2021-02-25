import axios from 'axios';
// import { Message } from 'element-ui';
// import Qs from 'qs';
import {BASE_URL} from './api'
import {Message} from "element-ui";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(
    response => {
        if (response.data.code !== "OK") {
            const error_msg =
                response.data.data.exceptionMessage.length > 0 ? response.data.data.exceptionMessage : response.data.message;
            Message.error(`${response.data.code}: ${error_msg}`)
            return Promise.reject(response)
        } else {
            console.log(response.data, "NETWORK OK")
            return response.data
        }
    }, error => {
        const response = error.response
        Message.error(`${response.data.code}: ${response.data.message}`)
        console.log(response, "ERROR")
        return Promise.reject(error)
    }
)

export default axios

