import React, { useState, useEffect } from "react"
import * as cols from "components/Grid/columnHelper"
import { Link, Route, useHistory } from "react-router-dom"
import Loading from "components/Common/Loading"
import DatePicker from "components/Common/DatePicker"
//import { useForm } from "react-hook-form";
import { Card } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import GridView from "components/Grid/GridView"
import * as url from 'helpers/url_helper'
import { post,del, get, put } from "helpers/api_helper"

let CityList = [];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ManageOppositeSide = () => {
  const [Isloading, SetIsloading] = useState(true)
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        SetIsloading(false)
        console.log("url.GET_CITY received", response)
        CityList = response
        // const transformed = response.map(({ id, code, value }) => ({ label: value, value: id, code: code ,id:id}));
        // CityList = transformed
      }, (error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="طرف حساب ها" breadcrumbItem="مدیریت طرف حساب ها" />
        {Isloading == true
          ? <Loading />
          : <>
            <Card className="p-3">
              <p>لیست طرف حساب ها</p>
            </Card>
            <Card className="p-1">
              <GridView Url={url.FETCH_OPPOSITE_SIDE} Columns={cols.OPPOSITE_SIDE_COLUMNS} />
            </Card>
          </>}
      </div>
    </React.Fragment>
  )
}
export default ManageOppositeSide