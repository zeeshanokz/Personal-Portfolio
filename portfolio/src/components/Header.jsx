import React from 'react'
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
       <header className=''>
        <nav className='flex w-[1440] h-10 bg-[#121212] text-white mt-4'>
            <div className='pl-5 text-[#E46400]'>LOGO</div>
            <ul className='flex justify-between pl-80 pr-80 gap-10'>
                <li className= "hover:text-[#E46400]"> <NavLink  to= '/'>Home</NavLink> </li>
                <li className='hover:text-[#E46400]'><NavLink to= '/services'>Services</NavLink></li>
                <li className='hover:text-[#E46400]'><NavLink to= '/about'>About me</NavLink></li>
                <li className='hover:text-[#E46400]'><NavLink to= '/portfolio'>Portfolio</NavLink></li>
                <li className='hover:text-[#E46400]'><NavLink to= '/contact'>Contact me</NavLink></li>
            </ul>
            <NavLink className= "hover:text-[#E46400]" to= '/hire'><button>Hire Me</button> </NavLink>
        </nav>
       </header>
    </>
  )
}

export default Header;