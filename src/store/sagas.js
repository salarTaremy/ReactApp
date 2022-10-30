import { all, fork } from "redux-saga/effects"

//public
import AuthSaga from "./auth/login/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import calendarSaga from "./calendar/saga"
import chatSaga from "./chat/saga"
import tasksSaga from "./tasks/saga"
import contactsSaga from "./contacts/saga"
import menuSaga from "./menu/saga"

export default function* rootSaga() {
  yield all([
    //public
    fork(AuthSaga),
    ProfileSaga(),
    fork(LayoutSaga),
    fork(calendarSaga),
    fork(chatSaga),
    fork(tasksSaga),
    fork(contactsSaga),
    fork(contactsSaga),
    fork(menuSaga),
  ])
}
