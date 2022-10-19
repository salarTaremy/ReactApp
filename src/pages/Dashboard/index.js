import React, { useState } from "react";
import { Row } from "reactstrap";
import { useEffect } from "react";
import { toast, url, api } from "common/imports";
import { useDispatch } from "react-redux";
import { FETCH_DATA_FAILURE, REG_DATA, SET_ON_CLICK } from "store/StiReport/actionTypes";
import { useFetch } from "helpers/api_helper";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  DO_FETCH_DATA,
} from "store/StiReport/actionTypes";

const Dashboard = () => {
  const dispatch = useDispatch();
  ////////////////////////////////////////////////////
  useEffect(() => {
    const doFetchData = () => {
                dispatch({ type: FETCH_DATA });
                api.get(url.GET_CITY).then(
                  (response) => {
                    dispatch({ type: FETCH_DATA_SUCCESS,payload: response.value });
                  },
                  (error) => {
                    console.error(error);
                    dispatch({ type: FETCH_DATA_FAILURE });
                  }
                );
    };
    dispatch({ type: DO_FETCH_DATA, payload: doFetchData });
  }, []);
  ////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <div className="page-content">
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">داشبورد مدیریتی</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">
                    به داشبورد خوش آمدید
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
