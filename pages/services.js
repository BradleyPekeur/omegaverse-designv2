import React, { useEffect, useRef } from 'react'
import ServicesCards from '../components/ServicesCards'
import { gsap } from "gsap/dist/gsap";

import { ImAirplane} from 'react-icons/im';
import { TbBuildingBridge} from 'react-icons/tb';
import { SiBlockchaindotcom} from 'react-icons/si';
import { GiCutDiamond} from 'react-icons/gi';


function Services(props) {
  
  // const card1 = useRef(null)
  // const card2 = useRef(null)
  // const card3= useRef(null)

  // useEffect(() => {
  //   const cardContainer1 =  document.querySelector('.card1')
  //   const cardContainer2 =  document.querySelector('.card2')
  //   const cardContainer3 =  document.querySelector('.card3')

  //   let cardPlay1 = gsap.to(card1.current, {  zIndex:200,paused: true });
  //   let cardPlay2 = gsap.to(card2.current, { x: "-40%", zIndex:100 ,paused: true });
  //   let cardPlay3 = gsap.to(card3.current, { x: "-40%", zIndex:100 ,paused: true });

  //   cardContainer1.addEventListener("mouseover", () => cardPlay1.play())
  //   cardContainer1.addEventListener("mouseleave", () => cardPlay1.reverse())
  //   cardContainer2.addEventListener("mouseover", () => cardPlay2.play())
  //   cardContainer2.addEventListener("mouseleave", () => cardPlay2.reverse())
  //   cardContainer3.addEventListener("mouseover", () => cardPlay3.play())
  //   cardContainer3.addEventListener("mouseleave", () => cardPlay3.reverse())
  // });

  return (
    <>
    <div className='min-h-[140vh] md:min-h-[100vh]  w-full flex justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:"url(./img/services/services.png) "}}>
      <div className='flex h-[70vh] w-[82vw] columns-2 flex-col md:flex-row '>
        <div className='flex-1 flex flex-col justify-center'>

          <h1 className='text-white heading'>Services</h1>
          <span className='text-[#FF6600] sHeading'>Industries we server</span>
        </div> 
        <div className='  flex justify-center items-center relative flex-1'>

        {/* <div className='w-full relative flex flex-col md:flex-row'>
            <div className='card1 ' ref={card1}>
                <ServicesCards
                    title="DFM & DFA"
                    description="Design for manufacturing & 3D printing Lorem Ipsum is simply dummy text of the printing and typesetting industry.,"
                    textColor = "#FF6600" 
                    className="relative"             
                  />
            </div>

            <div className='card2 relative' ref={card2}>
                <ServicesCards
                  title="Mega CNC Milling"
                  description="Multi axis composites machiningLorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  textColor = "white"            
                />
            </div>

            <div className='card3 relative' ref={card3} >
              <ServicesCards
                title="Mega 3D Printing"
                description = "Large scale 3D printing Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                textColor = "#FF6600"                
              />
            </div>
        </div> */}

        

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className='bg-[#00000077] border border-[#FF6600] flex flex-col items-center justify-center p-5'>
              <ServicesCards
                    icon = {<TbBuildingBridge size={50} color="white" className="mb-10"/>}
                    title="DFM & DFA"
                    description="Design for manufacturing & 3D printing Lorem Ipsum is simply dummy text of the printing and typesetting industry.,"
                    textColor = "#FF6600" 

                    className="relative"             
                  />               
              </div>

              <div className='bg-[#00000077] border border-[#FF6600] flex flex-col items-center justify-center p-5'>
              <ServicesCards
                  icon = {<GiCutDiamond size={50} color="white" className="mb-10"/>}
                  title="Mega CNC Milling"
                  description="Multi axis composites machiningLorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  textColor = "white"            
                />               
              </div>

              <div className='bg-[#00000077] border border-[#FF6600] flex flex-col items-center justify-center p-5 '>
                <ServicesCards
                icon = {<SiBlockchaindotcom size={50} color="white" className="mb-10"/>}
                  title="Mega 3D Printing"
                  description = "Large scale 3D printing Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                  textColor = "#FF6600"                
                />             
              </div>

          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Services