import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import * as url from '../../helpers/url_helper'
import { post, del, get, put } from "../../helpers/api_helper"
import { useParams } from 'react-router-dom';
import DatePicker from '../../components/Common/DatePicker';
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Loading from "../../components/Common/Loading"
import Select from "react-select";
import {Card,} from "reactstrap"
import NormalDropDown from "../../components/Common/NormalDropDown";


const EditOppositeSide = () => {
  const [Th, SetTh] = useState(null);
  const [Cities, SetCities] = useState(null);
  const { id } = useParams();

  const ThForm = ({ _th }) => {
    const iidd = _th.id;
    const { register, handleSubmit, methods, control } = useForm({
      defaultValues: _th
    });
    const onSubmit = (data) => {
      console.log(data);
    };

    const [selectedGroup, setselectedGroup] = useState(null);
    function handleSelectGroup(selectedGroup) {
      setselectedGroup(selectedGroup);
    }
    const optionGroup = [
      {
        options: Cities,
      }
    ];


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

    <NormalDropDown  className="form-control" {...register("iD_MahalSodoor")}  dataSource = {Cities} />

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
              <ThForm _th={Th} />
            </Card>
          </>
          : <Loading />}
      </div>
    </React.Fragment>
  )
}

export default EditOppositeSide