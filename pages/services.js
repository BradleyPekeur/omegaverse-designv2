import React from 'react'
import ServicesCards from '../components/ServicesCards'

function services(props) {
  return (
    <div className='min-h-[100vh] w-full flex justify-center items-center' style={{backgroundImage:"url(./img/services/services.png)"}}>
      <div className='flex h-[70vh] w-[82vw] columns-2'>
        <div className='w-[50%] flex flex-col justify-center'>

          <h1 className='text-white text-[96px] '>Services</h1>
          <span className='text-[#FF6600] text-[36px] '>Industries we server</span>
        </div>
        <div className='w-[50%]  flex justify-center items-center relative'>
        <div className='w-full relative'>
          <div className='card1'>
          <ServicesCards
              title="DFM & DFA"
              description="Design for manufacturing & 3D printing"
              textColor = "#FF6600"             
            />
          </div>

            <div className='card2 absolute top-0 left-[29%] w-[600px]'>
              <ServicesCards
                title="Mega CNC Milling"
                description="Multi axis composites machining"
                textColor = "white"
            
              />
            </div>
            <div className='card3 absolute top-0 left-[58%] w-[600px]' >
              <ServicesCards
                title="Mega 3D Printing"
                description = "Large scale 3D printing"
                textColor = "#FF6600"
                
              />
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default services