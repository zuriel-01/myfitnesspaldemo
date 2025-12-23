'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Section4 = () => {

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
    const testimonials = [
  { text: "MyFitnessPal helped me gain muscle, get a 6-pack and simply achieve all my body goals."
  , author: "Synthia J." },
  
  { text: "This is the best I've felt physically, mentally, and emotionally in all of my 37 years. I'm eating well, exercising and able to play with my kids"
  , author: "Alisha S." },
  
  { text: "The biggest realization is that I can do better. It is actually possible to eat healthy and the food can taste good. MyFitnessPal helped me overhaul my habits. ",
  author: "Quincy D." },
  
  { text: "I was 307 lbs,and today I am 199 lbs. I participated in a diabetes prevention program, learning how proper nutrition and exercise are essential. That is when i began using MyFitnessPal. I still use it everyday"
  , author: "Larry S." }, 
  
  { text: "Once I started focusing on improving my body with nutrition for the purpose of building strength, my body has changed. More importantly, I'm feeling confident and empowered with who i am. "
  , author: "Brooke N." }
      
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <div className="section4 flex flex-col">
        <h1 className="flex justify-center  text-slate-600 font-semibold mt-22">Get Results</h1>
        <div className="flex justify-center text-2xl lg:text-5xl font-bold pt-2">
            <h1 className=''>
                Nutrition tracking works,
            <p className='flex justify-center '> 
                 here&apos;s the proof
            </p>
            </h1>                       
        </div>

        <div className="lg:grid lg:grid-cols-3 flex flex-col items-center lg:px-10 lg:flex-row ">
          <div className='relative w-72 h-72 md:w-[500px] md:h-[500px] mt-12 lg:mt-7 lg:h-96 lg:w-80 object-cover' >
            <Image
            src={"/success-users-left-desktop.webp"}      
            
            alt="users left"
            fill
            
            /> 
          </div>
          <div>
            <div className=" flex items-center justify-center ">
          <div className="text-black text-center pt-8 w-80 lg:px-7 transition-opacity text-[15px] duration-500 md:w-96">
            <p>{testimonials[currentTestimonialIndex].text}</p>
            <p className="mt-6 text-sm">{testimonials[currentTestimonialIndex].author}</p>
          </div>
        </div>
        <div className="flex gap-2 md:mt-12 md:mb-12 justify-center">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all mt-6
                ${
                index === currentTestimonialIndex ? 'bg-blue-600' : 'bg-[#6c6c70]'
              }`}
            />
          ))}
        </div>
          </div>
          <div className='relative lg:w-80 lg:mt-7 lg:h-96'>
            <Image
            src={"/success-users-right.webp"}
            fill 
            alt="users-right"
            className='hidden lg:block'
            />
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Section4
