import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./style.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
const Signup = () => {
    const history=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("")
    const submitForm=async (e)=>{
        e.preventDefault();
    const user={
        name,email,phone,password,confirmPassword
    }
    const resp=await fetch("http://localhost:3010/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body :JSON.stringify(user)
    })
    const data=await resp.json();
    console.log("data recieved",data.status)
         if(data.status===200){
            window.alert("registration successfull");
            console.log(data)
            history("/login")
         }
         else{
            window.alert("registration unsuccessfull");
         }
     }

  return (

    <div className='h-[90vh] w-screen' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>

<div class="form-box">
        <h1>Sign up</h1>
        <form method='POST'>
            <div class="input-group">
                <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                </div>

                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div class="input-field">
                    <i class="fa-sharp fa-solid fa-phone"></i>
                    <input type="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                </div>
                <span>Already Signed Up? </span><Link className='underline text-blue-500 decoration-blue-500' to={"/login"}>Login</Link><span> Now</span>
                <div class="bg-[#3c00a0] text-white h-14 rounded-full grid place-items-center" onClick={submitForm}>
                 <button type="border: none; ">Sign up</button> 
                </div>
                </div>
        </form> 
        
    </div>
</div>
  )
}

export default Signup