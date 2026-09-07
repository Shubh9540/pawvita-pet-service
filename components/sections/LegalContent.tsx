import React from 'react';
import { LegalPageData } from '@/types/templates.types';
import { FaPaw } from 'react-icons/fa';

interface Props {
  data?: LegalPageData;
}

export const LegalContent = ({ data }: Props) => {
  if (!data) return null;

  return (
    <article className="py-8 lg:py-12 bg-white relative">
      <div className="w-full max-w-[1250px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header Section */}
        <header className="mb-16 text-center w-full mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#00695c] mb-6">
            {data.title}
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-[#00695c] mb-8">
            <span className="w-12 h-[1px] bg-[#00695c]/30"></span>
            <FaPaw className="text-lg" />
            <span className="w-12 h-[1px] bg-[#00695c]/30"></span>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            {data.introText}
          </p>
        </header>

        {/* Content Sections */}
        <div className="w-full flex flex-col">
          {data.sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`py-8 ${idx !== data.sections.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#00695c] mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </article>
  );
};
