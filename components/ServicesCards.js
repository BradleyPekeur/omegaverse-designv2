import Image from 'next/image'
import React from 'react'

function ServicesCards(props) {
  return (
    <div className={`bg-[${props.colorBg}]  rounded-3xl  flex flex-col py-20 min-w-[260px] px-4   max-h-[480px]`}>
      <div className='w-full  '>
        <div className='flex flex-col w- justify-center items-center'>
          {props.icon}          
        </div>
        <span className={`text-[${props.textColor}] pText `}>{ props.title }</span>
      </div>
      <div className='text-white'>
      { props.description}
      </div>
    </div>
  )
}

export default ServicesCards