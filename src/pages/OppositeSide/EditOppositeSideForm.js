import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import DatePicker from '../../components/Common/DatePicker';
import Select from "react-select";
import { Card, } from "reactstrap"
import NormalDropDown from "../../components/Common/NormalDropDown";

const ThForm = (props) => {
    const { register, handleSubmit, methods, control,watch } = useForm({
      defaultValues: props.Th
    });
    const onSubmit = (data) => {
      //typeof() result => array,object,null,number,string
      if(typeof(data.iD_MahalTavalod) == 'object'){
        data.iD_MahalTavalod = data.iD_MahalTavalod.id;
      }
      console.log(data)
    };

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
            field: { onChange , onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <Select
              onBlur={onBlur} // notify when input is touched
              onChange={onChange } // send value to hook form
              inputRef={ref}
              name={name}
              options={props.Cities}
              defaultValue = {props.Cities.filter((item) => item.id === props.Th.iD_MahalTavalod)[0]}
            />
          )}
        />

        <NormalDropDown className="form-control" {...register("iD_MahalSodoor")} dataSource={props.Cities} />
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }


  export default ThForm;