"use client"
import React, { useState } from 'react'

import Gallery from '@/components/Gallery';

const page = () => {
    let slides = [
      "/add/1.jpeg",
      "/add/2.jpeg",
      "/add/3.jpeg",
      "/add/4.jpeg",
      "/add/5.jpeg",
      "/add/6.jpeg",
      "/add/7.jpeg",
      "/Image/mosa0ID74R.jpeg",
      "/Image/mosa14XYZX.jpeg",
      "/Image/mosaFR4K8d.jpeg",
      "/Image/mosahxUYLJ.jpeg",
      "/Image/mosaIM88Uk.jpeg",
      "/Image/mosaLIGRXV.jpeg",
      "/Image/mosavaDBzK.jpeg",
      "/Image/mosayGkZ9W.jpeg"
   ]
 

return (
    <div className='w-screen bg-[#000000C9] h-screen flex items-center justify-center'>
      <Gallery images={slides} />
   </div>
   
 )
}

export default page;