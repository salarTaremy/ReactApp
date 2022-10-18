import React from "react";
import { url, api, str } from "common/imports";

import { useState, useEffect } from "react";

import { Card } from "reactstrap";

//Import Breadcrumbnpm start
import Breadcrumbs from "../../components/Common/Breadcrumb";
import GridView from "../../components/Grid/GridView";

const Test = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="تست" breadcrumbItem="گرید تست" />
        <Card className="p-1">
          <TestBase Nm={"A"} />
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Test;

const TestBase = ({ Nm }) => {
  const [data, setdata] = useState({ a: 1, b: 2, c: 3, d: 4 });
  const [data2, setdata2] = useState(1);

  useEffect(() => {
    console.log("Every render");
  });

  useEffect(() => {
    console.log(" First");
  }, []);

  useEffect(() => {
    console.log("chenged   1");
  }, [data]);

  useEffect(() => {
    console.log("chenged data2");
  }, [data2]);

  return (
    <>
      <button
        onClick={() => {
          setdata({ a: 11, b: 22, c: 33, d: 44 });
        }}
      >
        Data1
      </button>
      <button
        onClick={() => {
          setdata2(2);
        }}
      >
        {" "}
        Data 2{" "}
      </button>
      <p>{data.a}</p>
      <p>{data.b}</p>
      <p>{data.c}</p>
      <p>{data.d}</p>
    </>
  );
};
