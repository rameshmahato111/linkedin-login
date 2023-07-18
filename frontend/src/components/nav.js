import React from 'react'
import {GiHamburgerMenu} from"react-icons/gi"
// import {AiOutlineClose} from"react-icons/ai"
import { Link, NavLink} from 'react-router-dom'
import {BsFillCartCheckFill} from "react-icons/bs"

const Nav = () => {
  return (
    <>
      <div className='bg-[D2DCE6]'>
        <div sticky ='top' className=' max-w-[1320px] mx-auto  flex items-center justify-between '>

          <div className='pl-3 mt-3'>
            <NavLink to='/' className='text-3xl text-[#0072b1]'><strong>Linked<span className='bg-[#0072b1] text-white rounded  px-1 ml-1'>in</span></strong></NavLink> 
            {/* <img src={logo} alt='logo' className=' w-30 h-20' /> */}
          </div>

          <ul className='hidden md:flex gap-4 pr-3 text-[#401B1B] capitalize'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/registration'>Contact</NavLink></li>
            {/* <li><Link to='/signin'>sign up</Link></li> */}
            <li><NavLink to='/login'>Log In</NavLink></li>

            <li><NavLink to='/products'>products</NavLink></li>
            <li className='bg-red-500 text-white rounded-full p-1 text-xl outline ring-red-500 ring-2'><Link to='/products' ><BsFillCartCheckFill  /></Link></li>


           


          </ul>

          {/* hamburger menu */}
          <GiHamburgerMenu className='md:hidden block text-white' />
          {/* <AiOutlineClose className='md:hidden block text-white'  /> */}

          {/* mobile responsive */}
          {/* <ul className='md:hidden gap-4 pr-3 text-white absolute top-[24
            px] left-0 bg-black'>
            <li>Home</li>
            <li>Contact</li>
            <li>Login</li>
            <li>signup</li>
            <li>services</li>


          </ul> */}

        </div>
      </div>


    </>
  )
}

export default Nav