import React, { useState } from 'react'

const RightSideContainer = () => {

   const [name, setName] = useState('') 
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')

  return (
   <>
   
   <div className='main h-full r mt-8  pl-6 lg:pl-0 w-fit'>
   <h1 className='signupHeading text-purple-500 text-2xl font-semibold'>
    Send me a message
   </h1>
   <p className='font-thin text-gray-500 text-justify text-sm w-5/6'>Send me a message and let's start a conversation about our shared interests and ideas.</p>


   <div className="inputFields mt-3 flex flex-col  w-5/6  ">
    <input type="text" placeholder='Your Name' value={name} onChange={(e)=> setName(e.target.value)} className='bg-purple-100 text-black px-2 rounded-md h-11 outline-none text-sm lg:text-base'/>
    

     <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}
     className='bg-purple-100 text-black px-2 rounded-md  h-11 my-2 outline-none text-sm lg:text-base' />  

     <textarea placeholder='Enter your message' value={message} onChange={(e)=> setMessage(e.target.value)} className='bg-purple-100 text-black px-2 rounded-md  h-28 pt-2 outline-none my-2 text-sm lg:text-base'></textarea>
     </div>
     <button className='mt-4 button h-10 px-7 rounded-md flex items-center justify-center text-white bg-purple-500 hover:bg-purple-400'>Send</button>

   </div>
   </>
  )
}

export default RightSideContainer
