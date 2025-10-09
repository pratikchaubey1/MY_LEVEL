import React from "react";
import SneakerImg from "../assets/Sneakers.png"; // ✅ Make sure file name is correct
import { useNavigate } from "react-router-dom";

function Sneaker() {
  const navigate = useNavigate();

  return (
    <div>
      {/*  Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
        Sneakers <span className="text-sm text-gray-600"></span>
      </h1>
      {/*  Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-5 ml-263 px-4 py-2  text-black  transition"
      >
        ← Back To Home Page
      </button>
      {/* Top Image Banner */}
      <div className="w-full h-[400px] mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SneakerImg})` }}
        ></div>
      </div>
    </div>
  );
}

export default Sneaker;
