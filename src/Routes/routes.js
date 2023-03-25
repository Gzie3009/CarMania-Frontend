import Navbar from "../Navbar";
import Footer from "../footer/index";
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Screens/Home";
import ContactUs from "../Screens/contact us/index";
import PaymentCard from "../Screens/paymentCard/index"
import CheckOut from "../Screens/checkout-main";
const Routings = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/checkout" element={Checkout}/> */}
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/payment" element={<PaymentCard/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default Routings