import React from 'react'
import Image from 'next/image';
import EBSB from '/public/images/ebsb.jpg';
import b1 from '/public/images/b1png.png'

import a1 from '/public/images/a1.jpg'
import s1 from '/public/images/sp1.jpg'
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
 
    <div className='bg-amber-50'>
      
           <div className=' items-center grid grid-cols-1 p-4 text-7xl justify-center font-bold object-center text-center '>  
  <div className='justify-center p-4 m-auto opacity-80'>
  <Image className='transition duration-300 ease-in-out hover:scale-310 items-center object-fill h-screen w-104 rounded-lg justify-center' src={EBSB} alt='team'  ></Image>
  </div> <span className=' p-4 m-auto flex justify-between'> 
   <span className='p-4 text-yellow-500'>
    EBSB
   </span>
   <span className='text-amber-900 p-4 m-auto text-3xl'>
    EK Bharat Shrestha Bharat
   </span>
   </span>
          </div>


 <section className='bg-rose-50 p-4 grid grid-cols-3 gap-2 ' >
            
            <div className='p-5 m-auto space-x-5 grid grid-rows-1 justify-center'>
              <Image className=' m-auto transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-96 h-88' src={b1} alt='Lohri_celebrations' />
              <div className='p-4 m-1 text-center '>
               <div className='text-2xl'> FESTIVALS </div>
                 <div className='text-1xl'> Continue homely felling in campus among the students </div>
                 </div>
            </div>

            <div className='p-5  space-x-5 grid grid-rows-1 justify-center'>
              <Image className=' m-auto transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-72 h-648' src={a1} alt='Lohri_celebrations' />
              <div className='p-3 text-center'>
               <div className='text-2xl p-2'> ARTS AND CULTURE</div>
                 <div className='text-1xl'> Music, dance, theatre, movies & films, painting, sculpture etc </div>
                 </div>
            </div>
          
            <div className='p-4 m-auto space-x-5 grid grid-rows-1 justify-center'>
              <Image className=' m-auto transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-96 h-88' src={s1} alt='Lohri_celebrations' />
              <div className='p-4 m-1 text-center  space-x-4'>
               <div className='text-2xl'> SPORTS & LITERATURE </div>
                 <div className='text-1xl'> Kabaddi, kho kho, poetry, essays, books </div>
                 </div>
            </div>
    
 
           </section>
<div> </div>
           

    </div>
  )
}
export default Home;