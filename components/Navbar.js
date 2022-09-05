import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHamburger } from 'react-icons/fa';
import { GiSplitCross } from 'react-icons/gi';

function Navbar() {

  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
      setNav(!nav)
  };  

  return (
    <nav className='flex justify-around w-screen fixed pt-14 px-[20px] md:px-[170px] z-50'>
      <Link href="./"><div className='min-h-[40px]'><Image src="/omegaverse_logo.svg" alt="Logo"  width={200} height={40} /></div></Link>
      <ul className='hidden md:flex space-x-4 w-full justify-center text-white text-size-4' >
        <li><Link href="./">Home</Link></li>
        <li><Link href="./endeavor">Endeavor</Link></li>
        <li><Link href="./services">Services</Link></li>
        <li><Link href="./team">Team</Link></li>
        <li><Link href="./contact">Contact Us</Link></li>        
      </ul>
      <button className='bg-[#FF6600]  px-1 rounded-full w-[200px] hidden md:flex justify-center items-center'>Store</button>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <GiSplitCross size={20} style={{color:"white"}}/> : <FaHamburger size={20} style={{color:"white"}} />}
      </div>
      <ul  className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-[#FF6600] pl-[90px] pt-[60px]' : 'ease-in-out duration-500 fixed left-[-100%] '}>
      <div className='min-h-[40px]'><Image src="/omegaverse_logo.svg" alt="Logo"  width={200} height={40} /></div>
          <li className='p-4 border-b border-gray-600'><Link href="./">Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="./endeavor">Endeavor</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="./services">Services</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="./team">Team</Link></li>
          <li className='p-4'><Link href="./contact">Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar