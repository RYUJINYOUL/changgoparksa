
import React from 'react'
import DefaultTable from '@/components/DefaultTable'


const page = () => {
  const TABLE_HEAD = ["번호", "글제목", "글쓴이", "작성일"];
 
  const TABLE_ROWS = [

    {
      title:"질문있습니다.",
      name: "손님",
      des: "Manager",
      date: "04/10/21",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "관리자",
      des: "Manager",
      date: "23/04/18",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "관리자",
      des: "Developer",
      date: "23/04/18",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "관리자",
      des: "Executive",
      date: "19/09/17",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "손님",
      des: "Developer",
      date: "24/12/08",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "손님",
      des: "Manager",
      date: "04/10/21",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "관리자",
      des: "Executive",
      date: "19/09/17",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "손님",
      des: "Developer",
      date: "24/12/08",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
    {
      title:"질문있습니다.",
      name: "손님",
      des: "Manager",
      date: "04/10/21",
      url: [
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg",
        "https://www.redwoodhikes.com/JedSmith/JedSmith1.jpg"
      ]
    },
  ];

  return (
    <div className='w-full h-full'>
      <DefaultTable props={[TABLE_HEAD, TABLE_ROWS, "/ta"]} />
    </div>
    
  )
}

export default page
