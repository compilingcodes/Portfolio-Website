import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"

import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Skills from './pages/Skills.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <App></App></div>,
  },
  {
    path: "about",
    element: <div> <About/></div>,
  },
  {
    path: "skills",
    element: <div> <Skills/></div>,
  },
  {
    path: "contact",
    element: <div> <Contact/></div>,
  },
  
 
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

<RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
