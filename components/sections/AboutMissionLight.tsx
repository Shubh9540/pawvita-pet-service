import React from 'react';
import { AboutMissionData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Image from 'next/image';
import { FaPaw, FaBullseye, FaEye, FaCheck, FaHeart, FaCheckCircle, FaUsers, FaHeartbeat } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaBullseye': return <FaBullseye />;
    case 'FaEye': return <FaEye />;
    case 'FaCheck': return <FaCheck />;
    case 'FaHeart': return <FaHeart />;
    default: return null;
  }
};

export const AboutMissionLight = ({ data }: { data?: AboutMissionData }) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative overflow-hidden text-gray-900">
      {/* Background watermark */}
      <div className="absolute top-10 left-10 text-[#0f9c9b]/10 text-[15rem] -rotate-12 pointer-events-none">
        <FaPaw />
      </div>
      <div className="absolute bottom-10 right-10 text-[#0f9c9b]/10 text-[15rem] rotate-12 pointer-events-none">
        <FaPaw />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <SectionHeading data={data.heading} />
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#051024]"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          {data.subtitle && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-6 bg-[#0f9c9b]"></span>
              <FaPaw className="text-[#0f9c9b] text-sm" />
              <span className="h-px w-6 bg-[#0f9c9b]"></span>
            </div>
          )}
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto whitespace-pre-line">
            {data.subtitle}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {data.items.map(item => (
            <div key={item.id} className="border border-[#0f9c9b]/40 rounded-2xl overflow-hidden bg-[#07242c] flex flex-col md:flex-row shadow-xl">
              {/* Image side */}
              <div className="w-full md:w-2/5 relative min-h-[250px] md:min-h-[auto]">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full border border-[#0f9c9b] flex items-center justify-center text-[#0f9c9b] text-2xl flex-shrink-0">
                    {renderIcon(item.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {item.title.split(' ').map((word, i, arr) => (
                        <span key={i} className={i === arr.length - 1 ? "text-[#0f9c9b]" : ""}>{word}</span>
                      ))}
                    </h3>
                    <div className="h-px w-16 bg-[#0f9c9b] mt-2"></div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>
                
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm lg:text-base text-gray-200">
                      <FaCheck className="text-[#0f9c9b] mt-1 flex-shrink-0 text-sm" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="flex justify-center w-full">
          <div className="bg-white border border-[#0f9c9b] rounded-full px-6 sm:px-8 lg:px-12 py-4 sm:py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 shadow-md text-center sm:text-left w-full sm:w-auto relative">
            
            {/* Burst lines decoration (left) */}
            <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#0f9c9b" strokeWidth="2" strokeLinecap="round">
                  <line x1="8" y1="4" x2="14" y2="8" />
                  <line x1="4" y1="12" x2="11" y2="12" />
                  <line x1="8" y1="20" x2="14" y2="16" />
                </g>
              </svg>
            </div>
            
            {/* Burst lines decoration (right) */}
            <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#0f9c9b" strokeWidth="2" strokeLinecap="round">
                  <line x1="10" y1="8" x2="16" y2="4" />
                  <line x1="13" y1="12" x2="20" y2="12" />
                  <line x1="10" y1="16" x2="16" y2="20" />
                </g>
              </svg>
            </div>

            {/* Icon Group */}
            <div className="flex items-center gap-6">
              <div className="relative text-[#044a41] text-3xl lg:text-4xl flex items-center justify-center">
                <FaHeart />
                <FaPaw className="absolute text-white text-sm lg:text-base transform translate-y-0.5" />
              </div>
              <div className="hidden sm:block w-px h-8 bg-[#0f9c9b]"></div>
            </div>
            
            {/* Text Group */}
            <div className="flex flex-col items-center sm:items-start text-[#051318]">
              <span className="font-extrabold text-lg sm:text-xl lg:text-2xl text-[#044a41] tracking-tight leading-tight">{data.bottomBanner.title}</span>
              <div className="flex items-center gap-3 w-full justify-center sm:justify-start">
                <span className="h-[1px] w-6 lg:w-8 bg-[#051318]/20"></span>
                <span className="font-bold text-xs sm:text-sm lg:text-base tracking-wide text-[#051024]">{data.bottomBanner.subtitle}</span>
                <span className="h-[1px] w-6 lg:w-8 bg-[#051318]/20"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
