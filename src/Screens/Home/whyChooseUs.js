import React from 'react'
import CarWithMap from "../../Assets/CarWithMap.png"
import G25 from "../../Assets/Group 25.png" 
import G26 from "../../Assets/Group 26.png" 
import G27 from "../../Assets/Group 27.png" 
import G28 from "../../Assets/Group 28.png" 
const WhyChooseUs = () => {
  return (
    <>

      <div className='w-full' style={{"background": "linear-gradient(270deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 203.13%)"}}>
          <div className='flex md:mx-32 pb-10' data-aos="fade-up">
            <div className='hidden md:block w-1/2 h-full'>
            <img alt="" className='h-full md:h-10/12 bg-transparent' src={CarWithMap}></img>

            </div>
            <div className=' md:w-1/2 h-full'>
                <div className='w-full flex flex-col'>
                  <div className='text-[#ACAEB4] w-screen md:w-full font-bold text-md mt-14 ml-8 mb-5'>
                  WHY   CHOOSE   US
                  </div>
                  <div className='text-3xl font-bold w-4/5 ml-8'>
                  Get the best experience of rental cars
                  </div>
                  <div className=' mt-10'>

                    <div className='flex items-center content-start'>
                      <div><img className='md:w-32' alt="" src={G28} /></div>
                      <div className='-mt-7 -ml-4'>
                        <p className='text-lg font-semibold'>Cheapest Market Price Gauranteed</p>
                        <p className='text-md text-[#ACAEB4]'>We refund 100% if you find cheaper alternative</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <div><img className='md:w-32' alt="" src={G27} /></div>
                      <div className='-mt-7 -ml-4'>
                        <p className='text-lg font-semibold'>Hire Driver</p>
                        <p className='text-md text-[#ACAEB4]'>Dont have a driver? We got you covered<br className='block md:hidden'/> with that too.</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <div><img className='md:w-32' alt="" src={G26} /></div>
                      <div className='-mt-7 -ml-4'>
                        <p className='text-lg font-semibold'>Same Day delivery</p>
                        <p className='text-md text-[#ACAEB4]'>Book it and we will directly deliver it to you within 24 Hours</p>
                      </div>
                    </div>

                    <div className='flex items-center'>
                      <div><img className='md:w-32' alt="" src={G25} /></div>
                      <div className='-mt-7 -ml-4'>
                        <p className='text-lg font-semibold'>24/7 Support</p>
                        <p className='text-md text-[#ACAEB4]'>Contact Us if you have any issues</p>
                      </div>
                    </div>



                  </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default WhyChooseUs