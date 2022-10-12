import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";
import { Spinner, Modal, Alert, Button } from "reactstrap";
import AddNewReportForm from "./AddNewReportForm";
import { api, url, str, toast } from "common/imports";
import { useDel, useFetch, usePost } from "helpers/api_helper";
import noData from "assets/images/reports/no-data.png"

const StiDropDown = (props) => {
  const [menu, setMenu] = useState(false);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();

  const tog_modal = () => {
    setMenu(false);
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
            <MnuItems LST={data.value} />
          ) : (
            <StiLoading message={str.REPORTS.RECEIVING_RELEVANT_REPORTS} />
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
        {menu === true && <DDM />}
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
          //onClick={() => { setModalIsOpen(false) }}
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

// const OnDeleteClick = (e) => {
//   console.log(e.target.value);
//   toast.warn(`Delete ${e.target.value}`);
// };

export const StiLoading = (props) => {
  return (
    <div className="text-center p-3">
      <div className="img">
        <Spinner className="m-1" color="primary" />
      </div>
      <h6 className="mb-4 mt-5">{props.message} </h6>
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
  const [it, setIt] = useState([]);
  const [response, error, loading, doFetch] = useDel();

  useEffect(() => {
    const Tmp = [];
    [...props.LST].map((item, i) => {
      const obj = JSON.parse(item);
      obj.ChkForDelete = false;
      Tmp.push(obj);
      console.log(obj.ReportName);
    });
    setIt([...Tmp]);
  }, []);

  const ChengeChk = (e) => {
    console.clear();
    const tmp = [...it];
    const id = e.target.value;
    const index = tmp.findIndex((x) => x.id == id);
    tmp.forEach((x) => {
      x.ChkForDelete = false;
    });
    tmp[index].ChkForDelete = true;
    setIt([...tmp]);
    console.log(it);
  };

  const NoData = () => {
    return(
      <div className="text-center p-3">
      <div className="img" >
        <img src ={noData} style={{ height: "60px", width:"60px" }} />
      </div>
      <h6 className="mb-4 mt-5">{str.REPORTS.NO_REPORT} </h6>
    </div>
    )
  };

  const cancelDelete = () => {
    const tmp = [...it];
    tmp.forEach((x) => {
      x.ChkForDelete = false;
    });
    setIt([...tmp]);
  };

  const removeItem = (id) => {
    const tmp = [...it];
    const index = tmp.map((item) => item.id).indexOf(id);
    if (index !== -1) {
      tmp.splice(index, 1);
      console.log([...tmp]);
      setIt([...tmp]);
    }
  };

  const onDelete = (id) => {
    const tmp = [...it];
    tmp.forEach((x) => {
      if (x.id === id) {
        x.ChkForDelete = false;
        const finalUrl = `${url.DEL_STIREPORT}/${id}`;
        const onExecuted = (response, error) => {
          if (response.rowAffect > 0) {
            toast.success(response.message);
            removeItem(id);
          } else {
            toast.warn("حدف انجام نشد");
          }
        };
        doFetch(finalUrl, {}, onExecuted);
      }
    });
    setIt([...tmp]);
  };

  if (loading) {
    return <StiLoading message={str.PUBLIC.DELETING_DATA} />;
  } else if (it.length <= 0) {
    return <NoData/>;
  } else {
    return it.map((item, i) => (
      <div key={i}>
        <div className="text-reset notification-item">
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
            {item.ChkForDelete === true && loading === false && (
              <div
                className="btn-group btn-group-sm mt-2"
                role="group"
                aria-label="Basic example"
              >
                <Button onClick={() => onDelete(item.id)} color="success">
                  {str.PUBLIC.YES}
                </Button>{" "}
                <Button onClick={() => cancelDelete()} color="danger">
                  {str.PUBLIC.NO}
                </Button>{" "}
              </div>
            )}
            {item.ChkForDelete != true && (
              <button
                className="small btn-rounded waves-effect btn btn-link  text-danger"
                value={item.id}
                onClick={(e) => ChengeChk(e)}
              >
                {str.PUBLIC.DELETE}
              </button>
            )}
          </div>
        </div>
      </div>
    ));
  }
};
