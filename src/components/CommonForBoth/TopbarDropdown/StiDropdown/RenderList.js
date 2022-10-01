import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
const RenderList = (props) => {
    const history = useHistory();
    return (
        props.Rep.Reports.map((item, i) =>
            <div key={item.id}>
                <div
                    //to={`/ShowReport/${item.id}`}
                    //onClick={()=>{history.push(`/ShowReport/${item.id}`)}}
                    className="text-reset notification-item">
                    <div className="d-flex align-items-start">
                        <div className="avatar-xs me-3">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                <i className="bx bxs-report"></i>
                            </span>
                        </div>
                        <Link to={`/ShowReport/${item.id}`}
                            className="flex-1">
                            <h6 className="mt-0 mb-1">
                                {item.ReportName}
                            </h6>
                            <div className="font-size-12 text-muted">
                                <p className="mb-1">
                                    {item.Description}
                                </p>
                                <p className="mb-0">
                                    <i className="mdi mdi-clock-outline" />
                                    {item.CreateDate}
                                </p>
                            </div>
                        </Link>
                        <div className="col-auto">
                            <button className="small btn-rounded waves-effect btn btn-link  text-danger"
                            value={item.id}
                            onClick={(e) => props.OnDeleteClick(e)}
                            >
                                <i className="bx bx-error-alt font-size-16 align-middle me-2"></i>
                                حدف
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
}

export default RenderList