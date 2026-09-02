import React from 'react';
import { FaPaw } from 'react-icons/fa';

interface PawMarkProps {
  className?: string;
}

export const PawMark = ({ className = '' }: PawMarkProps) => {
  return (
    <FaPaw 
      className={`absolute text-primary opacity-[0.03] pointer-events-none hidden md:block ${className}`} 
    />
  );
};
