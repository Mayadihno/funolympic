import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer__background">
          <div className="footer__image">
            <img
              src="https://olympics.com/en/images/static/logo-b2p-white-v2.svg"
              alt="logo"
            />
          </div>
          <h4>
            TM © 2023 – International Olympic Committee – All Rights Reserved.
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
