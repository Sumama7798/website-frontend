import React from 'react'
import { House } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <nav className='navbar fixed top-0 w-full h-20  flex justify-between bg-opacity-0 backdrop-blur-md shadow-md'>
        <House className='icon h-10 w-10 mx-3 mt-5 text-white font-bold'/>
        <ul className='flex justify-center items-center px-60 space-x-6'>
           <Link to="/">        <li  >Home    </li></Link>
           <Link to="/about">   <li >About    </li></Link>
           <Link to="/blog">    <li >Blog     </li></Link>
           <Link to="/sevices"> <li >Services </li></Link>
           <Link to="/contact"> <li >Contact  </li></Link>
        </ul>

    </nav>
  )
}

export default Navbar