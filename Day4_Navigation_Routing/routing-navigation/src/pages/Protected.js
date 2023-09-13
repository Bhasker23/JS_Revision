import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <Outlet /> : <Navigate to={"/about"} />}</>;
}

export default Protected;
