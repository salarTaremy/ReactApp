import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import * as url from '../../helpers/url_helper'
import { post, del, get, put } from "../../helpers/api_helper"
import { useParams } from 'react-router-dom';
import DatePicker from '../../components/Common/DatePicker';
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Loading from "../../components/Common/Loading"
import Select from "react-select";
import { intersectRanges } from "@fullcalendar/react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  CardGroup,
  Spinner,
} from "reactstrap"




const EditOppositeSide = () => {
  const [Th, SetTh] = useState(null);
  const [Cities, SetCities] = useState(null);
  const { id } = useParams();

  const UserForm = ({ _th }) => {
    const iidd = _th.id;
    const { register, handleSubmit, methods, control } = useForm({
      defaultValues: _th
    });
    const onSubmit = (data) => {
      console.log(data);
    };
    const Select2 = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
      <>
        <label>{label}</label>
        <select className="form-control" name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
          <option value="0">انتخاب کنید</option>
          {
            Cities.map((item) =>
              <option key={item.id} value={item.id} >{item.value}</option>
            )
          }
        </select>
      </>
    ));
    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
      setselectedGroup(selectedGroup);
    }
    const optionGroup = [
      {
        options: Cities,
      }
    ];
    console.log(_th.iD_MahalTavalod);
console.log(optionGroup[0].options.filter((item) => item.id === _th.iD_MahalTavalod)[0]);

    return (
      <form

        onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} className="form-control" />
        <input {...register('famil')} className="form-control" />
        <input {...register('sh_Sh')} className="form-control" />
        <input {...register('namePedar')} className="form-control" />
        <input {...register('code_melli')} className="form-control" />
        
        <Controller
          control={control}
          {...register('birthDay')}
          render={({ field: { value, onChange } }) => (
            <DatePicker className="form-control" onChange={onChange} value={value}></DatePicker>
          )}
        />

  
        <Controller
          control={control}
          {...register('iD_MahalTavalod')}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <Select
              onBlur={onBlur} // notify when input is touched
              onChange={onChange } // send value to hook form
              inputRef={ref}
              name={name}
              options={optionGroup}
              //value={value}
              //value={optionGroup[0].options[2]}
              value={optionGroup[0].options.filter((item) => item.id === _th.iD_MahalTavalod)[0]}
            />
          )}
        />

    <Select2 label="محل صدور" {...register("iD_MahalSodoor")} />

        <input type="submit" className="btn btn-primary" />
      </form>

    );
  }

  // ////////////////////////////////////////////////////
  useEffect(() => {
    get(`${url.FETCH_Tarafhesab_Detail}/${id}`)
      .then((response) => {
        //response.value.iD_MahalTavalo2 = response.value.iD_MahalTavalod
        SetTh(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        response.value.map((item) => {
          item.label = item.value;
        })
        SetCities(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  // ////////////////////////////////////////////////////
  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="ویرایش طرف حساب ها" />
        {Th && Cities ?
          <>
            <Card className="p-3">
              <UserForm _th={Th} />
            </Card>
          </>
          : <Loading />}
      </div>
    </React.Fragment>
  )
}

export default EditOppositeSide