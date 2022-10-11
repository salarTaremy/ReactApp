import React, { useState } from "react";
import { toast } from "react-toastify";

const config = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  //type: "success",
  draggable: true,
  progress: undefined,
  icon: false,
  limit: 10,
  rtl: true,
  theme: "light",
};

//Documentation:  https://fkhadra.github.io/react-toastify/introduction
export const useToast = () => {
  const [toastId,setToastId]= useState()   
  const notify = (msg) => {
    var id = toast(msg ,config);
    setToastId(id)
  }
  const success = (msg) => {
    var id = toast.success(msg ,config);
    setToastId(id)
  }
  const error = (msg) => {
    var id = toast.error(msg ,config);
    setToastId(id)
  }
  const warn = (msg) => {
    var id = toast.warn(msg ,config);
    setToastId(id)
  }
  const info = (msg) => {
    var id = toast.info(msg ,config);
    setToastId(id)
  }
  return [notify,success,error,warn,info,toastId];
};





export const notify = (msg) => {
    var id = toast(msg ,config);
    return id;
  }
  export const success = (msg) => {
    var id = toast.success(msg ,config);
    return id;
  }
  export const error = (msg) => {
    var id = toast.error(msg ,config);
    return id;
  }
  export const warn = (msg) => {
    var id = toast.warn(msg ,config);
    return id;
  }
  export const info = (msg) => {
    var id = toast.info(msg ,config);
    return id;
  }