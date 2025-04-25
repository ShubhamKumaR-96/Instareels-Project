import { useEffect, useRef } from "react";
import "./Video.css";

const Video = ({ id, url, captions,playing,setPlaying}) => {

  function handleClick(){
    if (videoRef.current.paused){
      videoRef.current.play()
      setPlaying(id)
    }else{
      videoRef.current.pause()
      setPlaying(null)
    }
  }

  useEffect(()=>{
    if (playing !== id && videoRef.current) {
      videoRef.current.pause();
    }
    
  },[playing,id])

 const videoRef=useRef(null)
  return (
    <div className="video-wrapper">
    
        <video onClick={handleClick} className="video-player"  loop src={url} ref={videoRef}></video>
      
    </div>
  );
};

export default Video;
