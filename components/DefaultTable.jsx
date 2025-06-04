"use client"
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Card, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getFirestore, collection, where, setDoc, onSnapshot, query} from "firebase/firestore";
import app from '../firebase.js';



export default function DefaultTable({props}) {
  const db2 = getFirestore(app);
  const [message, setMessages] = useState([]);
  const { push } = useRouter();
  const { currentUser } = useSelector(state => state.user)
  const timeFromNow = timestamp => moment(timestamp).format('YYYY.MM.DD');


  useEffect(() => {
    // addMessagesListener(new Map(categoryList2).get(homeCategory), reg)
    
    addMessagesListener()
 
    return () => {
    }
  }, [])


  const addMessagesListener = async () => {

    const tweetsQuery = query(collection(db2, "reviews"))

      await onSnapshot(tweetsQuery, (snapshot) => { // <---- 
        const tweetList = snapshot.docs.map((doc) => {
          const { name, description, url, 
            title, phoneNumber, createdDate, NumOfLikes, userKey, password
          } = doc.data();
          const id = doc.id
          const date = doc.data().createdDate.toDate();
          return {
            name, description, url, id,
            title, phoneNumber, date, NumOfLikes, userKey, password
          };
        });
          setMessages(tweetList);
      });
  };






  const onClickCard = ({ title, name, description, date, id, password }) => {
      var enteredName=""
      if (currentUser.uid === "aRWcjBBQoHXE4qtZDJWzZ5P8hBE2" || password === "") {
        push(`/ta/playlist?id=${id}&title=${title}&name=${name}&des=${description}&date=${date}`)
      } else if (enteredName = prompt('비밀번호를 입력해주세요')) {
           if(enteredName === "12"){
               alert("방문해주셔서 감사합니다.")
              push(`/ta/playlist?id=${id}&title=${title}&name=${name}&des=${description}&date=${date}`)
           } else {
          alert("비밀번호가    fdfs틀립니다.")
          push("/ta");
           }      
      } else {
          alert("비밀번호가 틀립니다.")
          push("/ta");
      }
    // push(`/test/?name=${id}collection=${collection}`);
  };

  
  return (
    <section className='flex justify-center items-center'>
    <div className="w-[1100px] lg:mt-10 pt-3.5">
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {props[0].map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg-gray-100"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {message.map(({ title, name, description, date, id, password }, index) => {
            const isLast = index === props[1].length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index} onClick={()=>onClickCard({ title, name, description, date, id, password })}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal truncate w-[20px]"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal truncate md:w-[500px] w-[80px] line-clamp-1"
                    // onClick={()=>onClickCard({ title, name, description, date, id, password })}
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                  {timeFromNow(date)}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
      {/* <section className='block'>
        <div className='flex justify-start gap-2 mt-3 ml-3'>
              <div className='rounded-md my-3 lg:text-start text-center text-[15px] p-2 bg-black text-white'>
              {/* <div className='text-white' onClick={() => {push(props[2])}}>글쓰기</div> */}
              {/* </div>
            </div>   */}
        {/* </section> */} 
    </div>
    </section>
  );
}