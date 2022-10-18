import {
    SET_ON_CLICK
  } from "./actionTypes"
  
  
  export const GetData = (path) => {
    return {
      type: SET_ON_CLICK,
      payload: {path},
    }
  }
  

