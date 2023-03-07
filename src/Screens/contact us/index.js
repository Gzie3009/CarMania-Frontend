import React from 'react'
import "./style.css"

function ContactUs() {
  return (
    <>
      <div className="contactUs">
        <div className="title">
          <h2>Get In Touch</h2>
        </div>
        <div className="box">
         
          <div className="contact form">
            <h3>Send a Message</h3>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="JohnDoe@gmail.com" />
                  </div>
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="text" placeholder="+91 8676453421" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message </span>
                    <textarea placeholder="Write your Message here...."></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="Submit" />
                  </div>
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
                    <ion-icon name="logo-facebook"></ion-icon>
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

          
            </div>
        </div>

    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  )}
  export default ContactUs;

