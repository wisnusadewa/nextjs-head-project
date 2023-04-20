import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useRouter } from 'next/router';


const Header = () => {

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const { asPath } = useRouter()
  
  const handleNav = () => {
    setNav(!nav)
  };

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90) {
        setColor('white')
        setTextColor('black')
      } else {
        setColor('transparent')
        setTextColor('white')
      }
    } ;
    window.addEventListener('scroll', changeColor)
  }, []);

  return (
    <>
   <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
    <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
      <Link href='/'>
        <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>CodeFreak</h1>
      </Link>
        <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
          
          <li className='p-4'>
              <Link href='/' className={asPath === '/' ? 'text-lime-600' : ''}>Home</Link>
          </li> 
          <li className='p-4'>
              <Link href='/#gallery' className={asPath === '/#gallery' ? 'text-lime-600' : ''}>Gallery</Link>
          </li> 
          <li className='p-4'>
              <Link href='/about' className={asPath === '/about' ? 'text-lime-600' : ''}>About Me</Link>
          </li> 
               
        </ul>

      {/* Mobile button*/}
      <div onClick={handleNav} className='block sm:hidden z-10'>
        {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> 
        : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
      </div>
    
      {/* Mobile List Menu*/}
      <div className={
        nav 
        ? 'absolute sm:hidden justify-center flex top-0 left-0 right-0 bottom-0 w-full h-screen text-center items-center bg-black ease-in duration-300' :
        'absolute sm:hidden justify-center flex top-0 left-[-100%] right-0 bottom-0 w-full h-screen text-center items-center bg-black ease-in duration-300'
      }>
        <ul>
            <li className='text-4xl p-4 hover:text-lime-600'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-4xl p-4 hover:text-lime-600'>
              <Link href='/about'>About Me</Link>
            </li>
        </ul>
      </div>

    </div>
   </div>
   </>
  )
}

export default Header;