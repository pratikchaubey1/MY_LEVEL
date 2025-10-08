import React from 'react'
import { FiUser } from 'react-icons/fi'
import { MdMenu } from 'react-icons/md'

function ProfileMenu() {
  return (
    <div>  
      {/* Menu Open Button */}
      <button
        className="text-gray-700 transition-colors transition-transform duration-200 border-b-2 border-transparent hover:text-red-500 hover:border-red-500 hover:scale-110 text-3xl"
        aria-label="Profile"
      >
        <FiUser className="text-2xl" />
      </button>
      </div>
  )
}

export default ProfileMenu