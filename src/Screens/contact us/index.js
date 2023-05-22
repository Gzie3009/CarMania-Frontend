import axios from 'axios'
import React,{ useState } from 'react'
import "./style.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactUs() {
  const [message,setMessage]=useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })
  const [loading,setLoading]=useState(0)
  const handleChange=(e)=>{
    const {name,value}=e.target
    setMessage({...message,[name]:value})
  }
  const handleSubmit=async (e)=>{
    setLoading(1)
    e.preventDefault()
    const resp=await fetch("http://localhost:3010/users/contactus",{
      method:"POST",
      mode:"cors",
  headers:{
    "Content-Type":"application/json"
  },
  body :JSON.stringify(message)
    })
    const data=await resp.json();
    if(data){
      setLoading(0)
      toast("Message Sent Successfully")
      setMessage({
        name:"",
        email:"",
        phone:"",
        message:""
      })
    }
    else{
      setLoading(0)
      toast("please try again")
    }
  }
  return (
    <>
      <div className="contactUs -mt-10">
        <div className="title" id='contact'>
          <h2>Get In Touch</h2>
        </div>
        <div className="box">
         
          <div className="contact form">
            <h3>Send a Message</h3>
            <form method='POST'>
              <div className="formBox">
                <div className="row50">
                  <div className="w-full">
                    <span className='text-purple-600'>Full Name</span>
                    <div className='inputBox' style={{width:"100%"}}><input onChange={handleChange} value={message.name} className='rounded-lg border-2 border-black' name="name" type="text" placeholder="John"  /></div>
                    
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input onChange={handleChange} value={message.email} className='rounded-lg' type="text" name="email" placeholder="JohnDoe@gmail.com" />
                  </div>
                  <div className="inputBox md:ml-4">
                    <span>Mobile</span>
                    <input onChange={handleChange} value={message.phone} className='rounded-lg' name="phone" type="text" placeholder="+91 8676453421" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message </span>
                    <textarea className='rounded-lg' onChange={handleChange} value={message.message} name="message" placeholder="Write your Message here...."></textarea>
                  </div>
                </div>

                <div className="row100">
                {loading?
                  <div className="inputBox bg-[#20BFB6] grid place-items-center">
                  <div class="lds-dual-ring"></div>
                  </div>
                :
                  <div className="inputBox">
                    <button onClick={handleSubmit}>Submit</button>
                  </div>}
                </div>



              </div>
            </form>
          </div>

          <div className="contact info">
            <h3>Contact info</h3>
            <div className="infoBox">
              <div>
                <span><ion-icon name="location"></ion-icon></span>
                <p>
                  Infinity Tower, Gurugram
                  <br />
                  Haryana
                  <br />
                  India
                </p>
              </div>
              <div>
                <span><ion-icon name="mail"></ion-icon></span>
                <a href="mailto:carmainia@gmail.com">carmainia@gmail.com</a>
              </div>
              <div>
                <span><ion-icon name="call"></ion-icon></span>
                <a href="tel: +91 8976547865">+91 8976547865</a>
              </div>
 
              <ul className="sci">
                <li>
                  <a href="#">
                    <ion-icon icon="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="contact map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.
                4408161524093!2d77.08946781622258!3d28.496382273834666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!3m3!1m2!1s0x390d1937f1c4e509%3A0xaeb5f50538d6b4d1!2sInfinity%20Tower%20A!5e0!3m2!1sen!2sin!4v167
                8053514873!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" 
                loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        </div>
    </>
  )}
  export default ContactUs;

