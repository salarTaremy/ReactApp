import { takeEvery, fork, put, all, call } from "redux-saga/effects"

import  { sasd}  from "./actionTypes"



function* stiReportSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
}

export default stiReportSaga