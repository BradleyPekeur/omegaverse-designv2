import React, { useState } from 'react'
import Image from 'next/image'

function Navbar() {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
      setNav(!nav)
  };

  return (
    <nav className='flex justify-around w-screen fixed pt-14 px-[170px] z-50'>
      {/* <div>Logo</div> */}
      <Image src="/omegaverse_logo.svg" alt="Picture of the author"  width={200} height={40}/>
      <ul className='flex space-x-4 w-full justify-center text-white' >
        <li>Home</li>
        <li>Endeavor</li>
        <li>Services</li>
        <li>Team</li>
        <li>Contact Us</li>        
      </ul>
      <button className='bg-[#FF6600] py-1 px-4 rounded-full w-[260px]'>Store</button>
    </nav>
  )
}

export default Navbar