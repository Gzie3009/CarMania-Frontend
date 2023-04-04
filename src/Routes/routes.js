import Navbar from "../Navbar";
import Footer from "../footer/index";
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Screens/Home";
import ContactUs from "../Screens/contact us/index";
import PaymentCard from "../Screens/paymentCard/index"
import CheckOut from "../Screens/checkout-main";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import About from "../Screens/about";
import { useSelector } from "react-redux";
import Error from "../Screens/error";
import Cars from "../Screens/cars section";
import ProductView from "../Screens/product view";
const Routings = () => {
  const data=useSelector((state)=>{
    return state.users
  })
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="cars/:id" element={<ProductView/>}/>
          {data&&(
            <Route>
              <Route path="payment" element={<PaymentCard />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="cars" element={<Cars/>}>
              </Route>
            </Route>
          )
          }
            <Route path="*" element={<Error/>}></Route>
           
            
        </Routes>
        <Footer/>
        
    </>
  )
}

export default Routings