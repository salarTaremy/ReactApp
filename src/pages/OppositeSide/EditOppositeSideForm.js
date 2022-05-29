import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import DatePicker from '../../components/Common/DatePicker';
import Select from "react-select";
import { Card, } from "reactstrap"
import NormalDropDown from "../../components/Common/NormalDropDown";

const ThForm = (props) => {
    const [Th,SetTh] = useState({...props.Th})
    const { register, handleSubmit, methods, control,watch } = useForm({
      defaultValues: Th
    });
    const onSubmit = (data) => {
      console.log(data.iD_MahalTavalod);
    };
    const optionGroup = [{options: props.Cities}];
    const [CurentValue,SetCurentValue] = useState(optionGroup[0].options.filter((item) => item.id === Th.iD_MahalTavalod)[0])


    //console.log(watch("iD_MahalTavalod"));
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
              options={optionGroup}
              //value={value}
              //value={optionGroup[0].options[2]}
              value={CurentValue}
            />
          )}
        />

        <NormalDropDown className="form-control" {...register("iD_MahalSodoor")} dataSource={props.Cities} />
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }


  export default ThForm;