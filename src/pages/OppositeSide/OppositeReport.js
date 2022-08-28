import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

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
import Report from "pages/StiReport/Report"






const Main = () => {
    const location = useLocation();
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
                    <Report data={Cities}  route={location.pathname}   ></Report>
                    : <Loading />}
            </div>
        </React.Fragment>
    )
}
export default Main