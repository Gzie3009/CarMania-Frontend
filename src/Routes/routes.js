import Navbar from "../Navbar";
import Footer from "../footer/index";
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Screens/Home";
import Checkout from "../Screens/my_checkout";
import ContactUs from "../Screens/contact us/index";
const Routings = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={Checkout}/>
            <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default Routings