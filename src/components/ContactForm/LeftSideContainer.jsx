import React from 'react'
import { FaAddressCard } from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const LeftSideContainer = () => {
  return (
    <>
    
    <div className='min-h-fit w-full flex lg:flex-col lg:w-fit justify-between px-4 mt-8 gap-1'>
        <div className="address flex flex-col items-center">
        <FaAddressCard className="text-3xl text-purple-600"/>
        <span className='addressSpan text-black font-medium'>Address</span>

       <span className='text-gray-500 text-xs'>Surkanda, NP12</span>
       <span className='text-gray-500 text-xs'>Bheemnagar 07</span>
        </div>

        <div className="address flex flex-col items-center">
        <BsFillTelephoneFill className="text-3xl text-purple-600"/>
        <span className='addressSpan text-black font-medium'>Phone</span>

       <span className='text-gray-500 text-xs'>+9658321478</span>
       <span className='text-gray-500 text-xs'>+8523697410</span>
        </div>

        <div className="address flex flex-col items-center">
        <MdEmail className="text-3xl text-purple-600"/>
        <span className='addressSpan text-black font-medium'>Email</span>

       <span className='text-gray-500  text-xs'>alfa@gmail.com</span>
       <span className='text-gray-500  text-xs'>beeta@gmail.com</span>
        </div>
    </div>
    </>
  )
}

export default LeftSideContainer
