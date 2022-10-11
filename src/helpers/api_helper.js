
import axios from "axios"
import authHeader from "../helpers/jwt-token-access/auth-token-header"
import { useState,useEffect } from "react"
//pass new generated access token here ...
//const token = 'Bearer '+ authHeader().Authorization; 

//apply base url for axios
//const API_URL = "http://192.168.200.7:4000/api"
const API_URL = "http://localhost:7000/api"

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
     console.error(error.request);
  } else {
    // // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
   console.error(error.config);
}


//***************************************************************************************************
export async function get(url, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return await axiosApi
  .get(url, { ...config })
  .then((response) => {
    return response.data
  })
}

export async function post(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return await axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return await axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  axiosApi.defaults.headers.common["Authorization"] = 'Bearer '+ authHeader().Authorization;
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}

//***************************************************************************************************
 export const useFetch = url => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    console.log(`Start fetch from : ${url}`  )
    get(url)
    .then((response) => {
      setResponse(response)
      //console.log(response)
      console.log('Success fetch')
    }, (error) => {
      setError(error)
    })
    .finally(() => setLoading(false));
  }, []);
  return [ response, error, loading ];
};

//***************************************************************************************************
export const usePost = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
const doFetch = (url,data,onExecuted=() => {} ) =>{
  setResponse()
  setLoading(true)
  console.log(`Start Post to : ${url}`  )
  post(url,data)
  .then((response) => {
    setResponse(response)
    //console.log(response)
    console.log('Success Post')
    onExecuted(response,null)
  }, (error) => {
    setError(error)
    onExecuted(null,error)
  })
  .finally(() => setLoading(false));
}
  return [ response, error, loading,doFetch ];
};
//***************************************************************************************************
export const useDel = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
const doFetch = (url,data,onExecuted=() => {} ) =>{
  setResponse()
  setLoading(true)
  console.log(`start Delete Request to : ${url}`  )
  del(url,data)
  .then((response) => {
    setResponse(response)
    //console.log(response)
    console.log('Success Delete')
    onExecuted(response,null)
  }, (error) => {
    setError(error)
    onExecuted(null,error)
  })
  .finally(() => setLoading(false));
}
  return [ response, error, loading,doFetch ];
};
