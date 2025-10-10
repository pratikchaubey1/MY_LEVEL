import React from "react";
import JeansImg from "../assets/Jens.png";
import { useNavigate } from "react-router-dom";

function Jeans() {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 md:px-8">
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl sm:text-2xl md:text-3xl font-mono flex items-center gap-2">
        Jeans <span className="text-sm text-gray-600 sm:text-base">Collection</span>
      </h1>

      {/* Back Button */}
       <div className="flex justify-end mt-5">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-black  transition"
        >
          ← Back To Home Page
        </button>
      </div>

      {/* Top Image Banner */}
      <div className="w-full mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${JeansImg})` }}
        ></div>
      </div>
    </div>
  );
}

export default Jeans;
