import React from "react"



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
} from "reactstrap"


//Import Breadcrumbnpm start
import Breadcrumbs from "../../components/Common/Breadcrumb"
import GridView from "../../components/Grid/GridView"
import * as url from '../../helpers/url_helper'




const test = () => {
  return (

    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="تست" breadcrumbItem="گرید تست" />
        <Card className="p-3">
          <p>از تاریخ 1400/01/01</p>
          <p>تا تاریخ 1400/01/01</p>
        </Card>
        <Card   className="p-1">
          <p>محدوده زمانی</p>
        </Card>
      </div>
    </React.Fragment>
  )
}


export default test