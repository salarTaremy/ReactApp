import React, { useState, useEffect } from "react"
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
} from "reactstrap"


//Import Breadcrumbnpm start
import Breadcrumbs from "components/Common/Breadcrumb"


//Loading Component
import Loading from "components/Common/Loading"

//For Call Api
import { post, del, get, put } from "helpers/api_helper"

//Url For Call Api
import * as url from 'helpers/url_helper'


const Blank = () => {
    const Stimulsoft = window.Stimulsoft || {};
  useEffect(() => {
   

    var options = new Stimulsoft.Designer.StiDesignerOptions();
    //options.appearance.fullScreenMode = true;
     var designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);
     var report = new Stimulsoft.Report.StiReport();
     report.loadFile("/reports/crossTabTest2.mrt");
    designer.report = report;  
    designer.renderHtml("content");




    
  }, []);


  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="صفحه خالی" />
   
        <div id="content"></div>
      
      </div>
    </React.Fragment>
  )
}

export default Blank