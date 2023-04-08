import React from 'react'
import heroimg from "../../Assets/herocarimg.png"
import gplay from "../../Assets/GooglePlay.png"
import astore from "../../Assets/AppStore.png"
const Topsec = () => {
  return (
    <>
        <div className='w-screen h-max lg:realative' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
        <div className='flex lg:flex-row flex-col md:mx-20' >
            <div className='w-full md:w-2/3 flex flex-col'>
            <div className=' md:absolute w-full md:w-1/3 lg:w-1/2 md:left-36 font-semibold'>
                <div className='hidden md:block text-5xl md:text-7xl'>
                    Rent your favourite <p>
                    car 
                    in <span className='text-[#20BFB6] underline'>Easy</span> steps.
                    </p>
                </div>
                <div className='block md:hidden text-5xl ml-5'>
                    Rent your favourite
                    car 
                    in <span className='text-[#20BFB6] underline'>Easy</span> steps.
                   
                </div>
                <div className='mt-5 ml-5 w-full md:w-1/2 text-[#929395]'>
                    Get a car whenever or wherever you need it with you IOS or Android device.
                </div>
                <div className='w-full block md:hidden'>
                <img src={heroimg}  alt="heroimg"></img>
                </div>
                <div className='block w-full ml-7 flex gap-3 mt-8'>
                    <img src={gplay} className="w-40"></img>
                    <img src={astore} className="w-40"></img>
                </div>
            </div>
            </div>
            
            <div className='w-full hidden md:block'>
                <img src={heroimg}  alt="heroimg"></img>
            </div>
        </div>
        </div>
    </>
  )
}

export default Topsec