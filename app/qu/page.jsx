"use client"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import Question from '@/components/Question'
import { useRouter } from "next/navigation"
import Page from "./write/page"

const page = () => {


  return (
    <div className='relative top-14'>
        <section className='flex justify-center items-center m-4'>
        <div className="md:w-[1100px] w-full lg:mt-10 pt-3.5">
        <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">추천매물</TabsTrigger>
          <TabsTrigger value="password">업로드</TabsTrigger>
        </TabsList>


        <TabsContent value="account">
            <Page />
        </TabsContent>


        <TabsContent value="password">
            <Question />
        </TabsContent>
      </Tabs>
      </div>
      </section>
  </div>
  )
}

export default page
