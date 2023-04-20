import Link from "next/link"
import { useState } from "react"

export default function Hero({heading, message, message2}:any) {



  return (
 
    <div className='flex items-center justify-center mb-12 h-screen bg-fixed bg-center bg-cover custom-img'>    
      <div className='p-5 text-white mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='text-xl py-5'>{message}</p>
        <Link href='/marketplace'><button className='px-8 py-2 border'>{message2}</button></Link>
      </div>

    </div>
    
  )
}
