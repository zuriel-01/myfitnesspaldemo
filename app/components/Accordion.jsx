'use client';
import { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl h-28 overflow-hidden mb-4 shadow-md md:w-[700px]">
      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between bg-white transition-colors duration-200 min-h-[100px]"
      >
        <span className="question font-semibold text-xl h-full  text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-300 text-gray-600 flex items-center ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Answer Content */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 ">
          <p className="text-[#7f989a] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;