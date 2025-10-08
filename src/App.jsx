import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Landing from './Page/LandingPage/Landing';

function App() {
   const paths = ['/', '/signup', '/signin'];
  const noPaddingOnLanding = paths.includes(location.pathname);
  return (
    <div>
      <Navbar/>
      <div className={noPaddingOnLanding ? "":"[t-22"}>
        <Routes>
          <Route path='/' element=<Landing/>/>
        </Routes>
      </div>
    </div>
  )
}

export default App