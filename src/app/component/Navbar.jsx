"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import  logo  from "../../../public/logo.png";
import Link from 'next/link';
import { RxHamburgerMenu}  from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    
   const [menuOpen, setMenuOpen] = useState(false)

   const handleNav = ()=>{
    setMenuOpen(!menuOpen)
   }
  return (
    <div>
        <nav className='fixed shadow-xl w-screen bg-white h-32 '>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href={'/'} >  
            
        <Image
        src={logo}
       alt='logo'
       width={200}
       height={70}
        className='rounded-md'
        />
        </Link>
      <div className='hidden sm:flex '>
            <ul className=' hidden uppercase sm:flex'>
                <Link href={'/'}><li className='ml-10  hover:border-b text-xl'>Home</li></Link>
                <Link href={'/services'}><li className='ml-10 hover:border-b text-xl'>Service</li></Link>
                <Link href={'/company'}><li className='ml-10  hover:border-b text-xl'>Company</li></Link>
            </ul>
        
        </div>
        <div className='ml-10 hidden sm:flex'>
        <ul className='ml-10 uppercase  sm:flex hidden'>
          <a href="tel:+2348069930587"><li className='p-5 hover:border-b text-xl'>Phone </li></a> 
            <Link href={'/Book'}><li className=' text-xl hover:border-b p-5'>Book</li></Link>
            </ul>
        </div>
        <div onClick={handleNav}
         className='sm:hidden '>
            <RxHamburgerMenu size={50}/>
            
        </div>
        </div>
        <div className={
            menuOpen
            ? 'fixed left-0 top-0 w-[40%] sm:hidden h-screen shadow-xl shadow-slate-400 bg-slate-200 p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500 '
        }>
            <div onClick={handleNav}
             className='flex w-full items-center justify-end'>
                <AiOutlineClose size={25} className=' cursor-pointer'/>
            </div>
            <ul className='flex-col py-4 uppercase'>
                <Link href={'/'}>
                    <li onClick={()=> setMenuOpen(false)}
                    className='py-4 cursor-pointer'>Home</li>
                    </Link>
                <Link href={'/services'}>
                    <li onClick={()=> setMenuOpen(false)}
                    className='py-4 cursor-pointer'>Service</li>
                    </Link>
                <Link href={'/company'}>
                    <li onClick={()=> setMenuOpen(false)}
                    className='py-4 cursor-pointer'>Company</li>
                    </Link>
                    <a href="+2348069930587">
                    <li onClick={()=> setMenuOpen(false)}
                    className='py-4 cursor-pointer'>Phone</li>
                    </a>
                <Link href={'/Book'} className='bg-blue-400'>
                    <li onClick={()=> setMenuOpen(false)}
                    className='py-4 cursor-pointer bg-blue-500 w-16 rounded-md px-2'>Book</li>
                    </Link>
            </ul>
        </div>
        </nav>

    </div>
  )
}
