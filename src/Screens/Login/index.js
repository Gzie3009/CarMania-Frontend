import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./style.css"
import { loginUser } from '../../store/slice/userSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const [loading,setLoading]=useState(0)
  const submitForm=async (e)=>{
    setLoading(1)
    e.preventDefault();
    const user={
        email,password
    }
const resp=await fetch("http://localhost:3010/users/signin",{
  method:"POST",
  mode:"cors",
  headers:{
    "Content-Type":"application/json"
  },
  body :JSON.stringify(user)
})
const data=await resp.json();
console.log(data)
     if(data.status===200){
      toast('Logged In successfully', {
        position: toast.POSITION.TOP_RIGHT
    });
        dispatch(loginUser())
        localStorage.setItem("email",email)
        localStorage.setItem("JWT",data.token)
        navigate("/")
     }
     else{
        setLoading(0)
        toast("login unsuccessfull");
        setEmail("")
        setPassword("")
     }
 }
  return (
    <div className='w-full h-full' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
  
    <div className='grid place-items-center w-screen pt-20 pb-32'>
        <div class="bg-white grid place-items-center p-10 md:p-20 md:p-0 form-boxx md:w-1/3">
        <h1 className=''>Login</h1>
        <form className=''>
                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input className='p-5 my-3 md:my-0 text-2xl' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input className='p-5 my-3 md:my-0 text-2xl' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <span>New to Car Mania? </span><Link className='underline text-blue-500 decoration-blue-500 mt-5' to={"/signup"}>Sign Up</Link><span> Now</span>


                {loading?
                  <div class="bg-[#3c00a0] w-full text-white h-14 rounded-full grid place-items-center my-4">
                  <div class="lds-dual-ring ml-5"></div>
                </div>
                :
                <button class="bg-[#3c00a0] w-full text-white h-14 rounded-full grid place-items-center my-4" onClick={submitForm}>
                 <p type="border: none; ">Login</p> 
                </button>
                }
        </form>
        
    </div>
    </div>
    </div>
  )
}

export default Login