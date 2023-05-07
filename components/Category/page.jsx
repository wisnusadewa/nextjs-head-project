import React from 'react'

const page = () => {
  return (
    <>
        <div className='flex w-full bg-black h-20 my-10'>
            <div className='flex justify-between w-full mx-5 '>
                <button><span className='bg-white p-4 rounded-lg text-black hover:bg-yellow-300'>All Category</span></button>
                <button><span className='bg-white p-4 px-8 rounded-lg text-black hover:bg-yellow-300'>Clothes</span></button>
                <button><span className='bg-white p-4 rounded-lg text-black hover:bg-yellow-300'>Accessories</span></button>
                <button><span className='bg-white p-4 px-6 rounded-lg text-black hover:bg-yellow-300'>Electronic</span></button>
            </div>
        </div>
    </>
  )
}

export default page