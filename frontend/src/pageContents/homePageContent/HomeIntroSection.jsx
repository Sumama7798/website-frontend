import React from 'react'
import './HomeIntroSection.css'

const HomeIntroSection = () => {
  return (
    <div className='intro flex  w-full h-screen '>
        <div className='m-auto text-4xl text-white'>
        <h1 className='text-6xl font-serif '>Get Started</h1>
        <button className='btn btn-primary mt-5 ml-16 justify-center backdrop-blur-lg rounded-lg p-3 background-gray-900 hover:bg-black ease-in duration-300 text-white' >Click Now</button>
        </div>
        
    </div>
  )
}

export default HomeIntroSection