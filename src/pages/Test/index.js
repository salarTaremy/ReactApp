import React from "react";
import {url,api,str} from "common/imports";

import { useState, useEffect } from "react";

import { Card } from "reactstrap";

//Import Breadcrumbnpm start
import Breadcrumbs from "../../components/Common/Breadcrumb";
import GridView from "../../components/Grid/GridView";


const Test = () => {

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="تست" breadcrumbItem="گرید تست" />
        <Card className="p-3">
          <p>از تاریخ 1400/01/01</p>
          <p>تا تاریخ 1400/01/01</p>
        </Card>
        <Card className="p-1">
          <p>محدوده زمانی</p>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Test;











