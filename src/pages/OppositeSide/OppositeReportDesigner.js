// import React, { useState, useEffect } from "react"
// import { useSelector, useDispatch } from 'react-redux'
// import Breadcrumbs from "components/Common/Breadcrumb"
// import Loading from "components/Common/Loading"

// //For Call Api
// import { post, del, get, put } from "helpers/api_helper"

// //Url For Call Api
// import * as url from 'helpers/url_helper'

// import Designer from "pages/StiReport/Designer"


// const Main = () => {

//   const Rep = useSelector((state) => state.stiReport)



//   const [Cities, SetCities] = useState(null);
//   useEffect(() => {
//     get(url.GET_CITY)
//       .then((response) => {
//         SetCities(response)
//       }, (error) => {
//         console.error(error);
//       });
//   }, []);
//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Breadcrumbs title="گزارش طرف حساب" breadcrumbItem="طرف حساب ها" />
//         {Cities ?
//           <Designer data={Rep.data}   ></Designer>
//           : <Loading />}
//       </div>
//     </React.Fragment>
//   )
// }
// export default Main

