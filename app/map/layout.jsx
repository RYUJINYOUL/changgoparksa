import React from 'react'
import Header2 from '@/components/template/Header2'


const layout = ({ children }) => {

  return (
    <div className="w-full h-full">
          {/* <Script
            strategy="beforeInteractive" //"beforeInteractive"으로 찾았는데 경고메세지 떠가지고 after로 수정해줬습니다. 
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
          ></Script> */}
    <Header2>
      {children}
    </Header2>
    </div>
  )
}

export default layout

