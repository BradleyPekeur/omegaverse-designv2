import Image from 'next/image'
import React from 'react'

function ServicesCards(props) {
  return (
    <div className={`bg-[${props.colorBg}]  rounded-3xl  flex flex-col py-20 min-w-[260px] px-4   max-h-[480px]`}>
      <div className='w-full  '>
        <div className='flex flex-col w- justify-center items-center'>
          <Image src="/img/services/DFMinfo.png" alt="Twitter Button"  width={150} height={155}/>          
        </div>
        <span className={`text-[${props.textColor}] pText `}>{ props.title }</span>
      </div>
      <div className='text-white p-4'>
      { props.description}
      </div>
    </div>
  )
}

export default ServicesCards