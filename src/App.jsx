import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Page/LandingPage/Landing";
import Sneaker from "./Page/Sneaker";
import Shirt from "./Page/Shirt";
import Jeans from "./Page/Jeans";
import Bag from "./Page/Bag";

function App() {
  const location = useLocation();
  const paths = ["/", "/signup", "/signin"];
  const noPaddingOnLanding = paths.includes(location.pathname);

  return (
    <div className=" bg-amber-50">
      <Navbar />
      <div className={noPaddingOnLanding ? "" : "mt-22"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/Jeans" element={<Jeans />} />
          <Route path="/Shirt" element={<Shirt />} />
          <Route path="/Sneaker" element={<Sneaker />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
