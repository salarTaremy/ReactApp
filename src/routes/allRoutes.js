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
import ShowReport from "pages/OppositeSide/ShowReport"
import OppositeReportDesigner from "pages/OppositeSide/OppositeReportDesigner"

//Stimulsoft Report
import Design from "pages/StiReport/Design"

// Authentication related pages
import Login from "pages/Authentication/Login"
import Logout from "pages/Authentication/Logout"

const userRoutes = [
  { path: "/ManageOppositeSide", component: ManageOppositeSide },
  { path: "/OppositeSideDetail/:id", component: OppositeSideDetail },
  { path: "/Blank", component: Blank },
  { path: "/dashboard", component: Dashboard },
  { path: "/test", component: Test },
  { path: "/ShowReport/:id", component: ShowReport },
  { path: "/OppositeReportDesigner", component: OppositeReportDesigner },
  { path: "/Design", component: Design },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },

]


export { userRoutes, authRoutes }
