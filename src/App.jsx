import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Formulario from './Pages/Formulario'
import Dashboard from './Pages/Dashboard'


function App() {
 
  const router  = createBrowserRouter([
    {
      path: "/",
      element : <Home/>
    },
    {
      path: "/Formulario",
      element : <Formulario/>
    },
    {
      path: "/Dashboard",
      element : <Dashboard/>
    }



  ])


  return (
    <>

      <RouterProvider router={router}/>

    </>
  
  )
}

export default App
