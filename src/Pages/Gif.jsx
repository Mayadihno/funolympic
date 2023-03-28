import React from "react";
import "./Gif.css";

const Gif = ({ image }) => {
  return (
    <React.Fragment>
      <div className="gif">
        <img src={image} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Gif;
