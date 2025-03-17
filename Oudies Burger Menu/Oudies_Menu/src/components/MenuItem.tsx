
import React from 'react';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  name: string;
  price: string;
  ingredients?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, ingredients, className, style }) => {
  return (
    <div className={cn("menu-item flex flex-col py-2", className)} style={style}>
      <div className="flex justify-between items-center">
        <div className="text-burger-orange font-medium text-lg md:text-xl">{name}</div>
        <div className="text-burger-white font-display text-lg md:text-xl">${price}</div>
      </div>
      {ingredients && (
        <div className="text-burger-white/70 text-sm mt-1 italic">
          {ingredients}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
