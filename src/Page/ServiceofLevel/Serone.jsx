import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import SerOneVid from "../../assets/serOne.mp4";

function Serone() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div>
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4">
        {/* Small Label */}
        <span className="text-sm font-semibold bg-gray-300/75 text-gray-800 px-3 py-1 rounded-md mt-20">
          LEVEL SERVICE
        </span>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-light tracking-widest text-gray-900">
          COLLECT IN STORE
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base tracking-wider text-gray-700 font-medium">
          ORDER ONLINE AND COLLECT AT YOUR PREFERRED BOUTIQUE
        </p>
      </div>

      {/* Full Width Video Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] mt-14">
        <video
          ref={videoRef}
          src={SerOneVid}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-gray-200/70 backdrop-blur-sm rounded-full flex items-center justify-center text-black"
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-gray-200/70 backdrop-blur-sm rounded-full flex items-center justify-center text-black"
          >
            {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Serone;
