import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const[data , setdata] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Kaustubh-Joshi1020")
    //     .then(responce =>responce.json())
    //     .then(data =>{
    //         console.log(data)
    //         setdata(data)})
    // },[])
    

  return (
    <div  className='flex item-center justify-center'>
      <h1 className='text-2xl'>Github Followers are : {data.followers}</h1>
      <img src={data.avatar_url}  />
    </div>
  )
}

export default Github

export const githubloader = async() =>{
    const responce = await fetch("https://api.github.com/users/Kaustubh-Joshi1020")
    return responce.json()
}
