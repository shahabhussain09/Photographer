import React from 'react';
import con from '../img/contact/woman.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
const Contact = () => {
  return <motion.section
  initial={{opacity: 0 , y: '100%'}}
  animate={{opacity: 1, y: 0}}
  exit={{opacity: 0 , y: '100%'}}
  transition={transition1}
  className=' section bg-white'>
    <div className='container mx-auto h-full'>
      <div className=' flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg-text-left'>
       <div>bg</div>
        

        <form className=' flex flex-col gap-y-4'>
        <div className=' lg:flex-1 lg:pt-32 px-4'>
          <h1 className=' h1'>Contact Me</h1>
          <p className='mb-12'>I would like to get suggestion from me</p>
        </div>
          <div className=' flex gap-x-10'>
          <input className=' outline-none border-b border-b-primary h-[60px] font-secondary w-full pl-3  bg-transparent placeholder:text-[#757879] ' type='text' placeholder='Your Name' />

          <input className=' outline-none border-b border-b-primary h-[60px] font-secondary w-full pl-3  bg-transparent placeholder:text-[#757879] ' type='text' placeholder='email addrees' />
          </div>

          <input className=' outline-none border-b border-b-primary h-[60px] font-secondary w-full pl-3  bg-transparent placeholder:text-[#757879] ' type='text' placeholder='email addrees' />

          <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>SEND IT</button>
        </form>

        <motion.div 
         initial={{scale: 0}}
         animate={{scale: 1}}
         exit={{scale: 0}}
         transition={transition1}
        className=' w-[40%]'>
          <img src={con} alt='' />
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
