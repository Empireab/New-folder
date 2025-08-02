import React from 'react'
import Customlink from './Customlink'

function Index() {
  return (
    <div>
       <Customlink to = '/home' text = 'home'/>
       <Customlink to = '/about' text = 'about'/>
       <Customlink to = '/service' text = 'service'/>
    </div>
  )
}

export default Index