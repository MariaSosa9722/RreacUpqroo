import React from 'react'
import Headers from '../Components/Header'
import Footer from '../Components/Footer'

function Home() {

  // alert('Hola mundo')

  return (
    <>
      <Headers></Headers>

      <form>
        <label htmlFor="">Nombre</label>
        <input type="text" />
        <label htmlFor="">Apellido</label>
        <input type="text" />
      </form>





      <Footer></Footer>

    </>
  )
}

export default Home
