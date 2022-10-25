import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  CardGroup,
  Spinner,
} from "reactstrap";

//Import Breadcrumbnpm start
import Breadcrumbs from "components/Common/Breadcrumb";

//Loading Component
import Loading from "components/Common/Loading";

//For Call Api
import { post, del, get, put } from "helpers/api_helper";

import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DO_FETCH_DATA,
} from "store/StiReport/actionTypes";
import { useDispatch } from "react-redux";

import { api, url, str, toast } from "common/imports";

const Blank = () => {
  const dispatch = useDispatch();
  ///////////////////////// Sti Report \\\\\\\\\\\\\\\\\\\\\\\\\
  // useEffect(() => {
  //   console.log('componentDidMount')
  // }, []);

  // useEffect(() => {
  //   console.log('componentDidUpdate')
  // }, [tarafHesab]);

  // useEffect(() => {
  //   // componentWillUnmount
  //   return () => {
  //     console.log('componentWillUnmount')
  //   }
  // }, [tarafHesab]);
  ///////////////////////// Sti Report \\\\\\\\\\\\\\\\\\\\\\\\\
  useEffect(() => {
    const doFetchData = () => {
      dispatch({ type: FETCH_DATA });
      api.get(url.GET_CITY).then(
        (response) => {
          dispatch({ type: FETCH_DATA_SUCCESS, payload: response.value });
        },
        (error) => {
          console.error(error);
          dispatch({ type: FETCH_DATA_FAILURE });
        }
      );
    };
    dispatch({ type: DO_FETCH_DATA, payload: doFetchData });
  }, []);
  //////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="صفحه خالی" />
        <Card className="p-3">
          <p>صفحه خالی</p>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Blank;
