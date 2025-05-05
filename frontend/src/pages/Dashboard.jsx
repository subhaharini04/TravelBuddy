import {React, useState} from 'react'
import cloud from '../assets/cloud.jpeg'
import plane from '../assets/plane.png'

export const Dashboard = () => {
  const[open, setOpen] = useState(false)
  const openDate = () => {
    setOpen(!open)
  }
  return (
  
    <div
      className="w-screen h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center "
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <div className='text-center'>
      <h1 className='text-2xl sm:text-2xl md:text-4xl font-semibold'>Where is your next Destination ?</h1>  
      <div className='relative mt-4 bg-white rounded-lg p-2 shadow-md'>
        <input type="search"
        placeholder='Plan your trip with us' 
        className=' w-full p-3 outline-none bg-gray-200 rounded-lg'
        onClick={openDate} />
        <div className='absolute right-2 top-2 cursor-pointer rounded-xl bg-[#ffcda9]'>
        <img src={plane} alt="plane" className='w-8 h-8 m-2 mx-4'/>
        </div>
        {open && (
          <div>
          <p className='mt-2 text-md text-left font-semibold'>Pick your perfect travel dates!</p>
          <input type="date" placeholder='Plan your trip with us' className='w-full p-3 outline-none bg-gray-200 rounded-lg' />
          </div>
        )}
      </div>
      </div>
    </div>
    
  )
}
