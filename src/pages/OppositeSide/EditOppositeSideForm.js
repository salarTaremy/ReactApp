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
  CardTitle,
  CardSubtitle,
  Label,
  Input
} from "reactstrap"
import NormalDropDown from "../../components/Common/NormalDropDown";

const ThForm = (props) => {
  const textColor = "text-secondary"
  const { register, handleSubmit, methods, control, watch } = useForm({
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
                جهت اصلاح طرف حسابهایی که قبلا ایجاد کرده اید از این فرم استفاده کنید.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">نام</Label>
                      <input {...register('name')} className="form-control" />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">نام خانوادگی</Label>
                      <input {...register('famil')} className="form-control" />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">نام پدر</Label>
                      <input {...register('namePedar')} className="form-control" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">شماره شناسنامه</Label>
                      <input {...register('sh_Sh')} className="form-control" />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">کد ملی</Label>
                      <input {...register('code_melli')} className="form-control" />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">کد اقتصادی</Label>
                      <input {...register('code_Eghtesadi')} className="form-control" />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col md="3">
                    <div className="mb-3">
                      <Label htmlFor="validationCustom01">تاریخ تولد</Label>
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
                      <Label htmlFor="validationCustom01">تاریخ صدور شناسنامه</Label>
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
                      <Label htmlFor="validationCustom01">محل تولد</Label>
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
                      <Label htmlFor="validationCustom01">محل صدور</Label>
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
                      <Label htmlFor="validationCustom01">توضیحات</Label>
                      <textarea {...register('description')} className="form-control" />
                    </div>
                  </Col>
                </Row>
                <input type="submit" className="btn btn-primary"  value="تایید و ذخیره"/>
              </form>
            </CardBody>
          </Card>
        </Col>

      </Row>



    </>
  );
}


export default ThForm;