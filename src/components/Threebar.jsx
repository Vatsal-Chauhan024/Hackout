import React from 'react'

const Threebar = ({onClick}) => {
  return (
    <>
    <div className='py-3 pl-9 md:pl-6'>
    <div className="threeBar h-11 w-11 flex flex-col  rounded-lg cursor-pointer   bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100" onClick={onClick}>
  <hr className='h-1 mt-2 mx-1 bg-gray-300'/>
  <hr className='h-1 mt-2 mx-1 bg-gray-300'/>
  <hr className='h-1 mt-2 mx-1 bg-gray-300'/>
    </div>
    </div>
    </>
  )
}

export default Threebar
