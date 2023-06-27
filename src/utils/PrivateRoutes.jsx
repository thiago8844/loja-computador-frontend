import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import { checkAuth } from ".";
import { getCookie } from ".";

function PrivateRoutes() {
  const cookies = new Cookies();

  const {authenticated} = checkAuth();
  
  return (
    authenticated ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes;
