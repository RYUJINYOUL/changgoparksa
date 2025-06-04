import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'

function page (){
  return (
    <div>
    <div className='md:my-25 mt-15 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
    
          <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>안내</div>
          <hr className="mt-1 h-0.5  md:block hidden md:bg-neutral-700 border-t-0 bg-neutral-700 opacity-100 w-[40px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1060px]"/>
       </div>
       </div>
       </div>
        <div className='md:mt-5' />
          <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosahEK0nY.jpeg"}
          />

           <div className='flex flex-col md:w-[1100px] w-full md:mt-20 mt-5'>
            <div className='text-[15px] font-semibold'>"노동부지정 울산 건설기초안전보건교육장"</div>
             <hr className="h-[1px] mt-10 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1100px] w-full"/>
            <div className='text-[15px] text-[#333333] mt-15'>
              <p>
                (공지)
                <br />
                2025년도&nbsp;취약계층&nbsp;무료교육&nbsp;시작합니다.
                <br />
                (1/2일부터~&nbsp;선착순)
                <br />
                <br />
                ●평일(월~금)오전&nbsp;09:00-13:00시(4시간)
                <br />
                ●평일(월~금)오후&nbsp;13:30-17:30시(4시간)
                <br />
                ●토요일&nbsp;오전&nbsp;09:00-13:00시(4시간)
                <br />
                ●교육후&nbsp;당일&nbsp;이수증&nbsp;발급&nbsp;가능
                <br />
                ●교육비:&nbsp;7만원(현금/카드/이체가능)
                <br />
                ●준비물:&nbsp;신분증&nbsp;(이수증&nbsp;사진&nbsp;촬영&nbsp;무료)&nbsp;
                <br />
                <br />
                "고용노동부와&nbsp;안전보건공단&nbsp;지정교육기관"
                <br />
                ☎전화문의:&nbsp;052-988-0070&nbsp;/&nbsp;010-4555-0068
                <br />
                <br />
              </p>
            </div>
          </div>

    
      
       </section>
      
       </div>
        <Footer />
       </div>
  )
}

export default page
