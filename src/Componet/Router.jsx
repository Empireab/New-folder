import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Userinfo from "./Userinfo";
import { CountProvider } from "../context/Count";
import Form from "./Day9/Form";
import Axio from "./Axio";

// import Form, { CountProvider } from "./Day9/Form";



export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },

    // { path: '/form',
    //     element: <CountProvider>
    //         <Form/>
    //     </CountProvider>

    // },
    {
        path: '/user/:id',
        element: <Userinfo/>
         
    },
  
    // {
    //     path: '/axios',
    //     element: <Axio/>

    // },
    {
        path: '*',
        element: '404 page not found'
    }
])

