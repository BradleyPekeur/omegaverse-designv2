import React from 'react'

function endeavor() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-[#010101]'>
      <div className=' flex flex-col md:flex-row max-w-[80vw]'>
        <div className='basis-1/2 relative'>  
          <video className='object-cover z-30' src="/video/world.mp4" autoPlay muted loop />        
        </div>
        <div className='basis-1/3 '>
          <h1 className='text-[#FF6600] mb-7 sHeading' >Our Endeavor</h1>
          <p className='text-white pText'>
            DISRUPT the industry & become pioneers of large scale 3D printing in SA. Creating infinite product development through re-purposed waste. Make a contribution to saving our planet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default endeavor