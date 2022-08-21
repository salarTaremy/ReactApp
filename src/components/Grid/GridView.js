
// Befor use install :  npm i ag-grid-enterprise
import React, { useState, useRef } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-enterprise';
import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css';
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-material.css';
import { AG_GRID_LOCALE_FA } from "./agLocalFa";
import *  as defaultOptions from "./defaultOptions"
import { LicenseManager } from "ag-grid-enterprise";
import { post, del, get, put } from "../../helpers/api_helper"

LicenseManager.setLicenseKey("DownloadDevTools_COM_NDEwMjM0NTgwMDAwMA==59158b5225400879a12a96634544f5b6");

const GridView = (props) => {

  const gridOptions= {...defaultOptions.gridOptions}
  const rowCount= defaultOptions.rowCount
  var IsFiterChanged = false;
  const grid = useRef(null);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const Token = JSON.parse(localStorage.getItem("authUser")).token
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    params.api.setServerSideDatasource(datasource);
  };
  const onFilterChanged = (params) => {
    IsFiterChanged = true;
  };
  gridOptions.onGridReady = onGridReady
  gridOptions.onFilterChanged = onFilterChanged

  const datasource = {
    getRows(params) {
      if (IsFiterChanged == true) {
        IsFiterChanged = false;
        params.request.startRow = 0;
        params.request.endRow = rowCount;
      }
      //let url = `${props.Url}`
      //const data = JSON.stringify(params.request, null, 1)
      const data = params.request

      console.log(JSON.stringify(params.request, null, 1))
      ///////////////////////////
      var salar =  JSON.stringify(params.request,null, 1);
      //////////////////////////

      post(props.Url  ,data).then((response) => {
        console.log (response)
        var lastRow = 0;
        if (response.value.length > 0) {
          
          //gridOptions.api.setColumnDefs(response.columns)     //For Server Side Cols
          gridOptions.api.setColumnDefs(props.Columns)       //For Client Side Cols
          lastRow = parseInt(response.value[0].lastRow);
          console.log("lastRow",lastRow)
        }
        params.request.startRow = 0;
        params.successCallback(response.value, lastRow);
      }, (error) => {
          console.error(error);
          params.failCallback();
      });
    }
  };


  // const themeName = 'ag-theme-alpine-dark';
  // const themeName = 'ag-theme-balham-dark';
  //const themeName = 'ag-theme-material';

  return (
    <div 
      //id="myGrid"
      style={{
        height: '510px',
        width: '100%',
      }}
      className="ag-theme-alpine-dark" >
      <AgGridReact  
          cacheBlockSize={rowCount}
          //enablegrouping={true}
          //serverSideFilteringAlwaysResets = {true}
          localeText={AG_GRID_LOCALE_FA}
          ref={grid}
          popupParent={document.body}
          enableRangeSelection={true}
          enableCharts={true}
          gridOptions={gridOptions}>
      </AgGridReact>
    </div>

  );
};

export default GridView;


