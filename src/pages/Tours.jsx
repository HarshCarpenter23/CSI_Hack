

import React from 'react'
import "../styles/tours.css"

const Tours = () => {
  return (
    <div className="flex items-center justify-center h-screen toursss">
  <button onClick={() => window.location.href = "https://mediafiles.botpress.cloud/278b1ea0-f055-46df-8df1-2318ce5dbe55/webchat/bot.html"} className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
    Let our AI bot assist you.
  </button>
</div>
  )
}

export default Tours;
