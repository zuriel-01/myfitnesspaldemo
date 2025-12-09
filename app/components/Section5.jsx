import React from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Section5 = () => {
  return (
    <div className='bg-[linear-gradient(200deg,#0066EE_60%,#9383FB_100%)] w-full h-[740px] md:h-[510px] text-white pt-16 bg-no-repeat'>

        
      <div className="section5 flex flex-col md:grid-cols-2 md:grid  md:px-24">
        <div className=" text-center tracking-wider leading-loose">
          <p className="md:text-sm font-light md:font-semibold mb-5 text-center">Get Started</p>
          <h1 className="md:text-5xl text-3xl font-bold">
            Starting is the hard part.
            <span className="font-normal">We make it easy...</span>
          </h1>

          <button className="flex justify-center items-center mt-8 bg-white text-[#0066EE] rounded-4xl px-10 py-2 text-[15px] font-semibold justify-self-center">
            TAKE THE QUIZ
            <MdOutlineKeyboardArrowRight className='text-2xl items-center'/>  
          </button>
          </div>
        
        <Image
          src={"/image2.png"}
          width={330}
          height={120}
          alt="daily planning"
          className="mt-12.5 justify-self-end"
        />
      </div>
    </div>
  )
}

export default Section5
