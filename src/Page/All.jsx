import React from 'react'
import { useNavigate } from 'react-router-dom';

function All() {
      const navigate = useNavigate();
  return (
    <div>
     {/*  Title */}
      <h1 className="bg-gray-100 px-4 py-2 mt-20 text-xl font-mono flex items-center gap-2">
        Item <span className="text-sm text-gray-600"></span>
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
    </div>
  )
}

export default All