import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import { Spinner, Modal, Alert, Button } from "reactstrap";
import AddNewReportForm from "./AddNewReportForm";
import { api, url, str, toast } from "common/imports";
import { useDel, useFetch, usePost } from "helpers/api_helper";
import { StiLoading } from "./StiLoading";
import { MenuItems } from "./MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { NoData } from "./NoData";

const StiDropDown = (props) => {
  const [menu, setMenu] = useState(false);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const Rep = useSelector((store) => store.stiReport);
  const tog_modal = () => {
    setMenu(false);
    setModalIsOpen(true);
  };

  useEffect(() => {
    console.log('Rep.data', Rep.data);
  });

  const getCurrentRouteWithoutLastPart = () => {
    return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
  };
  const getCurrentRoute = () => {
    const route = getCurrentRouteWithoutLastPart();
    return route ? route : location.pathname;
  };

  const onToggleDropDown = () => {
    if (menu === false) {
      Rep.DoFetchData();
      //console.log("Menu Open");
    } else {
      //console.log("Menu close");
    }
    setMenu(!menu);
  };

  const finalUrl = `${url.GET_STIREPORT}?Route=${getCurrentRoute()}`;
  const [data, error, loading, doFetch] = useFetch();
  useEffect(() => {
    doFetch(finalUrl);
  }, []);

  return (
    <>
      <StiModal
        route={getCurrentRoute()}
        isOpen={ModalIsOpen}
        toggle={tog_modal}
        setIsOpen={(isOpen) => setModalIsOpen(isOpen)}
      />

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
        {menu === true && (
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
            {Rep.data === null ? (
              <NoData />
            ) : (
              <SimpleBar style={{ height: "230px" }}>
                {data && Rep.isFetchingData === false ? (
                  <MenuItems LST={data.value} />
                ) : (
                  <StiLoading
                    message={
                      Rep.isFetchingData === false
                        ? str.REPORTS.RECEIVING_RELEVANT_REPORTS
                        : str.REPORTS.RECEIVING_DATA_REPORTS
                    }
                  />
                )}
              </SimpleBar>
            )}

            <AddNewReport onClick={tog_modal} />
          </DropdownMenu>
        )}
      </Dropdown>
    </>
  );
};
export default StiDropDown;

///////////////////////////////////////////////////////////////////////

export const StiModal = (props) => {
  const [response, error, IsLoading, doFetch] = usePost();
  const onSubmit = (data) => {
    const obj = {
      reportName: data.reportName,
      description: data.description,
      route: props.route,
      jsonData: "",
    };
    const onExecuted = (res, err) => {
      props.setIsOpen(false);
      const msg = str.PUBLIC.SAVED_SUCCESSFUL_WITH_ID(["گزارش", res.objectId]);
      toast.success(msg);
    };
    doFetch(url.POST_STIREPORT, obj, onExecuted);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      centered={true}
      backdrop={false}
    >
      <div className="modal-header">
        <h6 className="modal-title mt-0">{str.REPORTS.ADD_NEW_REPORT}</h6>
        <button
          type="button"
          onClick={() => props.setIsOpen(false)}
          className="close bg-danger"
          disabled={IsLoading}
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <AddNewReportForm
          onSubmit={onSubmit}
          IsLoading={IsLoading}
          route={props.route}
        />
      </div>
    </Modal>
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
