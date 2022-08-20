import axios from "axios"
import authHeader from "../helpers/jwt-token-access/auth-token-header"

//pass new generated access token here
//const token = 'Bearer '+ authHeader().Authorization; 

//apply base url for axios
//const API_URL = "http://192.168.200.7:4000/api"
const API_URL = "http://localhost:5000/api"

const axiosApi = axios.create({
  baseURL: API_URL,
})

//axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)


export async function get(url, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return await axiosApi
  .get(url, { ...config })
  .then(response => response.data)
}

export async function post(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
