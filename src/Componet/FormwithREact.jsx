import React, { useState } from 'react'

function FormwithREact() {
    const [formdata, Setformdata] = useState({
        name: '',
        email: '',
        psw: '',
    })
    const handlechange = (e)=>{
        const {name, value} = e.target;

        Setformdata((prev)=>({
            ...prev,
            [name]: value,

        }))
    

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formdata)

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='enter your name' name='name' value={formdata.name} onChange={handlechange}/> <br />
            <input type="email" name="email" placeholder='Email' value={formdata.email} onChange={handlechange} /> <br />
            <input type="password" name="psw" placeholder='Password' value={formdata.psw} onChange={handlechange}/> <br />
            <button>submit</button>
        </form>
    </div>
  )
}

export default FormwithREact