import React from 'react'
import Image from 'next/image'
import search from '../public/src.svg'
import Link from 'next/link'

const Header = () => {

   return (
      <div className='fixed w-full h-min z-10'>
         <header className='flex justify-between items-center px-6 w-full max-w-[1440px] bg-white h-20'>
            <h1 className='text-black text-2xl font-bold'>Raslboutique</h1>
            <Image id='srcBtn' className='cursor-pointer' width='40px' height='40px' src={search} alt='logo'/>
         </header>
         <nav className='flex justify-center w-full bg-zinc-200 text-zinc-600 font-semibold'>
            <ul className='flex w-full max-w-2xl justify-between px-6'>
              <li>
                 <Link href='/Home' passHref>
                    <p className='cursor-pointer lg:hover:text-zinc-400'>Home</p>
                 </Link>
               </li>
              <li>
                 <Link href='/Product' passHref>
                    <p className='cursor-pointer lg:hover:text-zinc-400'>Product</p>
                 </Link>
               </li>
              <li>
                 <Link href='/Contact' passHref>
                    <p className='cursor-pointer lg:hover:text-zinc-400'>Contact</p>
                 </Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Header