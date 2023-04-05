import React ,{useEffect, useState} from 'react'
import "./style.css"
import pic1 from "./tick.png"
import pic2 from "./pic.jpeg"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const ThankYou = () => {
    const navigate=useNavigate()
    const [classx,setClassx]=useState("popup")
    const handleClick=()=>{
        toast("Thank You. For Shopping With Us")
        toast("Drive Safe")
        navigate("/")
    }
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
            setTimeout(()=>{
              setClassx("popup open-popup")
              toast("Payment Successfull")
              toast("Order Confirmed")
          },200)
        },4000)
    }, [])
  return (
    <>
    {loading?<div className='w-[100vw] h-[60vh] pl-[46%] bg-[#F7F7FB]'><div class="lds-roller mt-32"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div> :
    <div className='con'>
        <div class={classx} id="popup">
        <img src={pic1}/>
        <h2>Thank You!</h2>
        <p>Your order has been confirmed.Thanks for choosing us. You will soon recieve your furthur details through SMS and Email</p>
        <button onClick={handleClick} type="button">OK</button>
        </div>
 
    </div>
    }</>
  )
}

export default ThankYou