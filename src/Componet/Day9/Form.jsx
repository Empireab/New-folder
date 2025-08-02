import React, { useContext } from 'react'
import { CountContext } from '../../context/Count'
import FormwithREact from '../FormwithREact'

function Form() {
    const user = useContext(CountContext)
    console.log(user)
  return (
    <div>
      <FormwithREact/>
        {/* <h1>{user.UserName}</h1>
        <p>{user.age}</p>
        <p>{user.G}</p> */}
    </div>
  )
}

export default Form