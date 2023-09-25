import React, {useState} from 'react';
import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuVariants ={
    hidden: {
      x: '100%'
    },

    show: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9 ]
      }
    }
  }
  return <nav className=' xl:hidden text-primary'>
    <div onClick={()=> setOpenMenu(true)} className=' text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>

    <motion.div
     variants={menuVariants} 
    initial='hidden'
    animate={openMenu ? 'show' : ''}
    className='bg-white shadow-2xl w-full h-screen absolute top-0 right-0 max-w-xs z-30 '>
      <div onClick={()=> setOpenMenu(false)} className=' text-4xl absolute top-14 left-4 z-30 text-primary font-bold'>
        <IoMdClose />
      </div>
      <ul className=' h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold font-primary text-3xl fo '>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </motion.div>
  </nav>;
};

export default MobileNav;
