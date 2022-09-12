import React, { useState, useEffect } from "react"
import { Link, Route, useHistory } from "react-router-dom"
import { post, del, get, put } from "helpers/api_helper"
import * as url from 'helpers/url_helper'

const Report = ({ data ,route}) => {
    const history = useHistory();
    const Stimulsoft = window.Stimulsoft || {};
    useEffect(() => {

        const Options = new Stimulsoft.Viewer.StiViewerOptions();        
        //Options.width = "1000px";
        //Options.height = "1000px";
        
        //appearance
        Options.appearance.reportDisplayMode = Stimulsoft.Report.Export.StiHtmlExportMode.Div;
        Options.appearance.scrollbarsMode = true;
        Options.appearance.showTooltips = false;
        Options.appearance.fullScreenMode = true;
        Options.appearance.pageAlignment = Stimulsoft.Viewer.StiContentAlignment.right
        //Options.appearance.backgroundColor = "#ffffff";
        //Options.appearance.pageBorderColor = Stimulsoft.System.Drawing.Color.transparent;
        //Options.appearance.rightToLeft = false;
        
        //toolbar
        Options.toolbar.visible = true
        Options.toolbar.fontFamily = "IRANSansWeb"
        Options.toolbar.showAboutButton = false;
        Options.toolbar.showDesignButton = true;
        Options.toolbar.alignment = Stimulsoft.Viewer.StiContentAlignment.Center;
        Options.toolbar.showButtonCaptions = true
        Options.toolbar.viewMode = Stimulsoft.Viewer.StiWebViewMode.Continuous
        // Options.toolbar.showPrintButton = false;
        // Options.toolbar.backgroundColor = Stimulsoft.System.Drawing.Color.transparent;
        // Options.toolbar.borderColor = Stimulsoft.System.Drawing.Color.black;
        // Options.toolbar.fontColor = Stimulsoft.System.Drawing.Color.pink;



        const viewer = new Stimulsoft.Viewer.StiViewer(Options, "content_viewer", false);
        const dsDataSource = new Stimulsoft.System.Data.DataSet();
        const report = new Stimulsoft.Report.StiReport();
  





        // report.loadFile("/reports/crossTabTest2.mrt");
        // var JsonRep= localStorage.getItem("rep")

        var FinalUrl = `${url.GET_STIREPORT}?Route=${route}`

        var JsonRep = ""
        get(FinalUrl )
        .then((response) => {

            JsonRep = response.value[1].jsonData

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
                state: {data:data,
                        route:route,
                        JsonRep:report.saveToJsonString()}
              })
            }
    }, []);
    return (
        <div id="report">
        </div>
    )
}


export default Report