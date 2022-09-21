import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'
import Breadcrumbs from "components/Common/Breadcrumb"
import Loading from "components/Common/Loading"
import {api,url,str} from 'common/imports'
import ReportViewer from "pages/StiReport/ReportViewer"
import { useParams } from "react-router-dom"
const ShowReport = () => {
    const data = {id:256 , name : 'salar' , age: 38}
    const location = useLocation();
    const [JsonData, SetJsonData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        api.get(`${url.GET_STIREPORT_BY_ID}/${id}`)
            .then((response) => {
                console.log(response.value.jsonData)
                SetJsonData(response.value.jsonData)
            }, (error) => {
                console.error(error);
            });
    }, []);
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="گزارش طرف حساب" breadcrumbItem="طرف حساب ها" />
                {JsonData ?
                    <ReportViewer data={data}  route={location.pathname}  JsonData = {JsonData}    ></ReportViewer>
                    : <Loading />}
            </div>
        </React.Fragment>
    )
}
export default ShowReport