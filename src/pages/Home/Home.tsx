import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import Video from "../../components/Video";
import "../../assets/css/App.css";
import { getVideos } from "../../apiCalls/getVideos";
const uploadsRoute = 'http://localhost:4000/api/upload_list';

export interface VideoProp{
  id: string;
  video_file: string;
  address: string;
}



const Home: React.FC = () => {
  const [uploadList, setUploadList] = useState<VideoProp[]>([])
  const [activeUploadIndex, setActiveUploadIndex] = useState<number | null>(null)
  const [activeUpload, setActiveUpload] = useState<VideoProp | null>(null)
  useEffect(() => {
    (async () => {
      const videos = await getVideos();
      setUploadList(videos)
      if (videos.length > 0) {
        setActiveUploadIndex(0)
      }
    })()
  }, [])

  const updateActiveUploadIndex = (newIndex: number) => {
    const count = uploadList.length
    setActiveUploadIndex((newIndex + count) % count)
  }

  const incrementActiveUploadIndex = useCallback(() => {
    if(activeUploadIndex === null) return;
    updateActiveUploadIndex(activeUploadIndex + 1)
  }, [updateActiveUploadIndex])

  //ADD A HOOK IN ORDER TO KNOW WHEN THE USER SCROLL DOWN OR UP AND USE THIS
  // const decrementActiveUploadIndex = () => {
  //   updateActiveUploadIndex(activeUploadIndex - 1)
  // }

  useEffect(() => {
    setActiveUpload(activeUploadIndex !== null ? uploadList[activeUploadIndex] : null)
  }, [activeUploadIndex])

  return (
    <div className="app">
      <div className="app__videos" onScroll={() => incrementActiveUploadIndex()}>
        {activeUpload ? (
          <div className="video">
            <Video video={activeUpload} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
