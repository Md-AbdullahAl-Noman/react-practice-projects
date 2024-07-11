// import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {

    const userId = useParams().userId;
  return (
    <div className='text-3xl text-center bg-blue-400 border-orange-700 rounded-xl '>
     Your username is : {userId}
    </div>
  )
}
