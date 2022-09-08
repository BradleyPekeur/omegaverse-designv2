import React from 'react'
import TeamId from '../components/TeamId'

function team(props) {
  return (
    <div className='pt-24 relative overflow-hidden min-h-[100vh] intro-hero'>
      <div className='bg-[rgba(1,1,1,0.5)] absolute top-0 left-0 w-screen h-full z-[-10]'></div>   
        <video className='intro-video absolute top-0 left-0 w-full h-full object-cover z-[-11]' src="/video/earth-teams.mp4" autoPlay  muted/>
       <div className='z-20 flex w-full h-full justify-center pt-20'>
        <h1 className='text-[#FF6600] text-[36px] mb-10'>Our Team</h1>
       </div> 
       <div className='teamsContainer relative min-h-[600px] w-screen pl-4'>
        <div className='md:absolute top-[100px] left-[28%] mb-8'>
          <TeamId
            profile ="ClintonJohns.png"
            position="Consultant"
            name="Clinton Johns"
            top="100px"
            left="400px"           
          />          
        </div>

        <div className='md:absolute top-[200px] right-[30%] mb-8'>
          <TeamId
            profile ="ChadS.png"
            position="HOM"
            name="Chad Swart"
          />          
        </div>

        <div className='md:absolute top-[400px] right-[20%] mb-8'>
          <TeamId
            profile ="DevondF.png"
            position="CAD Programmer"
            name="Devon de Freitas"
          />          
        </div>

        <div className='md:absolute bottom-[60px] left-[34%] mb-8'>
          <TeamId
            profile ="KevinR.png"
            position="CNC Operator"
            name="Kevin Ruzvidzo"
          />          
        </div>

 
   


          

        </div>
    </div>
  ) 
}

export default team