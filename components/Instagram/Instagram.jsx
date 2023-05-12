import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { FaInstagram, FaSmile, FaLinkedin, FaGithub } from 'react-icons/fa';
import img1 from '../../public/fotokuComp.png';
import img2 from '../../public/linkedin.JPG'
import img3 from '../../public/github.JPG'
import InstagramImg from './InstagramImg'
import Link from 'next/link'

const leftToRightAnimated1 = {
  offscreen:{x:-400, opacity: 0 },
  onscreen: {
    x: 0, opacity: 1,
    transition: {
      duration: 6,
    }
  }
}
const leftToRightAnimated2 = {
  offscreen:{x:-400, opacity: 0 },
  onscreen: {
    x: 0, opacity: 1,
    transition: {
      duration: 5,
    }
  }
}
const leftToRightAnimated3 = {
  offscreen:{x:-400, opacity: 0 },
  onscreen: {
    x: 0, opacity: 1,
    transition: {
      duration: 4,
    }
  }
}

export default function Instagram() {
  return (
    <>
<motion.div 
className='mx-auto w-full'
initial={"offscreen"}
whileInView={"onscreen"}
viewport={{once: true, mount:1}}
transition={{staggerChildren: 0.5}}
>
  
      <motion.div 
      className='grid'
      >
        <div className='mx-auto grid grid-cols-3 overflow-hidden gap-4 my-2 md:grid-cols-3'>
      {/* Item 1 */}
      <Link href='https://www.instagram.com/wisnusadew/'>
        <motion.div
        variants={leftToRightAnimated1} 
        className="card card-compact  bg-yellow-500 shadow-xl w-25 h-25 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96">         
          <figure>
            <InstagramImg socialImage={img1} fa={<FaInstagram size={30}/>}/>
          </figure>         
          <div className="card-body text-white">        
            <p className='flex text-sm'>My Instagram<FaSmile size={12}/></p>
          </div>        
        </motion.div>
        </Link>
      {/* Item 2 */}
      <Link href='https://www.linkedin.com/in/wisnu-sadewa-989b65161/'>
        <motion.div 
        variants={leftToRightAnimated2}
        className="card card-compact  bg-yellow-500 shadow-xl w-25 h-25 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          <figure>
            <InstagramImg socialImage={img2} fa={<FaLinkedin size={30}/>}/>
          </figure>
          <div className="card-body text-white">
            <p className='flex text-sm'>My LinkedIn<FaSmile size={12}/></p>
          </div>
        </motion.div>
        </Link>
      {/* Item 3 */}
      <Link href='https://github.com/wisnusadewa'>
        <motion.div 
        variants={leftToRightAnimated3}
        className="card card-compact  bg-yellow-500 shadow-xl w-25 h-25 md:w-60 md:h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
          <figure>
            <InstagramImg socialImage={img3} fa={<FaGithub size={30}/>}/>
          </figure>
          <div className="card-body text-white">
            <p className='flex text-sm'>My GitHub<FaSmile size={12}/></p>
          </div>
        </motion.div>
        </Link>
      </div>
    </motion.div>
</motion.div>









</>

  )
}
