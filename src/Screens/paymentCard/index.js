import React, { useState } from 'react'
import "./css/style.css"
import pic1 from "./image/chip.png"
import pic2 from "./image/visa.png"
const PaymentCard = () => {
    const [cardNo,setCardNo]=useState("")
    const [holderName,setHolder]=useState("")
    const [mm,setMM]=useState(4)
    const [yy,setYY]=useState(2023)
    const [cvv,setCvv]=useState("")
  return (
    <>
<div className='h-full w-full grid place-items-center' style={{"background": "linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
<div class="container ">
<div class="card-container">
    <div class="front">
        <div class="image">
            <img src={pic1} alt=""/>
            <img src={pic2} alt=""/>
        </div>
        <div class="card-number-box">{cardNo===""?<>###############</>:<>{cardNo}</>}</div>
        <div class="flexbox justify-between text-white">
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

<form>
    <div class="inputBox">
        <span>card number</span>
        <input type="text" maxlength="16" class="card-number-input" value={cardNo} onChange={(e)=>setCardNo(e.target.value)}/>
    </div>
    <div class="inputBox">
        <span>card holder</span>
        <input type="text" class="card-holder-input" value={holderName} onChange={(e)=>setHolder(e.target.value)}/>
    </div>
    <div class="flexbox">
        <div class="inputBox">
            <span>expiration mm</span>
            <input placeholder='Month' value={mm===0?null:mm} onChange={(e)=>setMM(e.target.value)}></input>
        </div>
        <div class="inputBox">
            <span>expiration yy</span>
            <input placeholder='Year' value={yy} onChange={(e)=>{setYY(e.target.value)}}/>
        </div>
        <div class="inputBox">
            <span>cvv</span>
            <input type="text" maxlength="4" class="cvv-input" value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
        </div>
    </div>
    <input type="submit" value="submit" class="submit-btn"/>
</form>
</div>

</div>
</>
  )
}

export default PaymentCard