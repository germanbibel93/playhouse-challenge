import React from "react";
import "../../assets/css/VideoFooter.css";

interface VideoFooterProps {
  address: string;
}

const VideoFooter: React.FC<VideoFooterProps> = ({address}) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <div className="videoFooter__ticker">
          <h3>{address}</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
