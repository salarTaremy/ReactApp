import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {Button } from "reactstrap";
import { api, url, str, toast } from "common/imports";
import { useDel, useFetch, usePost } from "helpers/api_helper";
import { StiLoading } from "./StiLoading";
import { NoData } from "./NoData";

const MenuItems = (props) => {
  const [it, setIt] = useState([]);
  const [response, error, loading, doFetch] = useDel();

  useEffect(() => {
    const Tmp = [];
    [...props.LST].map((item, i) => {
      const obj = JSON.parse(item);
      obj.ChkForDelete = false;
      Tmp.push(obj);
    });
    setIt([...Tmp]);
  }, []);

  const ChengeChk = (e) => {
    const tmp = [...it];
    const id = e.target.value;
    const index = tmp.findIndex((x) => x.id == id);
    tmp.forEach((x) => {
      x.ChkForDelete = false;
    });
    tmp[index].ChkForDelete = true;
    setIt([...tmp]);
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
      tmp.splice(index, 1)
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
    return <NoData />;
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
            <Link
              //target='_blank'
              to={`/ShowReport/${item.id}`}
              className="flex-1"
            >
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

export { MenuItems };
