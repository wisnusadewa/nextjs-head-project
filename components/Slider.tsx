import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

export default function Slider({ slides } : any) {
    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevtSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0 ){
        return null
    }
    
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
       <h1 className='text-xl text-center font-bold p-4'>Gallery</h1>
        <div className='relative flex justify-center p-4'>
            <div>
                {SliderData.map((slide, index)=> {
                    return (

                <div key={index} className={
                index === current ? 'opacity-[1] ease-in duration-1000':'opacity-0'
                }>

                    <FaArrowCircleLeft onClick={prevtSlide} size={50} className='absolute top-[50%] left-[50px] text-white/70 cursor-pointer select-none z-[2]'/>

                    <FaArrowCircleRight onClick={nextSlide} size={50} className='absolute top-[50%] right-[50px] text-white/70 cursor-pointer select-none z-[2]'/>

                    {index === current && (
                        <Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover'/>
                        )}

                </div>
            )
        })}
            </div>
        </div>
    </div>
  )
}
