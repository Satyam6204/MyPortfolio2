import React from 'react'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import TypingAnimation from '../components/TypingAnimation';

import Btn from '../components/Btn';




function Home() {
  return (
    <>
    
      <div className='flex justify-center items-center flex-col  bg-lime-50 h-screen'>



        <div className='flex justify-center items-center flex-col  w-100 md:w-300'>
          <br /><br /><br /><br /><br /><br />

          <h3 className='text-black font-bold text-2xl'>I'm Satyam</h3>
          <h1 className='text-3xl font-extrabold md:text-7xl'> Java Full Stack Developer </h1>

          <TypingAnimation /><br />

          <Btn />



        </div>

        <div>
          <DotLottieReact
            className='w-100 md:w-200 lg:w-250 '
            src="https://lottie.host/2194467e-3ca8-4a7d-aebe-6d48efc1abb7/YTlR1zQlPt.lottie"
            loop
            autoplay
          />
        </div>



      </div>
    </>


  )
}

export default Home