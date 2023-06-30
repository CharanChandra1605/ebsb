import React from 'react'
import Link from 'next/link'
import {ImFacebook,ImInstagram,ImLinkedin, ImTwitter} from "react-icons/im"
export const Footer = () => {
  return (
    <footer  className='bg-gray-900 text-white ' >
      <div className=' p-4 grid md:grid-cols-3 sm:grid-cols-1  m-auto object-center justify-center flex ' >
        <div className=' p-4'>
          <div className='p-4'> 
            <span className='object-left-bottom p-4 text-3xl'>Follow us on</span> </div>
            <div className=' flex justify-center object-center p-3 m-auto  '>
                <div className='flex gap-6'>
                <a href='https://www.facebook.com/people/Ebsb-club-iith/100070286642769/' className='hover:text-amber-400 transition ease-in-out hover:-translate-y-3 hover:text-2xl duration-300 text-2xl'><ImFacebook> Facebook </ImFacebook> </a>
                <a href='https://www.instagram.com/ebsb_club_iith/' className='hover:text-amber-300 transition ease-in-out hover:-translate-y-3 hover:text-2xl duration-300 text-2xl'> <ImInstagram > Instagram</ImInstagram></a>
                <a href='https://twitter.com/ClubEbsb' className='hover:text-amber-300 transition ease-in-out hover:-translate-y-3 hover:text-2xl duration-300 text-2xl'> <ImTwitter> LinkedIn</ImTwitter></a>
                </div>
            </div>
                </div>
        <div className='p-3 m-auto text-2xl'> <span className='text-3xl'> Quick Links</span>
        <ul className='p-2 text-1xl object-center'>
          <Link href= "/Events"  >  <li  className='p-3 justify-between hover:text-yellow-300 transition ease-in-out hover:-translate-y- hover:text-2xl duration-300'> Events</li></Link>
           <Link href= "/Team"  > <li className='p-3 justify-between hover:text-yellow-300 transition ease-in-out hover:-translate-y-3 hover:text-2xl duration-300'>Team</li></Link>
           <Link href= "/Gallery"  ><li className='p-3 justify-between hover:text-yellow-300 transition ease-in-out hover:-translate-y-3 hover:text-2xl duration-300'>Gallery</li></Link>
        </ul>
         </div>
        <div className='p-10 object-center '> <span className='text-3xl'> Contact us on </span> 
        <div className='p-4 left-0 top-0 object-center m-auto hover:text-amber-200'>ebsbclub@campus.iith.ac.in </div>
        </div> 
    </div>

    </footer>
  )
}
export default Footer;