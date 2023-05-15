import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";

const MenuBar = () => {
  const [pageState, setPageState] = useState(false);
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();

  const handleLocal = () => {
    navigate("/streammer", { replace: true });
  };
  const handleEvent = () => {
    toast.warning("Login to see live event");
  };
  const handleEvents = () => {
    toast.warning("No Live Event Streaming yet");
  };
  const handleClick = async (e) => {
    e.preventDefault();
    await signOut(auth);
    navigate("/", { replace: true });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email === "mayadihno@gmail.com";
        setAdmin(userEmail);
        setPageState(true);
        //"niyiolatunji60@gmail.com"
        //"mayadihno@gmail.com
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
          <NavLink to="/about" onClick={handleEvent}>
            Live Events
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
          <NavLink onClick={handleEvents}>Live Events</NavLink>
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
          {admin ? (
            <NavLink
              to="/admin"
              className={({ isActive }) => (isActive ? "active-links" : "")}
            >
              Admin
            </NavLink>
          ) : (
            ""
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
