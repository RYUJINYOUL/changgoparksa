import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'
import Phone from '@/components/ui/phone';
import { BsTelephone } from "react-icons/bs";

function page (){
  return (
    <div className='relative top-20'>
       <div className='lg:my-10 p-3.5'>
      <div className='md:mt-0 mt-3' />
      
      <section className='flex flex-col justify-center items-center'>
        
        <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
             <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px] md:text-[#001391] text-[#000000]'>이용안내</div>
          <hr className="mt-1 h-0.5 md:bg-[#001391] bg-white border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[10px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1030px]"/>
       </div>
    
       </div>
       </div>

        <div className='md:mt-7 mt-1'/>
                <Phone />
        <div className='mt-7'/>

        <div className='md:mt-8 mt-1' />
           {/* ---start--- */}  
                <section className='flex flex-col justify-center items-center'>
               
               <div className='flex flex-col'>
               <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
                   <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
                   <div className='text-start font-semibold text-[20px] text-[#001391]'>개인시설</div>
                   <hr className="mt-1 h-0.5 md:bg-[#001391] bg-white border-t-0 bg-neutral-700 opacity-100 w-[110px] dark:opacity-50"/>
                </div>
                </div>
                </div>
               
                <div className='md:mt-7 mt-2' />
                 
                <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                 <Image
                   alt="mediaItem"
                   className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosapTi9lG.jpeg"}
                 />
            
         
                 <Image
                   alt="mediaItem"
                   className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosa0tPNd1.jpeg"}
                 />  
         
               </div>
         
                <div className='md:mt-3 mt-1'/>

                 <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
                        <div className='md:mt-10' />
                          <div className='text-[15px] text-[#222222] block truncate text-start'>
                            침대, 책상, 옷장, 냉장고, 세탁기, 에어컨</div>
                          <div className='mt-1' />
                          <div className='text-[15px] text-[#222222] block truncate text-start'>
                            화장실, 샤워기, CCTV, 전자렌지, 도어락</div>
                             <div className='text-[15px] text-[#222222] truncate text-start'>
                            인터넷, Wi-Fi</div>
                          <div className='md:mt-10 mt-1' />
                          <div className='md:hidden block flex flex-col md:h-[40px] h-[10px] justify-end'>
                          <div className='md:mt-10 mt-1' />
                        </div>  
                  </div>

               <div className='md:mt-3 mt-1'/>   
         
               <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1 rounded-md'>
                 <Image
                   alt="mediaItem"
                 className="md:w-[350px] md:h-[350px] w-[110px] h-[110px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosad2oAnf.jpeg"}
                 />
            
         
                 <Image
                   alt="mediaItem"
                   className="md:w-[350px] md:h-[350px] w-[110px] h-[110px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosa8DNMqr.jpeg"}
                 />  
         
                 <Image
                   alt="mediaItem"
                    className="md:w-[350px] md:h-[350px] w-[110px] h-[110px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosaUg4MYi.jpeg"}
                 />   
               </div>
         
               <div className='md:mt-0 mt-1'/>
         
               <div className='md:hidden block md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1 rounded-md'>
                  <Image
                   alt="mediaItem"
                 className="md:w-[350px] md:h-[350px] w-[110px] h-[110px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosazV1S1U.jpeg"}   
                 />
            
         
                 <Image
                   alt="mediaItem"
                   className="md:w-[350px] md:h-[350px] w-[110px] h-[110px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosaZppelt.jpeg"}
                 />  
         
                 <Image
                   alt="mediaItem"
                    className="md:w-[350px] md:h-[350px] w-[110px] h-[110px] rounded-md"
                   width={350}
                   height={350}
                   src={"/Image/mosao63LFE.jpeg"}
                 />   
                 </div>
         
                <div className='md:mt-0 mt-7' />
         
                 {/* ---start--- */}
                    <section className='md:hidden block'>
                    <div className='md:mb-18 mb-1'></div>
                    <hr className="h-2.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 md:w-[1000px] w-screen"/>
                    </section>
                 {/* ---end--- */}

                    <div className='md:mt-20 mt-7' />
                    <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[1100px]"/>
                    <div className='md:mt-20' />
                 {/* ---start--- */}
                     <section className='flex flex-col justify-center items-center'>
                       
                       <div className='flex flex-col'>
                       <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
                           <div className='lg:px-0 px-3 flex flex-col md:h-[40px] h-[20px] justify-end'>
                           <div className='lg:text-start font-semibold text-center text-[20px] text-[#001391]'>공용시설</div>
                           <hr className="mt-1 h-0.5 md:bg-[#001391] bg-white border-t-0 bg-neutral-700 opacity-100 w-[70px] dark:opacity-50"/>
                        </div>
                        </div>
                        </div>

                  <div className='flex md:p-0 p-3 flex-col md:w-[1100px] w-full'>
                        <div className='md:mt-10' />
                          <div className='text-[15px] text-[#222222] block truncate text-start'>
                           주방 냉장고, 전자렌지, 인덕션, 정수기, 식탁</div>
                          <div className='mt-1' />
                          <div className='text-[15px] text-[#222222] block truncate text-start'>
                            엘리베이터, 도어락, CCTV, 화재감지기,경보기</div>
                          <div className='md:mt-10 mt-1' />
                          <div className='md:hidden block flex flex-col md:h-[40px] h-[10px] justify-end'>
                          <div className='md:mt-10 mt-1' />
                        </div>  
                  </div>
                       
                        
                      
                 
                       <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                        <div className='md:mt-7 mt-1.5'/>
                 
                       <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                         <div className='md:mt-7 mt-1.5'/>
                 
                      <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                          <div className='md:mt-7 mt-1.5'/>


                         <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                          <div className='md:mt-7 mt-1.5'/>


                         <div className='md:w-[1100px] w-full md:px-0 px-3 flex flex-row justify-start items-start md:gap-7 gap-1.5 rounded-md'>
         
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosapTi9lG.jpeg"}
                          />
                      
                  
                          <Image
                            alt="mediaItem"
                            className="md:w-[536px] md:h-[536px] w-[170px] h-[170px] rounded-md"
                            width={350}
                            height={350}
                            src={"/Image/mosa0tPNd1.jpeg"}
                          />  
                  
                        </div>
                 
                          <div className='md:mt-7 mt-1.5'/>
                 
                   
                        </section>
                 
                     {/* ---end--- */}  
         
                 
                
          
                 </section>
               {/* ---end--- */}  
     
      </section>
   
       <div className='mt-20'/>
       </div>
       <Footer />
    </div>   
  )
}

export default page
