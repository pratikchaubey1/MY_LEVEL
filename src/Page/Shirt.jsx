import React from "react";
import Shirts from "../assets/Shirts.png";
function Shirt() {
  return (
    <div>
      {/* Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
        Shirts <span className="text-sm text-gray-600"></span>
      </h1>

      {/*  Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-5 ml-263 px-4 py-2  text-black  transition"
      >
        ← Back To Home Page
      </button>
      {/* Top Image Banner */}
      <div className="w-full mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Shirts}}})` }}
        ></div>
      </div>
    </div>
  );
}

export default Shirt;
