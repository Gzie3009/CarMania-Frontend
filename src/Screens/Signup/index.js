import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./style.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const history=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("")
    const [loading,setLoading]=useState(0)
    const submitForm=async (e)=>{
        setLoading(1);
        e.preventDefault();
    const user={
        name,email,phone,password,confirmPassword
    }
    const resp=await fetch("http://localhost:3010/users/register",{
      method:"POST",
      mode:"cors",
      headers:{
        "Content-Type":"application/json"
      },
      body :JSON.stringify(user)
    })
    const data=await resp.json();
    console.log("data recieved",data.status)
         if(data.status===200){
            toast("registration successfull");
            console.log(data)
            history("/login")
         }
         else{
            setLoading(0)
            toast("registration unsuccessfull");
         }
     }

  return (

    <div className='h-full pb-10 grid place-items-center' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
    <div className='bg-white p-10 md:p-0 md:pb-20 md:w-1/3'>

<div class="form-box">
        <h1 className=' md:font-2xl'>Sign up</h1>
        <form method='POST'>
            <div class="input-group">
                <div class="input-field my-3">
                    <i class="fa-solid fa-user"></i>
                    <input className='bg-[#eaeaea] px-12 py-5 rounded-sm border' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                </div>

                <div class="input-field my-3">
                    <i class="fa-solid fa-envelope"></i>
                    <input className='bg-[#eaeaea] px-12 py-5 rounded-sm border' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div class="input-field my-3">
                    <i class="fa-sharp fa-solid fa-phone"></i>
                    <input className='bg-[#eaeaea] px-12 py-5 rounded-sm border' type="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone Number"/>
                </div>
                <div class="input-field my-3">
                    <i class="fa-solid fa-lock"></i>
                    <input className='bg-[#eaeaea] px-12 py-5 rounded-sm border' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div class="input-field my-3">
                    <i class="fa-solid fa-lock"></i>
                    <input className='bg-[#eaeaea] px-12 py-5 rounded-sm border' type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password"/>
                </div>
                <span>Already Signed Up? </span><Link className='underline text-blue-500 decoration-blue-500' to={"/login"}>Login</Link><span> Now</span>


                {loading?<>
                    <div class="button-signup w-full hover:text-black bg-[#3c00a0] mt-5 text-white h-14 rounded-full grid place-items-center">
                    <div class="lds-dual-ring"></div>
                </div></>:
                <button class="button-signup w-full hover:text-black bg-[#3c00a0] mt-5 text-white h-14 rounded-full grid place-items-center" onClick={submitForm}>
                 <div type="border: none; ">Sign up</div> 
                </button>}



                </div>
        </form> 
        
    </div>
    </div>
</div>
  )
}

export default Signup