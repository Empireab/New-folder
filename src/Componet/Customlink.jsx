import React from 'react'
import { Link } from 'react-router-dom'

function Customlink({to, text}) {
   
  return (
      
    <div>
        
  
        <Link to={to}>{text}</Link>
   </div>
  )
}

export default Customlink