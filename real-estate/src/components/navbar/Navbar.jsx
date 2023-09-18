import React, { useState } from 'react'
import './navbar.css'
import { RiMenuLine , RiCloseLine } from "react-icons/ri"
import { navVariants } from '../../utils/motion'
import { motion } from 'framer-motion'


const Navbar = () => {
  const [toggle , setToggle] = useState(false);

  return (
    <nav className='w-full  bg flex justify-between items-center py-7  md:px-10 px-6  '
    >
     <div>
     <a href="/" className='text-[25px] font-bold'>Homyz</a>
     </div>
     <ul className='flex gap-10 items-center md:flex hidden'>
     <li><a href="#residence">Residencies</a></li>
     <li><a href="#value">Our Value</a></li>
     <li><a href="#contact">Contact Us</a></li>
     <li><a href="#start">Get Started</a></li>
     <button className='bg-primary px-4 py-2 cursor-pointer rounded-lg'>
      <li><a href="#contact">Contact</a></li>
     </button>
     </ul>
     <div className='md:hidden relative flex'>
      {
        toggle ?
        <RiCloseLine size={27} onClick={() => setToggle(false)} cursor={'pointer'} />        
        : 
        <RiMenuLine  size={27} onClick={() => setToggle(true)} cursor={'pointer'}/>
     }
     
    
     {
        toggle && (

        <div className='scale-up-center w-[200px] bg-white absolute right-[100%] top-[100%] flex py-8  justify-center items-center rounded-[10px] z-10'> 
        <ul className='flex flex-col gap-9'>
        <li><a href="#residence" className='text-[#000]'>Residencies</a></li>
        <li><a href="#value" className='text-[#000]'>Our Value</a></li>
        <li><a href="#contact" className='text-[#000]'>Contact Us</a></li>
        <li><a href="#start" className='text-[#000]'>Get Started</a></li>
        <button className='btnContact w-[120px] px-5 py-2 flex justify-center items-center  cursor-pointer rounded-[5px] font-medium'>
        <a href="#contact">Contact</a>
        </button>
        </ul>
        </div>
        )
      
    
      }
     </div>
    

    </nav>
  )
}

export default Navbar