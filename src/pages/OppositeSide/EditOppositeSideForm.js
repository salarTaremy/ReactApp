import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import DatePicker from '../../components/Common/DatePicker';
import Select from "react-select";
import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  Spinner,
  CardTitle,
  CardSubtitle,
  Label,
  Input
} from "reactstrap"
import NormalDropDown from "../../components/Common/NormalDropDown";
import Error from "../../components/Common/Error";
import { MDBListGroup } from "mdbreact";

const ThForm = (props) => {
  const textColor = "text-secondary"
  const { register, handleSubmit, methods, control, watch, formState: { errors } } = useForm({
    defaultValues: props.Th
  });
  const onSubmit = (data) => {
    //typeof() result => array,object,null,number,string
    if (typeof (data.iD_MahalTavalod) == 'object') {
      data.iD_MahalTavalod = data.iD_MahalTavalod.id;
    }
    console.log(data)
  };

  return (
    <>
      <Row>
        <Col >
          <Card>
            <CardBody>
              <h4 className="card-title">صرفا جهت ویرایش طرف حساب ها</h4>
              <p className="card-title-desc">
                جهت اصلاح طرف حساب هایی که قبلا ایجاد کرده اید از این فرم استفاده کنید.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>نام</Label>
                      <input {...register("name", { required: true, maxLength: 70, minLength: 1 })} className="form-control" />
                      <Error Err={errors?.name}></Error>
                      {/* {errors?.name?.type === 'required' && <Error Err ={errors?.name}  Msg="Msg" ></Error>} */}
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>نام خانوادگی</Label>
                      <input {...register('famil', { required: true, maxLength: 70 })} className="form-control" />
                      <Error Err={errors?.famil}></Error>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>نام پدر</Label>
                      <input {...register('namePedar', { maxLength: 70 })} className="form-control" />
                      <Error Err={errors?.namePedar}></Error>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>شماره شناسنامه</Label>
                      <input {...register('sh_Sh', { required: true, maxLength: 10 })} className="form-control" />
                      <Error Err={errors?.sh_Sh}></Error>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>کد ملی</Label>
                      <input {...register('code_melli', { required: true, minLength: 10, maxLength: 10 })} className="form-control" />
                      <Error Err={errors?.code_melli}></Error>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>کد اقتصادی</Label>
                      <input {...register('code_Eghtesadi', { maxLength: 50 })} className="form-control" />
                      <Error Err={errors?.code_Eghtesadi}></Error>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md="3">
                    <div className="mb-3">
                      <Label>تاریخ تولد</Label>
                      <Controller
                        control={control}
                        {...register('birthDay')}
                        render={({ field: { value, onChange } }) => (
                          <DatePicker
                            className="form-control"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="mb-3">
                      <Label>تاریخ صدور شناسنامه</Label>
                      <Controller
                        control={control}
                        {...register('sodoorDate')}
                        render={({ field: { value, onChange } }) => (
                          <DatePicker
                            className="form-control"
                            onChange={onChange}
                            value={value}
                          />
                        )}
                      />
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="mb-3">
                      <Label>محل تولد</Label>
                      <Controller
                        control={control}
                        className="form-control text-danger"
                        {...register('iD_MahalTavalod')}
                        render={({
                          field: { onChange, onBlur, value, name, ref },
                          fieldState: { invalid, isTouched, isDirty, error },
                          formState,
                        }) => (
                          <Select
                            classNamePrefix={`${textColor} select2-selection`}
                            onBlur={onBlur} // notify when input is touched
                            onChange={onChange} // send value to hook form
                            inputRef={ref}
                            name={name}
                            options={props.Cities}
                            defaultValue={props.Cities.filter((item) => item.id === props.Th.iD_MahalTavalod)[0]}
                          />
                        )}
                      />
                    </div>
                  </Col>
                  <Col md="3">
                    <div className="mb-3">
                      <Label>محل صدور</Label>
                      <NormalDropDown
                        className="form-control" {...register("iD_MahalSodoor")}
                        dataSource={props.Cities}
                      />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col >
                    <div className="mb-3">
                      <Label>توضیحات</Label>
                      <textarea {...register('description', { maxLength: 200 })} className="form-control" />
                      <Error Err={errors?.description}></Error>
                    </div>
                  </Col>
                </Row>
                <input type="submit" className="btn btn-primary" value="تایید و ذخیره" />

              </form>
            </CardBody>
          </Card>
        </Col>

      </Row>



    </>
  );
}


export default ThForm;