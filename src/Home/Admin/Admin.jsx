import React from "react";
import FixtureUpload from "../Fixtures/FixtureUpload";
import ImageModal from "../Gallery/ImageModal";
import VideoModal from "../Video/VideoModal";
import "./admin.css";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="admin">
        <div className="admin__content">
          <div className="admin_-text"></div>
          <div className="admin__flex">
            <ImageModal /> <VideoModal /> <FixtureUpload />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
