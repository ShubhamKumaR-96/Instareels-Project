import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/molecules/video/Video";
import useFetchAllvideos from "./hooks/apis/useFetchAllVideos";

function App() {
  const [playing, setPlaying] = useState(1);
  const [videoss, setVideos] = useState([]);

  const { isVideoFetched, isVideoError, isVideoFetching, videosData } =
    useFetchAllvideos();

  useEffect(() => {
    if (isVideoFetched && videosData){
    setVideos([...videosData])
    }
  }, [videosData,isVideoFetched]);

  if (isVideoFetching) {
    return <div>Loading...</div>;
  }
  if (isVideoError) {
    return <div>Eroor while fetching video</div>;
  }

  return (
    <>
      <div className="container">
        {isVideoFetched && videoss.map((currVideo)=>(
              <Video key={currVideo.id}
              id={currVideo.id}
              url={currVideo.url}
              captions={currVideo.captions}
              playing={playing}
              setPlaying={setPlaying}
            />
        ))}
       
      </div>
    </>
  );
}

export default App;
