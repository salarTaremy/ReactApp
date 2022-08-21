import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'components/Common/DatePicker';
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
import NormalDropDown from "components/Common/NormalDropDown";
import Error from "components/Common/Error";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    default: 'مقدار نا معتبر',
    required: 'این فیلد الزامی میباشد',
    typeError: 'نوع ورودی نا معتبر است ... ... ...',
  },
  number: {
    min: 'این فیلد نباید از ${min} کوچکتر باشد',
    max: 'این فیلد نباید از ${max} تجاوز کند',
    positive: 'عدد باید بزرگتر از صفر باشد',

  },
  string: {
    min: 'تعداد ارقام این فیلد نباید از ${min} کاراکتر کمتر باشد',
    max: 'تعداد ارقام این فیلد نباید از ${max} کاراکتر تجاوز کند',
  }
});

const ThForm = (props) => {
  const textColor = "text-secondary"
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required(),
    sh_Sh: Yup.number()
      .min(5)
      .max(10)
      //.positive()
      .typeError('فقط مجاز به ورود اعداد هستید')
      .required('ش ش اجباری'),
    code_melli: Yup.string()
      .min(10)
      .max(10)
      .nullable(false)
      .required('کد ملی الزامی است'),
    title: Yup.string()
      .required('Title is required'),
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    dob: Yup.string()
      .required('Date of Birth is required')
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'Accept Ts & Cs is required')
  });

  const { register, handleSubmit, methods, control, watch, formState: { errors } } = useForm({
    defaultValues: props.Th,
    resolver: yupResolver(validationSchema)
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
                      <Label >نام</Label>
                      <input {...register("name", { required: true, maxLength: 70, minLength: 1 })} className="form-control" />
                      {/* <Error Err={errors?.name}></Error> */}
                      <div className="text-warning">{errors.name?.message}</div>
                      {/* Dont Clear this comment : */}
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
                      <div className="text-warning">{errors.sh_Sh?.message}</div>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="mb-3">
                      <Label>کد ملی</Label>
                      <input {...register('code_melli', { required: true, minLength: 10, maxLength: 10 })} className="form-control" />
                      <Error Err={errors?.code_melli}></Error>
                      <div className="text-warning">{errors.code_melli?.message}</div>
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