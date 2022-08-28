import React, { useState, useEffect } from "react"
import options from "pages/StiReport/StiDesignerOption"
import { useParams, useLocation } from 'react-router-dom';
import Breadcrumbs from "components/Common/Breadcrumb"

const Design = () => {
    const location = useLocation();
    const Stimulsoft = window.Stimulsoft || {};
    var data = {}
    var JsonRep = {}
    var route = ""

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
        var designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);
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

        designer.onSaveReport = function (args) {
            var jsonReport = args.report.saveToJsonString();
            localStorage.setItem("rep", jsonReport)
        }
        //designer.jsObject.options.buttons.resizeDesigner.style.display = "none";s
    }, []);


    return (
        <>
        <style>{".ltr{direction: ltr;}"}</style>
            <React.Fragment>
                <div className="page-content">
                    
                    <div className="ltr"
                id="designer"></div>
                </div>
            </React.Fragment>
            
          
        </>
    )
}


export default Design