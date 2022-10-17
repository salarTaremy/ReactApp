import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import Breadcrumbs from "components/Common/Breadcrumb"
import Loading from "components/Common/Loading"
import {api,url,str} from 'common/imports'
import ReportViewer from "pages/StiReport/ReportViewer"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { select } from "redux-saga/effects"

const ShowReport = () => {
    const location = useLocation();
    const [JsonData, SetJsonData] = useState(null);
    const Rep = useSelector((state) => state.stiReport)
    const { id } = useParams();
    useEffect(() => {
        api.get(`${url.GET_STIREPORT_BY_ID}/${id}`)
            .then((response) => {
                SetJsonData(response.value.jsonData)
            }, (error) => {
                console.error(error);
            });
    }, []);
    return (
        <React.Fragment>
            <div className="page-content">
                {/* <Breadcrumbs title="نمایش گزارش" breadcrumbItem="گزارشات" /> */}
                {JsonData ?
                    <ReportViewer data={Rep.data}  route={location.pathname}  JsonData = {JsonData}    ></ReportViewer>
                    : <Loading />}
            </div>
        </React.Fragment>
    )
}
export default ShowReport