import React, { useState, useEffect } from "react"

//Import Breadcrumbnpm start
import Breadcrumbs from "components/Common/Breadcrumb"


//Loading Component
import Loading from "components/Common/Loading"

//For Call Api
import { post, del, get, put } from "helpers/api_helper"

//Url For Call Api
import * as url from 'helpers/url_helper'

import Designer from "pages/StiReport/Designer"


const Main = () => {
  const [Cities, SetCities] = useState(null);
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        SetCities(response)
      }, (error) => {
        console.error(error);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="گزارش طرف حساب" breadcrumbItem="طرف حساب ها" />
        {Cities ?
          <Designer data={Cities}   ></Designer>
          : <Loading />}
      </div>
    </React.Fragment>
  )
}
export default Main

