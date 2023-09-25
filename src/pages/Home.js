import React from 'react';
import Women from '../img/home/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
const Home = () => {
  return <motion.section
  initial={{opacity: 0}}
  animate={{opacity: 1}}
  exit={{opacity: 0}}
  transition={transition1}
  className=''>
    <div className=' container mx-auto relative h-screen'>

      <div className=' flex flex-col justify-center'>

        <motion.div
         initial={{opacity: 0, y: '-50%'}}
         animate={{opacity: 1 , y: 0}}
         exit={{opacity: 0 , y: '-50%'}}
         transition={transition1}
        className=' w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto lg:absolute z-10 flex flex-col items-center lg:items-start justify-center'>
          <h1 className='h1'>Photographer <br /> & film maker </h1>
          <p className='text-[26xp] lg:text-[36px] font-primary mb-4 lg:md-12'>
            Losangella, USA
          </p>
          <Link to={'/contact'} className='btn mb-[30px]'>hair me</Link>
        </motion.div>

        <div className=' flex justify-end'>
        <motion.div
         initial={{scale: 0}}
         animate={{scale: 1}}
         exit={{scale: 0}}
         transition={transition1}
        className=''>
        <motion.img whileHover={{scale: 1.1}} transition={transition1} src={Women} alt='' />
        </motion.div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Home;
