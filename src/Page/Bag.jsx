import React from "react";
import Bags from "../assets/Bags.png";
import { useNavigate } from "react-router-dom";

function Bag() {
  const navigate = useNavigate();

  return (
    <div>
      {/*  Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
        Bags <span className="text-sm text-gray-600"></span>
      </h1>

      {/*  Back Button */}
      <div className="flex justify-end mt-5">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 text-black  transition"
        >
          ← Back To Home Page
        </button>
      </div>

      {/*  Top Image Banner */}
      <div className="w-full mt-3 relative flex items-center justify-center overflow-hidden">
        <div
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Bags})` }}
        ></div>
      </div>
    </div>
  );
}

export default Bag;
