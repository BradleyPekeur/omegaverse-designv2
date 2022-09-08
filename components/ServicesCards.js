import Image from 'next/image'
import React from 'react'

function ServicesCards(props) {
  return (
    <div className={`bg-[${props.colorBg}] rounded-3xl  flex py-20 min-w-full min-h-[480px]`}>
      <div className='flex flex-col items-center justify-center px-8'>
        <div className='flex-col '>
          <Image src="/img/services/DFMinfo.png" alt="Twitter Button"  width={150} height={155}/>          
        </div>
        <span className={`text-[${props.textColor}] pText `}>{ props.title }</span>
      </div>
      <div className='w-[50%] text-white flex-1 p-4'>
      { props.description}
      </div>
    </div>
  )
}

export default ServicesCards