import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { CLEAR_DATASET } from "store/StiReport/actionTypes"
import { useDispatch } from "react-redux"
// const dispatch = useDispatch();
// dispatch({type: RELOAD  })

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const dispatch = useDispatch();
  const onRoatChanged = (props)=>{
    console.log('Reset Report');
    console.log(props);
    dispatch({type: CLEAR_DATASET  }) 
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if(isAuthProtected){
          onRoatChanged(props)
        }
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
