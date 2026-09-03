import React from 'react';
import { PartnersData } from '@/types/templates.types';
import { FaPaw } from 'react-icons/fa';

interface Props {
  data?: PartnersData;
}

export const Partners = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9f9] relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 text-[#00695c] font-bold text-sm tracking-widest uppercase mb-4">
            <span className="w-8 h-[1px] bg-[#00695c]/30"></span>
            <FaPaw />
            <span>{data.headingTitle}</span>
            <span className="w-8 h-[1px] bg-[#00695c]/30"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6 leading-tight">
            {data.title.split('Partners').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <span className="text-[#00695c]">Partners</span>}
              </React.Fragment>
            ))}
          </h2>
          
          <div className="flex justify-center mb-6">
            <FaPaw className="text-[#00695c]" />
          </div>

          <p className="text-gray-500 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.items.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center justify-center p-8 md:p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full max-w-[160px] h-auto max-h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
