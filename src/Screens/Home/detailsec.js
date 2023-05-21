import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Detailsec = () => {
    const navigate=useNavigate()
    const data=useSelector((state)=> {return state.users})
    const [city,setCity]=useState("Select City")
    const [date1,setDate1]=useState("");
    const [date2,setDate2]=useState("");
    const start=new Date(date1);
    const end=new Date(date2)
    const hours= (end-start)/3600000;
    const handleClick=()=>{
        if(data.auth){
            if(hours>0){
            if(city && date1 && date2){
                const bookingData={
                    city,date1,date2
                }
                localStorage.setItem("bookingData",JSON.stringify(bookingData))
                navigate("/cars")
            }
            else{
                toast("Please fill the details first")
            }
        
        }
        else{
            toast("select a proper Date")
            setDate1("")
            setDate2("")
        }
    }
        else{
            toast("Please Log In First");
            navigate("/login")
        }
    }
    
    var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
  return (
    <>  <div className='relative mb-20'>
        <div className='h-20 ' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
        </div>
        <div className=' md:h-20 w-full mt-10 md:mt-0 md:absolute top-10'  data-aos="fade-right">
        <div className=' hidden md:flex bg-white h-full mx-32 rounded-2xl shadow-lg'>


        <div className='h-full w-2/5 grid place-items-center border rounded-l-2xl'>
        <label className='font-bold text-xl'>Select you location</label>
        <select className='w-2/3' value={city} onChange={(e)=>setCity(e.target.value)} id="city" name="city">
        <option>Select City</option>
        {Punjab && Punjab.map((val,index)=>{
        return(
            <option key={index}>{val}</option>
        );
        })}
        </select>
        </div>

        <div className=' h-full w-2/5 grid place-items-center border'>
            <div className='font-bold text-xl'>Pickup date</div>
            <input className='w-2/3' type="date" value={date1} onChange={(e)=>setDate1(e.target.value)}></input>
        </div>
        <div className='h-full w-2/5 grid place-items-center border border-r-0'>
            <div className='font-bold text-xl'>Return date</div>
            <input className='w-2/3' type="date" value={date2} onChange={(e)=>setDate2(e.target.value)}></input>
        </div>
        <div className='h-full w-1/5 grid place-items-center border border-l-0 rounded-r-2xl'>
        <button onClick={handleClick} className='h-3/4 w-full mr-5 bg-[#20BFB6] grid place-items-center text-white transition ease-in-out hover:scale-110 font-bold rounded-2xl'>Select Cars</button>
        </div>
        </div>


<div className='block md:hidden w-full h-full bg-black p-5 -mt-10'>
        <div className=' w-full flex flex-col bg-white h-full rounded-2xl shadow-lg'>

<div className='h-full p-5 grid place-items-center'>
<label className='font-bold text-xl'>Select you location</label>
<select className='w-1/3' value={city} onChange={(e)=>setCity(e.target.value)} id="city" name="city">
<option>Select City</option>
{Punjab && Punjab.map((val,index)=>{
return(
    <option key={index}>{val}</option>
);
})}
</select>
</div>

<div className=' h-full grid place-items-center border p-5'>
    <div className='font-bold text-xl'>Pickup date</div>
    <input className='' type="date" value={date1} onChange={(e)=>setDate1(e.target.value)}></input>
</div>
<div className='h-full grid place-items-center border border-r-0 p-5'>
    <div className='font-bold text-xl'>Return date</div>
    <input className='' type="date" value={date2} onChange={(e)=>setDate2(e.target.value)}></input>
</div>
<div className='h-full grid place-items-center border border-b-0 rounded-b-2xl'>
<button onClick={handleClick} className=' rounded-b-2xl h-full w-full bg-[#20BFB6] grid place-items-center text-white transition ease-in-out hover:scale-110 font-bold'>Select Cars</button>
</div>
</div>
</div>


        </div>
        <div className='hidden md:visible h-20 w-full'>
        </div>
        </div>
    </>
  )
}

export default Detailsec