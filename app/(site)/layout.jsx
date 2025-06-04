import React from 'react'
import Header2 from '@/components/template/Header2'
import Footer from '@/components/template/Footer'

const layout = ({ children }) => {
  return (
    <div className="w-screen h-full">
    <Header2>
      {children}
    </Header2>
      {/* <Footer /> */}
    </div>
  )
}

export default layout
