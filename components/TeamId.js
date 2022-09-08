import React from 'react'
import Image from 'next/image'

function TeamId(props) {
  return (
    <div>
      <div className='user1 relative flex'>
        <Image src={`/img/teams/${props.profile}`} alt="ID1"  width={140} height={140} className="relative"/>
        <div className={`nameContainer bg-[rgba(0,0,0,0.9)] min-w-[200px] rounded-3xl flex flex-col justify-center items-center h-[80px] px-4 ${props.float} top-[${props.top}] left-[${props.left}]`}>
          <span className='text-[#FF6600] text-[16px]'>{props.position}</span>
          <span className='text-[white] pText'>{props.name}</span>
        </div>        
      </div>      
    </div>
  )
}

export default TeamId