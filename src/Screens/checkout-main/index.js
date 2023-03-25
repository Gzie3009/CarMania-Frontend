import React, { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
const CheckOut = () => {
    const [mail,setMail]=useState("");
    const [phone,setPhone]=useState("");
    const [fname,setFname]=useState("");
    const [address,setAddress]=useState("");
    const [zipcode,setZip]=useState("");

  return (
    <>
        <div class="con mb-56">
      <div class="box1">
        <h2 class="title">Checkout</h2>
      
        <div class="info" style={{"background":"white"}}>
          <h3>Contact information</h3>

          <p class="label">E-mail</p>

          <div class="input-box">
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email .. "
              value={mail}
              onChange={(e)=>setMail(e.target.value)}
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
            <img src="photo1.png" alt="bag" />
            <div class="count">
              <p class="item-name">Vintage Backbag</p>
              <h6 class="price">₹7000</h6>
              
            </div>
          </div>
          
          <div class="end">
            <hr />
            <div class="total">
              <p>Shipping</p>
              <p>₹109</p>
            </div>
            <hr />

            <div class="total">
              <p>Total</p>
              <p>₹7109</p>
            </div>
          </div>
        </div>
        <Link to="/payment">
        <button class="btn" >Continue</button>
        </Link>
      </div>
      
    </div>

    </>
  )
}

export default CheckOut