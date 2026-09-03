'use client';
import React from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaPaw, FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Props {
  data?: TestimonialsData;
}

export const Testimonials = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#fdfcfb] relative overflow-hidden">
      {/* Background Decorators (Optional faint paws) */}
      <div className="absolute top-10 left-10 text-gray-100 opacity-50 transform -rotate-12 pointer-events-none">
        <FaPaw className="text-8xl" />
      </div>
      <div className="absolute top-40 right-20 text-gray-100 opacity-50 transform rotate-12 pointer-events-none">
        <FaPaw className="text-9xl" />
      </div>

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
            {data.title.split('PawVita').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <span className="text-[#00695c]">PawVita</span>}
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Top Row: Quote & Stars */}
              <div className="flex justify-between items-start mb-6">
                <FaQuoteLeft className="text-5xl text-[#eaf3f1]" />
                <div className="flex gap-1 text-[#ffc107] text-sm pt-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {item.quote}
              </p>

              {/* Divider */}
              <hr className="border-gray-100 mb-6" />

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#f0f7f5]">
                  <img 
                    src={item.userImage} 
                    alt={item.userName} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#051024] text-sm md:text-base">
                    {item.userName}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                    <FaPaw className="text-[#00695c]" />
                    <span className="font-medium">{item.petName}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
