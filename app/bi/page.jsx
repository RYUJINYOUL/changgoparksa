import React from 'react'
import Image from "next/image";
import Footer from '@/components/template/Footer'
import Gallery from '@/components/Gallery2'

function page (){


    let slides = [
    "/Image/mosahxUYLJ.jpeg"
     ,
    "/Image/mosa14XYZX.jpeg"
   ]

  return (
    <div>
    <div className='md:my-25 my-15 p-3.5'>
      <section className='flex flex-col justify-center items-center'>
    
          <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col md:justify-between items-start lg:w-[1100px] w-screen'>
          <div className='lg:px-0 px-3 flex flex-col h-[40px] justify-end'>
          <div className='lg:text-start font-semibold text-center text-[20px]'>염색전문점 창업</div>
          <hr className="mt-1 h-0.5 md:bg-neutral-700 bg-white border-t-0 bg-neutral-700 opacity-100 w-[130px] dark:opacity-50"/>
       </div>
       <div className='flex flex-col md:h-[40px] h-[20px] justify-end'>
          <div className='lg:text-end md:block hidden text-center text-[14px]'></div>
          <hr className="mt-1 h-0.5 hidden md:block border-t-0 bg-neutral-200 opacity-100 dark:opacity-50 w-[970px]"/>
       </div>
       </div>
       </div>
        <div className='mt-5' />
          {/* <Image
            alt="mediaItem"
            className="object-contain"
            width={1100}
            height={724}
            src={"/Image/mosahxUYLJ.jpeg"}
          /> */}

            <div className='flex flex-col md:w-[1100px] w-full md:mt-20'>
             <Gallery images={slides} />
           </div>

           <div className='flex flex-col md:w-[1100px] w-full md:mt-20 mt-5'>
            <div className='text-[20px] text-[#001391] font-semibold'>염색전문점의 비전</div>
            <div className='text-[15px] text-[#333333] mt-10'>
              <p>
                염색&nbsp;전문점은&nbsp;미용업계에서&nbsp;독특한&nbsp;위치를&nbsp;차지하며,&nbsp;미래의&nbsp;성장&nbsp;가능성이&nbsp;큰&nbsp;분야&nbsp;중&nbsp;하나입니다.&nbsp;
                <br />
                다음은&nbsp;염색&nbsp;전문점의&nbsp;비전과&nbsp;관련된&nbsp;몇&nbsp;가지&nbsp;주요&nbsp;요인입니다
                <br />
                <br />
                1.&nbsp;증가하는&nbsp;개인화&nbsp;트렌드개인&nbsp;맞춤형&nbsp;서비스:&nbsp;소비자들은&nbsp;점점&nbsp;더&nbsp;자신만의&nbsp;스타일을&nbsp;표현하고자&nbsp;합니다.&nbsp;염색&nbsp;전문점은&nbsp;개인&nbsp;맞춤형&nbsp;염색&nbsp;서비스와&nbsp;컨설팅을&nbsp;통해&nbsp;고객의&nbsp;개성을&nbsp;반영하는&nbsp;스타일을&nbsp;제공할&nbsp;수&nbsp;있습니다
                <br />
                &nbsp;&nbsp;고급&nbsp;염색&nbsp;기술:&nbsp;고급&nbsp;염색&nbsp;기술과&nbsp;제품을&nbsp;사용하여&nbsp;고객의&nbsp;다양한&nbsp;요구를&nbsp;충족시킬&nbsp;수&nbsp;있습니다.
                <br />
                <br />
                2.&nbsp;지속적인&nbsp;미용&nbsp;산업&nbsp;성장미용&nbsp;산업의&nbsp;확장:&nbsp;미용&nbsp;산업은&nbsp;지속적으로&nbsp;성장하고&nbsp;있으며,&nbsp;특히&nbsp;헤어케어와&nbsp;염색에&nbsp;대한&nbsp;수요는&nbsp;꾸준히&nbsp;증가하고&nbsp;있습니다.&nbsp;염색&nbsp;전문점은&nbsp;이러한&nbsp;성장세에&nbsp;힘입어&nbsp;꾸준한&nbsp;수익을&nbsp;창출할&nbsp;수&nbsp;있습니다.
                <br />
                &nbsp;&nbsp;새로운&nbsp;트렌드와&nbsp;기술:&nbsp;염색&nbsp;전문점은&nbsp;최신&nbsp;염색&nbsp;트렌드와&nbsp;기술을&nbsp;빠르게&nbsp;도입하여&nbsp;시장에서의&nbsp;경쟁력을&nbsp;유지할&nbsp;수&nbsp;있습니다.
                <br />
                <br />
                3.&nbsp;지속&nbsp;가능한&nbsp;제품과&nbsp;서비스친환경&nbsp;제품:&nbsp;고객들은&nbsp;점점&nbsp;더&nbsp;친환경적이고&nbsp;자연&nbsp;유래&nbsp;성분을&nbsp;사용한&nbsp;제품을&nbsp;선호합니다.&nbsp;염색&nbsp;전문점은&nbsp;친환경&nbsp;염색&nbsp;제품과&nbsp;지속&nbsp;가능한&nbsp;서비스를&nbsp;제공함으로써&nbsp;고객의&nbsp;기대에&nbsp;부응할&nbsp;수&nbsp;있습니다.
                <br />
                &nbsp;&nbsp;윤리적&nbsp;소비:&nbsp;윤리적&nbsp;소비&nbsp;트렌드에&nbsp;맞춰&nbsp;공정&nbsp;무역&nbsp;제품이나&nbsp;동물&nbsp;실험을&nbsp;하지&nbsp;않은&nbsp;제품을&nbsp;사용하여&nbsp;브랜드&nbsp;이미지를&nbsp;강화할&nbsp;수&nbsp;있습니다.
                <br />
                <br />
                4.&nbsp;교육&nbsp;및&nbsp;전문성&nbsp;강화전문가&nbsp;양성:&nbsp;염색&nbsp;전문점은&nbsp;염색&nbsp;기술과&nbsp;트렌드에&nbsp;대한&nbsp;지속적인&nbsp;교육과&nbsp;훈련을&nbsp;통해&nbsp;전문성을&nbsp;강화할&nbsp;수&nbsp;있습니다.&nbsp;이는&nbsp;고객에게&nbsp;고품질의&nbsp;서비스를&nbsp;제공하는&nbsp;데&nbsp;필수적입니다.
                <br />
                &nbsp;&nbsp;인증&nbsp;프로그램:&nbsp;다양한&nbsp;염색&nbsp;기술과&nbsp;제품에&nbsp;대한&nbsp;인증&nbsp;프로그램을&nbsp;통해&nbsp;신뢰성을&nbsp;높일&nbsp;수&nbsp;있습니다.
                <br />
                <br />
                5.&nbsp;디지털&nbsp;마케팅과&nbsp;온라인&nbsp;예약&nbsp;시스템소셜&nbsp;미디어&nbsp;인스타그램,&nbsp;페이스북&nbsp;등&nbsp;소셜&nbsp;미디어를&nbsp;활용한&nbsp;마케팅은&nbsp;염색&nbsp;전문점의&nbsp;인지도를&nbsp;높이고&nbsp;고객과의&nbsp;소통을&nbsp;강화하는&nbsp;데&nbsp;유용합니다.
                <br />
                &nbsp;&nbsp;온라인&nbsp;예약&nbsp;시스템:&nbsp;편리한&nbsp;온라인&nbsp;예약&nbsp;시스템을&nbsp;도입하여&nbsp;고객의&nbsp;접근성을&nbsp;높이고,&nbsp;예약&nbsp;관리&nbsp;효율성을&nbsp;향상시킬&nbsp;수&nbsp;있습니다
                <br />
                <br />
                6.&nbsp;고객&nbsp;경험&nbsp;향상고객&nbsp;만족도:&nbsp;고객의&nbsp;요구를&nbsp;이해하고,&nbsp;만족도를&nbsp;높이기&nbsp;위한&nbsp;다양한&nbsp;프로그램을&nbsp;운영함으로써&nbsp;충성&nbsp;고객을&nbsp;확보할&nbsp;수&nbsp;있습니다.
                <br />
                &nbsp;&nbsp;&nbsp;리뷰&nbsp;및&nbsp;피드백:&nbsp;고객&nbsp;리뷰와&nbsp;피드백을&nbsp;적극적으로&nbsp;수용하여&nbsp;서비스&nbsp;품질을&nbsp;지속적으로&nbsp;개선할&nbsp;수&nbsp;있습니다.
                <br />
                <br />
                &nbsp;&nbsp;염색&nbsp;전문점은&nbsp;맞춤형&nbsp;서비스,&nbsp;지속&nbsp;가능한&nbsp;제품&nbsp;사용,&nbsp;전문성&nbsp;강화,&nbsp;디지털&nbsp;마케팅&nbsp;활용&nbsp;등을&nbsp;통해&nbsp;미용&nbsp;산업에서&nbsp;강력한&nbsp;경쟁력을&nbsp;갖출&nbsp;수&nbsp;있습니다.&nbsp;
                <br />
                &nbsp;&nbsp;염색&nbsp;전문점은&nbsp;변화하는&nbsp;소비자&nbsp;트렌드에&nbsp;민감하게&nbsp;대응하고,&nbsp;고품질의&nbsp;서비스와&nbsp;제품을&nbsp;제공함으로써&nbsp;지속적인&nbsp;성장을&nbsp;이룰&nbsp;수&nbsp;있습니다.
              </p>


            </div>
          </div>

         
    
      
       </section>

       <div className='h-[150px]'/>
       
       </div>
           <Footer />
       </div>
  )
}

export default page
