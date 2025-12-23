import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Herosection = () => {
  return (
    <div>
        <div className="hero bg-[linear-gradient(200deg,#0066EE_60%,#9383FB_100%)] h-[1160px] lg:h-[670px] w-full text-center">
        <div className=" flex pt-2 px-5 lg:px-48">
          <p className="text-white text-2xl font-semibold ">myfitnesspal</p>
          <p className=" ml-auto">
            <IoPersonCircleSharp className="text-white text-3xl" />
          </p>
        </div>
        <div className=" flex  flex-col  lg:flex-row lg:px-32 lg:gap-20">
          <div className=" text-center px-18  lg:flex lg:flex-col  lg:justify-start lg:text-left ">
            <h1 className="text-neutral-300 text-sm pt-24 font-semibold lg:text-left">
              #1 nutrition tracking app
            </h1>
            
              <h1 className="text-5xl text-white mt-4 leading-14">Nutrition tracking</h1>
              <div className='flex text-center justify-center lg:justify-start'> 
                 <span className="text-5xl flex text-white text-center  lg:text-left pt-4 ">for 
                <span className='flex items-center justify-center'>
                  <span className='bg-white ml-3 p-1 rotate-358'>
                    <span className='text-[#0066EE] '>real life</span>
                  </span>
                  
                </span>
              </span>
              </div>
             
            
            <p className="text-white  pt-8 md:w-72 flex lg:w-full  justify-self-center ">
              Make progress with the all-in-one food, exercise, and calorie tracker.
            </p>

            <div className='flex justify-center lg:justify-start'>
              <button className=" mt-8 flex justify-center bg-white text-[#0066EE] rounded-4xl px-10 py-2 text-[15px] font-semibold ">
              START TODAY
                <MdOutlineKeyboardArrowRight className='text-2xl items-center'/>          
            </button>
            </div>
            
          </div>
          <div className="flex justify-center mt-16">
            <Image
              src={"/image1.png"}
              className=" shadow-[45px_45px_31px_1px_#00000024] rounded-br-4xl"
              alt="my image"
              width={240}
              height={260}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
