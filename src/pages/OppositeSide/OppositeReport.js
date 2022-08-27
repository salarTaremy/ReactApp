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

const Page = ({ cities }) => {
    const Stimulsoft = window.Stimulsoft || {};
    useEffect(() => {
        const options = new Stimulsoft.Viewer.StiViewerOptions();
        //options.width = "1000px";
        //options.height = "1000px";

        options.appearance.reportDisplayMode = Stimulsoft.Report.Export.StiHtmlExportMode.Div;
        options.toolbar.showAboutButton = false;
        options.appearance.scrollbarsMode = true;
        //options.appearance.fullScreenMode = true;
        options.appearance.backgroundColor = "#ffffff";
        options.appearance.showTooltips = false;
        // options.appearance.backgroundColor = Stimulsoft.System.Drawing.Color.black;
        // options.toolbar.showPrintButton = false;
        // options.toolbar.showDesignButton = false;
        // options.exports.showExportToPdf = true;
        // options.exports.ShowExportToWord2007 = true;

        const viewer = new Stimulsoft.Viewer.StiViewer(options, "content_viewer", false);
        const dsDataSource = new Stimulsoft.System.Data.DataSet();
        const report = new Stimulsoft.Report.StiReport();

        //report.loadFile("/reports/crossTabTest2.mrt");
        var JsonRep= localStorage.getItem("rep")
        report.load( JsonRep);

        viewer.renderHtml("content");


        dsDataSource.readJson(cities);
        report.regData("DataSource", null, dsDataSource);
        viewer.report = report;


    }, []);
    return (
        <div id="content">
        </div>
    )
}





const Main = () => {
    const [Cities, SetCities] = useState(null);
    useEffect(() => {
        get(url.GET_CITY)
            .then((response) => {
                console.clear()
                console.log('response')
                //SetCities(response.value)                 
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
                    <Page cities={Cities}   ></Page>
                    : <Loading />}
            </div>
        </React.Fragment>
    )
}
export default Main