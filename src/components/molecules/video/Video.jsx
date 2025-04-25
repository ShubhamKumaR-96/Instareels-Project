import { useEffect, useRef } from "react";
import "./Video.css";

const Video = ({
  id,
  url,
  captions,
  playing,
  setPlaying,
  likes,
  comments,
  share,
  description
}) => {
  function handleClick() {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(id);
    } else {
      videoRef.current.pause();
      setPlaying(null);
    }
  }
  console.log(captions);

  useEffect(() => {
    if (playing !== id && videoRef.current) {
      videoRef.current.pause();
    }
  }, [playing, id]);

  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
     entries.forEach((entry)=>{
      if(entry.isIntersecting){
        videoRef.current.play()
        setPlaying(id)
      }
     })
    },{
      threshold:0.5
    })
    if (videoRef.current){
      observer.observe(videoRef.current)
    }
    return ()=>{
      if(videoRef.current){
        observer.unobserve(videoRef.current)
      }
    }
  },[])

  const videoRef = useRef(null);
  return (
    <div className="video-wrapper">
      <video
        onClick={handleClick}
        className="video-player"
        loop
        src={url}
        ref={videoRef}
      ></video>
      <div className="video-overlay">
    
      <div className="description">{captions} 😍 {description}</div>


        <div className="action-buttons">
          <div className="action">
            ❤️ <span>{likes}</span>
          </div>
          <div className="action">
            💬 <span>{comments}</span>
          </div>
          <div className="action">
            🔄 <span>{share}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
