import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__flex">
            <div className="navbar__left">
              <Link to={"/"}>
                <div className="navbar__logo">
                  <div className="logo">
                    <img
                      src="https://olympics.com/images/static/b2p-images/logo_color.svg"
                      alt=""
                    />
                  </div>
                  <span>FunOlympic</span>
                </div>
              </Link>
            </div>
            <div className="navbar__middle">
              <div className="navbar__menu">
                <MenuBar />
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar__menu__container"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RiCloseLine
              size={30}
              color="white"
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              size={30}
              color="white"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar__container__menu scale-up-center">
              <div className="navbar__links">
                <MenuBar />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
