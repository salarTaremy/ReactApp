import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media, Label, Button } from "reactstrap"
import SimpleBar from "simplebar-react"
import { SET_REPORT, RELOAD,REG_DATA } from "store/StiReport/actionTypes"
import { useSelector, useDispatch } from 'react-redux'
import { Spinner, Modal } from "reactstrap"
import RenderList from "./RenderList"
import { Reload } from "./Reload"
import AddNewReportForm from './AddNewReportForm'
import {api,url,str} from 'common/imports'

const StiDropdown = props => {
    const [IsLoading, setIsLoading] = useState(false)
    const [menu, setMenu] = useState(false)
    const [ModalIsVisible, setModalIsVisible] = useState(false)
    const location = useLocation()
    const Rep = useSelector((state) => state.stiReport)
    const dispatch = useDispatch()
    const tog_center = () => {setModalIsVisible(!ModalIsVisible)}
    const onClickAddNewReportBtn = () => {
        dispatch({ type: RELOAD });
        api.get(`${url.GET_STIREPORT}?Route=${location.pathname}`)
            .then((response) => {
                var Reports = []
                response.value.map((item, i) => {
                    Reports.push(JSON.parse(item))
                })
                //const stRep = { isLoading: false, Reports: Reports , data:{} }
                dispatch({ type: SET_REPORT, payload: Reports });
            }, (error) => {
                console.error(error);
            });
    }
    const onSubmit = (data) => {
        setIsLoading(true)
        console.log(data)
        const obj = { reportName: data.reportName, description: data.description, route: location.pathname }
        api.post(url.POST_STIREPORT, obj)
            .then((response) => {
                console.log(response)
                setIsLoading(false)
                tog_center()
            }, (error) => {
                console.error(error);
            });
    };
    const modifiers = {
        setMaxHeight: {
            enabled: true,
            fn: (data) => {
                return {
                    ...data,
                    styles: {
                        ...data.styles,
                        overflow: 'auto',
                        maxHeight: 600,
                    },
                };
            },
        },
    }
    return (
        <>
            <Modal
                isOpen={ModalIsVisible}
                toggle={tog_center}
                centered={true}
                backdrop={false}
            >
                <div className="modal-header">
                    <h5 className="modal-title mt-0">{str.REPORTS.ADD_NEW_REPORT}</h5>
                    <button
                        type="button"
                        onClick={() => { setModalIsVisible(false) }}
                        className="close bg-danger"
                        disabled = {IsLoading}
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <AddNewReportForm onSubmit={onSubmit} IsLoading={IsLoading} />
                </div>
            </Modal>

            <p>{Rep.data.name}</p>
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
                    onClick={onClickAddNewReportBtn}
                >
                    <i className="dripicons-print"></i>
                    {/* <span className="badge rounded-pill bg-danger ">2</span> */}
                </DropdownToggle>
                <DropdownMenu
                    className="dropdown-menu-lg dropdown-menu-end p-0"
                    modifiers={modifiers}
                >

                    <Reload></Reload>
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
                                <RenderList Rep={Rep} onClick={() => { var dt = new Date().toString();   dispatch({ type: REG_DATA, payload: {name:dt} });    }} />
                            </SimpleBar>
                            <div className="p-2 border-top d-grid">
                                <button
                                    className="btn btn-sm btn-link font-size-14 text-center"
                                    onClick={tog_center}
                                ><i className="mdi mdi-arrow-right-circle me-1"></i>
                                    {str.REPORTS.ADD_NEW_REPORT}
                                </button>
                            </div>
                        </>
                    }
                </DropdownMenu>
            </Dropdown>
        </>
    )

}
export default StiDropdown


