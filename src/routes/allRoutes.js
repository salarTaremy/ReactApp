import React from "react"
import { Redirect } from "react-router-dom"

// test
import Test from "pages/Test/index"

// Dashboard
import Dashboard from "pages/Dashboard/index"

//Blank
import Blank from "pages/Blank/Blank"

//Opposite Side
import ManageOppositeSide from "pages/OppositeSide/ManageOppositeSide"
import OppositeSideDetail from "pages/OppositeSide/OppositeSideDetail"
import OppositeReport from "pages/OppositeSide/OppositeReport"
import OppositeReportDesigner from "pages/OppositeSide/OppositeReportDesigner"

//Stimulsoft Report
import Design from "pages/StiReport/Design"

// Authentication related pages
import Login from "pages/Authentication/Login"
import Logout from "pages/Authentication/Logout"
import Register from "pages/Authentication/Register"
import ForgetPwd from "pages/Authentication/ForgetPassword"

const userRoutes = [
  { path: "/ManageOppositeSide", component: ManageOppositeSide },
  { path: "/OppositeSideDetail/:id", component: OppositeSideDetail },
  { path: "/Blank", component: Blank },
  { path: "/dashboard", component: Dashboard },
  { path: "/test", component: Test },
  { path: "/OppositeReport", component: OppositeReport },
  { path: "/OppositeReportDesigner", component: OppositeReportDesigner },
  { path: "/Design", component: Design },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

]

export { userRoutes, authRoutes }
