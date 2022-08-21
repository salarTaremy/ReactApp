import { Link, Route, useHistory } from "react-router-dom"
import { Button } from "reactstrap"
import * as url from '../../helpers/url_helper'


//OPPOSITE_SIDE
const Cell_Buttons = (props) => {
    const history = useHistory();
    const BtnEditClick = () => {
        const id = props.data.id;
        history.push(url.OPPOSITE_SIDE_DETAIL + "/" + id);
    };
    const BtnDeleteClick = () => { }
    return (
        <div className="button-items">
            <Button onClick={BtnEditClick}
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
            <Link to={url.OPPOSITE_SIDE_DETAIL + "/" + props.data.id}   >{props.data.id} </Link>
        </div>
    );
};

const Cell_ID = (props) => {
    return <Link to={url.OPPOSITE_SIDE_DETAIL + "/" + props.data.id}  > {props.data.id} </Link>
}

const OPPOSITE_SIDE_COLUMNS = [
    //buttons: ['reset','cancel']     =>   Filter Btn
    //debounceMs: 1000                => Delay to serach millisec
    //  { headerName: "شناسه", field: "id", filter: "agNumberColumnFilter", valueFormatter: defaultOptions.currencyFormatter },
    { minWidth: 200, cellRenderer: Cell_Buttons },
    { headerName: "شناسه", field: "id", filter: "agNumberColumnFilter", cellRenderer: Cell_ID },
    { headerName: "نام", field: "name", filter: "agTextColumnFilter" },
    { headerName: "نام خانوادگی", field: "famil", filter: "agTextColumnFilter" },
    { headerName: "ش-شناسنامه", field: "sh_sh", filter: "agNumberColumnFilter", hide: false },
    { headerName: "کد ملی", field: 'code_melli', filter: "agTextColumnFilter", maxWidth: 150 },
    { headerName: "کد اقتصادی", field: 'code_Eghtesadi', filter: "agTextColumnFilter", minWidth: 150 },
    { headerName: "نام پدر", field: 'namePedar', filter: "agTextColumnFilter", rowGroup: false },
]






//Exports 
export { OPPOSITE_SIDE_COLUMNS }