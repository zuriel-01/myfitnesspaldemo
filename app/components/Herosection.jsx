import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Herosection = () => {
  return (
    <div>
        <div className="hero bg-[linear-gradient(200deg,#0066EE_60%,#9383FB_100%)] h-[1160px] w-full text-center">
        <div className=" flex pt-2 px-5">
          <p className="text-white text-2xl font-semibold ">myfitnesspal</p>
          <p className=" ml-auto">
            <IoPersonCircleSharp className="text-white text-3xl" />
          </p>
        </div>
        <div className=" flex items-center flex-col">
          <div className=" items-center px-18">
            <h1 className="text-neutral-300 text-sm pt-24 font-semibold">
              #1 nutrition tracking app
            </h1>
            
              <h1 className="text-5xl text-white mt-4 leading-14">Nutrition tracking</h1>
              <div className='flex justify-center'> 
                 <span className="text-5xl flex text-white pt-4 text-center">for 
                <span className='flex items-center justify-center'>
                  <span className='bg-white ml-3 p-1 rotate-358'>
                    <span className='text-[#0066EE] '>real life</span>
                  </span>
                  
                </span>
              </span>
              </div>
             
            
            <p className="text-white  pt-8">
              Make progress with the all-in-one food, exercise, and calorie tracker.
            </p>
            <button className=" mt-8 flex justify-center bg-white text-[#0066EE] rounded-4xl px-10 mx-auto py-2 text-[15px] font-semibold">
              START TODAY
                <MdOutlineKeyboardArrowRight className='text-2xl items-center ' />          
            </button>
          </div>
          <div className=" mt-16">
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
