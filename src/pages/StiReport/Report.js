import React, { useState, useEffect } from "react"
import Options from "./StiViewerOption";
import { Link, Route, useHistory } from "react-router-dom"
import { post, del, get, put } from "helpers/api_helper"
import * as url from 'helpers/url_helper'

const Report = ({ data ,route}) => {
    const history = useHistory();
    const Stimulsoft = window.Stimulsoft || {};
    useEffect(() => {
        const viewer = new Stimulsoft.Viewer.StiViewer(Options, "content_viewer", false);
        const dsDataSource = new Stimulsoft.System.Data.DataSet();
        const report = new Stimulsoft.Report.StiReport();
  


        //report.loadFile("/reports/crossTabTest2.mrt");
        //var JsonRep= localStorage.getItem("rep")
        var JsonRep = ""
        get(url.GET_STIREPORT )
        .then((response) => {
            JsonRep = response.value.jsonData
            console.log (response.value)
            console.log (response.value.jsonData)


            report.load( JsonRep);
            viewer.renderHtml("report");
    
            dsDataSource.readJson(data);
            report.regData("DataSource", null, dsDataSource);
            viewer.report = report;




          }, (error) => {
              console.error(error);
          });




 

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