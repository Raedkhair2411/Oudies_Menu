
import React from 'react';

const MenuHeader: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-burger-orange/30 rounded-br-[100px]"></div>
      </div>
      
      <div className="relative z-10 py-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/b8ef4092-c7c2-45f3-8e3c-b20c0bf70c61.png" 
              alt="Oudie's Burger" 
              className="w-40 md:w-60 object-contain" 
            />
          </div>
          <div className="text-white">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-fade-in">
              <path d="M6 10C6 5.58172 9.58172 2 14 2C18.4183 2 22 5.58172 22 10C22 14.4183 18.4183 18 14 18H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 18C11 19.6569 9.65685 21 8 21C6.34315 21 5 19.6569 5 18C5 16.3431 6.34315 15 8 15C9.65685 15 11 16.3431 11 18Z" stroke="white" strokeWidth="2"/>
              <path d="M18 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 22H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <h1 className="font-display text-5xl md:text-7xl text-burger-orange text-center tracking-wide animate-fade-up">
            OUDIE'S<br />BURGER
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
