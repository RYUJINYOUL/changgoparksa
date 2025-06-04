import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'


function page (){

  return (
    <div>
    <div className='md:my-25 my-15 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
    
          <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>회사소개</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700  border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
       </div>
       </div>
        <div className='mt-5' />
          <Image
                    alt="mediaItem"
                    className="object-contain"
                      width={1100}
                      height={560}
                    src={"/Image/mosaKj5QRH.jpeg"}
                  />  

          
         
    
      
       </section>

       <div className='h-[150px]'/>
      
       </div>
        <Footer />
       </div>
  )
}

export default page
