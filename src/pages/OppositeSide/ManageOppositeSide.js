import React, { useState, useEffect } from "react"
import Loading from "../../components/Common/Loading"
import DatePicker from "../../components/Common/DatePicker"
import MaterialInput from "@material-ui/core/Input"
//import { useForm } from "react-hook-form";
import {
  Col,
  Row,
  Spinner,
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
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
  Input,
  Label,
  Alert,
} from "reactstrap"
import Select from "react-select";
import InputMask from "react-input-mask"
import * as Strings from "../../common/Strings"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Breadcrumbs from "../../components/Common/Breadcrumb"
import GridView from "../../components/Grid/GridView"
import * as url from '../../helpers/url_helper'
import * as defaultOptions from "../../components/Grid/defaultOptions"
import { post, del, get, put } from "../../helpers/api_helper"


let CityList = [];

const TotalValueRenderer = (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const [modal, setmodal] = useState(false)
  const [Isloading, setIsloading] = useState(false)
  const [tarafHesab, settarafHesab] = useState({})
  //const [IdMahalTavallod, SetIdMahalTavallod] = useState(0)
  //const { register, handleSubmit, reset, watch,setValue, formState: { errors } } = useForm();
  //const options = [{ label: "نا مشخص", value: "0", }, { label: "1941-", value: "1941", }, { label: "34-", value: "34", }, { label: "2546-", value: "2546", }, { label: "1-", value: "1", },];

  ///////////////////////// Btn _Click /////////////////////////
  const BtnEditClick = () => {
    setIsloading(true)
    setmodal(!modal);
    console.log("Request Sended")
    post(`${url.FETCH_Tarafhesab_Detail}/${props.data.id}`)
      .then((response) => {
        setIsloading(false)
        console.log("response received")

        settarafHesab(response);
      }, (error) => {
        console.error(error);
      });
  };
  /////////////////////////////////////////////////////////////



  const BtnDeleteClick = () => { }

  const handleChange = (e) => {
    let th = { ...tarafHesab }
    th.iD_MahalTavalod = e.target.value
    settarafHesab(th)
  }
  const birthDayChange = (e, props) => {
    const Th = { ...tarafHesab };
    const val = e.target.value.replace('/', '').replace('/', '')
    Th.birthDay = val
    settarafHesab(Th)
  }
  const handleSubmit = (e, data) => {
    //e.preventDefault();
    console.log('Submit data:', data);
  }

  const chng = (e) => {

    let th = { ...tarafHesab }
    th.iD_MahalTavalod = e.target.value
    settarafHesab(th)

  }



  const optionGroup = [
    { label: "Mustard", value: "1" },
    { label: "Ketchup", value: "2" },
    { label: "Relish", value: "3" },
  ];


  return (
    <div className="button-items">
      {/* <EditOppositeSide  Isloading={Isloading}  tarafHesab={tarafHesab} modal={modal} toggle={() => { setmodal(!modal) }} /> */}

      <Button
        onClick={BtnEditClick}
        color="info"
        className="btn btn-info waves-effect waves-light"
      >
        <i className="fa fa-edit"></i>
      </Button>{" "}
      <Button
        onClick={BtnDeleteClick}
        color="danger"
        className="btn btn-danger waves-effect waves-light"
      >
        <i className="fa fa-times"></i>
      </Button>{" "}
    </div>
  );
};

const columns = [
  //buttons: ['reset','cancel']     =>   Filter Btn
  //debounceMs: 1000                => Delay to serach millisec
  //  { headerName: "شناسه", field: "id", filter: "agNumberColumnFilter", valueFormatter: defaultOptions.currencyFormatter },
  { minWidth: 200, cellRenderer: TotalValueRenderer },
  { headerName: "شناسه", field: "id", filter: "agNumberColumnFilter" },
  { headerName: "نام", field: "name", filter: "agTextColumnFilter" },
  { headerName: "نام خانوادگی", field: "famil", filter: "agTextColumnFilter" },
  { headerName: "ش-شناسنامه", field: "sh_sh", filter: "agNumberColumnFilter", hide: false },
  { headerName: "کد ملی", field: 'code_melli', filter: "agTextColumnFilter", maxWidth: 150 },
  { headerName: "کد اقتصادی", field: 'code_Eghtesadi', filter: "agTextColumnFilter", minWidth: 150 },
  { headerName: "نام پدر", field: 'namePedar', filter: "agTextColumnFilter", rowGroup: false },
]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ManageOppositeSide = () => {

  const [Isloading, SetIsloading] = useState(true)
  useEffect(() => {
    get(url.GET_CITY)
      .then((response) => {
        SetIsloading(false)
        console.log("url.GET_CITY received", response)
        CityList = response
        // const transformed = response.map(({ id, code, value }) => ({ label: value, value: id, code: code ,id:id}));
        // CityList = transformed
      }, (error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="طرف حساب ها" breadcrumbItem="مدیریت طرف حساب ها" />
        {Isloading == true
          ? <Loading />
          : <>
            <Card className="p-3">
              <p>این یک صفحه خالی است</p>
            </Card>
            <Card className="p-1">
              <GridView Url={url.FETCH_Tarafhesab} Columns={columns} />
            </Card>
          </>}
      </div>
    </React.Fragment>
  )
}
export default ManageOppositeSide