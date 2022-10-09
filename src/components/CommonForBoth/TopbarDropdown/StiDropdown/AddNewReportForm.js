import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
  Media,
  Label,
} from "reactstrap";
import { url, api, str } from "common/imports";
import Error from "components/Common/Error";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";

export const AddNewReportForm = (props) => {
  const [IsLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    reportName: Yup.string().required().min(4),
    description: Yup.string().max(70),
  });
  const {
    register,
    handleSubmit,
    methods,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    const obj = {
      reportName: data.reportName,
      description: data.description,
      route: props.route,
      jsonData: "",
    };

    api.post(url.POST_STIREPORT, obj).then(
      (response) => {
        setIsLoading(false);
        console.log(response);
        if (response && response.statusCode === 200) {
          alert(response.message);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <div className="mb-3">
            <Label>{str.REPORTS.REPORT_NAME}</Label>
            <input {...register("reportName")} className="form-control" />
            <div className="text-danger">{errors.reportName?.message}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <Label>{str.PUBLIC.DESCRIPTION}</Label>
            <input
              {...register("description", { maxLength: 100 })}
              className="form-control"
            />
            <div className="text-danger">{errors.description?.message}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <Label>{str.REPORTS.REPORT_PATH}</Label>
            <input
              className="form-control"
              value={props.route}
              disabled={true}
            />
          </div>
        </Col>
      </Row>
      {IsLoading ? (
        <button
          disabled={true}
          className="btn btn-primary waves-effect waves-light"
        >
          {str.PUBLIC.CONFIRM}{" "}
          <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>
        </button>
      ) : (
        <input
          type="submit"
          className="btn btn-primary"
          value={str.PUBLIC.CONFIRM}
        />
      )}
    </form>
    );
};

export default AddNewReportForm;
