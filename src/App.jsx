import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/FooterItem/Footer'
import About from './pages/About/About'
import './App.css'
import LoginPopup from './component/LoginPopup/LoginPopup'

const App = () => {
   
  const[showLogin,setShowLogin]=useState(false)



  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin }/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/placeorder" element={<PlaceOrder />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/service" element={<Service />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
     
    </div>
  </>
  )
  
  
}

export default App