import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import img1 from '../../public/fotokuComp.png';
import InstagramImg from './InstagramImg'


export default function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='font-bold text-2xl'>FOLLOW ME ON INSTAGRAM</p>
        <p className='pb-4'>@wisnusadew</p>
        
        <motion.div 
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2'
        >
            <motion.div 
            whileHover={{ scale: 1.25, rotate: 0 }}
            // whileTap={{ scale: 0.5, rotate: 90, borderRadius: "100%" }}
            >
            <InstagramImg socialImage={img1}/>
            </motion.div>
            
            <motion.div
            whileHover={{ scale: 1.25, rotate: 0 }}
            // whileTap={{ scale: 0.5, rotate: 90, borderRadius: "100%" }}
            >
            <InstagramImg socialImage={img1}/>
            </motion.div>
            
            <motion.div
            whileHover={{ scale: 1.25, rotate: 0 }}
            // whileTap={{ scale: 0.5, rotate: 90, borderRadius: "100%" }}
            >
            <InstagramImg socialImage={img1}/>
            </motion.div>
            
        </motion.div>
        
        
        
    </div>
  )
}
