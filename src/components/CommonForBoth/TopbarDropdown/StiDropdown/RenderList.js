import { Link } from "react-router-dom"
const RenderList = (props) => {
    return (
        props.Rep.Reports.map((item, i) =>
            <div key={i}>
                <Link onClick={props.onClick}
                    className="text-reset notification-item">
                    <div className="d-flex align-items-start">
                        <div className="avatar-xs me-3">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                                <i className="bx bxs-report"></i>
                            </span>
                        </div>
                        <div className="flex-1">
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
                        </div>
                    </div>
                </Link>
            </div>
        ))}

export default RenderList