import React, { useEffect, useRef } from 'react'
import ServicesCards from '../components/ServicesCards'
import { gsap } from "gsap/dist/gsap";


function Services(props) {

  
  const card1 = useRef(null)
  const card2 = useRef(null)
  const card3= useRef(null)

  useEffect(() => {
    const cardContainer1 =  document.querySelector('.card1')
    const cardContainer2 =  document.querySelector('.card2')
    const cardContainer3 =  document.querySelector('.card3')

    let cardPlay1 = gsap.to(card1.current, {  zIndex:200,paused: true });
    let cardPlay2 = gsap.to(card2.current, { x: "-40%", zIndex:100 ,paused: true });
    let cardPlay3 = gsap.to(card3.current, { x: "-40%", zIndex:100 ,paused: true });

    cardContainer1.addEventListener("mouseover", () => cardPlay1.play())
    cardContainer1.addEventListener("mouseleave", () => cardPlay1.reverse())
    cardContainer2.addEventListener("mouseover", () => cardPlay2.play())
    cardContainer2.addEventListener("mouseleave", () => cardPlay2.reverse())
    cardContainer3.addEventListener("mouseover", () => cardPlay3.play())
    cardContainer3.addEventListener("mouseleave", () => cardPlay3.reverse())
  });

  return (
    <div className='min-h-[100vh] w-full flex justify-center items-center bg-no-repeat' style={{backgroundImage:"url(./img/services/services.png) "}}>
      <div className='flex h-[70vh] w-[82vw] columns-2'>
        <div className='w-[50%] flex flex-col justify-center'>

          <h1 className='text-white heading'>Services</h1>
          <span className='text-[#FF6600] sHeading'>Industries we server</span>
        </div>
        <div className='w-[50%]  flex justify-center items-center relative'>
        <div className='w-full relative'>
          <div className='card1 relative' ref={card1}>
          <ServicesCards
              title="DFM & DFA"
              description="Design for manufacturing & 3D printing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
              textColor = "#FF6600"             
            />
          </div>

            <div className='card2 absolute top-0 left-[29%] w-[600px]' ref={card2}>
              <ServicesCards
                title="Mega CNC Milling"
                description="Multi axis composites machiningLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                textColor = "white"
            
              />
            </div>
            <div className='card3 absolute top-0 left-[58%] w-[600px]' ref={card3} >
              <ServicesCards
                title="Mega 3D Printing"
                description = "Large scale 3D printing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                textColor = "#FF6600"
                
              />
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Services