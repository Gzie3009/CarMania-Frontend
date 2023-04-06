import React, { useState,useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styleCheckout.css"
import { Link, useNavigate } from 'react-router-dom'
const CheckOut = () => {
  const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
        },1500)
    }, [])
  const navigate=useNavigate();
    const [email,seteMail]=useState("");
    const [phone,setPhone]=useState("");
    const [fname,setFname]=useState("");
    const [address,setAddress]=useState("");
    const [zipcode,setZip]=useState("");
    const cardata=JSON.parse(localStorage.getItem("prod"))
    const bookDetails=JSON.parse(localStorage.getItem("bookingData"))
    const start=new Date(bookDetails.date1);
    const end=new Date(bookDetails.date2)
    const hours= (end-start)/3600000;
    const Cost=49+(hours*cardata.cost)
    const handleCLick=async ()=>{
      const data={
        email,phone,fname,address,zipcode,start,end,Cost
      }
      localStorage.setItem("FinalPrice",Cost)
      const res= await fetch("http://localhost:3010/users/checkout",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const resp= await res.json()
      if(resp.status==200){
        navigate("/payment")
      }
      else{
        toast(resp.message)
      }
    }
    
    
  return (
    <>{loading?<div className='w-[100vw] h-[60vh] pl-[46%] bg-[#F7F7FB]'><div class="lds-roller mt-32"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>:
        <div class="con mb-56" style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
      <div class="box1">
        <h2 class="title">Checkout</h2>
      
        <div class="info" style={{"background":"transparent"}}>
          <h3>Contact information</h3>

          <p class="label">E-mail</p>

          <div class="input-box">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email .. "
              value={email}
              onChange={(e)=>seteMail(e.target.value)}
            />
            <i class="fa-solid fa-envelope"></i>
          </div>

          <p class="label">Phone</p>

          <div class="input-box">
            <input
              type="text"
              name="phone"
              placeholder="Enter Your Phone .. "
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
            />
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
        

        
        <div class="shipping">
          <h3>Shipping address</h3>

          <p class="label">Full name</p>

          <div class="input-box">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Fullname .. "
              value={fname}
              onChange={(e)=>setFname(e.target.value)}
            />
            <i class="fa-solid fa-user"></i>
          </div>

          <p class="label">Address</p>

          <div class="input-box">
            <input type="text" name="address" placeholder="Your Address .. "  value={address}
              onChange={(e)=>setAddress(e.target.value)} />
            <i class="fa-solid fa-house"></i>
          </div>


         

          <div class="last">
            <div class="separate">
              <p class="label">Postal code</p>

              <div class="input-box">
                <input
                  type="number"
                  name="code"
                  placeholder="Your Postal Code .. "
                  value={zipcode}
              onChange={(e)=>setZip(e.target.value)}
                />
                <i class="fa-solid fa-envelopes-bulk"></i>
              </div>
            </div>
          </div>

        </div>
      
      </div>
      

     
      <div class="box2">
        <div class="card">
          <div class="item">
            <img src={cardata.src} className="" alt="loading..." />
            <div class="count">
              <p class="item-name">{cardata.name}</p>
              <h6 class="price">₹ {cardata.cost}/hr</h6>
              
            </div>
          </div>
          
          <div class="end">
          <div class="total">
              <p>From :<span className='ml-5'>{bookDetails.date1}</span><span className='ml-10'>To :</span><span className='ml-5'> {bookDetails.date2}</span></p>
            </div>
            <hr className='w-full'/>
            <div class="total">
              <p>Shipping</p>
              <p>₹ 49</p>
            </div>
            <hr className='w-full'/>

            <div class="total">
              <p>Total</p>
              <p>₹ {Cost}</p>
            </div>
          </div>
        </div>
        <div className=''>
        <button onClick={handleCLick} class="btn-checkout w-1/2 ml-64 rounded-lg p-5 mt-5 hover:text-black font-bold ">Continue</button>
        </div>
      </div>
      
    </div>
    }
    </>
  )
}

export default CheckOut