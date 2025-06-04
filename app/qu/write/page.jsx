
import React from 'react'
import DefaultTable from '@/components/DefaultTable'


const page = () => {
  const TABLE_HEAD = ["번호", "글제목", "글쓴이", "작성일"];
 
  const TABLE_ROWS = [

    {
      name: "손님",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "관리자",
      job: "Manager John Michael John Michael John Michael John Michael John Michael John Michael John Michael ",
      date: "23/04/18",
    },
    {
      name: "관리자",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "관리자",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "손님",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "손님",
      job: "Manager",
      date: "04/10/21",
    },
    {
      name: "관리자",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "손님",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "손님",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  return (
    <div className='w-full h-full'>
      <DefaultTable props={[TABLE_HEAD, TABLE_ROWS, "/so"]} />
    </div>
    
  )
}

export default page
