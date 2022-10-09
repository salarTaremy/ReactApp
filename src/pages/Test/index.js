import React from "react";
import * as all from "common/imports";

import { useState, useEffect } from "react";

import { Card } from "reactstrap";

//Import Breadcrumbnpm start
import Breadcrumbs from "../../components/Common/Breadcrumb";
import GridView from "../../components/Grid/GridView";
import * as url from "../../helpers/url_helper";

const Test = () => {
  const [data, error, loading] = all.api.useFetch(all.url.GET_CITY);
  const [data2, error2, loading2] = all.api.useFetch(all.url.GET_CITY);

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="تست" breadcrumbItem="گرید تست" />
        <Card className="p-3">
          <p>از تاریخ 1400/01/01</p>
          <p>تا تاریخ 1400/01/01</p>

          {data ? <p>{JSON.stringify(data.value[0])}</p> : <p>loding ...</p>}

          {data2 ? <p>{JSON.stringify(data2.value[0])}</p> : <p>loding ...</p>}
        </Card>
        <Card className="p-1">
          <p>محدوده زمانی</p>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Test;
