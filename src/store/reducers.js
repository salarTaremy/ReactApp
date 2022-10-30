import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Profile from "./auth/profile/reducer"

//Calendar
import calendar from "./calendar/reducer"

//chat
import chat from "./chat/reducer"

//contacts
import contacts from "./contacts/reducer"

//tasks
import tasks from "./tasks/reducer"

//report
import stiReport from "./StiReport/reducer"

//menu
import Menus from "./menu/reducer"


const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Profile,
  calendar,
  chat,
  tasks,
  contacts,
  stiReport,
  Menus
})

export default rootReducer
