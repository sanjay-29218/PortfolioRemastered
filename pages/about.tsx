import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
// import SanjayCV from '../public/SanjayCV.pdf'
const AboutScreen = () => {
  return (
    <Layout>
      <div className='text-white' >
        <h1 >About<span className='primary text-2xl ml-1'>Me</span></h1>
        <div className='grid grid-cols-[60%,400px] grid-rows-1'>
          <div className='w-[20vw]   h-[70vh] relative left-8   '>
            <Image className='z-10 rounded-lg ' priority src="/me.jpg" fill objectFit='contain'  alt="" />
            <div id='box' className='gradient-border'></div>
          </div>
          <div className='grid grid-rows-3 grid-cols-1'>
            <div className='text-2xl pt-5'>FULL STACK DEV</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel numquam consectetur, quas aperiam aut sint ipsam iste, soluta molestiae distinctio deserunt ea labore nobis. Ratione minima excepturi dolor et.</p>
            <div className='grid grid-cols-2 grid-rows-1'>
              <div className='justify-self-start cursor-pointer self-start p-4 rounded-lg text-black font-semibold bg-primary'>Let's Chat</div>
              {/* <a download={SanjayCV} className='justify-self-start cursor-pointer self-start p-4 rounded-lg text-black font-semibold bg-primary'>Resume</a> */}
              
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default AboutScreen