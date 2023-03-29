import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
const Signup = () => {
  return (

    <div className='h-[90vh] w-screen' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>

<div class="form-box">
        <h1>Sign up</h1>
        <form>
            <div class="input-group">
                <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" placeholder="Name"/>
                </div>

                <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder="Email"/>
                </div>
                <div class="input-field">
                    <i class="fa-sharp fa-solid fa-phone"></i>
                    <input type="phone" placeholder="Phone Number"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Password"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
                <span>Already Signed Up? </span><Link className='underline text-blue-500 decoration-blue-500' to={"/login"}>Login</Link><span> Now</span>
                <div class="bg-[#3c00a0] text-white h-14 rounded-full grid place-items-center">
                 <button type="border: none; ">Sign up</button> 
                </div>
                </div>
        </form> 
        
    </div>
</div>
  )
}

export default Signup