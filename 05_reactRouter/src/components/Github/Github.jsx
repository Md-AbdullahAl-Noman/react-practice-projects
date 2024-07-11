/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

    const data = useLoaderData();

    // const [data,setData] = useState([])

    // useEffect(()=>{

    //     fetch('https://api.github.com/users/Md-AbdullahAl-Noman')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])



  return (
    <div className=" bg-orange-400 flex flex-col justify-center items-center text-white">
        <div className="">
      My Github Followers :{data.followers}
        </div>
        <div className="">
      My Github Followers :{data.bio}
        </div>
   
        <div className="">
     <img src={data.avatar_url} alt="github profile image"  width={"300px"} />
        </div>
    </div>
  )
}

export const getLoaderInfo = async () => {

  const response = await fetch('https://api.github.com/users/Md-AbdullahAl-Noman')
  return response.json()
}
