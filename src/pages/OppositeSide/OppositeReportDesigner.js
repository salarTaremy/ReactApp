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
   
    const dsDataSource = new Stimulsoft.System.Data.DataSet();
    var options = new Stimulsoft.Designer.StiDesignerOptions();
    //options.appearance.fullScreenMode = true;

  
    // options.viewerOptions.appearance.reportDisplayMode = Stimulsoft.Report.Export.StiHtmlExportMode.Auto;
    // options.toolbar.showFileMenuExit = false;
    // options.toolbar.showFileMenuOptions = false;
    // options.bands.showChildBand = false;
    // options.components.showPanel = false;
    // options.appearance.showReportTree = false;
    // options.appearance.showTooltips = false;
    


     var designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);
     var report = new Stimulsoft.Report.StiReport();
     //report.loadFile("/reports/crossTabTest2.mrt");


     const Ds = {
      "value": [{"id": 1 , "name":"tar"},{"id": 2 , "name":"salar"}]
      ,"val2": [{"id": 4 , "name":"aaaa"},{"id": 5 , "name":"bbbb"}]
      ,"val3": "dasdas"
      ,"val4": {"ffff" :11111111111}
  };

    dsDataSource.readJson(Ds);
    report.regData("DataSource", null, dsDataSource);


    designer.report = report;  
    designer.renderHtml("content");











    
  }, []);


  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="صفحه خالی" />

        <style>{".ltr{direction: ltr;}"}</style>
   
        <div   className="ltr"  
          id="content"></div>
      
      </div>
    </React.Fragment>
  )
}

export default Blank