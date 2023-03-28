import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Protected = () => {
  const { loading, loggedIn } = UseAuth();
  if (loading) {
    return "Loading....";
  }
  return loggedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Protected;
