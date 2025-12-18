import React from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Section5 = () => {
  return (
    <div className='bg-[linear-gradient(200deg,#0066EE_60%,#9383FB_100%)] w-full h-[550px] md:h-[740px] md:[20px] lg:h-[510px] text-white bg-no-repeat flex justify-center mt-10'>

        
      <div className="flex flex-col lg:grid-cols-2 lg:grid  md:px-24">
       <div className=''> 
          <p className="mt-10 md:mt-12  md:text-sm font-light md:font-semibold mb-5 text-center">Get Started</p>
          <h1 className="md:text-5xl text-3xl font-bold w-96 text-center mx-auto">
            Starting is the hard part.
            <span className="font-normal text-center">We make it easy...</span>
          </h1>
       </div>
          
        <div>
             <button className="flex justify-center items-center mt-8 bg-white text-[#0066EE] px-4 rounded-4xl py-2 text-[15px] font-semibold justify-self-center">
            TAKE THE QUIZ
            <MdOutlineKeyboardArrowRight className='text-2xl items-center'/>  
          </button>
        </div>
         
        
        <div className='mx-auto relative w-52 h-72 md:w-[280px] md:h-[350px] lg:w-[400px] lg:h-[150px] mt-9 md:mt-24'>
          <Image
          src={"/image2.png"}
          fill
          alt="daily planning"
       
        />
        </div>
       
      </div>
    </div>
  )
}

export default Section5
