"use client"
import React from 'react'
import Map from "@/components/map"
import Footer from '@/components/template/Footer'
import { CiMap } from "react-icons/ci";
import { HiArrowTurnRightUp } from "react-icons/hi2";
import { HiMiniMapPin } from "react-icons/hi2";
import { HiPhone } from "react-icons/hi2";
import Mapping from '@/components/template/Mapping';
import ScrollableTabsButtonForce from '@/components/tab'


function page() {

  
  return (
    <div>
       <Mapping />
       <div className='h-[80px]'/>
       <Footer />
       </div>
   
  );
}

export default page;
