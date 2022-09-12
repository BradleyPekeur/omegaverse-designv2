import React, { useEffect } from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function HorizontalScroller() {


  useEffect(()=>{
    const horizontalSections = gsap.utils.toArray('.horizontal-sections');

    horizontalSections.forEach((section, i) => {
            
      const thisPinWrap = section.querySelector('.pin-wrap');
      const thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
              
      const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);
    
      ScrollTrigger.create({
          trigger: section,   
          start: "top top",
          end: () => "+=" + (thisAnimWrap.scrollWidth),
          pin: thisPinWrap,
          invalidateOnRefresh: true,
          scrub: true
      })
      
      
     const fakeHorizontalAnim = gsap.fromTo(thisAnimWrap, {
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
      }, {
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
        ease: "none",
        scrollTrigger: {
          trigger: section,   
          start: "top top",
          end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
          scrub: true
        }
      });
      
      const tl = gsap.timeline();
      tl.to('.block-anim', {
        duration: 1,
        ease: 'power3',
        clipPath: 'inset(100% 25% 25.01% 25.01% round 25vw 25vw 25.01vw 25.01vw)'
      });
    
      ScrollTrigger.create({ 
        trigger: section,
        start: () => "top top-=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        end: () => "+=" + window.innerWidth, 
        animation: tl, 
        scrub: true,
        markers: false,
      });
      
     });
  },[])


  return (
    <div className=' text-white min-h-[600vh]'>
      <div className="spacer"></div>

      <div className="horizontal-sections">            
        <div className="pin-wrap">
          <div className="animation-wrap to-right">
            <div className="section bg-cover bg-no-repeat" style={{backgroundImage:"url(./img/home/Header-yacht-1.jpg) "}}>
              <h2>Scroll Down</h2>
            </div>
            <div className="section section-amin section-gray">
              <div>
                <h2 className='sHeading'>Lets create something <span className='text-[#FF6600]'>together</span></h2>
                <div className='flex gap-4 justify-center items-center'>
                  <button className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Visit Store</button>
                  <button className='bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get in touch</button>
                </div>

              </div>
              
              <div className="block-anim yellow flex justify-center items-center" 
              // style={{backgroundImage:"url(./img/home/fworld.jpg) "}}
              >
                <div className='flex w-[80vw] items-center gap-10'>
                  <div className='w-full flex-1 bg-orange-500' ><img src="/img/home/Picture1.jpg" alt="Main Pic"  /></div>   
                  <div className='flex-1 pl-4'>
                    <h1 className='sHeading'>Omega 3D Printing</h1>
                    <ul className=''>
                      <li><span className='pText mr-4 text-[#FF6600]'>Reduce</span><span className='pText'>Labour & Lead time</span></li>
                      <li><span className='pText mr-4 text-[#FF6600]'>Reduce</span><span className='pText'>Waste</span></li>
                      <li><span className='pText mr-4 text-[#FF6600]'>Improve</span><span className='pText'>Efficency</span></li>
                      <li><span className='pText mr-4 text-[#FF6600]'>Create</span><span className='pText'>Products from waste</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* <div className="section section-lightblue  " >
        <h2>Some section 1</h2>
      </div>
      <div className="section "  >
        <h2>Some section 2</h2>
      </div> */}
    </div>
  )
}

export default HorizontalScroller