
import React, { useState, useEffect } from 'react'
import PageWrapper from '@/components/PageWrapper'
import Head from 'next/head'
import Image from 'next/image'
import  { products } from '../../components/products/products'
import Navbar from '../../components/products/navbar'
import Link from 'next/link'


export default function Marketplace() {

  return (
    <>
    <Head>
        {/* <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        </link> */}
    </Head>

    <PageWrapper>
    <Navbar />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

          {products.map((d) => (
            <Link key={d.id} href={d.href} className="group">

              <div className="h-72 w-72 overflow-hidden rounded-lg bg-gray-200 shadow-2xl">
                <Image width={1240} height={100}
                  src={d.imageSrc}
                  alt={d.imageAlt}
                  className="h-full w-full object-cover object-center group"
                />
              </div>

              <h3 className="mt-4 text-sm text-gray-700">{d.name}</h3>
              <p className=" text-gray-900">{d.price}</p>
              <div className='text-center  bg-black p-1 text-white hover:bg-opacity-60'>
                <button className='group'>Buy Now</button>
              </div>
            </Link>

          ))}
        
        </div>

      </div>
    </div>
  

   
    </PageWrapper>
    </>
  )
}
