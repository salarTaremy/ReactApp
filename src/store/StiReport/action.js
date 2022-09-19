import {
    RELOAD,SET_REPORT,REG_DATA
  } from "./actionTypes"
  
  
  export const GetData = (path) => {
    return {
      type: SET_REPORT,
      payload: {path},
    }
  }
  

