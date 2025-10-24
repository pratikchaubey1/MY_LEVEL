import React from 'react'
import Inone from '../../assets/Inone.png'
import { Link } from 'react-router-dom'

function Instore() {
  return (
    <div className='bg-white/90'>

    <div className="flex flex-col items-center justify-center text-center mt-20 space-y-4"
    >
        <h1 className='font-serif text-2xl '>Store</h1>
        <p className="text-center font-sans mt-10">
  Our physical store is currently under process. We're working hard to bring you
  an enhanced in-store experience. Stay tuned for updates and new arrivals!
</p>
    <Link to="/">
    <img src={Inone} alt="name" className=' w-100 h-68 ' />
    </Link>
    </div>
        </div>
  )
}

export default Instore