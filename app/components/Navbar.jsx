"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'translate-y-0' : '-translate-y-full'
    }`}>
      
      {/* Combined Navbar Container - No Demarcation */}
      <div className="flex flex-col">
        {/* Top Part - Solid White */}
        <div className="hidden lg:block h-14 bg-white">
            <p className="text-[#0066EE] text-2xl font-semibold flex items-center ml-58">myfitnesspal</p>
        </div>
        
        {/* Bottom Part - Almost Transparent White */}
        <div className="h-14 bg-white/55 backdrop-blur-md">
          <div className="flex items-center space-x-2 pl-4 h-full lg:pl-34 text-[10px] md:text-sm">
            <button className="text-[#0066EE] border border-[#0066EE] text-[10px] md:text-sm ml-3 text-bold bg-white hover:bg-blue-900 hover:text-white px-2 py-1 rounded-4xl transition-colors hover:cursor-pointer">
              Reviews
            </button>
            <button className="text-[#0066EE] border border-[#0066EE] text-[10px] md:text-sm text-bold bg-white hover:bg-blue-900 hover:text-white px-2 py-1 rounded-4xl transition-colors hover:cursor-pointer">
              How it works
            </button>
            <button className="text-[#0066EE] border border-[#0066EE] text-[10px] md:text-sm text-bold bg-white hover:bg-blue-900 hover:text-white px-2 py-1 rounded-4xl transition-colors hover:cursor-pointer">
              Apps
            </button>
            <button className="text-[#0066EE] border border-[#0066EE] text-[10px] md:text-sm text-bold bg-white hover:bg-blue-900 hover:text-white px-2 py-1 rounded-4xl transition-colors hover:cursor-pointer">
              Our Philosophy
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;