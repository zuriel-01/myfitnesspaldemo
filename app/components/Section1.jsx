"use client";
import React, { useState, useEffect } from 'react'
import { IoStarSharp } from "react-icons/io5";

const Section1 = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
{ text: "Helped me get moving on my goals and tracking my weight loss and bodybuilding."
, author: "Jason L." },

{ text: "Not only are the tools super helpful, the customer service is insanely awesome!"
, author: "Laura K." },

{ text: "This app completely transformed my fitness journey.", author: "Sarah L." },

{ text: "Good for tracking calories and macros with a huge database of food."
, author: "Iain M." }, 

{ text: "Friendly, easy-to-use app that keeps me accountable."
, author: "Dinah L." }, 

{ text: "Love this app. It keeps me on track with my nutritional goals."
, author: "Annette B." }
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="bg-[#151824] section2 flex flex-col items-center text-center pt-18">
        <div className="flex justify-center gap-1">
          <IoStarSharp className="text-[#fdda1c] text-3xl" />
          <IoStarSharp className="text-[#fdda1c] text-3xl" />
          <IoStarSharp className="text-[#fdda1c] text-3xl" />
          <IoStarSharp className="text-[#fdda1c] text-3xl" />
          <IoStarSharp className="text-[#fdda1c] text-3xl" />
        </div>
        <div className="text-4xl lg:text-5xl text-white font-semibold pt-7 leading-12">
          <h1>
          3.5 Million 
         
          5-Star Ratings
        </h1>
        </div>
        
        <div className="h-20 flex items-center justify-center">
          <div className="text-lg text-white pt-4 px-5 transition-opacity duration-500">
            <p className='w-72  lg:w-[500px] mt-12 '>{testimonials[currentTestimonialIndex].text}</p>
            <p className="mt-2 text-sm">{testimonials[currentTestimonialIndex].author}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-12 mb-14">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full mt-3 transition-all ${
                index === currentTestimonialIndex ? 'bg-white' : 'bg-[#6c6c70]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section1