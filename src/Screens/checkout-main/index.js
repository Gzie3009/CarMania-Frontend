import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styleCheckout.css";
import { Link, useNavigate } from "react-router-dom";
const CheckOut = () => {
  const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
        },1500)
    }, [])
  const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [fname,setFname]=useState("");
    const [address,setAddress]=useState("");
    const [zipcode,setZip]=useState("");
    const [driver,setDriver]=useState(0);
    const [loading2,setLoading2]=useState(0)
    const cardata=JSON.parse(localStorage.getItem("prod"))
    const bookDetails=JSON.parse(localStorage.getItem("bookingData"))
    const start=new Date(bookDetails.date1);
    const end=new Date(bookDetails.date2)
    const hours= (end-start)/3600000;
    const Cost = 49 + hours * cardata.cost;
  const CostDriver = Cost + (30*hours);
    const handleCLick=async ()=>{
      setLoading2(1)
      const data={
       email,phone,fname,address,zipcode,start,end,Cost
      }
      localStorage.setItem("FinalPrice",Cost)
      const res= await fetch("https://carmania-backend.onrender.com/users/checkout",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const resp= await res.json()
      if(resp.status==200){
        navigate("/payment")
      }
      else{
        setLoading2(0)
        toast("Fill Details Properly")

      }
    }


  return (
    <>
      {loading ? 
        <div className="w-[100vw] h-[60vh] pl-[46%] bg-[#F7F7FB]">
          <div class="lds-roller mt-32">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
       : 
        <div
          class="conxx flex-col md:flex-row"
          style={{
            background: " linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)",
          }}
        >
          <div class=" box1" data-aos="zoom-in-up">
            <h2 class="title">Checkout</h2>

            <div class="info" style={{ background: "transparent" }}>
              <h3>Contact information</h3>

              <p class="label">E-mail</p>

              <div class="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email .. "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i class="fa-solid fa-envelope"></i>
              </div>

              <p class="label">Phone</p>

              <div class="input-box">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone .. "
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <i class="fa-solid fa-phone"></i>
              </div>
            </div>

            <div class="shipping">
              <h3>Shipping address</h3>

              <p class="label">Full name</p>

              <div class="input-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Fullname .. "
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <i class="fa-solid fa-user"></i>
              </div>

              <p class="label">Address</p>

              <div class="input-box">
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address .. "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <i class="fa-solid fa-house"></i>
              </div>

              <div class="last">
                <div class="separate">
                  <p class="label">Postal code</p>

                  <div class="input-box">
                    <input
                      type="number"
                      name="code"
                      placeholder="Your Postal Code .. "
                      value={zipcode}
                      onChange={(e) => setZip(e.target.value)}
                    />
                    <i class="fa-solid fa-envelopes-bulk"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box2" data-aos="zoom-in-up">
            <div class="card">
              <div class="item">
                <img src={cardata.src} className="" alt="loading..." />
                <div class="count">
                  <p class="item-name">{cardata.name}</p>
                  <h6 class="price">₹ {cardata.cost}/hr</h6>
                </div>
              </div>

              <div class="end">
                <div class="total">
                  <p>
                    From :<span className="ml-5">{bookDetails.date1}</span><br className="md:hidden"/>
                    <span className="md:ml-10">To :</span>
                    <span className="ml-5"> {bookDetails.date2}</span>
                  </p>
                </div>
                <hr className="w-full" />
                <div class="total">
                  <p>Shipping : </p>
                  <p> &nbsp;&nbsp; &nbsp;₹ 49</p>
                </div>
                <hr className="w-full" />
                {driver?<><div class="total">
                  <p>Driver : </p>
                  <p> &nbsp;&nbsp; &nbsp;₹ {30*hours}</p>
                </div>
                <hr className="w-full" /></>:<></>}

                {driver?<>
                  <div class="total">
                  <p>Total : &nbsp;&nbsp;&nbsp; </p>
                  <p> ₹ {CostDriver}</p>
                </div>
                </>:<><div class="total">
                  <p>Total : &nbsp;&nbsp;&nbsp; </p>
                  <p> ₹ {Cost}</p>
                </div></>}
              </div>
            </div>
            <div class="grid place-items-center mt-10">
              <h3>Need a Driver?</h3>
              <div className="flex gap-10">
                <div className="flex" onClick={()=>setDriver(1)}>
                <input className="" type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">Yes</label>
                </div>
                <div className="flex" onClick={()=>setDriver(0)}>
                <input
                  type="radio"
                  id="javascript"
                  name="fav_language"
                  value="JavaScript"
                />
                <label for="javascript">No</label>
                </div>
              </div>
            </div>

            {loading2?
          <div className=''>
        <button class="lg:ml-56 md:ml-40 btn-checkout w-1/2 h-20 grid place-items-center rounded-lg p-5 mt-5 hover:text-black font-bold ">
        <div class="lds-dual-ring"></div>
        </button>
        </div>
        :
        <div className=''>
        <button onClick={handleCLick} class="w-full btn-checkout rounded-lg p-5 mt-5 hover:text-black font-bold " data-aos="zoom-in-up">Continue</button>
        </div>}
          </div>
        </div>
      }
      </>
  );
}

export default CheckOut
