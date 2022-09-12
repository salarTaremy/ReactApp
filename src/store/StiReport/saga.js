import { takeEvery, fork, put, all, call } from "redux-saga/effects"

//Account Redux states
import { REGISTER_USER } from "./actionTypes"
import { registerUserSuccessful, registerUserFailed } from "./actions"


import {
  postFakeRegister,
  postJwtRegister,
} from "../../../helpers/fakebackend_helper"



// Is user register successfull then direct plot user in redux.
function* registerUser({ payload: { user } }) {
  try {
    const response = yield call(postFakeRegister, user)
    yield put(registerUserSuccessful(response))
  } catch (error) {
    yield put(registerUserFailed(error))
  }
}

export function* watchUserRegister() {
  yield takeEvery(REGISTER_USER, registerUser)
}



export default watchUserRegister
