"use client"
import React, { useRef } from "react"
// import Link from "next/link"
import { useState, useEffect } from 'react'
import useUIState from "@/hooks/useUIState";

import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'


const scrollMap = {
  "/qu": [0, 0],
  "/so": [50, 0],
  "/ta": [150, 0],
  "/map": [200, 0],
};


export default function Menu(props) {
  const { push } = useRouter();
  const pathname = usePathname()
  const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();


  const previousSrcRef = useRef(null); // 이전 상태 기억용 ref

  let total = props
  const homeCategoryList = [
    {
      label: "홈",
      src: "/",
    },
    {
      label: "추천매물",
      src: "/qu",
    },
    {
      label: "회사소개",
      src: "/so",
    },
     {
      label: "문의하기",
      src: "/ta",
    },
    {
      label: "오시는길",
      src: "/map",
    },
     
  ];

 
  const onClickCategory = (item) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc("");
      setHomeCategory(item.label);
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
      push(item.src, {scroll: false})
    }
  };



   useEffect(() => {
    const slider = document.getElementById("nav");
 
    if (!slider) return;

    const currentCoords = scrollMap[headerImageSrc];
    if (!currentCoords) return;

    const [ targetX ] = currentCoords;

    const prevSrc = previousSrcRef.current;
    if (!prevSrc || prevSrc === headerImageSrc) {
  
      slider.scrollTo({ left: targetX });
    } 
  

    previousSrcRef.current = headerImageSrc;
  }, [headerImageSrc]);


  
  return (
    <nav id="nav" className="md:m-0 md:px-60 ml-5 w-full+10 flex gap-3 overflow-x-auto md:pr-0 pr-4">
    {homeCategoryList.map((item, i) => {
      return (
        <div
          onClick={() => onClickCategory(item)}
          key={item.label}
          id={i}
          className={cn(
            "md:h-[62px] h-[55px] md:text-[16px] text-[15px] lg:text-white text-[#ffffff80] min-w-fit px-2 flex justify-center items-center",
            total.total&&"md:text-black text-[#ffffff80]",
            pathname !== "/"&&"lg:text-black",
            item.label === homeCategory &&
              "underline underline-offset-8 md:text-[17px] text-[16px] text-white font-medium",
            pathname === "/"&&total.total&&"lg:text-black"
          )}
        >
            {item.label}
        </div>
      );
    })}
  </nav>
  )
}


