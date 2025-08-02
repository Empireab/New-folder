
import { RouterProvider } from 'react-router-dom';
import './App.css'
import Form from './Componet/Day9/Form'
import Index from './Componet/Index'
import Spinner from './Componet/Spinner';

import { useEffect, useState } from 'react';
import { Router } from './Componet/Router';


function App() {
const [loading, setLoading] = useState(true)
useEffect(()=>{
    const timer = setTimeout(()=> setLoading(false), 5000);
    return()=> clearInterval(timer)
   

}, []);


  return loading ? <Spinner/> : <RouterProvider router={Router}/>
 
}

export default App
