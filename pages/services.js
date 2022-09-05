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
        <div className='w-[50%]  flex justify-center items-center relative bg-red-800'>
        <div className='w-full relative'>
          <ServicesCards
              title="DFM & DFA"
              description="Hello World"
            />
            <div className='absolute top-0 left-60 bg-blue-800 w-[600px]'>
              <ServicesCards
                title="DFM & DFA"
                description="Hello World"
              />
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default services