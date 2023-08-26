import React from 'react'
import {BsFlower2, BsFacebook, BsTwitter} from 'react-icons/bs'
import ContentCard from './ContentCard'
import { Link } from 'react-router-dom'


const Footer = () => {

  return (
    <>


      <div className="blueBg bg-blue min-h-[280px] w-screen mt-10 bg-blue-950">
        <div className="mainHeadings flex flex-col justify-between items-center px-10 pt-10 md:flex-row">
       <div className="leftHeading flex items-center">
        <BsFlower2 className='text-2xl text-white'/> <span className='text-2xl text-white'>MeDAI</span>
       </div>
       <div className="rightIcons text-xl flex gap-4 items-center mt-1">
        <div className="blue bg-blue-500 h-9 w-9 flex items-center justify-center rounded-full">
        <Link to = "https://www.facebook.com"><BsFacebook className='text-white cursor-pointer'/></Link>
            </div>
            <div className="blue bg-blue-500 h-9 w-9 flex items-center justify-center rounded-full">
        <Link to = "https://www.twitter.com"><BsTwitter className='text-white '/></Link>
            </div>
       </div>
       </div>
       <hr  className='w-screen h-[2px] mt-3 bg-gray-600 border-none'/>
        

        <ContentCard/>

      </div>
    </>

  )
}

export default Footer
