import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer h-1/5  p-10 mx-auto'>
        <div className='flex-col justify-center m-auto text-6xl font-serif text-white items-center mx-auto mb-5'>
        <h1>Website</h1>        
        </div>

        <div className='flex mx-auto justify-end items-center space-x-10'>
            <div className='flex-col justify-between'>
                <p className='text-white text-3xl mb-2'>Contact</p>
                <p className='text-white text-lg'>111111</p>
                <p className='text-white text-lg'>111111</p>
                <p className='text-white text-lg'>111111</p>
            </div>
                
            <div>
                <p className='text-white text-3xl mb-2'>Location</p>
                <p className='text-white text-lg'>111111</p>
                <p className='text-white text-lg'>111111</p>
                <p className='text-white text-lg'>111111</p>
            </div>

            <div>
                <p className='text-white text-3xl mb-2'>Hours</p>
                <p className='text-white text-lg'>111111</p>
                <p className='text-white text-lg'>111111</p>
                <p className='text-white text-lg'>111111</p>
            </div>

        </div>

                
        </div>
  )
}

export default Footer