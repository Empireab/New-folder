import React from 'react'
import { users } from './userdata'
import { Link } from 'react-router-dom'


function Home() {
  return (
  <>
  <h3 className='heading'>Mini Web for devs</h3>
      <div className='grid-cont'>
        {users.map((data)=>{
            return(
                <Link to={`/user/${data.id}`} key={data.id} className='user-card'>
                    <img src={data.profilePic} alt="" className='profile-pics' />
                    <p className='user-name'>{data.name}</p>

                </Link>
             
            )
      

        })}
    </div>
  </>

  )
}

export default Home