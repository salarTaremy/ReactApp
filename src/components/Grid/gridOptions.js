import {defaultColDef} from "./defaultColDef"
import {rowCount} from "./defaultValues"
export const gridOptions = {
    //Propertes
    //rowData: myRowData,
    //domLayout:'autoHeight',
    enableRtl: true,
    //rowGroupPanelShow: 'always', // => Must set rowGroup to True In columns
    //columnDefs: columns,
    //pagination: true,
    paginationPageSize: rowCount,
    //cacheBlockSize = rowCount,      //=> (Partial Store only) How many rows for each block in the store, i.e. how many rows returned from the server at a time.Default is 100
    paginationAutoPageSize:true,     //=>   این بدان معناست که تعداد ردیف های نمایش داده شده به طور خودکار بر روی تعداد ردیف های متناسب با پیمایش عمودی تنظیم می شود.
    rowSelection: 'single',
    animateRows: true,
    serverSideStoreType: 'partial',
    rowModelType: 'serverSide',
    defaultColDef: defaultColDef,
    // EVENTS
    //onGridReady: onGridReady,
    // onRowClicked: event => console.log('A row was clicked'),
    // onColumnResized: event => console.log('A column was resized'),
    // onSortChanged: event => console.log('sort Changed'),
    // onFilterChanged: event => console.log('Filter Changed '),
    //onFilterChanged: onFilterChanged,
    // CALLBACKS
    //isScrollLag: () => false
  }