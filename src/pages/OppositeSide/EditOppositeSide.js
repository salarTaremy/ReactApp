import React, { useState, useEffect } from "react"
import * as url from '../../helpers/url_helper'
import { post, del, get, put } from "../../helpers/api_helper"
import { useParams } from 'react-router-dom';
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Loading from "../../components/Common/Loading"
import EditOppositeSideForm from '../OppositeSide/EditOppositeSideForm'

const EditOppositeSide = () => {
  const [Th, SetTh] = useState(null);
  const [Cities, SetCities] = useState(null);
  const { id } = useParams();

  // ////////////////////////////////////////////////////
  useEffect(() => {
    get(`${url.FETCH_Tarafhesab_Detail}/${id}`)
      .then((response) => {
        //response.value.iD_MahalTavalo2 = response.value.iD_MahalTavalod
        SetTh(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        response.value.map((item) => {
          item.label = item.value;
        })
        SetCities(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  // ////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="ویرایش طرف حساب ها" />
        {Th && Cities ?
              <EditOppositeSideForm Th={Th} Cities = {Cities} />
          : <Loading />}
      </div>
    </React.Fragment>
  )
}
export default EditOppositeSide