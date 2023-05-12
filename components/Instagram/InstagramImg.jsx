import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import Link from 'next/link'




export default function InstagramImg({socialImage, fa}) {
  return (
  
    <div className='relative'>
        <Image src={socialImage} alt='/' className='w-full h-full bg-cover object-scale-down' layout='responsive'/>
        
    {/* overlay */}
      <div className='absolute group right-0 left-0 bottom-0 top-0 hover:bg-black/50 flex justify-center text-center items-center' >
        <p className='text-gray-300 hidden group-hover:block '>{fa}</p>
      </div>  
    </div>
  )
};