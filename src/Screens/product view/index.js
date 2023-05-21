import React, { useState,useEffect } from 'react'
import {Link, useParams} from "react-router-dom"
import "./style.css"
import "./loader.css"
const ProductView = () => {
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
        },500)
    }, [])
    
    const car=JSON.parse(localStorage.getItem("prod"));
  return (
    <>
        {loading?<div className='w-[100vw] h-[60vh] pl-[46%] bg-[#F7F7FB]'><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

</div>:<section class="xxx pt-20 w-[100vw] grid place-items-center bg-[#F7F7FB]">
        <div class=" w-full flex flex-col md:flex-row md:gap-20 product">
            <div class="rounded-lg md:ml-20 w-full md:w-[40%]" data-aos="flip-left">
                <img class="w-full pb-1" src={car.src} id="MainImg" alt="loading img....."/>
            </div>

            <div class="w-full grid md:block place-items-center md:w-[40%]">
                <h6 className='text-4xl md:text-2xl'> Category / Top-Rated</h6>
                <h3 class="py-4 text-3xl">{car.name}</h3>
                <h2 class="pt-2 pb-2 text-2xl">Rs {car.cost}/hr</h2>
                <Link to={"/checkout"} className='md:hidden block w-full grid place-items-center bg-[#20BFB6] p-3 px-5 hover:bg-[#8efaf4] hover:text-black text-white font-bold'>
                <div  className="">Rent Now</div>
                </Link>
                <div>
                <h4 class="mb-3 text-3xl mt-10 md:mt-0">Car Details</h4>
                </div>
                <span>The all-new {car.name} has been inspired from Top notch design DNA of “sensuous sportiness” with a dynamic look on the outside & luxurious feeling on the inside. Its breathtaking presence casts a magnetic charm; while its connected and intuitive features enhance your comfort and convenience. Truly a class above the rest.</span>
                <br/><br/>
                <Link to={"/checkout"} className='hidden md:grid place-items-center bg-[#20BFB6] p-3 px-5 rounded-lg hover:bg-[#8efaf4] hover:text-black text-white font-bold'>
                <div className="">Rent Now</div>
                </Link>
            </div>
        </div>
    </section>}
    </>
  )
}

export default ProductView