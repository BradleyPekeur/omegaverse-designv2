import Image from 'next/image'
import React from 'react'

function ServicesCards(props) {
  return (
    <div className={`bg-[${props.colorBg}]  flex flex-col py-4  px-2   `}>
      <div className='w-full  '>
        <div className='flex flex-col w- justify-center items-center'>
          {props.icon}          
        </div>
        <span className={`text-[${props.textColor}] pText`}>{ props.title }</span>
      </div>
      <div className='text-white pt-4'>
        {props.description}
      </div>
    </div>
  )
}

export default ServicesCards