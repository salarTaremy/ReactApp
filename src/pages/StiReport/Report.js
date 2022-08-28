import React, { useState, useEffect } from "react"
import options from "./StiViewerOption";
import { Link, Route, useHistory } from "react-router-dom"

const Report = ({ data ,route}) => {
    const history = useHistory();
    const Stimulsoft = window.Stimulsoft || {};
    useEffect(() => {
        const viewer = new Stimulsoft.Viewer.StiViewer(options, "content_viewer", false);
        const dsDataSource = new Stimulsoft.System.Data.DataSet();
        const report = new Stimulsoft.Report.StiReport();

        //report.loadFile("/reports/crossTabTest2.mrt");
        var JsonRep= localStorage.getItem("rep")
        report.load( JsonRep);
        viewer.renderHtml("report");

        dsDataSource.readJson(data);
        report.regData("DataSource", null, dsDataSource);
        viewer.report = report;

        viewer.onDesignReport = function (args) {
            history.push({
                pathname: '/Design',
                search: '?Reportid=1',
                state: { data:data,route:route,JsonRep:report.saveToJsonString() }
              })
            }

    }, []);
    return (
        <div id="report">
        </div>
    )
}


export default Report