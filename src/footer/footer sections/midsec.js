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
        <div className='hidden md:block w-screen h-32 md:h-56 bg-black'>
            <div className='h-full w-11/12 flex place-items-center justify-around'>
              <div>
                <img alt='' src={logo}></img>
              </div>
              <div className='text-white w-64'>Sahizada Ajit Singh Nagar, Kharar , Mohali ,Punjab - 140413</div>
              <div className='flex'>
                <img alt="tel" src={TelIcon}></img>
                <p className='text-xl text-white'>+91-1234455666</p>
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

        <div className='block md:hidden w-screen bg-black'>
            <div className='h-full w-11/12 place-items-center justify-around'>
            <div className='flex items-center justify-between'>
              <div>
                <img alt='' src={logo}></img>
              </div>
              <div className='text-white w-64'>Sahizada Ajit Singh Nagar, Kharar , Mohali ,Punjab - 140413</div>
            </div>
            <div className='ml-5 flex items-center justify-between'>
              <div className='flex'>
                <img alt="tel" src={TelIcon}></img>
                <p className='text-xl text-white'>+91-1234455666</p>
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
        </div>
    </>
  )
}

export default Midsec