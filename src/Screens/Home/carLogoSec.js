import React from 'react'
import BMW from "../../Assets/BMW.png"
import Ford from "../../Assets/Ford.png"
import Tata from "../../Assets/tata-logo.png"
import Mahindra from "../../Assets/mahindra-logo.png"
import Mazda from "../../Assets/Mazda.png"
import Nissan from "../../Assets/Nissan.png"
import Toyota from "../../Assets/toyota-logo.png"
const CarLogoSec = () => {
  return (
    <>
        <div className=' h-max w-full mt-10 mb-10'>
        <div className='flex mx-24'>
            <img className='mx-auto h-12' src={BMW} alt='carlogos'>
            </img>
            <img className='mx-auto h-12' src={Tata} alt='carlogos'>
            </img>
            <img className='mx-auto h-12' src={Mahindra} alt='carlogos'>
            </img>
            <img className='mx-auto h-12' src={Mazda} alt='carlogos'>
            </img>
            <img className='mx-auto h-12' src={Toyota} alt='carlogos'>
            </img>
            <img className='mx-auto h-12' src={Ford} alt='carlogos'>
            </img>
            <img className='mx-auto h-12' src={Nissan} alt='carlogos'>
            </img>
        </div>

        </div>
    </>
  )
}

export default CarLogoSec