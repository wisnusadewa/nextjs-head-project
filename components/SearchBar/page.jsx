import React from 'react'

const SearchBar = () => {

  
    return (
    <>
      <div
      className='flex w-full bg-blue-200 mb-20' 
      >
        <div className='flex w-full'>
          <input className='w-3/4' type="text" placeholder='search product here...' />
        
          <button className='w-1/4 flex justify-center items-center bg-yellow-300 text-black hover:bg-black hover:text-white'>Search</button>  
        </div>
        
      </div>
    
    
    </>
  )
}

export default SearchBar;