import Head from 'next/head'
import Image from 'next/image'
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
          <div className='flex-1 justify-center items-center h-full'>
            <h1 className='text-[#FF6600] mb-8 sHeading'>About Omega</h1>
            <p className='text-white pText'>
            We are a large scale CNC & 3D printing, composites start up. We manufacture tooling, models, prototypes and patterns for numerous sectors. We support local initiatives that drive awareness and create innovation through re-purposing waste. We are passionate about sustainability, our economy and competitiveness as a country
            </p>
          </div>
        </div>
      </section>



      <section className='flex w-full justify-center bg-no-repeat min-h-[100vh] items-center bg-cover bg-center' style=  {{backgroundImage:"url(/img/home/automotive.png)"}}>
        <div className='bg-red'>
          <div>Left</div>
          <div className='text-white'>Endless Possibilities</div>
        </div>
      </section>

    </div>
  )
}
