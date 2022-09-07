import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-[#010101] min-h-[545px] w-[100vw] flex justify-center items-center border-t-[0.5px] border-indigo-500'>
      <div className='text-white w-full  flex justify-between max-w-[80vw]'>
        <div>
          <h4 className='text-[36px] text-[#FF6600] mb-6'>Get in touch</h4>
          <div className='flex items-center'>
            <span><div className=''><Image  src="/img/social/facebook.svg" alt="Facebook Button"  width={45} height={45}/></div></span>
            <span className='text-[24px] leading-16'>omegaverse.com</span>
          </div>
          <div className='flex items-center'>
            <span><div className=''><Image  src="/img/social/facebook.svg" alt="Facebook Button"  width={45} height={45}/></div> </span>
            <span className='text-[24px]'>082 820 2843</span>
          </div>
          <div className='flex items-center'>
            <span><div className=''><Image  src="/img/social/facebook.svg" alt="Facebook Button"  width={45} height={45}/></div> </span><span className='text-[24px]'>Cape Town</span>
          </div>
        </div>

        <div>
          <div className='flex'>
            <div className=''><Image  src="/img/social/facebook.svg" alt="Facebook Button"  width={45} height={45}/></div>        
            <div className=''><Image src="/img/social/twitter.svg" alt="Twitter Button"  width={45} height={45}/></div>
            <div className=''><Image src="/img/social/linkedin.svg" alt="Linkedin Button"  width={45} height={45}/></div>           
          </div>

          <div className='h-[2px] w-full bg-white mb-4'></div>

          <Link href="./"><div className='min-h-[40px]'><Image src="/omegaverse_logo.svg" alt="Logo"  width={200} height={40} /></div></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer