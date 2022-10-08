import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
  Media,
  Label,
  Button,
  Alert,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import { SET_REPORT, RELOAD, REG_DATA } from "store/StiReport/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Modal } from "reactstrap";
import RenderList from "./RenderList";
import { Reload } from "./Reload";
import AddNewReportForm from "./AddNewReportForm";
import { api, url, str } from "common/imports";
import { useFetch } from "helpers/api_helper";
import { setDefaultLocale } from "react-datepicker";

const StiDropDown2 = (props) => {
  const [IsLoading, setIsLoading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [ModalIsVisible, setModalIsVisible] = useState(false);
  const location = useLocation();
  const Rep = useSelector((state) => state.stiReport);

  const getCurrentRouteWithoutLastPart = () => {
    return location.pathname.slice(0, location.pathname.lastIndexOf("/"));
  };
  const getCurrentRoute = () => {
    const route = getCurrentRouteWithoutLastPart();
    return route ? route : location.pathname;
  };

  const DDM = () => {
    const finalUrl = `${url.GET_STIREPORT}?Route=${getCurrentRoute()}`;
    const {data, error, loading}  = useFetch(finalUrl)
    console.log(data)

    // useEffect(() => {
    //   console.log(data);
    // }, []);

    return (
      <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
        <SimpleBar style={{ height: "230px" }}>
            {data?<>{JSON.stringify(data.value)}</>:<>loooodddd</>}

        </SimpleBar>
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
        {menu===true?<DDM/>:<></>}
      </Dropdown>
    </>
  );
};
export default StiDropDown2;
