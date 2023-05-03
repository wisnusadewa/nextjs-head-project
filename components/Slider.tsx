import React, { useState } from 'react'
import Image from 'next/image'
import du1 from '../public/nike-coklat.jpg'
import PageWrapper from './PageWrapper'
import { motion } from 'framer-motion'




const downtoupAnimated = {
    offscreen:{y: 300, opacity: 0},
    onscreen:{y: 0, opacity: 1,
    transition:{
      duration: 2,
    }
    }
  }

  const uptodownAnimated = {
    offscreen:{y: -300, opacity: 0},
    onscreen:{y: 0, opacity: 1,
    transition:{
      duration: 2,
    }
    }
  }



export default function Slider({ slides } : any) {


  return (

<>

<motion.div
id='gallery'
className='justify-center w-full mt-40'
initial={'offscreen'}
whileInView={'onscreen'}
viewport={{once: true, amount:1}}
transition={{staggerChildren: 0.5}}
>
    <motion.div
    variants={uptodownAnimated}
    className='flex justify-center mb-20 text-4xl text-yellow-500'
    >My Gallery
    </motion.div>
    <motion.div 
    variants={downtoupAnimated}
    className='flex justify-center'>
        <div className="carousel rounded-box  mx-6 md:mx-5 lg:mx-7 xl:mx-4">
            <div className="carousel-item w-1/2">
                <Image width={1000} height={1000} src={du1} alt='/' className="w-full" />
            </div> 
            <div className="carousel-item w-1/2">
                <Image width={1000} height={500} src={du1} alt='/' className="w-full" />
            </div> 
            <div className="carousel-item w-1/2">
                <Image width={1000} height={500} src={du1} alt='/' className="w-full" />
            </div> 
            <div className="carousel-item w-1/2">
                <Image width={1000} height={500} src={du1} alt='/' className="w-full" />
            </div> 
            <div className="carousel-item w-1/2">
                <Image width={1000} height={500} src={du1} alt='/' className="w-full" />
            </div> 
            <div className="carousel-item w-1/2">
                <Image width={1000} height={500} src={du1} alt='/' className="w-full" />
            </div> 
            <div className="carousel-item w-1/2">
                <Image width={1000} height={500} src={du1} alt='/' className="w-full" />
            </div>
        </div>
    </motion.div>

</motion.div>

    </>
  
  
  
    
    )
}
