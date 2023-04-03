import React from 'react'
import "./style.css"
import eco1 from "./eco1.jpg"
import eco2 from "./eco2.jpg"
import eco3 from "./eco3.jpg"
import eco4 from "./eco4.jpg"
import sed1 from "./sed1.jpg"
import sed2 from "./sed2.jpg"
import suv1 from "./suv1.jpg"
import suv2 from "./suv2.jpg"
import lux1 from "./lux1.jpg"
import lux2 from "./lux2.jpg"
import lux3 from "./lux3.jpg"
import lux4 from "./lux4.jpg"
import { Link, useNavigate } from 'react-router-dom'
const Cars = () => {
  const navigate=useNavigate();
    const economy=[{
        src:eco1,
        name:"2021 Swift Dzire",
        cost:"Rs 100/hr",
        link:"1"
       },
       {
        src:eco2,
        name:"2020 Tata Tiago",
        cost:"Rs 150/hr",
        link:"2"
       },
       {
        src:eco3,
        name:"2019 Suzuki Ertiga",
        cost:"Rs 250/hr",
        link:"3"
       },
       {
        src:eco4,
        name:"2022 Hyundai Nios",
        cost:"Rs 200/hr",
        link:"4"
       },
       ];

const premium=[{
        src:sed1,
        name:"2022 BMW 320D",
        cost:"Rs 1700/hr",
        link:"5"
       },
       {
        src:sed2,
        name:"2021 Mercedes C-class",
        cost:"Rs 2500/hr",
        link:"6"
       },
       {
        src:suv1,
        name:"2020 Toyota Innova",
        cost:"Rs 1000/hr",
        link:"7"
       },
       {
        src:suv2,
        name:"2022 Toyota Fortuner",
        cost:"Rs 1500/hr",
        link:"8"
       },
       ];

const LUXURY=[{
        src:lux1,
        name:"2023 Land Rover Vogue",
        cost:"Rs 7500/hr",
        link:"9"
       },
       {
        src:lux2,
        name:"2022 Rollce Royce Phantom",
        cost:"Rs 12000/hr",
        link:"10"
       },
       {
        src:lux3,
        name:"2021 Mercedes S-Class",
        cost:"Rs 5000/hr",
        link:"11"
       },
       {
        src:lux4,
        name:"2020 Bentley Flying Spur",
        cost:"Rs 1000/hr",
        link:"12"
       },
       ];



  return (
    <div className='' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
<div class="text-gray-600 body-font w-full py-20" >
  <div class="px-5 mx-auto">
    <div class="flex flex-wrap w-full mb-5">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">ECONOMY</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div  class="flex flex-wrap -m-4">
    {economy.map((val,id)=>{
        return(
      <div key={id} onClick={()=>navigate(`/cars/${val.link}`)} class="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={val.src} alt="content"/>
          <h3 class=" tracking-widest text-indigo-500 text-xs font-medium title-font">ECONOMY</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{val.name}</h2>
          <p class="leading-relaxed text-base">{val.cost} <span><Link className='ml-24 bg-[#20BFB6] p-2 rounded-lg hover:text-black text-white font-bold'>Book Now</Link></span></p>
        </div>
      </div>
        )
    })}
    </div>


    <div class="flex flex-wrap w-full mb-5 mt-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">PREMIUIM</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div  class="flex flex-wrap -m-4">
    {premium.map((val,id)=>{
        return(
      <div key={id} onClick={()=>navigate(`/cars/${val.link}`)} class="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={val.src} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PREMIUIM</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{val.name}</h2>
          <p class="leading-relaxed text-base">{val.cost} <span><Link className='ml-[5rem] bg-[#20BFB6] p-2 rounded-lg hover:text-black text-white font-bold '>Book Now</Link></span></p>
        </div>
      </div>
        )
    })}
    </div>


    <div class="flex flex-wrap w-full mb-5 mt-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">LUXURY</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div  class="flex flex-wrap -m-4">
    {LUXURY.map((val,id)=>{
        return(
      <div key={id} onClick={()=>navigate(`/cars/${val.link}`)} class="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={val.src} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">LUXURY</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{val.name}</h2>
          <p class="leading-relaxed text-base">{val.cost} <span><Link className='ml-[5rem] bg-[#20BFB6] p-2 rounded-lg hover:text-black text-white font-bold '>Book Now</Link></span></p>
        </div>
      </div>
        )
    })}
    </div>
  </div>

  
</div>
    </div>
  )
}

export default Cars