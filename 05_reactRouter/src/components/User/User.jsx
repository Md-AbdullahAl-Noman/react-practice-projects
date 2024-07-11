// import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {

    const userId = useParams().userId;
  return (
    <div className='text-3xl  bg-gray-400 border-orange-700 rounded-xl p-4 text-white text-center '>
     Your username is : {userId}
    </div>
  )
}
