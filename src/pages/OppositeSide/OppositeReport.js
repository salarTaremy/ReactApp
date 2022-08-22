import React, { useState, useEffect } from "react"
import ScriptTag from 'react-script-tag';
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


const Page = () => {
    const [Cities, SetCities] = useState(null);
    const itemList = ["Item1", "Item2", "Item3", "Item4", "Item5"];
    // ////////////////////////////////////////////////////
    useEffect(() => {
        get(url.GET_CITY)
            .then((response) => {
                console.log(response.value)
                SetCities(response.value)
            }, (error) => {
                console.error(error);
            });
    }, []);
    // ////////////////////////////////////////////////////
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="گزارش طرف حساب" breadcrumbItem="طرف حساب ها" />
                {Cities ?
                    <>
                        {Cities.map((item) =>
                            <p>{item.value}</p>
                        )}
                    </>
                    : <Loading />}
            </div>
            <ScriptTag isHydrating={true} type="text/javascript" src="pages/OppositeSide/alert.js" />
        </React.Fragment>
    )
}
export default Page