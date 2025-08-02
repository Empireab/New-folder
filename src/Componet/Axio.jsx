import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function Axio() {
    const [blog, Setblog] = useState([])
    const [load, setload] = useState(true)
  useEffect(()=>{
      const res = axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts')
    res.then((items) => {
        Setblog(items.data.blogs)
          console.log(blog)
        setload(false)

    })
  },[])
  

    return (
        <>
            {




                load ? (<h1> loading</h1>) : blog.map((rend) => {  
                    return (
                        <h1>{index + 1}  {rend.title}</h1>
                    )

                })
            }

        </>
    )









    // const res = axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts')
    // res.then((data)=>{
    //     console.log(data.data);


    // })
    //     const res = fetch ('https://api.slingacademy.com/v1/sample-data/blog-posts')
    //  res.then((responce)=> responce.json()
    //  )
    //  .then((data)=>{
    // console.log(data);

    //  })

}

export default Axio
