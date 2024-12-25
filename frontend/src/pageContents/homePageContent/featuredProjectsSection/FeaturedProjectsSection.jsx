import React from 'react'

const FeaturedProjectSection = () => {
  return (
    <div className='h-full pt-20 mb-auto justify-center items-center bg-gradient-to-b from-slate-500 to-slate-800 '>

            {/* Heading */}
        <div className='flex justify-center  mx-auto mb-20 text-4xl text-white font-sans font-semibold'> <h1>Featured Projects</h1></div>

        <div className='flex justify-center items-centers'>
            {/* card 1 */}
        <div className='m-auto text-4xl text-white'>
            <img src='https://images.unsplash.com/photo-1547628641-ec2098bb5812?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
        <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
        <p className='flex justify-center text-lg mt-2 mx-auto w-80'>We provide the best services in the world</p>
        </div>
           {/* card 2 */}
        <div className='m-auto text-4xl text-white'>
            <img src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
        <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
        <p className='flex justify-center text-lg mt-2 mx-auto w-80 '>We provide the best services in the world</p>
        </div>        
        </div >

            {/* card 3 */}
        <div className='flex justify-center items-centers mt-28'>

        <div className='m-auto text-4xl text-white'>
            <img src='https://images.unsplash.com/photo-1547628641-ec2098bb5812?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
        <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
        <p className='flex justify-center text-lg mt-2 mx-auto w-80'>We provide the best services in the world</p>
        </div>
            {/* card 4 */}
        <div className='m-auto text-4xl text-white'>
            <img src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
        <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
        <p className='flex justify-center text-lg mt-2 mx-auto w-80 '>We provide the best services in the world</p>
        </div>
        </div>


        </div>
  )
}

export default FeaturedProjectSection