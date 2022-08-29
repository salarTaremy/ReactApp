import React, { useState, useEffect } from "react"
import Options from "pages/StiReport/StiDesignerOption"
import { useParams, useLocation } from 'react-router-dom';
import Breadcrumbs from "components/Common/Breadcrumb"
import { post, del, get, put } from "helpers/api_helper"
import * as url from 'helpers/url_helper'

const Design = () => {
    const location = useLocation();
    const Stimulsoft = window.Stimulsoft || {};
    var data = {}
    var JsonRep = {}
    var route = ""



    const onSaveReport = (args) =>{
        var jsonReport = args.report.saveToJsonString();
        var obj = JSON.parse(jsonReport)
        obj.Route = route
        //const obj = [...d, {"route": route}]

        post(url.POST_STIREPORT,obj)
        .then((response) => {
            console.log (response)
          }, (error) => {
              console.error(error);
          });

    }

    useEffect(() => {
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.search); // result: '?query=abc'
        console.log(location.state); // result: 'some_value'
        data = location.state.data
        JsonRep = location.state.JsonRep
        route = location.state.route
    }, [location]);

    useEffect(() => {
        const dsDataSource = new Stimulsoft.System.Data.DataSet("DsName");
        var designer = new Stimulsoft.Designer.StiDesigner(Options, 'StiDesigner', false);
        var report = new Stimulsoft.Report.StiReport();
        //report.reportName = "MyNewReport";
        //report.loadFile("/reports/crossTabTest2.mrt");
        // var JsonRep= localStorage.getItem("rep")
        report.load(JsonRep);
        dsDataSource.readJson(data);
        report.dictionary.clear();
        report.regData("DataSource", 'MainData', dsDataSource);
        report.dictionary.synchronize();
        designer.report = report;
        designer.renderHtml("designer");

        designer.onSaveReport = onSaveReport
        //designer.jsObject.options.buttons.resizeDesigner.style.display = "none";s
    }, []);


    return (
        <>
        <style>{".ltr{direction: ltr;}"}</style>

                <div className="page-content">
                    
                    <div className="ltr"
                id="designer"></div>
                </div>
  
            
          
        </>
    )
}


export default Design