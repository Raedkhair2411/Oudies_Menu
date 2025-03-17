
import React, { useState } from 'react';
import MenuHeader from '@/components/MenuHeader';
import MenuSection from '@/components/MenuSection';
import MenuFooter from '@/components/MenuFooter';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Index: React.FC = () => {
  const [showQR, setShowQR] = useState(false);
  
  const burgers = [
    { 
      name: "Oudie's Burger", 
      price: "6.5",
      ingredients: "Beef patty, lettuce, tomato, special sauce, cheese, brioche bun"
    },
    { 
      name: "Honey Burger", 
      price: "7.5",
      ingredients: "Beef patty, lettuce, tomato, honey glaze, cheddar cheese, caramelized onions"
    },
    { 
      name: "Jam Burger", 
      price: "7.5",
      ingredients: "Beef patty, berry jam, arugula, goat cheese, bacon, special sauce"
    },
    { 
      name: "Cheesy Burger", 
      price: "7.5",
      ingredients: "Double beef patty, triple cheese, pickles, special sauce, lettuce"
    },
    { 
      name: "Swiss Mashroom Burger", 
      price: "7.5",
      ingredients: "Beef patty, sautéed mushrooms, swiss cheese, truffle mayo, caramelized onions"
    },
    { 
      name: "Nashville Chicken Burger", 
      price: "6.5",
      ingredients: "Spicy fried chicken, coleslaw, pickles, Nashville hot sauce, mayo"
    },
    { 
      name: "BBQ Chicken Burger", 
      price: "6",
      ingredients: "Grilled chicken, BBQ sauce, cheddar cheese, bacon, lettuce, tomato"
    },
  ];

  const appetizers = [
    { 
      name: "French Fries", 
      price: "2.5",
      ingredients: "Fresh cut potatoes, sea salt, special seasoning"
    },
    { 
      name: "Curly Fries", 
      price: "3.5",
      ingredients: "Spiral cut potatoes, paprika, garlic powder, herbs"
    },
    { 
      name: "Mozzarella Sticks", 
      price: "2",
      ingredients: "Breaded mozzarella, marinara dipping sauce, herbs"
    },
    { 
      name: "Kids Meal", 
      price: "4",
      ingredients: "Small burger, fries, drink, surprise toy" 
    },
  ];

  const specialties = [
    { 
      name: "Chicken Loaded Fries", 
      price: "6",
      ingredients: "Fries topped with grilled chicken, cheese sauce, bacon bits, green onions"
    },
    { 
      name: "Beef Loaded Fries", 
      price: "8",
      ingredients: "Fries topped with seasoned ground beef, cheese, jalapeños, sour cream"
    },
    { 
      name: "Boneless", 
      price: "6",
      ingredients: "Crispy boneless chicken bites, choice of dipping sauce, celery sticks"
    },
  ];

  const beverages = [
    { 
      name: "Glass Soft Drink", 
      price: "0.5",
      ingredients: "Coke, Sprite, Fanta, or Diet Coke"
    },
    { 
      name: "Soft Drinks", 
      price: "1",
      ingredients: "Bottled Coke, Sprite, Fanta, or Diet Coke"
    },
    { 
      name: "Sparkling Water", 
      price: "1",
      ingredients: "Carbonated mineral water with optional lemon or lime"
    },
  ];

  // Make sure we're using the complete URL with protocol
  const currentUrl = window.location.href;

  const handleToggleQR = () => {
    setShowQR(!showQR);
    if (!showQR) {
      toast.success("QR Code generated successfully!", {
        description: "Share this QR code with your customers so they can access your digital menu.",
      });
    }
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto">
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={handleToggleQR}
          className="bg-burger-orange hover:bg-burger-orange/90 text-white font-medium px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          {showQR ? "Close QR" : "Generate QR"}
        </Button>
      </div>

      {showQR && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-40 animate-fade-in">
          <div className="relative">
            <Button 
              onClick={handleToggleQR}
              className="absolute -top-12 right-0 bg-burger-orange/20 hover:bg-burger-orange/40 text-white rounded-full w-8 h-8 flex items-center justify-center p-0"
              variant="ghost"
            >
              ✕
            </Button>
            <div className="bg-burger-black/80 p-6 rounded-2xl border border-burger-orange/30">
              <h2 className="text-2xl font-display text-burger-orange text-center mb-4">Share Your Digital Menu</h2>
              <QRCodeGenerator url={currentUrl} showDownload={true} />
              <p className="text-center text-burger-white/70 mt-2 text-sm">
                This QR code links directly to your digital menu.
              </p>
            </div>
          </div>
        </div>
      )}

      <MenuHeader />

      <div className="px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <MenuSection title="Burgers" items={burgers} />
        <MenuSection title="Appetizers" items={appetizers} />
        <MenuSection title="Specialties" items={specialties} />
        <MenuSection title="Beverages" items={beverages} />
      </div>

      <MenuFooter />
    </div>
  );
};

export default Index;
