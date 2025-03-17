
import React from 'react';
import MenuItem from './MenuItem';
import { cn } from '@/lib/utils';

interface MenuSectionProps {
  title: string;
  items: Array<{ name: string; price: string; ingredients?: string }>;
  className?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, className }) => {
  return (
    <div className={cn("menu-category pb-6", className)}>
      <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-white tracking-wide">{title}</h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <MenuItem 
            key={index} 
            name={item.name} 
            price={item.price}
            ingredients={item.ingredients} 
            className="animate-slide-in" 
            style={{ animationDelay: `${index * 0.05}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
