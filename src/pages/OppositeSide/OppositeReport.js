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

    // ////////////////////////////////////////////////////
    useEffect(() => {
        const stiOptions = new Stimulsoft.Viewer.StiViewerOptions();
        const viewer = new Stimulsoft.Viewer.StiViewer(stiOptions, "content_viewer", false);
        viewer.renderHtml("content");
        const report = new Stimulsoft.Report.StiReport();
        report.loadFile("/reports/crossTabTest2.mrt");
        const dsDataSource = new Stimulsoft.System.Data.DataSet();
        const Ds = {
            "value": cities.value
        };
        dsDataSource.readJson(Ds);
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