import React from 'react'
import './AcomplishmentBanner.css'

const AcomplishmentBanner = () => {
  return (
    <div className='banner h-1/5 justify-center p-5 mx-auto'>

      <div className='flex sm:flex-row flex-col items-center justify-between'>

        <div className='flex-col m-auto text-white items-center justify-center mx-auto mb-5'>
         <h1 className='text-6xl font-prompt font-semibold py-10 flex justify-center'>22</h1>
         <p className='text-4xl font-prompt'>Qualified employees</p>       
        </div>

        <div className='flex-col m-auto text-white items-center justify-center mx-auto mb-5'>
         <h1 className='text-6xl font-prompt font-semibold py-10 flex justify-center'>117</h1>
         <p className='text-4xl font-prompt'>Projects deliveres</p>        
        </div>

        <div className='flex-col m-auto text-white items-center justify-center mx-auto mb-5'>
         <h1 className='text-6xl font-prompt font-semibold py-10 flex justify-center'> 4</h1>
         <p className='text-4xl font-prompt'>Key industries</p>
        </div>

      </div>  
        </div>
  )
}

export default AcomplishmentBanner