import React, { useCallback, useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import "../../assets/css/Video.css";
import { VideoProp } from "../../pages/Home";
import VideoSidebar  from "./VideoSidebar";

interface VideoComponentProp {
  video: VideoProp;
}

const Video: React.FC<VideoComponentProp> = ({video}) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const videoRef: React.MutableRefObject<any> = useRef(null);
  const {address, id, video_file} = video;
  
  const onVideoPress = useCallback(() => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  },[setPlaying, playing]);

  return (
    <div className="video" id={id}>
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        autoPlay={true}
        src={`http://localhost:4000/videos/${video_file}`}
      ></video>
      <VideoFooter address={address} />
      <VideoSidebar />
    </div>
  );
}

export default Video;
