import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div  className='flex item-center justify-center'>
      <h1 className='text-2xl'>the userdata is : {id}</h1>
    </div>
  )
}

export default User
