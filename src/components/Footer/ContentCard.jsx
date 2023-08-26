import React from 'react'
import { Link } from 'react-router-dom'

const ContentCard = () => {


  return (
    <>
    <div className='mt-3 text-white flex px-10 justify-around flex-wrap gap-y-6 gap-x-8 '>
      <div className="company">
        <h2 className='font-medium text-base'>Reach Us</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <Link to= "/"><li className='cursor-pointer'>Home</li></Link>
                <Link to = "/pages/Contactus"><li className='cursor-pointer'>Contact Us</li></Link>
            </ul>
        </div>
      </div>

      <div className="services">
        <h2 className='font-medium text-base'>Services</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <Link to = "/pages/BookAppointment"><li className='cursor-pointer'>Appointment</li></Link>
                <Link to = "/pages/Records"><li className='cursor-pointer'>User Details</li></Link>
                <Link to = "/pages/Hospital"><li className='cursor-pointer'>Hospitals</li></Link>
                <Link to = "/pages/Medicine"><li className='cursor-pointer'>Medicine</li></Link>
            </ul>
        </div>
      </div>


     

      <div className="account">
        <h2 className='font-medium text-base'>Account</h2>
        <hr className='h-[2px] bg-white w-8'/>
        <div className="lists mt-2">
            <ul className='text-gray-400 text-sm flex flex-col gap-1'>
                <Link to = "./pages/Dashboard"><li className='cursor-pointer'>Profile</li></Link>
                <Link to = "./pages/Account"><li className='cursor-pointer'>My account</li></Link>
                <Link to = "./pages/Hospital"><li className='cursor-pointer'>Hospital</li></Link>
            </ul>
        </div>
      </div>
    </div>

</>
  )
}

export default ContentCard
