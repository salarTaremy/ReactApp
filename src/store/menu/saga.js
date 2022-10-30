import { takeEvery, put, call } from "redux-saga/effects";

// Chat Redux States
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";

//Include Both Helper File with needed methods
import * as helper from "../../helpers/backend_helper";

function* fetchMenus() {
  try {
    const response = yield call(helper.getMenus);
    yield put(actions.getCMenusSuccess(response.value));
  } catch (error) {
    yield put(actions.getMenusFailure(error));
  }
}

// function* onGetGroups() {
//   try {
//     const response = yield call(getGroups)
//     yield put(getGroupsSuccess(response))
//   } catch (error) {
//     yield put(getGroupsFail(error))
//   }
// }

// function* onGetMessages({ roomId }) {
//   try {
//     const response = yield call(getMessages, roomId)
//     yield put(getMessagesSuccess(response))
//   } catch (error) {
//     yield put(getMessagesFail(error))
//   }
// }

// function* onAddMessage({ message }) {
//   try {
//     const response = yield call(addMessage, message)
//     yield put(addMessageSuccess(response))
//   } catch (error) {
//     yield put(addMessageFail(error))
//   }
// }

function* chatSaga() {
  yield takeEvery(actionTypes.GET_MENUS, fetchMenus);
}

export default chatSaga;
