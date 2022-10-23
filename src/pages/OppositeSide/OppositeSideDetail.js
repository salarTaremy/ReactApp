import React, { useState, useEffect } from "react";
import { api, url, str, toast } from "common/imports";
import { useParams, useHistory } from "react-router-dom";
import Breadcrumbs from "components/Common/Breadcrumb";
import Loading from "components/Common/Loading";
import OppositeSideDetailForm from "pages/OppositeSide/OppositeSideDetailForm";
import { useDispatch } from "react-redux";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  DO_FETCH_DATA,
  CLEAR_DATASET
} from "store/StiReport/actionTypes";

const OppositeSideDetail = () => {
  const [Th, SetTh] = useState(null);
  const [Cities, SetCities] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  ////////////////////////////////////////////////////
  useEffect(() => {
    api.get(`${url.FETCH_OPPOSITE_SIDE_DETAIL}/${id}`).then(
      (response) => {
        //response.value.iD_MahalTavalo2 = response.value.iD_MahalTavalod
        SetTh(response.value);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  useEffect(() => {
    api.get(url.GET_CITY).then(
      (response) => {
        response.value.map((item) => {
          item.label = item.value;
        });
        SetCities(response.value);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);
  ///////////////////////// Sti Report \\\\\\\\\\\\\\\\\\\\\\\\\
  useEffect(() => {
    const doFetchData = () => {
      dispatch({ type: FETCH_DATA });
      if (Th && Cities) {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: Th });
      } else {
        dispatch({ type: FETCH_DATA_SUCCESS });
      }
    };
    dispatch({ type: DO_FETCH_DATA, payload: doFetchData });
  }, [Th, Cities]);
  //////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="ویرایش طرف حساب ها" />
        {Th && Cities ? (
          <OppositeSideDetailForm Th={Th} Cities={Cities} />
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
};
export default OppositeSideDetail;
