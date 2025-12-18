import React from 'react'
import { IoMdListBox } from "react-icons/io";

const Section3 = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(200deg,#0066EE_60%,#9383FB_100%)] flex-col rounded-3xl mx-3.5  ">
        <div className='flex justify-center pt-20'>
          <IoMdListBox className='text-4xl text-white'/>
        </div>
         
        <p className=' pt-12 text-white text-5xl  text-center md:text-5xl lg:text-6xl font-bold md:w-96 mx-auto'>
            If it&apos;s edible, it&apos;s in here
        </p>
      
        <p className=" pt-7 text-center text-white text-2xl md:text-xl lg:text-3xl pb-20">
          Track over 20 million <br/> global foods
        </p>
      </div>
    </div>
  )
}

export default Section3
