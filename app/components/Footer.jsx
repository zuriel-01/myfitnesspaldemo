import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className='bg-[#151824] w-full'>
      <div className='grid grid-cols-2 mt-8 '>
        <div className='mx-8 lg:mx-32 flex flex-col'>
          <h1 className='text-white font-bold text-xl md:text-[28px] md:mt-12 mt-8 lg:text-3xl'>myfitnesspal</h1>

          <div className='flex hidden lg:block justify-self-center flex-col items-center mt-6 '>        
          <h1 className='text-white mt-14 lg:text-[18px] md:mt-7'>Nutrition tracking for real life.</h1>
          <span>
            <button className="flex justify-center  bg-white text-[#0066EE] rounded-4xl px-10 py-2 text-[15px] lg:text-xl font-semibold mt-4">
              START TODAY
                <MdOutlineKeyboardArrowRight className='text-2xl items-center ' />          
            </button>
          </span>
      </div>

          <div className='text-white mt-5 md:hidden space-y-2'>
            <h1 className='text-[18px] font-bold'>Product</h1>
            <div className='text-sm text-gray-200 space-y-2 '>
              <h1>Exercise</h1>
              <h1>Apps</h1>
              <h1>Premium</h1>
            </div>        
          </div>

           <div className=' text-white md:hidden space-y-2 mt-20'>
            <h1 className='text-[18px] font-bold '>Company</h1>
            <div className='text-sm text-gray-200 space-y-2'>
              <h1>About Us</h1>
              <h1>Careers</h1>
              <h1>Press</h1>
              <h1>Advertise With Us</h1>
            </div>            
          </div>

           

        </div>

      
        <div className='text-sm text-white md:grid md:grid-cols-3 mt-10'>
          <div className='hidden md:block space-y-2'>
            <h1 className='text-[16px] font-bold'>Product</h1>
            <h1>Exercise</h1>
            <h1>Apps</h1>
            <h1>Premium</h1>
          </div>

          <div className='space-y-2 mt-10 md:mt-0'>
            <h1 className='font-bold text-[18px] md:text-[16px]'>Resources</h1>
            <div className='space-y-2 text-gray-200 text-sm'>
              <h1>Blog</h1>
              <h1>Community</h1>
              <h1>Contact Us</h1>
              <h1>Support Center</h1>
            </div>                       
          </div>
          
          <div className='hidden md:block space-y-2'>
            <h1 className='text-[16px] font-bold '>Company</h1>
            <h1>About Us</h1>
            <h1>Careers</h1>
            <h1>Press</h1>
            <h1>Advertise With Us</h1>
          </div>
        </div>
      </div>

      <div className='flex lg:hidden justify-self-center flex-col items-center mt-6'>        
          <h1 className='text-white mt-14 md:mt-7'>Nutrition tracking for real life.</h1>
          <span>
            <button className="flex justify-center bg-white text-[#0066EE] rounded-4xl px-10 py-2 text-[15px] font-semibold mt-4">
              START TODAY
                <MdOutlineKeyboardArrowRight className='text-2xl items-center ' />          
            </button>
          </span>
      </div>


      <div className='text-neutral-400 text-center w-80 lg:w-full space-x-2 mx-auto mt-10 text-[13px]'>
        <Link 
        className=' '
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank" >©2025 MyFitnessPal, Inc.
        |
        </Link>
        <Link className=''
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank">
          Community Guidelines |
        </Link  >
         <Link className=''
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank">
          Feedback |     
        </Link> 
        <Link className=' '
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank">
          Terms |
        </Link > 
        <Link className=' '
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank">
          Privacy |
        </Link>
         <Link className=' '
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank">
          API |
        </Link>
         <Link className=' ' 
        href="@/app/dummy-page" 
        rel="noopener noreferrer"
        target="_blank">
          Cookie Preferences 
        </Link>

      </div>
      <div className='flex justify-center space-x-4 pt-6 pb-6'>
        <Image
          src={"/image11.png"}
          className=" "
          alt="instagram"
          width={20}
          height={20}
        />
        <Image
          src={"/image12.png"}
          className=" "
          alt="facebook"
          width={20}
          height={20}
        />
        <Image
          src={"/image13.png"}
          className=" "
          alt="youtube"
          width={20}
          height={20}
        />
        <Image
          src={"/image14.png"}
          className=" "
          alt="linkedin"
          width={20}
          height={20}
        />
        <Image
          src={"/image15.png"}
          className=" "
          alt="twitter"
          width={20}
          height={20}
        />
        <Image
          src={"/image16.png"}
          className=" "
          alt="tiktok"
          width={20}
          height={20}
        />
      </div>
    </div>
  )
}

export default Footer
