import axios from "axios"
import { rootPath} from './config'

// create an axios instance
const request = axios.create({
  baseURL: rootPath, // api的base_url
  timeout: 5000, // request timeout
  withCredentials:true
});

// request interceptor
request.interceptors.request.use(config => {
  // // Do something before request is sent
  // if (store.getters.token) {
  //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  //   config.headers['X-Token'] = getToken()
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
});

// respone interceptor
request.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  });

export default request
