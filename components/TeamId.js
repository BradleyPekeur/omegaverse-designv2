import React from 'react'
import Image from 'next/image'

function TeamId() {
  return (
    <div>
      <div className='user1 relative flex'>
        <Image src="/img/teams/ClintonJohns.png" alt="ID1"  width={140} height={140} />
        <div className='nameContainer bg-[rgba(0,0,0,0.9)] rounded-3xl flex flex-col justify-center items-center h-[80px] px-4'>
          <span className='text-[#FF6600] text-[16px]'>Position</span>
          <span className='text-[white] text-[24px]'>Clinton Johns</span>
        </div>        
      </div>      
    </div>
  )
}

export default TeamId