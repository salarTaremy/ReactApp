import React,{ useState } from "react"
import { Row } from "reactstrap"
import { useEffect } from "react"
import {toast,url,api} from "common/imports"
import { useDispatch } from "react-redux"
import { SET_ON_CLICK } from "store/StiReport/actionTypes"
import { useFetch } from "helpers/api_helper"
import { START_FETCH_DATA , FINISH_FETCH_DATA } from "store/StiReport/actionTypes"

const Dashboard = () => {
  const dispatch = useDispatch()
  const [Cities, SetCities] = useState(null);
   const  [response, error, loading] = useFetch(url.GET_CITY)



    ////////////////////////////////////////////////////
    const stiDataSeter =()=> {
      toast.info('Dashbord')
      dispatch({type: START_FETCH_DATA })
      api.get(url.GET_CITY)
      .then((response) => {
        //SetCities(response.value)
        toast.info('Final Fetch')
        console.log('respnce')
        dispatch({type: FINISH_FETCH_DATA })
        return  Promise.resolve(response.value)
      }, (error) => {
        console.error(error);
      });

      console.log('Finish')

    }

    dispatch({type: SET_ON_CLICK , payload:stiDataSeter})
    ////////////////////////////////////////////////////

 



  return (
    <React.Fragment>
      <div className="page-content">
  
        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to Qovex Dashboard</li>
                </ol>
              </div>

            </div>
          </div>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default Dashboard