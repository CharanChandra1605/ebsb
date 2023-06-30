"use client"
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import l from '/public/images/ebsblogo.png'
import { motion } from 'framer-motion'
import {usePathname} from 'next/navigation'
import { Helmet } from 'react-helmet';

const links=[
    {
        id : 1,
        title : "Home",
        url : '/Home',
    },
    {
        id : 2,
        title : "Events",
         url : "/Events",  
    },
    {
        id : 3,
        title : "Team",
        url : "/Team",
    },
    {
        id : 4,
        title : 'Gallery',
        url : "/Gallery",
    },
]

export const Navbar = () => {

    const path =usePathname();
    return (

    <div className='max-w-full fixed bg-gradient-to-r from-yellow-100 to-fuchsia-100 rounder-3xl p-4 flex justify-between items-center' style={{
        position : 'inherit',
    }}>
       <Link href= "/Home"  className={`${"/Home"==path ?  "text-orange-500 text-2xl font-bold": "text-cyan-500 "}`} > 
       <Image className='text-3xl hover:text-5xl hover:text-cyan-500' src={l} alt='logo' width={60} height={30} ></Image>

       </Link>
        <div className=''>
            {links.map((link)=>(
                <Link key={link.id} href={link.url} className={`${link.url==path ? "text-orange-500 text-2xl font-bold": "text-cyan-500 "}`}>
                  <span className='p-3 text-amber-800 hover:text-orange-300 transition ease-in-out hover:-translate-y-6 hover:text-2xl duration-300'>
                    
                     {link.title}
                  
                   </span> 
                </Link>
            ))}
        </div>
    </div>
  )
}
export default Navbar;