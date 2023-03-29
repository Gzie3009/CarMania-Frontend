import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Login = () => {
  return (
    <div className='w-full h-[65vh]' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>

    <div className=' w-screen pt-32'>
        <div class="form-box">
        <h1>Login</h1>
        <form>
           

                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                </div>
                <span>New to Car Mania? </span><Link className='underline text-blue-500 decoration-blue-500' to={"/signup"}>Sign Up</Link><span> Now</span>
                <div class="bg-[#3c00a0] text-white h-14 rounded-full grid place-items-center">
                 <button type="border: none; ">Login</button> 
                </div>
        </form> 
        
    </div>
    </div>
    </div>
  )
}

export default Login