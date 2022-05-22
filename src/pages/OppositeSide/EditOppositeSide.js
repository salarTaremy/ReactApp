import React, { useState, useEffect } from "react"
import * as url from '../../helpers/url_helper'
import { post, del, get, put } from "../../helpers/api_helper"
import { useParams } from 'react-router-dom';
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
import Breadcrumbs from "../../components/Common/Breadcrumb"


//Loading Component
import Loading from "../../components/Common/Loading"


const EditOppositeSide = () => {
    const { id } = useParams()
      // ////////////////////////////////////////////////////
  useEffect(() => {
        get(`${url.FETCH_Tarafhesab_Detail}/${id}`)
      .then((response) => {
        //setIsloading(false)
        console.log("response received")
        console.log(response.value)

        //settarafHesab(response);
      }, (error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log('componentDidUpdate')
  // }, [tarafHesab]);

  // useEffect(() => {
  //   // componentWillUnmount
  //   return () => {
  //     console.log('componentWillUnmount')
  //   }
  // }, [tarafHesab]);
  // ////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="صفحه خالی" />
        <Card className="p-3">
          <p>Edit th</p>

          <p> id : {id}</p>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default EditOppositeSide