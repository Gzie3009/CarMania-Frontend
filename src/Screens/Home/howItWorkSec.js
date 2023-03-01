import React from 'react'
import Location from "../../Assets/location.png"
import Line from "../../Assets/Line.png"
import Calendar from "../../Assets/calendar.png"
import Car from "../../Assets/car.png"
const HowItWorkSec = () => {
  return (
    <>
        <div className='w-full grid place-items-center mt-32 mb-36'>
        <div className='w-3/4 h-max text-center mb-16'>
            <div className='h-full w-full text-xl mb-4 font-bold text-[#ACAEB4]'>
                How It Works
            </div>
            <div className='h-full w-full font-bold text-3xl'>
                Rent your desired car with 3 working steps
            </div>
        </div>
        <div className=' flex w-3/4 place-items-center gap-5'>
            <div className='w-56 h-full grid place-items-center'>
            <div className='transition duration-300 ease-in-out hover:scale-110 rounded-3xl shadow-lg w-24 h-24 grid place-items-center'>
                <div>
                <img src={Location}>
                </img>
                </div>
            </div>

            <div className='w-full grid place-items-center text-center mt-10'>
            <p className='font-bold text-xl mb-3'>Pick Your Location</p>
            <p className='text-[#929395]'>Choose your location and find your best car</p>
            </div>

            </div>


            <div className='mb-32'>
                <img src={Line}>
                </img>
            </div>


            <div>
            <div className='w-56 h-full grid place-items-center'>
                <div className='transition duration-300 ease-in-out hover:scale-110 w-28 h-28 rounded-3xl grid place-items-center' style={{"background": "radial-gradient(115.89% 115.89% at 49.61% 115.89%, #20BFB6 0%, #09FFF1 100%)"}}>
                <img className='mt-4 mr-4' src={Calendar}>
                </img>
                </div>
                <div className='w-full grid place-items-center text-center mt-10'>
            <p className='font-bold text-xl mb-3'>Pick-up date/time</p>
            <p className='text-[#929395]'>Select your pick up date and time to book your car</p>
            </div>
            </div>
            </div>


            <div className='mb-32'>
                <img src={Line}>
                </img>
            </div>

            <div>
            <div className='w-56 h-full grid place-items-center'>
            <div className='transition duration-300 ease-in-out hover:scale-110 rounded-3xl shadow-lg w-24 h-24 grid place-items-center'>
                <div>
                <img className='mr-4 mt-4' src={Car}>
                </img>
                </div>
            </div>
            <div className='w-full grid place-items-center text-center mt-10 mb-8'>
            <p className='font-bold text-xl mb-3'>Book Your Desire Car</p>
            <p className='text-[#929395]'>We will deliver it directly to you</p>
            </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default HowItWorkSec