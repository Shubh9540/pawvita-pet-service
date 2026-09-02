import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const Divider = ({ className = '', icon = 'FaRegHeart' }: { className?: string, icon?: string }) => {
  if (icon === 'star') {
    return (
      <div className={`flex items-center gap-3 justify-center ${className}`}>
        <span className="w-12 sm:w-20 h-[1px] bg-accent opacity-40 block shrink-0"></span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent shrink-0"
        >
          <path
            d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z"
            fill="currentColor"
          />
        </svg>
        <span className="w-12 sm:w-20 h-[1px] bg-accent opacity-40 block shrink-0"></span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 justify-center ${className}`}>
      <span className="block w-12 sm:w-20 h-[1px] bg-accent opacity-40 shrink-0" />
      <span className="block w-1.5 h-1.5 rounded-full bg-accent opacity-80 shrink-0" />
      
      {icon === 'FaHeart' ? (
        <FaHeart className="w-4 h-4 text-accent" />
      ) : (
        <FaRegHeart className="w-4 h-4 text-accent" />
      )}
      
      <span className="block w-1.5 h-1.5 rounded-full bg-accent opacity-80 shrink-0" />
      <span className="block w-12 sm:w-20 h-[1px] bg-accent opacity-40 shrink-0" />
    </div>
  );
};
