import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-zinc-900  bg-opacity-80 transition ease-in-out duration-500')
      } else {
        setBgColor('bg-transparent transition ease-in-out duration-500')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar fixed top-0 z-50 w-screen h-15 min-w-auto flex justify-center items-center ${bgColor} `}>
      <img src='https://assets.zyrosite.com/mv0jZE6zNeiKbo2r/website-YNqJa2ZnkjUPr5Bd.svg' className='icon h-24 w-24'/>
      <ul className='flex justify-center mr-44 items-center px-60 space-x-6'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/blog"><li>Blog</li></Link>
        <Link to="/sevices"><li>Services</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar