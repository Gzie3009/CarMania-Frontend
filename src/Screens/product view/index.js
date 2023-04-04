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
</div>:<section class="xxx pt-5 w-[100vw] h-[60vh] grid place-items-center bg-[#F7F7FB]">
        <div class=" w-full flex gap-20 product">
            <div class="rounded-lg ml-20 w-[40%]">
                <img class="w-full pb-1" src={car.src} id="MainImg" alt="loading img....."/>
            </div>

            <div class="w-[40%]">
                <h6> Category / Top-Rated</h6>
                <h3 class="py-4">{car.name}</h3>
                <h2 class="pt-2 pb-2">{car.cost}</h2>
                <Link to={"/checkout"} class="bg-[#20BFB6] p-3 px-5 rounded-lg hover:bg-[#8efaf4] hover:text-black text-white font-bold ">Rent Now</Link>
                <h4 class="mt-5 mb-3">Car Details</h4>
                <span>The all-new {car.name} has been inspired from Top notch design DNA of “sensuous sportiness” with a dynamic look on the outside & luxurious feeling on the inside. Its breathtaking presence casts a magnetic charm; while its connected and intuitive features enhance your comfort and convenience. Truly a class above the rest.</span>
            </div>
        </div>
    </section>}
    </>
  )
}

export default ProductView