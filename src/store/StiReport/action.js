import {
    RELOAD,SET_REPORT
  } from "./actionTypes"
  
  
  export const GetData = (path) => {
    return {
      type: SET_REPORT,
      payload: {path},
    }
  }
  

