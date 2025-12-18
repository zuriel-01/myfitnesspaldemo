import React from 'react'
import { TbFlag3Filled } from "react-icons/tb";
import Image from 'next/image';

const Section2 = () => {
  return (
    <div>
       <div className="section3">
        <div className='flex justify-center mt-16'>
          <TbFlag3Filled className=' text-blue-500 text-3xl' />
          
        </div>
        <h1 className="text-center pt-5 font-semibold text-4xl px-16 mb-7">
          Hit your health goals in 1-2-3
        </h1>

        <div className="flex items-center flex-col px-12">        
            <h1 className="text-6xl font-bold text-center text-blue-600 ">1</h1>
            <p className="text-[28px] font-bold text-center">
              Track calories, macros, and more
            </p>
            <p className="mt-4 mb-4 text-gray-500 text-center w-80">
              Log even faster with tools like barcode scan & the NEW voice log.
            </p>
          
          <Image
            src={"/image4.png"}
            width={300}
            height={120}
            alt="Track"
            className='relative z-10  rounded-3xl'
          />
          
        </div>

        <div className="flex items-center flex-col">          
            <h1 className="text-6xl font-bold text-center text-blue-600 mt-10 ">
              2
            </h1>
            <p className="text-[28px] font-bold text-center">Follow your progress</p>
            <p className=" mt-4 mb-5 text-gray-500 text-center w-80">
              Forget perfection. This is about building long-term habits—and enjoying the journey.
            </p>
          
          <div>
            <Image
              src={"/image5.png"}
              width={300}
              height={120}
              alt="food in calories"   
              className='rounded-3xl'    
            />
          </div>
        </div>

        <div className=" flex items-center flex-col px-12">
           <h1 className="text-6xl font-bold text-center text-blue-600 mt-10">3</h1>
            <p className="text-[28px] font-bold text-center">
             Eat better and hit your goals
            </p>
            <p className="mt-4 mb-4 text-gray-500 w-80 text-center">
              Learn which foods help you feel your best, and get tailored weekly meal plans!
            </p>
          <Image
            src={"/image6.png"}
            width={300}
            height={120}
            alt="woman drinking water"
            className='rounded-3xl'
          />         
           
        </div>
      </div>      
        <div className=' my-20 flex flex-col bg-[#151824] rounded-2xl p-6 mx-20 md:w-[70%] justify-self-center'>
          <div >
          <p className="text-gray-500 text-center font-semibold ">35+ apps & devices</p>
          <p className="text-white text-2xl font-semibold text-center ">
            Sync steps, weight, workouts and more
          </p>
          </div>
      
          <div  className='relative w-72 h-72 md:w-[450px] md:h-[450px] mb-5 flex mt-12 mx-auto'>
            <Image
            src={"/image7.png"}
            fill
            alt="apps to sync myfitness app with"           
            />
        </div>
      </div>
      
    </div>
  )
}

export default Section2
