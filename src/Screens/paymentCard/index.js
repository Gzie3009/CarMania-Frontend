import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import "./css/style.css"
import pic1 from "./image/chip.png"
import pic2 from "./image/visa.png"
const PaymentCard = () => {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
        },2000)
    }, [])
    const [cardNo,setCardNo]=useState("")
    const [holderName,setHolder]=useState("")
    const [mm,setMM]=useState(5)
    const [yy,setYY]=useState(2023)
    const [cvv,setCvv]=useState("")
    const [loading2,setLoading2]=useState(0);
    const handleClick=async (e)=>{
        setLoading2(1)
        e.preventDefault()
        const data={
            cardNo,holderName,mm,yy,cvv
        }
        const res=await fetch("https://carmania-backend.onrender.com/users/payment",{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
        const resp=await res.json()
        if(resp.status===200){
            localStorage.removeItem("prod")
            localStorage.removeItem("bookingData")
            localStorage.removeItem("FinalPrice")
            navigate("/thankyou")
        }
        else{

        setLoading2(0)
            toast("Fill Proper Card Details")
        }
    }
  return (
    
    <>
    {loading?<div className='w-[100vw] h-[60vh] pl-[46%] bg-[#F7F7FB]'><div class="lds-roller mt-32"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div> :
<div className='h-full md:w-full grid place-items-center pb-20' style={{"background": "linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
<div class="container ">
<div class="card-container">
    <div class="front">
        <div class="image">
            <img src={pic1} alt=""/>
            <img src={pic2} alt=""/>
        </div>
        <div class="card-number-box mt-10 md:mt-0 text-white">{cardNo===""?<>###############</>:<>{cardNo}</>}</div>
        <div class="flexbox flex justify-between text-white md:-mt-5 mt-5">
            <div class="">
                <span>CARD HOLDER</span>
                <p>{holderName===""?<>Full Name</>:<>{holderName}</>}</p>
            </div>
            <div class="">
                <span>expires</span>
                <div class="expiration flex">
                    <p class="exp-month">{mm}/</p>
                    <p class="exp-year">{yy}</p>
                </div>
            </div>
        </div>
    </div>
</div>

<form className='bg-black w-screen p-10 -ml-2.5'>
    <div class="inputBox">
        <span>card number</span>
        <input type="text" maxlength="16" className="rounded-lg card-number-input bg-white" value={cardNo} onChange={(e)=>setCardNo(e.target.value)}/>
    </div>
    <div class="inputBox">
        <span>card holder</span>
        <input type="text" className="rounded-lg card-holder-input bg-white" value={holderName} onChange={(e)=>setHolder(e.target.value)}/>
    </div>
    <div class="flexbox">
        <div class="inputBox">
            <span>expiration mm</span>
            <input className='rounded-lg bg-white' placeholder='Month' value={mm===0?null:mm} onChange={(e)=>setMM(e.target.value)}></input>
        </div>
        <div class="inputBox">
            <span>expiration yy</span>
            <input className='rounded-lg bg-white'  placeholder='Year' value={yy} onChange={(e)=>{setYY(e.target.value)}}/>
        </div>
        <div class="inputBox">
            <span>cvv</span>
            <input style={{"background":"white"}}  type="text" maxlength="4" className="rounded-lg cvv-input" value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
        </div>
    </div>
    {loading2? 
    <div className='submit-btn'><div className='grid place-items-center'><div class="lds-dual-ring"></div></div></div>
    :
    <input onClick={handleClick} type="submit" value="submit" class="submit-btn"/>}
</form>
</div>

</div>
    }</>
  )
}

export default PaymentCard