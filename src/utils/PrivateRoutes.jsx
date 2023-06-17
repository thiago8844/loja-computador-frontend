import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import { getCookie } from ".";

function PrivateRoutes() {
  const cookies = new Cookies();

  let auth = false;
  const token = cookies.get("auth");

  try {
    jwt(token);
    auth = true;
  } catch (error) {
    console.log("Acesso negado !");
  }

  return (
    auth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes;
