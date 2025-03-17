
import React from 'react';

const MenuFooter: React.FC = () => {
  return (
    <div className="py-6 px-4">
      <div className="menu-category pb-6">
        <div className="text-burger-orange/90 text-sm md:text-base space-y-1">
          <p className="animate-fade-in">All Burgers are served with fries</p>
          <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>All Burgers served on a Potato Bun</p>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>Upgrade to a Double Beef Patty for just +$2</p>
          <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>Curly Fries beside a burger +$1</p>
        </div>
      </div>

      <div className="py-4">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-6 text-white tracking-wide animate-fade-in">Order Here</h2>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 animate-fade-in">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="text-burger-white">71-61 87 75</span>
          </div>

          <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="text-burger-white">Oudie's Burger</span>
          </div>

          <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="text-burger-white">Hasbaya, Main Street, Padel 07</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFooter;
