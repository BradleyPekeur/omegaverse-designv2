import Head from 'next/head'
import Image from 'next/image'
import HorizontalScroller from '../components/HorizontalScroller'
import MainHero from '../components/MainHero'
import Navbar from '../components/Navbar'
import SideSocialBar from '../components/SideSocialBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />        
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <main className={styles.main}>
        <Navbar/>
        <SideSocialBar/>
        <MainHero/>
      </main>

      <section className='flex w-screen justify-center min-h-[100vh] items-center bg-[#010101]'>
        <div className='flex flex-col md:flex-row max-w-[80vw] h-full justify-center items-center'>
          <div className='flex-1'>
            <Image src="/img/home/Machine.png" alt="Twitter Button"  width={744} height={692}/> 
          </div>
          <div className='flex-1 justify-center items-center h-full relative'>
            <h1 className='text-[#FF6600] mb-8 sHeading'>About Omega</h1>
            <p className='text-white pText '>
            We are a large scale CNC & 3D printing, composites start up. We manufacture tooling, models, prototypes and patterns for numerous sectors. We support local initiatives that drive awareness and create innovation through re-purposing waste. We are passionate about sustainability, our economy and competitiveness as a country
            </p>
          </div>
        </div>
      </section>



      <section className='flex w-full justify-center bg-no-repeat min-h-[100vh] items-center bg-cover bg-center relative ' >
        <div className='h-full w-[80vw] flex flex-col md:flex-row'>

          <div className='text-white flex-1'>
            <h1 className='sHeading mb-16'>Industries We Serve</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Marine</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Film</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Automotive</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Medical</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Aerospace</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Military</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Electronics</span>
              </div>
              <div className='border border-[#FF6600] flex flex-col items-center justify-center p-5'>
                <img src="/img/services/DFMinfo.png" alt="Twitter Button" className='w-[100px]' />
                <span className='pText mr-4 text-[#FF6600]'>Medical</span>
              </div>
             
              
            </div>
            <ul className=''>
              <li></li>
              <li><span className='pText mr-4 text-[#FF6600]'></span></li>
              <li><span className='pText mr-4 text-[#FF6600]'></span></li>
              <li><span className='pText mr-4 text-[#FF6600]'></span></li>
              <li><span className='pText mr-4 text-[#FF6600]'></span></li>
              <li><span className='pText mr-4 text-[#FF6600]'></span></li>
            </ul>
          </div> 
          <div className='w-full flex-1 bg-orange-500' ><img src="/img/home/Picture2.jpg" alt="Main Pic"  /></div>
        </div>
   
      </section>

      <section className='relative'>
        <HorizontalScroller/>
      </section>

    </div>
  )
}
