import React, { useState, useEffect } from "react"
import options from "pages/StiReport/StiDesignerOption"

const Designer = ({ data ,route}) => {
  const Stimulsoft = window.Stimulsoft || {};
  useEffect(() => {

    const dsDataSource = new Stimulsoft.System.Data.DataSet("DsName");

    var designer = new Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);
    var report = new Stimulsoft.Report.StiReport();
    report.reportName = "MyNewReport";

    //report.loadFile("/reports/crossTabTest2.mrt");
    // var JsonRep= localStorage.getItem("rep")
    // report.load( JsonRep);

    dsDataSource.readJson(data);
    report.dictionary.clear();
    report.regData("DataSource", 'MainData', dsDataSource);
    report.dictionary.synchronize();
    designer.report = report;
    designer.renderHtml("designer");
    designer.onSaveReport = function (args) {
      //var a = args.report.SaveToString();
      var b = args.report.saveToJsonString();
      localStorage.setItem("rep", b)
    }

    //designer.jsObject.options.buttons.resizeDesigner.style.display = "none";s
  }, []);


  return (
    <>
      <style>{".ltr{direction: ltr;}"}</style>
      <div className="ltr"
        id="designer"></div>
    </>
  )
}


export default Designer