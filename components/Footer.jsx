import Link from 'next/link'
import React from 'react'

const Footer = () => {
   return (
      <footer className='flex flex-col justify-between items-center w-full max-w-[1440px] h-[25vh] bg-zinc-200 text-zinc-600 p-8'>
         <div className='flex flex-col justify-around w-full h-full'>
            <Link href='/Contact'>
               <p>Whatsapp</p>
            </Link>
            <Link href='/Contact'>
               <p>Instagram</p>
            </Link>
            <Link href='/Contact'>
               <p>All Products</p>
            </Link>
            <div>
               <p>Copyright 2022 | All rights reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
