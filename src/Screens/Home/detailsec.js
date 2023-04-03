import React from 'react'
import { Link } from 'react-router-dom';
const Detailsec = () => {
    var Punjab = ["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Mohali","Muktsar","Pathankot","Patiala","Rupnagar","Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran"];
  return (
    <>  <div className='relative'>
        <div className='h-20 ' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
        </div>
        <div className='h-20 w-full absolute top-10'>
        <div className=' flex bg-white h-full mx-32 rounded-2xl shadow-lg'>

        <div className='h-full w-2/5 grid place-items-center border rounded-l-2xl'>
        <label className='mr-20'>Select you location</label>
        <select id="city" name="city">
        <option value="">Select City</option>
        {Punjab && Punjab.map((val,index)=>{
        return(
            <option key={index} value={val}>{val}</option>
        );
        })}
        </select>
        </div>

        <div className='h-full w-2/5 grid place-items-center border'>
            <div>Pickup date</div>
            <input type="date"></input>
        </div>
        <div className='h-full w-2/5 grid place-items-center border border-r-0'>
            <div>Return date</div>
            <input type="date"></input>
        </div>
        <div className='h-full w-1/5 grid place-items-center border border-l-0 rounded-r-2xl'>
        <Link to="/cars" className='h-3/4 w-full mr-5 bg-[#20BFB6] grid place-items-center text-white transition ease-in-out hover:scale-110 font-bold rounded-2xl'>Select Cars</Link>
        </div>




        </div>
        </div>
        <div className='h-20 w-full'>
        </div>
        </div>
    </>
  )
}

export default Detailsec