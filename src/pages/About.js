import React from 'react';
import about from '../img/about/woman.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
const About = () => {
  return (
  <motion.section
  initial={{opacity: 0 , y: '100%'}}
  animate={{opacity: 1, y: 0}}
  exit={{opacity: 0 , y: '100%'}}
  transition={transition1}
   className=' section'>
    <div className=' container h-full relative mx-auto'>
   <div className=' flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
    <div className=' flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
      <img src={about} alt='' />
    </div>

    <motion.div
     initial={{opacity: 0 , y: '-80%'}}
     animate={{opacity: 1, y: 0}}
     exit={{opacity: 0 , y: '-80%'}}
     transition={transition1}
    className=' flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col items-center justify-center lg:items-start'>
      <h1 className=' h1'>About me</h1>
      <p className=''>Confident and dedicated photographer with experience in both professional and freelance photography. Holds nearly 10 years of working experience with great variety in order to tackle any photography job quickly and effectively.
      </p>
      <br />
      <br />
      <p>
      Intimately familiar with taking high-quality digital photographs, including framing, selecting and setting up lighting and determining advanced shutter and lens options. Prioritizes communication on the job to avoid errors.
      </p>
      <Link to={'/portfolio'} className='btn mt-12'>View More</Link>
    </motion.div>
   </div>
    </div>
   </motion.section>
  );
};

export default About;
