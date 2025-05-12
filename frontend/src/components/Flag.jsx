import React from 'react'
import india from '../assets/india.jpg'
import flag from '../assets/flag.png'
export const Flag = () => {
  return (
    <div className='p-10 bg-sky-100 w-screen h-screen'>
        <img src={india} alt="" className='w-40 h-45'/>
        <img src={flag} alt="" className='w-15 h-15 rounded-full' />
    </div>
  )
}
