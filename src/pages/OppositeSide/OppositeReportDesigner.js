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


const Blank = ({ cities }) => {
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
    report.loadFile("/reports/crossTabTest2.mrt");

    dsDataSource.readJson(cities);
    report.regData("DataSource", null, dsDataSource);


    designer.report = report;
    designer.renderHtml("content");



  }, []);


  return (
    <>

      <style>{".ltr{direction: ltr;}"}</style>

      <div className="ltr"
        id="content"></div>

    </>
  )
}



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
          <Blank cities={Cities}   ></Blank>
          : <Loading />}
      </div>
    </React.Fragment>
  )
}
export default Main

