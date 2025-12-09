import Image from 'next/image'
import React from 'react'

const Section6 = () => {
  return (
    <div>
        <div className="flex flex-col md:grid md:grid-cols-2 mt-32">
      <div className="flex flex-row grid-cols-3 gap-3 justify-self-center">


        <div className='flex items-center'>
          <Image
          src={"/image8.png"}
          width={130}
          height={30}
          alt="daily planning"
        /> 
        </div>
        
      <div className='flex flex-col relative rounded-xl'>
          <div className='flex items-center'>
          <Image      
          src={"/image9.png"}
          width={270}
          height={80}
          alt="daily planning"
          className='rounded-xl'
        />
        </div>
        <div className='absolute bottom-0 text-white text-[10px] h-10 w-full bg-blue-600 rounded-b-xl pl-2 '>
          <h1 className='font-semibold'>
            Stephanie Saletta
          </h1>
          <h1 className='font-light'>
            MyFitnessPal Registered Dietician
          </h1>
        </div>
      </div>
        
         
        <div className='flex items-center justify-start'>
          <Image
          src={"/image10.png"}
          width={130}
          height={30}
          alt="daily planning"
         />
        </div>
       
      </div>
        <div className='pl-2'>
          <h1 className="mt-14 text-gray-500 text-bold">Our Philosophy</h1>
          <h1 className='pt-4 text-bold text-5xl'>Knowledge is power</h1>
          <div className="pt-8 w-[365px] md:w-[460px] text-gray-700">
            <p>
                “Studies show people who keep a food diary are more likely to hit their goals. MyFitnessPal simplifies nutrition and calorie tracking, provides the data you want, and helps you make sense of it all.
            </p>
            <br/>
            <p>
                Healthy eating is a continuous journey of self-discovery. And the more you track, the more empowered you&apos;ll become to make healthy choices that support your goals.”
            </p>          
          </div>
          <br/>
          <p className='text-gray-500 text-sm'>Stephanie Nelson, MyFitnessPal Registered Dietitian</p>
        </div>
      </div>
        <div className='mt-32 text-center'>
            <h1 className='text-bold text-3xl md:text-5xl'>
                As seen in...
            </h1>
            <div className='hidden md:flex md:items-center md:justify-center mt-14'>
            <Image
              src= {"/image3.png"}
              alt="my image"
              width={650}
              height={200}
            />
            </div>
            <div className='relative h-34 w-80 md:h-24 mt-8 md:mt-16 flex items-center justify-self-center md:hidden'>
              <Image
              src= {"/cnnimage.png"}
              alt="my image"
              fill
            />
            </div>
          
            
          </div>
          
    </div>
  )
}

export default Section6
