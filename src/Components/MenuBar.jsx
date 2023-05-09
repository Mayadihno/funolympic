import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const MenuBar = () => {
  const [pageState, setPageState] = useState(false);
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();

  const handleLocal = () => {
    navigate("/streammer", { replace: true });
  };
  const handleClick = async (e) => {
    e.preventDefault();
    await signOut(auth);
    navigate("/", { replace: true });
  };
  //"+447774614335"
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail =
          user.email === "niyiolatunji60@gmail.com" || "mayadihno120@gmail.com";
        //"+447774614335"
        setAdmin(userEmail);
        setPageState(true);
      } else {
        setPageState(false);
      }
    });
  }, [pageState]);
  return (
    <React.Fragment>
      {!pageState && (
        <>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Olympic News
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Events
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Sports
          </NavLink>
          <Button color={"white"} variant={"outline"} onClick={handleLocal}>
            Sign In
          </Button>
        </>
      )}
      {pageState && (
        <>
          <NavLink
            to="/fixtures"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Fixtures
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) => (isActive ? "active-links" : "")}
          >
            Videos
          </NavLink>
          {admin && (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active-links" : "")}
            >
              Admin
            </NavLink>
          )}
          <Button variant={"outline"} color="white" onClick={handleClick}>
            Sign Out
          </Button>
        </>
      )}
    </React.Fragment>
  );
};

export default MenuBar;
