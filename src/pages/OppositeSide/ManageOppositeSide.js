import React, { useState, useEffect } from "react"
import * as cols from "components/Grid/columnHelper"
import { Link, Route, useHistory } from "react-router-dom"
import Loading from "components/Common/Loading"
import DatePicker from "components/Common/DatePicker"
//import { useForm } from "react-hook-form";
import { Card, Modal } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import GridView from "components/Grid/GridView"
import * as url from 'helpers/url_helper'
import { post, del, get, put } from "helpers/api_helper"

let CityList = [];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ManageOppositeSide = () => {
  const [Isloading, SetIsloading] = useState(true)
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        SetIsloading(false)
        CityList = response
        // const transformed = response.map(({ id, code, value }) => ({ label: value, value: id, code: code ,id:id}));
        // CityList = transformed
      }, (error) => {
        console.error(error);
      });
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="طرف حساب ها" breadcrumbItem="مدیریت طرف حساب ها" />
        {Isloading == true
          ? <Loading />
          : <>
            <Card className="p-3">
              <p>لیست طرف حساب ها</p>
            </Card>
            <Card className="p-1">
              <GridView Url={url.FETCH_OPPOSITE_SIDE} Columns={cols.OPPOSITE_SIDE_COLUMNS} />
            </Card>
            <Card >
              <Report></Report>
            </Card>
            <Card >
              <Report></Report>
            </Card>

          </>}
      </div>
    </React.Fragment>
  )
}
export default ManageOppositeSide






const Report = () => {
  const [modal_center, setmodal_center] = useState(false)
  const tog_center = () => {
    setmodal_center(!modal_center)
    removeBodyCss()
  }
  const removeBodyCss = () => {
    document.body.classList.add("no_padding")
  }
  const BtnClose = () => {
    return (
      <button
        type="button"
        onClick={() => {
          setmodal_center(false)
        }}
        className="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    )
  }
  return (

    <>
      <Modal
        isOpen={modal_center}
        toggle={tog_center}
        centered={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">گزارش</h5>
          <BtnClose></BtnClose>
        </div>
        <div className="modal-body">
          <p>OK</p>
        </div>
      </Modal>

      <div>
        <button
          type="button"
          className="btn btn-primary waves-effect waves-light"
          onClick={() => {
            tog_center()
          }}
          data-toggle="modal"
          data-target=".bs-example-modal-center"
        >
          چاپ گزارشات
        </button>
      </div>
    </>

  )
}