import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media } from "reactstrap"
import SimpleBar from "simplebar-react"
import { SET_REPORT, RELOAD } from "store/StiReport/actionTypes"
import { useSelector, useDispatch } from 'react-redux'

import * as api from "helpers/api_helper"
import *  as url from "helpers/url_helper"
import { Spinner } from "reactstrap"
import * as str from "common/strings"

const StiDropdown = props => {
    const location = useLocation()
    const Rep = useSelector((state) => state.stiReport)
    const dispatch = useDispatch()
    const [menu, setMenu] = useState(false)
    const RenderList = () => {
        return (
            Rep.Reports.map((item, i) =>
                <div key={i}>
                    <Link to=""  onClick={() => { alert('Menu Item Click !!!') }}
                        className="text-reset notification-item">
                        <div className="d-flex align-items-start">
                            <div className="avatar-xs me-3">
                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                    <i className="bx bxs-report"></i>
                                </span>
                            </div>
                            <div className="flex-1">
                                <h6 className="mt-0 mb-1">
                                    {item.ReportName}
                                </h6>
                                <div className="font-size-12 text-muted">
                                    <p className="mb-1">
                                        {item.Description}
                                    </p>
                                    <p className="mb-0">
                                        <i className="mdi mdi-clock-outline" />
                                        {item.CreateDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))
    }

    const onClickBtn = () => {
        dispatch({ type: RELOAD });
        api.get(`${url.GET_STIREPORT}?Route=${location.pathname}`)
            .then((response) => {
                var Reports = []
                response.value.map((item, i) => {
                    Reports.push(JSON.parse(item))
                })
                const st = { isLoading: false, Reports: Reports }
                dispatch({ type: SET_REPORT, payload: st });
            }, (error) => {
                console.error(error);
            });
    }
    return (
        <>
            <Dropdown
                isOpen={menu}
                toggle={() => setMenu(!menu)}
                className="dropdown d-inline-block"
                tag="li"
            >
                <DropdownToggle
                    className="btn header-item noti-icon waves-effect"
                    tag="button"
                    disabled={menu}
                    id="page-header-notifications-dropdown-print"
                    onClick={onClickBtn}
                >
                    <i className="dripicons-print"></i>
                    {/* <span className="badge rounded-pill bg-danger ">2</span> */}
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                    <div className="p-3">
                        <Row className="align-items-center">
                            <Col>
                                <h6 className="m-0">{str.REPORTS.REPORTS}</h6>
                            </Col>
                            <div className="col-auto">
                                <a href="#!" className="small">
                                    {str.PUBLIC.RELOAD}
                                </a>
                            </div>
                        </Row>
                    </div>
                    {Rep.isLoading == true ?
                        <div className="text-center p-3">
                            <div className="img">
                                <Spinner className="m-1" color="primary" />
                            </div>
                            <h6 className="mb-4 mt-5"> {str.REPORTS.RECEIVING_RELEVANT_REPORTS}</h6>
                        </div>
                        :
                        <>
                            <SimpleBar >
                                <RenderList />
                            </SimpleBar>
                            <div className="p-2 border-top d-grid">
                                <Link
                                    className="btn btn-sm btn-link font-size-14 text-center"
                                    to="#"
                                ><i className="mdi mdi-arrow-right-circle me-1"></i>
                                    {str.REPORTS.ADD_NEW_REPORT}
                                </Link>
                            </div>
                        </>
                    }
                </DropdownMenu>
            </Dropdown>
        </>
    )
}
export default StiDropdown
