import React from 'react'
import { useParams } from 'react-router-dom'
import { users } from './userdata';
import { Link } from 'react-router-dom';


function Userinfo() {
    const {id} = useParams();
    const user = users.find((u)=> u.id === id)
    if(!user) {
        return <div>user not found</div>
    }
  
  return (
    <>
        <Link className='link' to='/'><img src="/arrow.png" alt="" /></Link>
       <div style={{textAlign: 'center', padding: '20px'}}>
        <img src={user.profilePic} alt="" className='img' />
        <div className='userinfo'>
        <h2 className='name'>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <p className='location'>{user.location}</p>
        <p className='role'>{user.role}💪</p>
        <p>{user.bio}</p>
        </div>

    </div>
    </>
 
  )
}

export default Userinfo