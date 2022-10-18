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

//Stimulsoft Report
import Design from "pages/StiReport/Design"
import ShowReport from "pages/StiReport/ShowReport"

// Authentication related pages
import Login from "pages/Authentication/Login"
import Logout from "pages/Authentication/Logout"

const userRoutes = [
  { path: "/ManageOppositeSide", component: ManageOppositeSide },
  { path: "/OppositeSideDetail/:id", component: OppositeSideDetail },
  { path: "/Blank", component: Blank },
  { path: "/dashboard", component: Dashboard },
  { path: "/test", component: Test },


  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/login" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/ShowReport/:id", component: ShowReport },
  { path: "/Design", component: Design },

]


export { userRoutes, authRoutes }
