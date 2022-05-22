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
import Breadcrumbs from "../../components/Common/Breadcrumb"


//Loading Component
import Loading from "../../components/Common/Loading"


const Blank = () => {
  // ////////////////////////////////////////////////////
  // useEffect(() => {
  //   console.log('componentDidMount')
  // }, []);

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
          <p>صفحه خالی</p>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default Blank