import React, { useState ,useEffect} from 'react'
import "./style.css"
import car1 from "../../Assets/cars/car1.jpg"
import car2 from "../../Assets/cars/car2.jpg"
import car3 from "../../Assets/cars/car3.jpg"
import car4 from "../../Assets/cars/car4.jpg"
import car5 from "../../Assets/cars/car5.jpg"
import car6 from "../../Assets/cars/car6.jpg"
import car7 from "../../Assets/cars/car7.jpg"
import car8 from "../../Assets/cars/car8.jpg"
import car9 from "../../Assets/cars/car9.jpg"
import car10 from "../../Assets/cars/car10.jpg"
import car11 from "../../Assets/cars/car11.jpg"
import car12 from "../../Assets/cars/car12.jpg"
import { Link, useNavigate } from 'react-router-dom'
const Cars = () => {
  const [loading,setLoading]=useState(true);
    useEffect(() => {
        setTimeout(function(){
            setLoading(false)
        },500)
    }, [])

  const navigate=useNavigate();
    const economy=[{
        src:car1,
        name:"2021 Swift Dzire",
        cost:100,
        link:"1"
       },
       {
        src:car2,
        name:"2020 Tata Tiago",
        cost: 150,
        link:"2"
       },
       {
        src:car3,
        name:"2019 Suzuki Ertiga",
        cost: 250,
        link:"3"
       },
       {
        src:car4,
        name:"2022 Hyundai Nios",
        cost: 200,
        link:"4"
       },
       ];

const premium=[{
        src:car5,
        name:"2022 BMW 320D",
        cost: 1700,
        link:"5"
       },
       {
        src:car6,
        name:"2021 Mercedes C-class",
        cost: 2500,
        link:"6"
       },
       {
        src:car7,
        name:"2020 Toyota Innova",
        cost: 1000,
        link:"7"
       },
       {
        src:car8,
        name:"2022 Toyota Fortuner",
        cost: 1500,
        link:"8"
       },
       ];

const LUXURY=[{
        src:car9,
        name:"2023 Land Rover Vogue",
        cost: 7500,
        link:"9"
       },
       {
        src:car10,
        name:"2022 Rollce Royce Phantom",
        cost: 12000,
        link:"10"
       },
       {
        src:car11,
        name:"2021 Mercedes S-Class",
        cost: 5000,
        link:"11"
       },
       {
        src:car12,
        name:"2020 Bentley Flying Spur",
        cost: 10000,
        link:"12"
       },
       ];
    const handleClick=(val)=>{
          localStorage.setItem("prod",JSON.stringify(val))
          navigate(`${val.link}`)
       }


  return (
    <>
    {loading?<div className='w-[100vw] h-[60vh] pl-[46%] bg-[#F7F7FB]'><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>:
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
      <div key={id} onClick={()=>{
        handleClick(val)
      
      }} class="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={val.src} alt="content"/>
          <h3 class=" tracking-widest text-indigo-500 text-xs font-medium title-font">ECONOMY</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{val.name}</h2>
          <p class="leading-relaxed text-base">Rs {val.cost}/hr<span><button className='ml-24 bg-[#20BFB6] p-2 rounded-lg hover:text-black text-white font-bold'>Book Now</button></span></p>
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
      <div key={id} onClick={()=>handleClick(val)} class="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={val.src} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">PREMIUIM</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{val.name}</h2>
          <p class="leading-relaxed text-base">Rs {val.cost}/hr <span><button className='ml-[5rem] bg-[#20BFB6] p-2 rounded-lg hover:text-black text-white font-bold '>Book Now</button></span></p>
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
      <div key={id} onClick={()=>handleClick(val)} class="xl:w-1/4 md:w-1/2 p-4 hover:cursor-pointer">
        <div class="bg-white p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={val.src} alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">LUXURY</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{val.name}</h2>
          <p class="leading-relaxed text-base">Rs {val.cost}/hr <span><button className='ml-[5rem] bg-[#20BFB6] p-2 rounded-lg hover:text-black text-white font-bold '>Book Now</button></span></p>
        </div>
      </div>
        )
    })}
    </div>
  </div>

  
</div>
    </div>
    }
    </>
  )
}

export default Cars