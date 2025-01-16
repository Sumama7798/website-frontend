import React from 'react'
import './GetStartedBanner.css'

const GetStartedBanner = () => {
  return (
    <div className='gs-banner flex flex-col h-1/5 justify-center p-10 mx-auto'>

        <div className='flex sm:flex-row lg:flex-row flex-col m-auto text-4xl sm:text-6xl 
        lg:text-6xl font-prompt font-semibold text-white items-center justify-center  
        mx-auto mb-5'>          
        <h1>How can we help you?</h1>        
        </div>

        <div className='flex m-auto text-xl font-prompt justify-center items-center pt-5 mx-auto'>
        <button className='bg-black text-white p-3 rounded-full w-60 hover:bg-zinc-800 ease-in duration-300 '>
          Get Started
        </button>
        
        </div>
        
        </div>
  )
}

export default GetStartedBanner