import React from 'react'

const GetStartedBanner = () => {
  return (
    <div className='h-1/5 bg-gradient-to-t from-slate-500 to-slate-300  justify-center p-10 mx-auto'>
        <div className='flex m-auto text-6xl font-serif text-white items-center justify-center  mx-auto mb-5'>
        <h1>How Can We Help</h1>
        
        </div>

        <div className='flex m-auto text-xl font-serif text-white justify-center items-center mx-auto'>
        <button className='bg-white text-black p-2 rounded-full hover:bg-slate-950 ease-in duration-300 hover:text-white px-5'>Get Started</button>
        </div>
        
        </div>
  )
}

export default GetStartedBanner