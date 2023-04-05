import React, { useState,useEffect } from 'react'
import Logo from "../Assets/Logo.png"
import {Link, useNavigate} from "react-router-dom"
import './navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser,loginUser } from '../store/slice/userSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
  const navigate=useNavigate()
  const [menuClick,setMenuClick]=useState(0);
  const dispatch=useDispatch();
  const data=useSelector((state)=>{
    return state.users;
  })
  const handleLogout=()=>{
    dispatch(logoutUser());
    localStorage.removeItem("JWT")
    toast("Logout Successfull")
    navigate("/")
  }
  useEffect(() => {
    const token=localStorage.getItem("JWT");
    if(token){
      dispatch(loginUser())
    }
  }, [])
  return (
    <>
    <div className='max-w-screen h-32' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
    <div className='lg:flex lg:mx-28 flex'>
    <div className='w-10/12 mt-6 md:mt-0 md:w-auto'>
      <Link to="/" className='grid items-center'>
        <img src={Logo} alt='icon' className='h-32 lg:h-max w-56 '></img>
      </Link>
    </div>
    <div className='ml-auto hidden md:block'>
      <div className='flex mt-8 font-semibold text-[#1D1E21]'>
        <Link className='px-7 py-1' to="/"><p className='hover-underline-animation'>Home</p></Link>
        <Link className='px-7 py-1' to="/contact"><p className='hover-underline-animation'>Contact Us</p></Link>
        <a className='px-7 py-1' href="/#HowToRent"><p className='hover-underline-animation'>How To Rent</p></a>
        <Link className='px-7 py-1' to="/about"><p className='hover-underline-animation'>About Us</p></Link>
        {!data.auth?
        <Link className='px-7 py-1 border-l border-[#BEBEBE]' to="/Login"><p className='hover-underline-animation'>Login / Sign Up</p></Link>:<Link onClick={handleLogout} className='px-7 py-1 border-l border-[#BEBEBE]' ><p className='hover-underline-animation'>Logout</p></Link>}
      </div>
    </div>
    <div>
    <div className='w-full h-full grid items-center md:hidden relative'>
    {menuClick?<>
      <svg onClick={()=>{setMenuClick(0)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

    </>:
    <>
    <svg onClick={()=>{setMenuClick(1)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </>}
  </div>
  {menuClick?<>
    <div className='w-10/12 h-screen absolute bg-blue-400 left-0 top-0 shadow-2xl' style={{
    "background": "linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
    <div className='flex flex-col mt-6 font-semibold text-[#1D1E21]'>
        <Link to="/" className='grid items-center'>
          <img src={Logo} alt='icon' className='h-32 lg:h-max w-56 '></img>
        </Link>
        <Link onClick={()=>setMenuClick(0)} className='hover:text-[#BEBEBE] px-5 py-1' to="#">Why Choose Us</Link>
        <Link onClick={()=>setMenuClick(0)} className='hover:text-[#BEBEBE] px-5 py-1' to="#">How It Works</Link>
        <Link onClick={()=>setMenuClick(0)} className='hover:text-[#BEBEBE] px-5 py-1' to="#">How To Rent</Link>
        <Link onClick={()=>setMenuClick(0)} className='hover:text-[#BEBEBE] px-5 py-1' to="#">Book Now</Link>
        <Link onClick={()=>setMenuClick(0)} className='hover:text-[#BEBEBE] px-5 py-1 border-l border-[#BEBEBE]' to="/Login">Login</Link>
      </div>
    </div>
  </>:null}
  </div>

    </div>
    </div>
    </>
  )
}

export default Navbar