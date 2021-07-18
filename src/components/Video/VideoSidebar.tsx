import React, { useState } from "react";
import "../../assets/css/VideoSidebar.css";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Link } from "react-router-dom";

const VideoSidebar : React.FC = () => {

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <Link to="/upload">
            <AddAPhotoIcon style={{ color: 'white' }} fontSize="large" />
        </Link>
      </div>

    </div>
  );
}

export default VideoSidebar;