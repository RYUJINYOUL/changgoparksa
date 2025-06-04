// "use client"
import React from 'react'
import Image from "next/image";
import moment from 'moment';
import Footer from '@/components/template/Footer'
import Comment from '@/components/template/comment'



const page = async (props) => {
   const timeFromNow = timestamp => moment(timestamp).format('YYYY.MM.DD');
   const name = await props.searchParams.name
   const des= await props.searchParams.des
   const date= await props.searchParams.date
   const title= await props.searchParams.title
   const id= await props.searchParams.id
   let url= await props.searchParams.url


  


  return (
    <div>
      <div className='lg:my-10 p-3.5 w-full'>
      <section className="flex gap-[50px] min-h-1/2 flex-col justify-center items-center">
 
        <div className='mt-10' />
        <div className='flex flex-col lg:w-[1100px] w-full'>
        <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-full'>
      
          <div className='lg:text-start font-semibold text-center text-[20px]'>{title}</div>

          <div className='lg:text-end text-center text-[14px]'>{name} | {timeFromNow(date)}</div>

       </div>
          <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/>
          <div className='mt-10' />
          <div className='text-[15px] h-[150px] text-start leading-7'>{des}</div>
          <div className='mt-10' />
          {/* <hr className="my-1 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50"/> */}
          <div className='mt-10' />
        </div>
      </section>
   
   

      <div className='bg-[#fafafa]' />

      <Comment props={id}/>
      
      
       <section className='flex justify-center items-center'>

       <div className='w-[1100px] mt-8 flex flex-row items-center gap-8'>
       <Image
          alt="mediaItem"
          className="object-contain"
          width={130}
          height={130}
          src={"/Image/mainmiddle.jpeg"}
        />  
        <div className='text-[18px]'>루틴그라운드 개포</div>
        </div>
       </section>
       <div className='h-[150px]'/>
      
       </div>
          <Footer />
       </div>
  )
}

export default page

