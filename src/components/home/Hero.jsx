import React from 'react'
import heroImg from "../../../public/images/hero-img.png";

function Hero() {
  return (
    <div
    className=' h-[70vh] w-full bg-no-repeat bg-cover bg-center'
      style={{backgroundImage: `url(${heroImg})`}}
    >
     
     <div className='h-[80%] flex flex-col justify-center pl-5 text-white text-3xl'>
        <p>Welcome to triptohoneymoon </p>
     <h1 className=' mt-5 text-5xl'>Let's Explore Andaman</h1>
     </div>

    </div>
  )
}

export default Hero