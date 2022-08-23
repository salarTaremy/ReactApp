import React from 'react';

//Import Breadcrumbnpm start
import Breadcrumbs from "components/Common/Breadcrumb"

const Stimulsoft = window.Stimulsoft || {};


let data = {"roomTypeSummaryDtoList":[{"orgId":null,"roomType":"AAA","roomCount":83,"POINT":58,"RATE":0.6988,"avgRoomPrice":233.4,"RP":163.1,"roomFee":13537.32,"emptyRoomCount":57,"debitSummary":0.6867},{"orgId":null,"roomType":"BBB","roomCount":249,"POINT":247,"RATE":0.992,"avgRoomPrice":151.22,"RP":150.01,"roomFee":37352.19,"emptyRoomCount":246,"debitSummary":0.988},{"orgId":null,"roomType":"CCC","roomCount":1079,"POINT":1083,"RATE":1.0037,"avgRoomPrice":158.42,"RP":159.01,"roomFee":171568.56,"emptyRoomCount":1038,"debitSummary":0.962},{"orgId":null,"roomType":"DDD","roomCount":166,"POINT":88,"RATE":0.5301,"avgRoomPrice":225.82,"RP":119.71,"roomFee":19872.55,"emptyRoomCount":86,"debitSummary":0.5181},{"orgId":null,"roomType":"EEE","roomCount":1162,"POINT":831,"RATE":0.7151,"avgRoomPrice":195.01,"RP":139.46,"roomFee":162056.56,"emptyRoomCount":813,"debitSummary":0.6997},{"orgId":null,"roomType":"FFF","roomCount":1577,"POINT":1689,"RATE":1.071,"avgRoomPrice":165.62,"RP":177.38,"roomFee":279726.5,"emptyRoomCount":1443,"debitSummary":0.915},{"orgId":null,"roomType":"GGG","roomCount":664,"POINT":650,"RATE":0.9789,"avgRoomPrice":183.54,"RP":179.67,"roomFee":119301.57,"emptyRoomCount":646,"debitSummary":0.9729},{"orgId":null,"roomType":"HHH","roomCount":1411,"POINT":1488,"RATE":1.0546,"avgRoomPrice":152.56,"RP":160.88,"roomFee":227004.42,"emptyRoomCount":1403,"debitSummary":0.9943}],"channels":[{"rt":"AAA","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"},{"rt":"BBB","rc":83,"dc":"HC","dn":"HC","ic":"POINTPOINT","im":"POINT","v":"7.00"},{"rt":"CCC","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"},{"rt":"DDD","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"},{"rt":"EEE","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"},{"rt":"FFF","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"},{"rt":"GGG","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"},{"rt":"HHH","rc":83,"dc":"HC","dn":"HC","ic":"POINT","im":"POINT","v":"7.00"}],"customers":[{"rt":"AAA","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"BBB","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"CCC","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"DDD","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"EEE","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"FFF","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"GGG","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"HHH","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"III","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"},{"rt":"JJJ","rc":83,"dc":"AG","dn":"AG","ic":"POINT","im":"POINT","v":"32.00"}],"checkins":[{"rt":"AAA","rc":83,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"58.00"},{"rt":"AAA","rc":83,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"13537.32"},{"rt":"AAA","rc":83,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"233.40"},{"rt":"AAA","rc":83,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"69.88%"},{"rt":"AAA","rc":83,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"163.10"},{"rt":"BBB","rc":249,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"247.00"},{"rt":"BBB","rc":249,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"37352.19"},{"rt":"BBB","rc":249,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"151.22"},{"rt":"BBB","rc":249,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"99.20%"},{"rt":"BBB","rc":249,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"150.01"},{"rt":"CCC","rc":1079,"dc":"HO","dn":"HO","ic":"POINT","im":"POINT","v":"33.00"},{"rt":"CCC","rc":1079,"dc":"HO","dn":"HO","ic":"FEE","im":"FEE","v":"2000.30"},{"rt":"CCC","rc":1079,"dc":"HO","dn":"HO","ic":"AGR","im":"AGR","v":"60.62"},{"rt":"CCC","rc":1079,"dc":"HO","dn":"HO","ic":"RATE","im":"RATE","v":"3.06%"},{"rt":"CCC","rc":1079,"dc":"HO","dn":"HO","ic":"RP","im":"RP","v":"1.85"},{"rt":"CCC","rc":1079,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"1050.00"},{"rt":"CCC","rc":1079,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"169568.26"},{"rt":"CCC","rc":1079,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"161.49"},{"rt":"CCC","rc":1079,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"97.31%"},{"rt":"CCC","rc":1079,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"157.15"},{"rt":"DDD","rc":166,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"80.00"},{"rt":"DDD","rc":166,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"18512.55"},{"rt":"DDD","rc":166,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"231.41"},{"rt":"DDD","rc":166,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"48.19%"},{"rt":"DDD","rc":166,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"111.52"},{"rt":"DDD","rc":166,"dc":"TR","dn":"TR","ic":"POINT","im":"POINT","v":"8.00"},{"rt":"DDD","rc":166,"dc":"TR","dn":"TR","ic":"FEE","im":"FEE","v":"1360.00"},{"rt":"DDD","rc":166,"dc":"TR","dn":"TR","ic":"AGR","im":"AGR","v":"170.00"},{"rt":"DDD","rc":166,"dc":"TR","dn":"TR","ic":"RATE","im":"RATE","v":"4.82%"},{"rt":"DDD","rc":166,"dc":"TR","dn":"TR","ic":"RP","im":"RP","v":"8.19"},{"rt":"EEE","rc":1162,"dc":"HO","dn":"HO","ic":"POINT","im":"POINT","v":"13.00"},{"rt":"EEE","rc":1162,"dc":"HO","dn":"HO","ic":"FEE","im":"FEE","v":"854.10"},{"rt":"EEE","rc":1162,"dc":"HO","dn":"HO","ic":"AGR","im":"AGR","v":"65.70"},{"rt":"EEE","rc":1162,"dc":"HO","dn":"HO","ic":"RATE","im":"RATE","v":"1.12%"},{"rt":"EEE","rc":1162,"dc":"HO","dn":"HO","ic":"RP","im":"RP","v":"0.74"},{"rt":"EEE","rc":1162,"dc":"INT","dn":"INT","ic":"POINT","im":"POINT","v":"2.00"},{"rt":"EEE","rc":1162,"dc":"INT","dn":"INT","ic":"FEE","im":"FEE","v":"0.00"},{"rt":"EEE","rc":1162,"dc":"INT","dn":"INT","ic":"AGR","im":"AGR","v":"0.00"},{"rt":"EEE","rc":1162,"dc":"INT","dn":"INT","ic":"RATE","im":"RATE","v":"0.17%"},{"rt":"EEE","rc":1162,"dc":"INT","dn":"INT","ic":"RP","im":"RP","v":"0.00"},{"rt":"EEE","rc":1162,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"759.00"},{"rt":"EEE","rc":1162,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"151172.46"},{"rt":"EEE","rc":1162,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"199.17"},{"rt":"EEE","rc":1162,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"65.32%"},{"rt":"EEE","rc":1162,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"130.10"},{"rt":"EEE","rc":1162,"dc":"TR","dn":"TR","ic":"POINT","im":"POINT","v":"59.00"},{"rt":"EEE","rc":1162,"dc":"TR","dn":"TR","ic":"FEE","im":"FEE","v":"10030.00"},{"rt":"EEE","rc":1162,"dc":"TR","dn":"TR","ic":"AGR","im":"AGR","v":"170.00"},{"rt":"EEE","rc":1162,"dc":"TR","dn":"TR","ic":"RATE","im":"RATE","v":"5.08%"},{"rt":"EEE","rc":1162,"dc":"TR","dn":"TR","ic":"RP","im":"RP","v":"8.63"},{"rt":"FFF","rc":1577,"dc":"HO","dn":"HO","ic":"POINT","im":"POINT","v":"246.00"},{"rt":"FFF","rc":1577,"dc":"HO","dn":"HO","ic":"FEE","im":"FEE","v":"15811.60"},{"rt":"FFF","rc":1577,"dc":"HO","dn":"HO","ic":"AGR","im":"AGR","v":"64.27"},{"rt":"FFF","rc":1577,"dc":"HO","dn":"HO","ic":"RATE","im":"RATE","v":"15.60%"},{"rt":"FFF","rc":1577,"dc":"HO","dn":"HO","ic":"RP","im":"RP","v":"10.03"},{"rt":"FFF","rc":1577,"dc":"INT","dn":"INT","ic":"POINT","im":"POINT","v":"8.00"},{"rt":"FFF","rc":1577,"dc":"INT","dn":"INT","ic":"FEE","im":"FEE","v":"0.00"},{"rt":"FFF","rc":1577,"dc":"INT","dn":"INT","ic":"AGR","im":"AGR","v":"0.00"},{"rt":"FFF","rc":1577,"dc":"INT","dn":"INT","ic":"RATE","im":"RATE","v":"0.51%"},{"rt":"FFF","rc":1577,"dc":"INT","dn":"INT","ic":"RP","im":"RP","v":"0.00"},{"rt":"FFF","rc":1577,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"1400.00"},{"rt":"FFF","rc":1577,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"256754.90"},{"rt":"FFF","rc":1577,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"183.40"},{"rt":"FFF","rc":1577,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"88.78%"},{"rt":"FFF","rc":1577,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"162.81"},{"rt":"FFF","rc":1577,"dc":"TR","dn":"TR","ic":"POINT","im":"POINT","v":"43.00"},{"rt":"FFF","rc":1577,"dc":"TR","dn":"TR","ic":"FEE","im":"FEE","v":"7160.00"},{"rt":"FFF","rc":1577,"dc":"TR","dn":"TR","ic":"AGR","im":"AGR","v":"166.51"},{"rt":"FFF","rc":1577,"dc":"TR","dn":"TR","ic":"RATE","im":"RATE","v":"2.73%"},{"rt":"FFF","rc":1577,"dc":"TR","dn":"TR","ic":"RP","im":"RP","v":"4.54"},{"rt":"GGG","rc":664,"dc":"HO","dn":"HO","ic":"POINT","im":"POINT","v":"4.00"},{"rt":"GGG","rc":664,"dc":"HO","dn":"HO","ic":"FEE","im":"FEE","v":"272.00"},{"rt":"GGG","rc":664,"dc":"HO","dn":"HO","ic":"AGR","im":"AGR","v":"68.00"},{"rt":"GGG","rc":664,"dc":"HO","dn":"HO","ic":"RATE","im":"RATE","v":"0.60%"},{"rt":"GGG","rc":664,"dc":"HO","dn":"HO","ic":"RP","im":"RP","v":"0.41"},{"rt":"GGG","rc":664,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"623.00"},{"rt":"GGG","rc":664,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"115119.57"},{"rt":"GGG","rc":664,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"184.78"},{"rt":"GGG","rc":664,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"93.83%"},{"rt":"GGG","rc":664,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"173.37"},{"rt":"GGG","rc":664,"dc":"TR","dn":"TR","ic":"POINT","im":"POINT","v":"23.00"},{"rt":"GGG","rc":664,"dc":"TR","dn":"TR","ic":"FEE","im":"FEE","v":"3910.00"},{"rt":"GGG","rc":664,"dc":"TR","dn":"TR","ic":"AGR","im":"AGR","v":"170.00"},{"rt":"GGG","rc":664,"dc":"TR","dn":"TR","ic":"RATE","im":"RATE","v":"3.46%"},{"rt":"GGG","rc":664,"dc":"TR","dn":"TR","ic":"RP","im":"RP","v":"5.89"},{"rt":"HHH","rc":1411,"dc":"HO","dn":"HO","ic":"POINT","im":"POINT","v":"77.00"},{"rt":"HHH","rc":1411,"dc":"HO","dn":"HO","ic":"FEE","im":"FEE","v":"5273.00"},{"rt":"HHH","rc":1411,"dc":"HO","dn":"HO","ic":"AGR","im":"AGR","v":"68.48"},{"rt":"HHH","rc":1411,"dc":"HO","dn":"HO","ic":"RATE","im":"RATE","v":"5.46%"},{"rt":"HHH","rc":1411,"dc":"HO","dn":"HO","ic":"RP","im":"RP","v":"3.74"},{"rt":"HHH","rc":1411,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"1411.00"},{"rt":"HHH","rc":1411,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"221731.42"},{"rt":"HHH","rc":1411,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"157.14"},{"rt":"HHH","rc":1411,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"100.00%"},{"rt":"HHH","rc":1411,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"157.14"},{"rt":"TOTAL","rc":6391,"dc":"NOR","dn":"NOR","ic":"POINT","im":"POINT","v":"5628.00"},{"rt":"TOTAL","rc":6391,"dc":"NOR","dn":"NOR","ic":"FEE","im":"FEE","v":"983748.67"},{"rt":"TOTAL","rc":6391,"dc":"NOR","dn":"NOR","ic":"AGR","im":"AGR","v":"174.80"},{"rt":"TOTAL","rc":6391,"dc":"NOR","dn":"NOR","ic":"RATE","im":"RATE","v":"88.06%"},{"rt":"TOTAL","rc":6391,"dc":"NOR","dn":"NOR","ic":"RP","im":"RP","v":"153.93"},{"rt":"TOTAL","rc":6391,"dc":"HO","dn":"HO","ic":"POINT","im":"POINT","v":"373.00"},{"rt":"TOTAL","rc":6391,"dc":"HO","dn":"HO","ic":"FEE","im":"FEE","v":"24211.00"},{"rt":"TOTAL","rc":6391,"dc":"HO","dn":"HO","ic":"AGR","im":"AGR","v":"64.91"},{"rt":"TOTAL","rc":6391,"dc":"HO","dn":"HO","ic":"RATE","im":"RATE","v":"5.84%"},{"rt":"TOTAL","rc":6391,"dc":"HO","dn":"HO","ic":"RP","im":"RP","v":"3.79"},{"rt":"TOTAL","rc":6391,"dc":"INT","dn":"INT","ic":"POINT","im":"POINT","v":"10.00"},{"rt":"TOTAL","rc":6391,"dc":"INT","dn":"INT","ic":"FEE","im":"FEE","v":"0.00"},{"rt":"TOTAL","rc":6391,"dc":"INT","dn":"INT","ic":"AGR","im":"AGR","v":"0.00"},{"rt":"TOTAL","rc":6391,"dc":"INT","dn":"INT","ic":"RATE","im":"RATE","v":"0.16%"},{"rt":"TOTAL","rc":6391,"dc":"INT","dn":"INT","ic":"RP","im":"RP","v":"0.00"},{"rt":"TOTAL","rc":6391,"dc":"TR","dn":"TR","ic":"POINT","im":"POINT","v":"133.00"},{"rt":"TOTAL","rc":6391,"dc":"TR","dn":"TR","ic":"FEE","im":"FEE","v":"22460.00"},{"rt":"TOTAL","rc":6391,"dc":"TR","dn":"TR","ic":"AGR","im":"AGR","v":"168.87"},{"rt":"TOTAL","rc":6391,"dc":"TR","dn":"TR","ic":"RATE","im":"RATE","v":"2.08%"},{"rt":"TOTAL","rc":6391,"dc":"TR","dn":"TR","ic":"RP","im":"RP","v":"3.51"}]}
;

class ReportTest extends React.Component {

  componentDidMount(){
    let stiOptions = new Stimulsoft.Viewer.StiViewerOptions();
    this.viewer = new Stimulsoft.Viewer.StiViewer(stiOptions, "content_viewer", false);
    this.viewer.renderHtml("content");

    this.loadReportData(data);
  }

  loadReportData = (data) => {
      let report = new Stimulsoft.Report.StiReport();
      report.loadFile("/reports/crossTabTest2.mrt");
        var dsDataSource = new Stimulsoft.System.Data.DataSet();
      dsDataSource.readJson(data);
      report.regData("DataSource",null,dsDataSource);
      this.viewer.report = report;
  }

  render() {

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="گزارش طرف حساب" breadcrumbItem="طرف حساب ها" />
                <div id="content">
        </div>
            </div>
        </React.Fragment>
    );
  }
}

export default ReportTest;




















// const Page = () => {
//     const [Cities, SetCities] = useState(null);


//     // ////////////////////////////////////////////////////
//     useEffect(() => {
//         get(url.GET_CITY)
//             .then((response) => {
//                 console.log(response.value)
//                 SetCities(response.value)
//             }, (error) => {
//                 console.error(error);
//             });
//     }, []);
//     // ////////////////////////////////////////////////////
//     return (
//         <React.Fragment>
//             <div className="page-content">
//                 <Breadcrumbs title="گزارش طرف حساب" breadcrumbItem="طرف حساب ها" />





                
//                 {Cities ?
//                     <>
//                         {Cities.map((item) =>
//                             <p>{item.value}</p>
//                         )}
//                     </>
//                     : <Loading />}
//             </div>

//         </React.Fragment>
//     )
// }
// export default Page