import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Formulario from './Pages/Formulario'


function App() {
 
  const router  = createBrowserRouter([
    {
      path: "/",
      element : <Home/>
    },
    {
      path: "/Formulario",
      element : <Formulario/>
    }



  ])


  return (
    <>

      <RouterProvider router={router}/>

    </>
  
  )
}

export default App
