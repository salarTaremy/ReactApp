import React, { useState, useEffect } from "react";
import { Spinner} from "reactstrap";

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
