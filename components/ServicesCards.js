import Image from 'next/image'
import React from 'react'

function ServicesCards(props) {
  return (
    <div className='bg-[rgba(12,11,11,0.8)] rounded-3xl  flex py-20 min-w-full min-h-[400px]'>
      <div className='flex flex-col flex-1 items-center justify-center'>
        <div className='flex-col '>
          <Image src="/img/services/DFMinfo.png" alt="Twitter Button"  width={150} height={155}/>          
        </div>
        <span className='text-[#FF6600] text-[24px]'>{ props.title }</span>
      </div>
      <div className='w-[50%] text-white flex-1 p-4'>
      { props.description}
      </div>
    </div>
  )
}

export default ServicesCards