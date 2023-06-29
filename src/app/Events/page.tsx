"use client"
import React from 'react'
import Image  from 'next/image';
import ebsb from '/public/images/133814.jpg'
import lan from '/public/images/17558.jpg'
import holi from '/public/images/Holi.jpg'
import bath from '/public/images/b1png.png'
import sky from '/public/images/sky.png'
import d1 from '/public/images/diya.png'
import r1 from '/public/images/r1.png'
import l1 from '/public/images/l1jpg.jpg'
import s1 from '/public/images/s1.jpg'
import  Helmet from 'react-helmet'
import{ motion}  from 'framer-motion'
 ``
const variants = {
  hidden : {opacity:0},
  
  show : {
    opacity : 2,
    animate:{ y:50},
    transition : {staggerChildren :0.3, delay :0.25},
  },
};

const images = {
  hidden: {
    opacity : 0,
    x : 30,
  },
  show : {
    opacity :1,
    x:0,
    transition : { duration : 0.25}
  },
};

export const Events = () => {
  return (
    <div className='text-1.5xl'>
      <Helmet>
        <title>EBSB | Events</title>
      </Helmet>
      <motion.div
      variants={variants}
      initial ="hidden"
      animate ="show"

      >
      <section data-aos="fade-up"  className=' items-center grid grid-cols-3 p-4 text-7xl justify-center font-bold object-center text-center '> 
  < div data-aos="fade-up" className='justify-center p-4 '>
    
  <Image  data-aos="fade-up" className=' transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-96 w-96 rounded-2xl justify-center' src={ebsb} alt='team'  ></Image>
  </div>
          <div className='justify-center p-4 m-auto'>
  <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-96 w-96 rounded-2xl justify-center' src={lan} alt='Holid'  ></Image>
  </div>

          <div className='justify-center p-4 m-auto'>
  <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 items-center object-fill h-96 w-88 rounded-2xl justify-center' src={holi} alt='Holi'  ></Image>
  </div>
          </section>
          </motion.div>

          <motion.div
      variants={variants}
      initial ="hidden"
      animate ="show"

      >          <section  data-aos="fade-up" className=' bg-yellow-50 p-4 m-auto grid grid-cols-2 gap-4 justify-center bg-color' >
            
           <div className='p-5 m-auto space-x-5  '>
             <Image  data-aos="fade-up" className='transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-96 h-88' src={bath} alt='Lohri_celebrations' />
           </div>
           <div  data-aos="fade-down" className='p-4 space-x-4'>
              
           <p  data-aos="fade-down" className='  p-4 text-neutral-900  text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Bathukamma is a flower-festival celebrated by the women of Telangana and some parts of Andhra Pradesh  Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and rangoli making contest was organized near the mess where the students, faculty and staff showcased their artistic talents.Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and Bathukamma contest was organized near the mess where the students, faculty and staff showcased their artistic talents.</p>
             </div>
   

          </section>
          </motion.div>
   
          
          <motion.div
      variants={variants}
      initial ="hidden"
      animate ="show"

      >   
          <section  data-aos="fade-up" className=' bg-yellow-50 p-4 m-auto grid grid-cols-2 gap-4 justify-center bg-color' >
            
           <div className='p-4 space-x-4'>
              
           <p  data-aos="fade-down" className='  p-10 text-neutral-900  text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Bathukamma is a flower-festival celebrated by the women of Telangana and some parts of Andhra Pradesh  Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and rangoli making contest was organized near the mess where the students, faculty and staff showcased their artistic talents.Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and Bathukamma contest was organized near the mess where the students, faculty and staff showcased their artistic talents.</p>
             </div>
   
             <div  data-aos="fade-up" className='p-5 space-x-4   m-auto '>
             <Image  data-aos="fade-up" className=' transition duration-300 ease-in-out hover:scale-110 p-4 rounded-3xl shadow-2xl justify-center w-96 h-88' src={sky} alt='Lohri_celebrations' />
           </div>
         
          </section> </motion.div>


          <motion.div
      variants={variants}
      initial ="hidden"
      animate ="show"

      >   
          <section  data-aos="fade-up" className='  bg-gradient-to-r from-yellow-100 to-fuchsia-100  p-4 m-auto grid grid-cols-2 gap-4 justify-center bg-color' >
            
            <div className='p-5 m-auto space-x-5  '>
              <Image  data-aos="fade-up" className=' transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-96 h-88' src={d1} alt='Lohri_celebrations' />
            </div>
            <div  data-aos="fade-up" className='p-4 space-x-4'>
               
            <p  data-aos="fade-up" className='  p-4 text-neutral-900  text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Diya paintings are a popular form of art in India, especially during the Diwali festival. Diyas are small clay lamps that are lit during Diwali to symbolize the victory of good over evil. Diya paintings typically feature intricate designs and patterns, often inspired by Hindu mythology and symbolismDiya painting is a popular form of art in India, especially during the Diwali festival. Diyas are small clay lamps that are lit during Diwali to symbolize the victory of good over evil. Diya paintings typically feature intricate designs and patterns, often inspired by Hindu mythology and symbolism.There are many different ways to create diya paintings. Some people use acrylic paint, while others prefer to use oil paint or even watercolors. .</p>
              </div>
    
 
           </section>
</motion.div>


<motion.div
      variants={variants}
      initial ="hidden"
      animate ="show"

      >   
           <section  data-aos="fade-up" className='  bg-gradient-to-r from-yellow-100 to-fuchsia-100 p-4 m-auto grid grid-cols-2 gap-4 justify-center bg-color' >
            
            <div  data-aos="fade-up" className='p-4 space-x-4'>
               
            <p  data-aos="fade-up" className='  p-10 text-neutral-900  text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Students away from their homes often miss the festivities of the house. In our attempt to give the IITH campus a flavour of home, a diya decoration and rangoli making contest was organized near the mess where the students, faculty and staff showcased their artistic talents.Rangoli competitions are a popular way to celebrate festivals and other special occasions in India. These competitions typically involve participants creating intricate and beautiful rangolis, or floor art, using a variety of materials, such as rice flour, sand, or colored powder.
..</p>
              </div>
    
              <div  data-aos="fade-up" className='p-5 space-x-4   m-auto '>
              <Image  data-aos="fade-up" className=' transition duration-300 ease-in-out hover:scale-110 p-4 rounded-2xl shadow-2xl justify-center w-96 h-90' src={r1} alt='Lohri_celebrations' />
            </div>
          
           </section>
</motion.div>

<motion.div
      variants={variants}
      initial ="hidden"
      animate ="show"

      >   
         <section  data-aos="fade-up" className='grid grid-rows-1 gap-4 space-x-4 justify-center p-4 m-auto bg-blue-50 '>
                         <div  data-aos="fade-up" className='p-4 justify-center flex justify-between  '>
                             <Image  data-aos="fade-up" className=' m-auto transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-72 h-72' src={l1} alt='l1'></Image>
                             <Image  data-aos="fade-up" className='m-auto transition duration-300 ease-in-out hover:scale-110 rounded-3xl outline-4 shadow-2xl justify-center w-72 h-72 ' src={s1} alt='l1'></Image>
                       </div>      
                       <div  data-aos="fade-up" className='p-4 space-x-4 grid grid-rows-1 justify-center'>
              
              <p  data-aos="fade-up" className=' text-justify p-4 text-neutral-900  text-justify m-auto indent-8 whitespace-normal flex justify-center items-center '>Lohri is a popular winter Punjabi folk festival celebrated primarily in Northern India. The significance and legends about the Lohri festival are many and these link the festival to the Punjab region. It is believed by many that the festival marks the passing of the winter solstice.
           Under the  Ek Bharat Shreshtha Bharat club of IIT Hyderabad, all the students and faculty witnessed a vibrant Lohri celebration on 13th of January which started with a bonfire. The students along with the Director Prof. B. S. Murthy and Dean Students, Prof. P. Raja Lakshmi burnt the Lohri and celebrated according to the Punjabi traditions and customs.</p>
                </div>

         </section>
          </motion.div>  
</div>
  )
}
export default Events;
