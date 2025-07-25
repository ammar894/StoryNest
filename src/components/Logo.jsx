import React from 'react'

function Logo({
  className = ""
}) {
  return (
    <img src="\src\assets\story.png" alt="logo" className={`w-45 h-14 mr-6 border- border-gray-300/50 p-1 ${className}`} />
  )
}

export default Logo