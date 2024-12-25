import React from 'react'
import './HomeIntroSection.css'

const HomeIntroSection = () => {
  return (
    <div className='intro flex w-full h-screen '>
        <div className='m-auto  text-white'>
        <h1 className='text-6xl font-serif '>Get Started</h1>
        <button className='btn btn-primary mt-5 ml-16 justify-center text-4xl rounded-full p-3 backdrop-blur-lg background-gray-900 hover:bg-black ease-in duration-300 text-white' >Click Now</button>
        </div>
        
    </div>
  )
}

export default HomeIntroSection