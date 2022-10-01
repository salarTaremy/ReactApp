import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"


import {
  postLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/backend_helper"


function* loginUser({ payload: { user, history } }) {
  
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        userName: user.userName,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response.value))
      yield put(loginSuccess(response))
    } else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      
      const response = yield call(postLogin, {
        userName: user.userName,
        password: user.password,
      })
      
      localStorage.setItem("authUser", JSON.stringify(response.value))
      yield put(loginSuccess(response))
    }
    history.push("/dashboard")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}



function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)

  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
