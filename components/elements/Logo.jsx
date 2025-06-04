"use client"
import React from 'react'
import useUIState from "@/hooks/useUIState";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Logo(props) {
    const { push } = useRouter();
    const pathname = usePathname()
    const { homeCategory, setHomeCategory, setHeaderImageSrc, headerImageSrc} = useUIState();
    let total = props
    const onClickLogo = () =>{

        push("/", {scroll: false});
    }


  return (
    <section className='items-center'>
        {/* <div className="lg:hidden">
        <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
        />
        </div> */}
        <div className='cursor-pointer flex flex-row items-center' onClick={onClickLogo} >
            <Image className='rounded-4xl mr-1 lg:w-[25px] lg:h-[25px] w-[40px] h-[40px]' alt='logo' width={60} height={60} src={"/Image/mainmiddle.jpeg"} /> 
            <div className={cn('font-semibold md:text-[20px] text-[18px] text-white cursor-pointer', 
            total.total&&"text-black",
            pathname!=="/"&&"text-black",
          )}
             onClick={onClickLogo}>남양주창고박사</div>
        </div>
       
    </section>
  )
}

export default Logo
