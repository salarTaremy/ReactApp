import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { CLEAR_DATASET } from "store/StiReport/actionTypes";
import { useDispatch } from "react-redux";

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  path,
  ...rest
}) => {
  const dispatch = useDispatch();
  // /////////////////////////////////////////////////////
  // useEffect(() => {
  //   const CurentPath = { ...rest }.computedMatch.path;
  //   console.log(CurentPath);
  // }, []);
  // /////////////////////////////////////////////////////
  // // When Exit From Curent Roue
  // useEffect(() => {
  //   return () => {
  //     console.log("path old ", path);
  //     if (isAuthProtected === false) {
  //       dispatch({ type: CLEAR_DATASET });
  //     }
  //   };
  // }, []);
  // /////////////////////////////////////////////////////
  // // const onRoatChanged = (props)=>{
  // //   console.log('Rout Chenged',JSON.stringify(props))
  // // }
  // /////////////////////////////////////////////////////
  return (
    <Route
      {...rest}
      render={(props) => {
        // if(isAuthProtected){
        //   onRoatChanged(props)
        // }
        if (isAuthProtected && !localStorage.getItem("authUser")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default Authmiddleware;
