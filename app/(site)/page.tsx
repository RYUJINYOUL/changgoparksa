"use client"
import React, { useState } from 'react'
import Notice from '@/components/template/notice'
import Sisul from '@/components/template/sisul'
import ImageGallery from '@/components/template/imageGallery'
import Question from '@/components/template/question'
import SisulNotice from '@/components/template/SisulNotice'
import ChangoSogae from '@/components/template/ChangoSogae'
import Footer from '@/components/template/Footer';
import Mapping from '@/components/template/Mapping';
import CalendarWithEvents from '@/components/template/Calendar'

const page = () => {


return (
     
    <div>
   {/* ---모바일간격--- */}
      <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>   
    {/* ---간격--- */}    

    
    <div className='md:mb-10 mb-4' />
 

   {/* ---모바일 갤러리 사진링크 열기 닫기--- */}
       <Sisul />
    {/* ---end--- */}



    {/* ---모바일간격--- */}
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>
    {/* ---end--- */}
     
     
     
       <div className='md:mb-18 mb-4'></div>
   {/* ---시설안내 start--- */}
      <ChangoSogae />  
   {/* ---end--- */}  
    
    
    
    <div className='md:mb-18 mb-4'></div>
    {/* ---시설안내 start--- */}
       <SisulNotice />
    {/* ---end--- */}  


      <div className='md:mt-0 mt-4' />
      <section className='md:hidden block'>
      <div className='md:mb-18 mb-1'></div>
       <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
       </section>


       <div className='md:h-[30px]' />
       <div className='md:mb-0 mb-4'></div>
     
         {/* 지도 시작 */}
         <Mapping/>
         {/* 지도 끝 */}
    


    {/* <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    */}


         {/* 입실문의 시작 */}
            {/* <Notice /> */}
         {/* 입실문의 끝 */}
   

    {/* <div className='md:mt-0 mt-4' />
    <section className='md:hidden block'>
          <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
      </section>    */}


      {/* 입실문의 시작 */}
            {/* <CalendarWithEvents /> */}
       {/* 입실문의 끝 */}
   
  


    <div className='md:mt-0 mt-1' />

   {/* <div className='md:h-[100px]' /> */}
      <Footer />
   </div>
   
 )
}

export default page;