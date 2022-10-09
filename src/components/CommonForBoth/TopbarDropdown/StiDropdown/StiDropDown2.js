import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import { Spinner, Modal } from "reactstrap";
import AddNewReportForm from "./AddNewReportForm";
import { api, url, str } from "common/imports";
import { useFetch } from "helpers/api_helper";


const StiDropDown2 = (props) => {
  //const [IsLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const tog_modal = () => {
    setMenu(false)
    setModalIsOpen(true);
  };



  
  const getCurrentRouteWithoutLastPart = () => {
    return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
  };
  const getCurrentRoute = () => {
    const route = getCurrentRouteWithoutLastPart();
    return route ? route : location.pathname;
  };

  const DDM = () => {
    const finalUrl = `${url.GET_STIREPORT}?Route=${getCurrentRoute()}`;
    const [data, error, loading] = useFetch(finalUrl);

    return (
      <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
        <MnuHeader />
        <SimpleBar style={{ height: "230px" }}>
          {data ? (
            <MnuItems LST={data.value} OnDeleteClick={OnDeleteClick} />
          ) : (
            <StiLoading />
          )}
        </SimpleBar>
        <AddNewReport onClick={tog_modal} />
      </DropdownMenu>
    );
  };

  const onToggleDropDown = () => {
    if (menu === false) {
      console.log("Menu Open");
    } else {
      console.log("Menu close");
    }
    setMenu(!menu);
  };

  return (
    <>
    <Modal
                isOpen={ModalIsOpen}
                toggle={tog_modal}
                centered={true}
                backdrop={false}
            >
                <div className="modal-header">
                    <h6 className="modal-title mt-0">{str.REPORTS.ADD_NEW_REPORT}</h6>
                    <button
                        type="button"
                        onClick={() => { setModalIsOpen(false) }}
                        className="close bg-danger"
                        //disabled={IsLoading}
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {/* <AddNewReportForm onSubmit={onSubmit} IsLoading={IsLoading}  route={getCurrentRoute()} /> */}
                    <AddNewReportForm    route={getCurrentRoute()}  />
                </div>
            </Modal>
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
        </DropdownToggle>
        {menu === true && <DDM /> }
      </Dropdown>
    </>
  );
};
export default StiDropDown2;

///////////////////////////////////////////////////////////////////////

const OnDeleteClick = (e) => {
  console.log(e.target.value);
  alert(`Delete ${e.target.value}`);
};

export const StiLoading = () => {
  return (
    <div className="text-center p-3">
      <div className="img">
        <Spinner className="m-1" color="primary" />
      </div>
      <h6 className="mb-4 mt-5"> {str.REPORTS.RECEIVING_RELEVANT_REPORTS}</h6>
    </div>
  );
};

export const AddNewReport = (props) => {
  return (
    <div className="p-2 border-top d-grid">
      <button
        className="btn btn-sm btn-link font-size-14 text-center"
        onClick={props.onClick}
      >
        <i className="mdi mdi-arrow-right-circle me-1"></i>
        {str.REPORTS.ADD_NEW_REPORT}
      </button>
    </div>
  );
};

const MnuHeader = () => {
  return (
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
  );
};

const MnuItems = (props) => {
  const it = [];
  props.LST.map((item, i) => {
    it.push(JSON.parse(item));
  });
  return it.map((item, i) => (
    <div key={item.id}>
      <div
        //to={`/ShowReport/${item.id}`}
        //onClick={()=>{history.push(`/ShowReport/${item.id}`)}}
        className="text-reset notification-item"
      >
        <div className="d-flex align-items-start">
          <div className="avatar-xs me-3">
            <span className="avatar-title bg-primary rounded-circle font-size-16">
              <i className="bx bxs-report"></i>
            </span>
          </div>
          <Link to={`/ShowReport/${item.id}`} className="flex-1">
            <h6 className="mt-0 mb-1">{item.ReportName}</h6>
            <div className="font-size-12 text-muted">
              <p className="mb-1">{item.Description}</p>
              <p className="mb-0">
                <i className="mdi mdi-clock-outline" />
                {item.CreateDate}
              </p>
            </div>
          </Link>
          <div className="col-auto">
            <button
              className="small btn-rounded waves-effect btn btn-link  text-danger"
              value={item.id}
              onClick={(e) => props.OnDeleteClick(e)}
            >
              <i className="bx bx-error-alt font-size-16 align-middle me-2"></i>
              حدف
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
};



