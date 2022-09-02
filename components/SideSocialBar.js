import React from 'react'
import Image from 'next/image'

function SideSocialBar() {
  return (
    <div className='h-[80vh] border-r-4 border-white-500 fixed  z-50 flex flex-col w-[80px] mt-24'>
      <div className=' w-full h-full relative flex flex-col items-center'>
        <div className='absolute bottom-12'><Image  src="/img/social/facebook.svg" alt="Facebook Button"  width={45} height={45}/></div>
        <div className='absolute bottom-24'><Image src="/img/social/twitter.svg" alt="Twitter Button"  width={45} height={45}/></div>
        <div className='absolute bottom-36'><Image src="/img/social/linkedin.svg" alt="Linkedin Button"  width={45} height={45}/></div>
      </div>
    </div>
  )
}

export default SideSocialBar