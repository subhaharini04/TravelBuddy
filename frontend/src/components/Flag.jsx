import React from 'react'
import india from '../assets/india.jpg'
import flag from '../assets/flag.png'

export const Flag = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className="relative">
        <img
          src={india}
          alt=""
          className="w-40 h-45 border-4 border-white rounded-2xl"
        />
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <img
            src={flag}
            alt="Flag"
            className="w-10 h-10 rounded-full border-2 border-white bg-white shadow"
          />
          <div className="w-0 h-0 border-l-9 border-r-9  border-t-[10px] border-l-transparent border-r-transparent border-t-white"></div>
          <h1 className="text-xs font-semibold mt-1 bg-white px-2 py-1 rounded shadow text-gray-700">
            INDIA
          </h1>
        </div>
      </div>
    </div>
  )
}
