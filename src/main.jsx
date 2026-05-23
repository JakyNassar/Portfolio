import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import Show from './pages/Show.jsx'
import Constants from './pages/Constants/Constants.jsx'






const routes= createBrowserRouter([
  {
    path:"/",
    element:<Constants/>,
    children:[
       {
    index:true ,
    element:<Root/>,
 
  },{
    path:"show/:id",
    element:<Show/>
  }

    ]
  }
 
 
],{
    basename:"/Portfolio"
  })
createRoot(document.getElementById('root')).render(
   <StrictMode>
  <RouterProvider router={routes}>
  </RouterProvider>
   </StrictMode>
)
