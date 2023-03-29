import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import "./style.css"
const Login = () => {
  const history=useNavigate()
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const submitForm=async (e)=>{
    e.preventDefault();
    const user={
        email,password
    }
const resp=await fetch("http://localhost:3010/users/signin",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body :JSON.stringify(user)
})
const data=await resp.json();
console.log("data recieved",data.status)
     if(data.status===200){
        window.alert("login successfull");
        console.log(data)
        history("/")
     }
     else{
        window.alert("login unsuccessfull");
     }
 }
  return (
    <div className='w-full h-[65vh]' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>

    <div className=' w-screen pt-32'>
        <div class="form-box">
        <h1>Login</h1>
        <form>
           

                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <span>New to Car Mania? </span><Link className='underline text-blue-500 decoration-blue-500' to={"/signup"}>Sign Up</Link><span> Now</span>
                <div class="bg-[#3c00a0] text-white h-14 rounded-full grid place-items-center" onClick={submitForm}>
                 <button type="border: none; ">Login</button> 
                </div>
        </form> 
        
    </div>
    </div>
    </div>
  )
}

export default Login