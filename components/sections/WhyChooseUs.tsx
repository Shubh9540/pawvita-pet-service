'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { WhyChooseUsData } from '@/types/templates.types';
import { PawMark } from '@/components/ui/PawMark';
import { FaAward, FaHeart, FaCalendarAlt, FaPaw } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward': return <FaAward />;
    case 'FaHeart': return <FaHeart />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    default: return <FaAward />;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return null;

  return (
    <section className="relative py-8 lg:py-12 bg-white overflow-hidden">
      {/* Background Decorators */}
      <PawMark className="top-12 left-8 text-7xl rotate-12" />
      <PawMark className="bottom-20 right-10 text-9xl -rotate-12" />
      <PawMark className="bottom-40 left-10 text-8xl -rotate-45" />
      
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        
        {/* Left Content - Accordion */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-xl">
            {data.description}
          </p>

          <div className="flex flex-col gap-4">
            {data.tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out border-2 ${
                    isActive 
                      ? 'bg-white border-primary shadow-md' 
                      : 'bg-primary border-transparent hover:bg-primary/90'
                  }`}
                >
                  <div className={`p-4 sm:p-5 relative transition-all duration-500 overflow-hidden`}>
                    
                    {/* ABSOLUTE RIGHT CONTENT (Number & Desktop Image) */}
                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex items-start justify-end pointer-events-none z-10">
                      {/* Number (visible when inactive) */}
                      <div className={`text-4xl sm:text-5xl font-bold transition-opacity duration-500 absolute top-0 right-0 ${
                        isActive ? 'opacity-0 hidden' : 'text-white/20 opacity-100'
                      }`}>
                        {tab.number}
                      </div>
                      
                      {/* Desktop Image (visible when active) */}
                      <div className={`hidden sm:block w-36 h-28 rounded-xl overflow-hidden relative transition-all duration-500 origin-top-right ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        <Image src={tab.image} alt={tab.title} fill sizes="144px" className="object-cover" />
                      </div>
                    </div>

                    {/* LEFT CONTENT (Icon, Title, Description) */}
                    <div className={`w-full pr-12 sm:pr-[160px] transition-all duration-500 ${isActive ? 'sm:min-h-[112px]' : ''}`}>
                      
                      {/* Icon Column & Text Column */}
                      <div className="flex items-start gap-4 w-full">
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center shrink-0 relative overflow-hidden mt-0 sm:mt-0">
                          <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-primary opacity-15' : 'bg-white opacity-10'}`}></div>
                          <div className={`relative z-10 text-lg sm:text-xl transition-colors duration-500 ${isActive ? 'text-primary' : 'text-white'}`}>
                            {renderIcon(tab.icon)}
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col pt-1">
                          <h3 className={`font-bold text-lg sm:text-xl transition-colors duration-500 ${
                            isActive ? 'text-primary' : 'text-white'
                          }`}>
                            {tab.title}
                          </h3>
                          
                          {/* Active Expanded Description (Grid Trick) */}
                          <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out w-full ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                              <p className="text-gray-600 text-sm xl:text-base leading-relaxed pt-1 sm:pt-2">
                                {tab.description}
                              </p>
                              {/* Mobile Image (visible when active on mobile) */}
                              <div className="block sm:hidden w-full h-32 mt-3 rounded-xl overflow-hidden relative">
                                <Image src={tab.image} alt={tab.title} fill sizes="(max-width: 640px) 100vw, 0px" className="object-cover" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content - Image Collage */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center py-10 lg:py-0">
          
          {/* Dashed Circle Background */}
          <div className="absolute inset-0 m-auto w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-[#c49250]/40 z-0 flex items-center justify-center">
            {/* Inner solid circle just for some depth */}
            <div className="w-[80%] h-[80%] rounded-full bg-[#fdfaf6] z-0"></div>
          </div>
          
          {/* Floating Paw overlapping the circle */}
          <div className="absolute top-4 left-6 sm:top-10 sm:left-10 lg:top-16 lg:left-12 z-20 text-primary">
            <FaPaw className="text-4xl sm:text-6xl" />
          </div>

          <div className="relative z-10 w-full h-[320px] sm:h-[450px] lg:h-[500px] max-w-[500px] mx-auto">
            {/* Top Left (Portrait) */}
            <div className="absolute top-[15%] left-[5%] w-[35%] h-[40%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 border-white z-10 hover:scale-105 transition-transform duration-300">
              <Image src={data.gallery[0]} alt="Gallery 1" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
            
            {/* Top Right (Large Portrait) */}
            <div className="absolute top-[0%] right-[5%] w-[50%] h-[55%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 border-white z-10 hover:scale-105 transition-transform duration-300">
              <Image src={data.gallery[1]} alt="Gallery 2" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
            
            {/* Bottom Left (Wide Landscape) */}
            <div className="absolute bottom-[5%] left-[0%] w-[60%] h-[35%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 border-white z-20 hover:scale-105 transition-transform duration-300">
              <Image src={data.gallery[2]} alt="Gallery 3" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
            
            {/* Bottom Right (Small Square) */}
            <div className="absolute bottom-[15%] right-[10%] w-[28%] h-[28%] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-4 border-white z-10 hover:scale-105 transition-transform duration-300">
              <Image src={data.gallery[3]} alt="Gallery 4" fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
