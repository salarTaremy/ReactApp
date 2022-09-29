import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media, Label, Button } from "reactstrap"
import SimpleBar from "simplebar-react"
import { SET_REPORT, RELOAD, REG_DATA } from "store/StiReport/actionTypes"
import { useSelector, useDispatch } from 'react-redux'
import { Spinner, Modal } from "reactstrap"
import RenderList from "./RenderList"
import { Reload } from "./Reload"
import AddNewReportForm from './AddNewReportForm'
import { api, url, str } from 'common/imports'

const StiDropdown = props => {
    const [IsLoading, setIsLoading] = useState(false)
    const [menu, setMenu] = useState(false)
    const [ModalIsVisible, setModalIsVisible] = useState(false)
    const location = useLocation()
    const Rep = useSelector((state) => state.stiReport)
    const dispatch = useDispatch()
    const tog_center = () => { setModalIsVisible(!ModalIsVisible) }

    const getCurrentRouteWithoutLastPart = () => {
        return location.pathname.slice(0, location.pathname.lastIndexOf('/'))
    }
    const getCurrentRoute = () => {
        const route = getCurrentRouteWithoutLastPart()
        return route?route:location.pathname
    }
    const onToggleDropDown = () => {
        if (menu == false) {
            console.log('Menu Open')
            dispatch({ type: RELOAD });
            //const finalUrl = `${url.GET_STIREPORT}?Route=${location.pathname}`;
            const finalUrl = `${url.GET_STIREPORT}?Route=${getCurrentRoute()}`;
            api.get(finalUrl)
                .then((response) => {
                    var Reports = []
                    response.value.map((item, i) => {
                        Reports.push(JSON.parse(item))
                    })
                    dispatch({ type: SET_REPORT, payload: Reports });
                }, (error) => {
                    console.error(error);
                });
                Rep.ONC()
        }
        else {
            console.log('Menu Open')
        }
        setMenu(!menu)
    }





    const onSubmit = (data) => {
        setIsLoading(true)
        const obj = { reportName: data.reportName, description: data.description, route:getCurrentRoute() , jsonData : '' }
        api.post(url.POST_STIREPORT, obj)
            .then((response) => {
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
                    <h6 className="modal-title mt-0">{str.REPORTS.ADD_NEW_REPORT}</h6>
                    <button
                        type="button"
                        onClick={() => { setModalIsVisible(false) }}
                        className="close bg-danger"
                        disabled={IsLoading}
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <AddNewReportForm onSubmit={onSubmit} IsLoading={IsLoading}  route={getCurrentRoute()} />
                </div>
            </Modal>

            {/* <p>{ JSON.stringify( Rep)}</p> */}
            <Dropdown
                isOpen={menu}
                toggle={onToggleDropDown}
                className="dropdown d-inline-block"
                tag="li"
            >
                <DropdownToggle
                    className="btn header-item noti-icon waves-effect"
                    tag="button"
                    disabled={menu}
                    id="page-header-notifications-dropdown-print"
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
                                <RenderList Rep={Rep}
                                    //onClick={Rep.ONC}
                                />
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


