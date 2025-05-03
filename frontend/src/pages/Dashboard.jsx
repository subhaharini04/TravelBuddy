import React from 'react'
import cloud from '../assets/cloud.jpeg'

export const Dashboard = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${cloud})` }}
    >
      <h1>Dashboard</h1>  
    </div>
  )
}
