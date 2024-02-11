import React, { useRef } from "react";

function ForContent() {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="./videos/demovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handlePlayPause}>Play/Pause</button>
    </div>
  );
}

export default ForContent;
