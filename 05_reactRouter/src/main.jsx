/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { About, Home,Contact,User,Github } from './components'
import { getLoaderInfo } from './components/Github/Github'

// const router = createBrowserRouter([

//   { path: "/",
//     element:<Layout/>,
//     children :[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>

//       },
//       {
//         path:"/contact",
//         element:<Contact/>

//       }

//     ]




//   }




// ])


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<Layout />}>
       <Route path='' element={<Home />} /> 
          
       
       <Route path="/about" element={<About />} />

       <Route path="/contact" element={<Contact />} />  
       <Route path='/user/:userId' element={<User />}/>
       <Route 
       path='/github' 
       element={<Github />}
       loader={getLoaderInfo}
       
       />
          
    </Route>


  )



)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
