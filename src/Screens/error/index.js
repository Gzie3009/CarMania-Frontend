import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-[50vh] w-[180vh] text-5xl font-bold grid place-items-center' style={{"background":" linear-gradient(283.63deg, #F1F3FC 0%, #F7F7FB 100%)"}}>
        Error 404 Page Not Found
        <p>Go <Link to={"/"} className="-mt-[15rem] underline text-blue-400  ">Home</Link></p>
    </div>
  )
}

export default Error