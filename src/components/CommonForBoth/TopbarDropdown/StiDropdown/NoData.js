import React, { useState, useEffect } from "react";
import { api, url, str, toast } from "common/imports";
import noData from "assets/images/reports/no-data.png";

export const NoData = () => {
  return (
    <div className="text-center p-3">
      <div className="img">
        <img src={noData} style={{ height: "60px", width: "60px" }} />
      </div>
      <h6 className="mb-4 mt-5">{str.REPORTS.NO_REPORT} </h6>
    </div>
  );
};
