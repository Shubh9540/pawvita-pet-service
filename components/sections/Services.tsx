'use client';
import React, { useState } from 'react';
import { ServicesData } from '@/types/templates.types';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PawMark } from '@/components/ui/PawMark';
import { FaPaw, FaBath, FaCut, FaMagic, FaStethoscope, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaBath': return <FaBath />;
    case 'FaCut': return <FaCut />;
    case 'FaMagic': return <FaMagic />;
    case 'FaStethoscope': return <FaStethoscope />;
    default: return <FaPaw />;
  }
};

export const Services = ({ data }: { data?: ServicesData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    typeof window !== 'undefined' && window.innerWidth >= 1024 ? 0 : null
  );

  if (!data) return null;

  return (
    <section className="relative py-8 lg:py-12 bg-[var(--color-bg-alt)] overflow-hidden">
      {/* Background Decorators */}
      <PawMark className="top-24 left-10 xl:left-20 text-8xl xl:text-9xl -rotate-12" />
      <PawMark className="top-16 right-20 xl:right-40 text-7xl xl:text-8xl rotate-12" />
      <PawMark className="top-40 right-4 xl:right-16 text-6xl xl:text-7xl rotate-45" />

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <SectionHeading data={data.heading} />
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mt-2 max-w-3xl"
            dangerouslySetInnerHTML={{ __html: data.title.replace('\n', '<br className="hidden md:block" />') }}
          />
        </div>

        {/* Expanding Cards Container */}
        <div className="flex flex-row overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory [&::-webkit-scrollbar]:hidden w-full h-auto gap-4 lg:gap-4 xl:gap-6 mt-12 items-start lg:items-stretch pb-4 lg:pb-0">
          {data.services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                    setActiveIndex(index);
                  }
                }}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                    setActiveIndex(activeIndex === index ? null : index);
                  }
                }}
                className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-in-out cursor-pointer flex flex-col lg:flex-row items-start lg:items-stretch bg-white shadow-sm border border-gray-100 snap-center shrink-0 ${
                  isActive 
                    ? 'w-10/12 sm:w-8/12 lg:flex-[4_1_0%] shadow-xl' 
                    : 'w-10/12 sm:w-8/12 lg:flex-[1_1_0%] hover:shadow-md'
                }`}
              >
                {/* Background Image / Collapsed Content */}
                <div className={`relative transition-all duration-700 overflow-hidden flex-none ${isActive ? 'w-full h-56 lg:h-auto lg:w-2/5 block' : 'w-full h-72 lg:h-auto lg:w-full'}`}>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/60 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
                  
                  <div className={`absolute inset-0 p-4 xl:p-6 flex flex-col transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-10 h-10 xl:w-14 xl:h-14 rounded-full bg-white flex items-center justify-center text-[var(--color-accent)] shrink-0 mx-auto mt-2 lg:mt-6 text-lg xl:text-xl shadow-md">
                      {renderIcon(service.icon)}
                    </div>
                    <div className="mt-auto flex flex-col justify-end">
                      <h3 className="text-white font-bold text-sm xl:text-lg mb-4 leading-snug hidden lg:block">
                        {service.titleCollapsed.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </h3>
                      {/* Mobile collapsed title */}
                      <h3 className="text-white font-bold text-sm mb-1 leading-tight lg:hidden">
                        {service.title}
                      </h3>
                      <div className="h-0.5 w-6 bg-white/50 mb-2 hidden lg:block"></div>
                      <div className="text-white/40 font-bold text-3xl xl:text-5xl">{service.number}</div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content Side */}
                <div 
                  className={`relative overflow-hidden transition-all duration-700 ease-in-out flex flex-col justify-center bg-white ${
                    isActive 
                      ? 'w-full lg:w-3/5 opacity-100 max-h-[1000px] lg:max-h-none' 
                      : 'w-full lg:w-0 opacity-0 max-h-0 lg:max-h-none'
                  }`}
                >
                  <div className="w-full lg:w-auto min-w-72 lg:min-w-64 p-6 lg:p-6 xl:p-8">
                    <div className="w-full lg:w-56 xl:w-64 lg:min-w-56 flex-shrink-0 transition-opacity duration-300 delay-100 opacity-100">
                    <div className="flex items-center gap-3 lg:gap-4 mb-4 xl:mb-6">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] shrink-0 text-base lg:text-xl">
                        {renderIcon(service.icon)}
                      </div>
                      <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-primary leading-tight">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm xl:text-base mb-6 xl:mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 xl:space-y-4 mb-8 xl:mb-10">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm xl:text-base text-[var(--color-accent)] font-medium">
                          <FaCheckCircle className="shrink-0 text-base" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={service.url} 
                      className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-5 xl:px-7 py-3 rounded-lg font-medium hover:bg-[var(--color-primary)] transition-colors text-sm w-fit"
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
