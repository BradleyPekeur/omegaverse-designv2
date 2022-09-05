import React from 'react'
import TeamId from '../components/TeamId'

function team() {
  return (
    <div className='pt-24 relative overflow-hidden min-h-[100vh] intro-hero'>
      <div className='bg-[rgba(1,1,1,0.5)] absolute top-0 left-0 w-screen h-full z-[-10]'></div>   
        <video className='intro-video absolute top-0 left-0 w-full h-full object-cover z-[-11]' src="/video/earth-teams.mp4" autoPlay  muted/>
       <div className='z-20 flex w-full h-full justify-center pt-20'>
        <h1 className='text-[#FF6600] text-[36px] '>Our Team</h1>
       </div> 
       <div className='teamsContainer relative min-h-[600px] w-screen'>
        <div className='absolute top-[100px] left-[20%]'>
          <TeamId/>          
        </div>
          

        </div>
    </div>
  ) 
}

export default team