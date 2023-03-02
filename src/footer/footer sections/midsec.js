import React from 'react'
import logo from "../../Assets/Logo-white.png"
import TelIcon from "../../Assets/TelIcon.png"
import twitter from "../../Assets/Group 40.png"
import facebook from "../../Assets/Group 39.png"
import instagram from "../../Assets/Group 42.png"
import youtube from "../../Assets/Group 43.png"
const Midsec = () => {
  return (
    <>
        <div className='w-screen h-32 md:h-56 bg-black mt-32'>
            <div className='h-full w-11/12 flex mx-20 place-items-center justify-evenly'>
              <div>
                <img alt='' src={logo}></img>
              </div>
              <div className='text-white'>Sahizada Ajit Singh Nagar, Kharar , Mohali ,Punjab - 140413</div>
              <div className='flex'>
                <img alt="tel" src={TelIcon}></img>
                <p>+91-1234455666</p>
              </div>
              <div>
                <div className='text-white font-bold text-2xl ml-10'>Follow Us</div>
                <div className='flex'>
                      <span>
                        <img alt="sm" src={twitter}></img>
                      </span>
                      <span>
                        <img alt="sm" src={facebook}></img>
                      </span>
                      <span>
                        <img alt="sm" src={instagram}></img>
                      </span>
                      <span>
                        <img alt="sm" src={youtube}></img>
                      </span>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default Midsec