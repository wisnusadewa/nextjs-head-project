
import React, { useState, useEffect } from 'react'
import PageWrapper from '@/components/PageWrapper'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/products/navbar'
import Link from 'next/link'
import SearchBar from '../../components/SearchBar/page'
import Category from '../../components/Category/page'



export default function Marketplace() {

  const [ products, setProducts] = useState<any[]>([])
  const [ isLoading, setIsLoading] =useState(false)
      const [ isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fecthData = async ()=> {
    const res = await fetch('https://fakestoreapi.com/products');
    res.json()
    .then(json => {
      console.log(json)
      setProducts(json)
      setIsLoading(false)
    })
    .catch((err) => {
      setIsError(true);
      setIsLoading(false)
    })
  }
    fecthData();
  }, [])

  if (isLoading) return <h1>Loading data....</h1>;
  else if (products && !isError)

  return (
    <>
    <Head>
       
    </Head>

    <PageWrapper>
    <Navbar />
    <div>
      <SearchBar/>
    </div>
      
    <div className="bg-white">

    {/* Mapping Carausel API */}
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item cursor-pointer">
        {
          products?.map((e)=> (
            <div key={e.id}>
              <Image 
              className='w-96 h-96 object-scale-down mx-2'
              src={e.image} width={500} height={500} alt='products'/>

            </div>
          ) )
        }
        
      </div>
    </div>

    {/* Category Bar */}
   <Category />

      {/* Mapping Card Product API */}
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {products?.map((item, index) => (
            
            
            <div key={index} className="">             
              <div className="grid card card-compact w-64 h-96 bg-white shadow-xl mx-auto my-5">
                <figure 
                className='w-full h-full'>
                  <Image src={item.image} 
                  className='object-scale-down'
                  width={1000}
                  height={1000}
                  alt="Shoes" />
                </figure>
              </div>
                  <div className="grid grid-rows-3 border mx-2">
                    <p className=" text-[15px] text-red-700">${item.price}</p>
                    <p className='text-[12px] text-black'>{item.title}</p>
                    <div className="grid">
                      <button className="bg-yellow-300 rounded-lg text-black p-1 mb-1 mr-1">Buy Now</button>
                    </div>
                  </div>
              
            
            
            </div>


            

          ))}
        
        </div>
      </div>
    </div>
  
    
   
    </PageWrapper>
    </>
  )
}
