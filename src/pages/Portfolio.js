import React from 'react';
import img1 from '../img/portfolio/1.png'
import img2 from '../img/portfolio/2.png'
import img3 from '../img/portfolio/3.png'
import img4 from '../img/portfolio/4.png'
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { Link } from 'react-router-dom';
const Portfolio = () => {
  return <motion.section
  initial={{opacity: 0 , y: '100%'}}
  animate={{opacity: 1, y: 0}}
  exit={{opacity: 0 , y: '100%'}}
  transition={transition1}
  className='section  w-[80%] mx-auto '>
    <div className=' container mx-auto h-full relative'>
      <div className=' flex flex-col lg:flex-row h-full items-center justify-start text-center lg:text-left gap-x-24 pt-24 lg:pt-36 pb-8 '>
        <motion.div
         initial={{opacity: 0 , y: '-80%'}}
         animate={{opacity: 1, y: 0}}
         exit={{opacity: 0 , y: '-80%'}}
         transition={transition1}
        className=' flex flex-col lg:items-center'>
          <h1 className='h1'>Portfolio</h1>
          <p className=''>Confident and dedicated photographer with experience in both professional and freelance photography. Holds nearly 10 years of working experience with great variety in order to tackle any photography job quickly and effectively.
      </p>
      <br />
      <br />
      <p>
      Intimately familiar with taking high-quality digital photographs, including framing, selecting and setting up lighting and determining advanced shutter and lens options. Prioritizes communication on the job to avoid errors.
      </p>
      <Link to={'/portfolio'} className='btn mt-[30px] mx-auto lg:mx-0'>Hair me</Link>
        </motion.div>

        <div className=' grid grid-cols-2 gap-2 w-[100%]'>
          <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={img1} alt='' />
            
          </div>

          <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={img2} alt='' />
            
          </div>


          <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={img3} alt='' />
            
          </div>


          <div className=' max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img className=' object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={img4} alt='' />
            
          </div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Portfolio;
