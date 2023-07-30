import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#D9D9D9] h-[1896px]'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
