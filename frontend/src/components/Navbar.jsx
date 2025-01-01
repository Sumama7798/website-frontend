import React from 'react'
import { House } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Navbar.css' 

const Navbar = () => {
  return (
    <nav className='navbar fixed top-0 z-50 w-full h-15 flex justify-center items-center bg-opacity-0 backdrop-blur-md shadow-md'>
        <img src='https://assets.zyrosite.com/mv0jZE6zNeiKbo2r/website-YNqJa2ZnkjUPr5Bd.svg' className='icon h-24 w-24'/>
        <ul className='flex justify-center mr-44 items-center px-60 space-x-6'>
           <Link to="/">        <li >Home    </li></Link>
           <Link to="/about">   <li >About    </li></Link>
           <Link to="/blog">    <li >Blog     </li></Link>
           <Link to="/sevices"> <li >Services </li></Link>
           <Link to="/contact"> <li >Contact  </li></Link>
        </ul>

    </nav>
  )
}

export default Navbar