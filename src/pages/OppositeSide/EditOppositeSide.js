import React, { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import * as url from '../../helpers/url_helper'
import { post, del, get, put } from "../../helpers/api_helper"
import { useParams } from 'react-router-dom';
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


//Import Breadcrumbnpm start
import Breadcrumbs from "../../components/Common/Breadcrumb"


//Loading Component
import Loading from "../../components/Common/Loading"
import { set } from "react-hook-form";


const EditOppositeSide = () => {
  const [Th, SetTh] = useState(null);
  const [Cities, SetCities] = useState(null);
  const { register, handleSubmit, control } = useForm({
    defaultValues: { name: "Davood" }
  });
  const onSubmit = data => console.log(data);

  const { id } = useParams();

  const getReactSelectDefault = async () => {
    // Works (when not `async`):
    return { value: "1", label: "User ID#1" };
  };


  const UserForm = ({ _th }) => {
    console.log(_th);

    const { register, handleSubmit, methods } = useForm({
      defaultValues: _th
    });

    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    };

  

    const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
      <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
          <option value="1">ghabl</option>
          <option value="1268">in 1268</option>
          <option value="1026">in 1026</option>

        </select>
      </>
    ));


    const default_value = 1; // you can replace with your default value
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} className="form-control" />
        <input {...register('famil')} className="form-control" />
        <input {...register('sh_Sh')} className="form-control" />
        <input {...register('namePedar')} className="form-control" />
        <input {...register('code_melli')} className="form-control" />
        <input {...register('iD_MahalTavalod')} className="form-control" />


        <Select label="iD_MahalTavalod" {...register("iD_MahalTavalod")} />

        <input type="submit" className="btn btn-primary" />
      </form>

    );
  }



  // ////////////////////////////////////////////////////
  useEffect(() => {
    get(`${url.FETCH_Tarafhesab_Detail}/${id}`)
      .then((response) => {
        console.log(response.value)
        SetTh(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        console.log(response.value)
        SetCities(response.value)
      }, (error) => {
        console.error(error);
      });
  }, []);


  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="عنوان" breadcrumbItem="ویرایش طرف حساب ها" />
        {Th && Cities ?
          <>
            <Card className="p-3">
              <p>{Th.name}</p>
              <p>{Th.famil}</p>
              <p> id : {id}</p>
              <UserForm _th={Th} />
            </Card>
          </>
          : <Loading />}
      </div>
    </React.Fragment>
  )



}

export default EditOppositeSide