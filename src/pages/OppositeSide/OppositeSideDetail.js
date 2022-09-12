import React, { useState, useEffect } from "react"
import * as url from 'helpers/url_helper'
import * as api from "helpers/api_helper"
import { useParams } from 'react-router-dom';
import Breadcrumbs from "components/Common/Breadcrumb"
import Loading from "components/Common/Loading"
import OppositeSideDetailForm from 'pages/OppositeSide/OppositeSideDetailForm'

const OppositeSideDetail = (prop) => { 
  const [Th, SetTh] = useState(null);
  const [Cities, SetCities] = useState(null);
  const { id } = useParams();
  ////////////////////////////////////////////////////
  useEffect(() => {
    api.get(`${url.FETCH_OPPOSITE_SIDE_DETAIL}/${id}`)
      .then((response) => {
        //response.value.iD_MahalTavalo2 = response.value.iD_MahalTavalod
        SetTh(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    api.get(url.GET_CITY)
      .then((response) => {
        response.value.map((item) => {
          item.label = item.value;
        })
        SetCities(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  ////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="ویرایش طرف حساب ها" />
        {Th && Cities ?
          <OppositeSideDetailForm Th={Th} Cities={Cities} />
          : <Loading />}
      </div>
    </React.Fragment>
  )
}
export default OppositeSideDetail