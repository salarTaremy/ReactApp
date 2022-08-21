
import axios from "axios"
import authHeader from "../helpers/jwt-token-access/auth-token-header"
//pass new generated access token here ...
//const token = 'Bearer '+ authHeader().Authorization; 

//apply base url for axios
//const API_URL = "http://192.168.200.7:4000/api"
const API_URL = "http://localhost:5000/api"

const axiosApi = axios.create({
  baseURL: API_URL,
})

//axiosApi.defaults.headers.common["Authorization"] = token


// axiosApi.interceptors.response.use(
//   response => response,
//   error => Promise.reject(error)
// )
axiosApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      handeError(error)
    }
    return error;
  }
);


const handeError = (error) =>{

  if(error.response.status == 401){
    window.location = "/logout";
  }

  if (error.response) {
    // // The request was made and the server responded with a status code
    // // that falls out of the range of 2xx
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
  } else if (error.request) {
    // // The request was made but no response was received
    // // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // // http.ClientRequest in node.js
    // console.log(error.request);
  } else {
    // // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
  // console.log(error.config);
}



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
