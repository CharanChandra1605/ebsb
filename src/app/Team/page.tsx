"use client"
import React , {useEffect} from 'react'
import Image from 'next/image'
import team from '/public/images/team.jpg'
import ANIRUDH from '/public/images/anirudh.jpg'
import sreejith from '/public/images/sreejith.png'
import events from '/public/images/ravinder.png'
import content from '/public/images/Ruthwika.jpg'
import digi from '/public/images/akanksha.jpeg'
import e1 from '/public/images/event_1.jpg'
import e2 from '/public/images/event_2jpg.jpg'
import e3 from '/public/images/event_3.jpg'
import e4 from '/public/images/event_4.jpg'
import d1 from '/public/images/digi_1.jpg'
import charan from '/public/images/charan.jpg'
import d2 from '/public/images/digi_2.jpg'
import d3 from '/public/images/digi_3.jpg'
import d4 from '/public/images/digi_4.jpg'
import c1 from '/public/images/c1.jpg'
import c2 from '/public/images/c2.jpg'
import c3 from '/public/images/c3.jpg'
import { motion, AnimatePresence } from "framer-motion"
import { Helmet } from 'react-helmet'
import AOS from 'aos'
import "aos/dist/aos.css"


export const Team = () => {
  

  return (
   
        
    <div className='bg bg-gradient-to-r from-yellow-100 to-red-100'>
      <Helmet> <title> EBSB| Team</title></Helmet>
  <div  data-aos="fade-up" className=' w-full items-center grid grid-cols-1 p-4 text-7xl justify-center font-bold object-center text-center '> 
  <div  data-aos="fade-up" className='justify-center p-4 m-auto'>
  <Image   data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-210 items-center object-fill h-104 w-112 rounded-lg justify-center' src={team} alt='team'  ></Image>
  </div>
          </div>
          
   <section  data-aos="fade-up" className='m-auto p-4 text-center sm:grid sm:grid-cols-1 md:flex object-fill justify-center bg-gradient-to-r from-yellow-100 to-red-100'>
    <div className='m-9 p-10 content-center justify-center object-fill justify-self-stretch'>
    <ul  data-aos="fade-up" className='justify-between grid-rows-2'>
      <li   className=' p-1 text-center text-orange-500  text-4xl'>Overall Head</li>
      <li className='p-1   text-2xl'>Anirudh Raghav</li>
    </ul>
    </div>
    <div  data-aos="fade-up" className='p-4  w-sm'> 
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 -z-1 items-center object-fill h-90 w-96 rounded-lg' src={ANIRUDH}  alt='overal head'>
       </Image></div>

   </section>
  <section  data-aos="fade-up" className='m-auto p-4 text-center sm:grid sm:grid-cols-1 md:flex object-fill justify-center bg-gradient-to-r from-yellow-100 to-red-100'>
  <div  data-aos="fade-up" className='p-4  '> 
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-96 w-96 rounded-lg' src={sreejith}  alt='overal head'>
       </Image></div>
       <div  data-aos="fade-up" className=' m-9 p-10 content-center justify-center object-fill justify-self-stretch'>
    <ul  data-aos="fade-up" className='justify-between grid-rows-2'>
      <li className=' p-1 text-center text-orange-500  text-3xl'>Vice Overall Head</li>
      <li className='p-1  text-center text-2xl'>Sreejith</li>
    </ul>
    </div>
  </section>


    <section  data-aos="fade-up" className='w-full p-4 justify-between p-4 sm:grid sm:grid-cols-1 md:flex justify-between items-center bg-gradient-to-r from-yellow-100 to-red-100'>
    <div data-aos="fade-up" className= 'p-4  '>
      <div  data-aos="fade-up" className=' grid m-auto p-4 space-x-4 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
        <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 backdrop-blur-lg rounded-lg m-5 float-right items-center object-fill h-187 w-96 space-x-4 transition hover:bg-black/75' src={events} alt='events'>
          
        </Image>
        <div  data-aos="fade-up" className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-orange-500  text-3xl'>Events Head</li>
      <li className=' p-1  text-2xl'>Ravinder</li>
    </ul>
    </div>
      </div>
      </div>
     
    </div>
    <div  data-aos="fade-up" className='m-auto grid grid-cols-2 gap-4 justify-center rounded-md'>
    <div  data-aos="fade-up" className=' m-auto p-2 space-x-2 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-56 rounded-lg' src={e1} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Ashitosh</li>
      <li className=' p-1 text-center text-1xl'>Events Coordinator</li>
    </ul>
    </div>

      </div>
      </div>

<div className=' m-auto p-2 space-x-2 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-56 w-56 rounded-lg' src={e2} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Rushabh</li>
      <li className=' p-1 text-center text-1xl'>Events Coordinator</li>
    </ul>
    </div>

      </div>
      </div>
<div  data-aos="fade-up" className=' m-auto p-2 space-x-2 '>
        <div className='p-2 grid grid-col-2 justify-evenly'>
      <Image   data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-48 rounded-lg' src={e3} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Titeeksha</li>
      <li className=' p-1  text-1xl'>Events Coordinator</li>
    </ul>
    </div>

      </div>
      </div>
    
      <div  data-aos="fade-up" className=' m-auto p-2 space-x-2 '>
        <div className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-48 rounded-lg' src={e4} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Vedhant</li>
      <li className=' p-1  text-1xl'>Events Coordinator</li>
    </ul>
    </div>

      </div>
      </div> </div>
    </section>
  
    <section  data-aos="fade-up" className='w-full bottom-4 p-4 justify-between sm:grid sm:grid-cols-1 md:flex justify-between items-center bg-gradient-to-r from-yellow-100 to-red-100'>
    <div className= 'p-4  '>
      <div  data-aos="fade-up" className=' grid m-auto p-4 space-x-4 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
        <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 backdrop-blur-lg rounded-lg m-5 float-right items-center object-fill h-88 w-96 space-x-4 transition hover:bg-black/75' src={digi} alt='events'>
          
        </Image>
        <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-orange-500  text-3xl'>Digital and Social Media Head</li>
      <li className=' p-1  text-2xl'>Akansha</li>
    </ul>
    </div>
      </div>
      </div>
     
    </div>
    <div className='m-auto grid grid-cols-2 gap-4 justify-center rounded-md'>
    <div  data-aos="fade-up" className=' m-auto p-2 space-x-2 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-56 rounded-lg' src={d1} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Ansh</li>
      <li className=' p-1 text-center text-1xl'>Design Coordinator</li>
    </ul>
    </div>

      </div>
      </div>

<div className=' m-auto p-2 space-x-2 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-56 w-56 rounded-lg' src={d2} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Nilay</li>
      <li className=' p-1 text-center text-1xl'>Design Coordinator</li>
    </ul>
    </div>

      </div>
      </div>
<div className=' m-auto p-2 space-x-2 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-48 rounded-lg' src={d3} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Santhoshi Gayatri</li>
      <li className=' p-1  text-1xl'>Social Media Coordinator</li>
    </ul>
    </div>

      </div>
      </div>
    
      <div className=' m-auto p-2 space-x-2 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-56 w-40 rounded-lg' src={d4} alt='event_coord'></Image>
      <div  className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Saunam halder</li>
      <li className=' p-1  text-1xl'>Social Media Coordinator</li>
    </ul>
    </div>

      </div>
      </div> </div>



  </section>

  <section  data-aos="fade-up" className='w-full bottom-4 p-4 justify-between sm:grid sm:grid-cols-1 md:flex justify-between items-center bg-gradient-to-r from-yellow-100 to-red-100'>
    <div className= 'p-4 '>
      <div className=' grid m-auto p-4 space-x-4 '>
        <div  data-aos="fade-up" className='p-2 grid grid-col-2 justify-between'>
        <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 backdrop-blur-lg rounded-lg m-5 float-right items-center object-fill h-88   w-96 space-x-4 transition hover:bg-black/75' src={content} alt='content'>
          
        </Image>
        <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-orange-500 text-3xl'>Content Head</li>
      <li className=' p-1  text-2xl'>Ruthwika</li>
    </ul>
    </div>
      </div>
      </div>
     
    </div>
    <div className='m-auto grid grid-cols-2 gap-4 justify-center rounded-md'>
    <div  data-aos="fade-up" className=' m-auto p-2 space-x-2 '>
        <div className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-56 rounded-lg' src={c1} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-up" className='justify-between'>
      <li className=' p-1 text-center text-2xl'>Makarand</li>
      <li className='  text-center text-1xl'>Content Coordinator</li>
    </ul>
    </div>

      </div>
      </div>

<div data-aos="fade-down" className=' m-auto p-2 space-x-2 '>
        <div className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-downd" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-56 w-56 rounded-lg' src={c2} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-down" className='justify-between'>
      <li className=' text-center text-2xl'>Sanika</li>
      <li className=' p-1 text-center text-1xl'>Content Coordinator</li>
    </ul>
    </div>

      </div>
      </div>
<div   data-aos="fade-down" className=' m-auto p-2 space-x-2 '>
        <div className='p-2 grid grid-col-2 justify-evenly'>
      <Image  data-aos="fade-down" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-64 w-48 rounded-lg' src={c3} alt='event_coord'></Image>
      <div className='p-2 text-center grid justify-center '>
    <ul  data-aos="fade-down" className='justify-between'>
      <li className=' text-center  text-2xl'>Shubham</li>
      <li className='  text-1xl'>Content Coordinator</li>
    </ul>
    </div>

      </div>
      </div>
    
       </div>



  </section>
  <section  data-aos="fade-up" className='m-auto p-4 text-center sm:grid sm:grid-cols-1 md:flex object-fill justify-center bg-gradient-to-r from-yellow-100 to-red-100'>
    <div className='m-9 p-10 content-center justify-center object-fill justify-self-stretch'>
    <ul  data-aos="fade-up" className='justify-between grid-rows-2'>
      <li   className=' p-1 text-indigo-800 text-center text-4xl'>Web Page Designer</li>
      <li className='p-2 text-2xl'>Charan Chandra</li>
    </ul>
    </div>
    <div  data-aos="fade-up" className='p-4 justify-center '> 
      <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 -z-1 items-center object-fill h-90 w-96 rounded-lg' src={charan}  alt='overal head'>
       </Image></div>

   </section>

    </div>
    

  )
}
export default Team;
