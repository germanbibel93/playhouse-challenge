import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { VideoProp } from '../Home'

const uploadsRoute = 'http://localhost:4000/api/upload_list';

interface useParamProps {
    id: string; 
}

const Upload: React.FC =  () =>{
  const { id } : useParamProps = useParams();
  const [upload, setUpload] = useState<VideoProp | null>();
  useEffect(() => {
    if (!id) { return }

    (async () => {
      const response = await fetch(uploadsRoute)
      const json: VideoProp[] = await response.json()
      let upload = json.find(x => x.id === id)
      if (upload !== null) {
        setUpload(upload)
      }
    })()
  }, [id])

  if (!upload) {
    return <p>Loading</p>
  }

  return (
    <>
      <h1>Review</h1>
      <Link to="/">Return Home</Link>
      <br />
      <Link to="/upload">Upload Another</Link>
      <h2>Here is your video for ${upload.address}</h2>
      <video src={`http://localhost:4000/videos/${upload.video_file}`} controls></video>
      <br />
    </>
  )
}

export default Upload;