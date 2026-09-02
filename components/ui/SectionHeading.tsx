import React from 'react';
import { SectionHeadingData } from '@/types/templates.types';
import { FaPaw } from 'react-icons/fa';

const renderIcon = (iconName?: string) => {
  if (!iconName) return null;
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    // You can add more icons here as needed
    default: return <FaPaw />;
  }
};

export const SectionHeading = ({ data }: { data?: SectionHeadingData }) => {
  if (!data) return null;

  const variant = data.variant || 'simple';

  if (variant === 'decorated') {
    return (
      <div className="flex items-center justify-center gap-3 md:gap-4 w-full mb-8">
        {/* Left fading line */}
        <div className="h-0.5 w-16 md:w-24 lg:w-32 bg-gradient-to-r from-transparent to-primary rounded-full opacity-80"></div>
        
        {/* Icon & Title */}
        <div className="flex items-center gap-2 text-primary font-bold text-sm md:text-base lg:text-lg tracking-widest uppercase">
          {data.icon && <span className="text-lg md:text-2xl">{renderIcon(data.icon)}</span>}
          {data.title}
        </div>
        
        {/* Right fading line */}
        <div className="h-0.5 w-16 md:w-24 lg:w-32 bg-gradient-to-l from-transparent to-primary rounded-full opacity-80"></div>
      </div>
    );
  }

  // Simple variant (default, used in Hero banner left-aligned)
  return (
    <div className="flex items-center gap-2 text-[#1b3e40] font-bold text-xs md:text-sm tracking-wider uppercase">
      {data.icon && (
        <span className="text-primary text-base">
          {renderIcon(data.icon)}
        </span>
      )}
      {data.title}
    </div>
  );
};
