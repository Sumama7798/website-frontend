import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer h-1/5  p-10 mx-auto'>
        <div className='flex-col justify-center m-auto text-6xl font-serif text-white items-center mx-auto mb-5'>
        <h1>Website</h1>        
        </div>

        <div className='flex mx-auto justify-end items-center space-x-10'>
            <div className='flex-col justify-center items-center'>
                <p className='text-white text-3xl mb-2'>Contacts</p>
                <p className='text-white text-lg'>+92-307-6256808</p>
                <p className='text-white text-lg'>+92-324-7806438</p>
                <p className='text-white text-lg'>info@icodeltd.com</p>
            </div>
                
            <div className='flex-col justify-center items-center'>
                <p className='text-white text-3xl mb-2'>Location</p>
                <p className='text-white text-lg'>113/C Umar Market, Master</p>
                <p className='text-white text-lg'>City, Gujranwala, Pakistan</p>
                
            </div>

            <div className='flex-col justify-center items-center'>
                <p className='text-white text-3xl mb-2'>Hours</p>
                <p className='text-white text-lg'>I-V   9:00-18:00</p>
                <p className='text-white text-lg'>VI - VII   Closed</p>
                
            </div>

        </div>

                
        </div>
  )
}

export default Footer