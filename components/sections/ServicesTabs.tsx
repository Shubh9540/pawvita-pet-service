"use client";

import React, { useState } from 'react';
import { ServicesData } from '@/types/templates.types';
import Image from 'next/image';
import { FaPaw, FaArrowRight, FaCut, FaHome, FaUserFriends, FaWalking, FaStethoscope, FaSyringe, FaBone } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaCut': return <FaCut />;
    case 'FaHome': return <FaHome />;
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaWalking': return <FaWalking />;
    case 'FaStethoscope': return <FaStethoscope />;
    case 'FaSyringe': return <FaSyringe />;
    case 'FaBone': return <FaBone />;
    default: return <FaPaw />;
  }
};

export const ServicesTabs = ({ data }: { data?: ServicesData }) => {
  const [activeTab, setActiveTab] = useState<string | null | undefined>(data?.services?.[0]?.id);

  if (!data || !data.services || data.services.length === 0) return null;

  const activeService = data.services.find(s => s.id === activeTab) || data.services[0];

  return (
    <section className="py-8 lg:py-12 bg-[#f8fcfc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Headings & Tabs */}
          <div className="w-full lg:w-[35%] flex flex-col lg:py-4">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-[#0f9c9b] font-bold tracking-widest text-sm mb-4 uppercase">
                <span>{data.heading.title}</span>
                {data.heading.icon && <span className="text-lg">{renderIcon(data.heading.icon)}</span>}
              </div>
              <h2 
                className="text-4xl sm:text-5xl font-bold mb-4 text-[#051024]"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              {data.description && (
                <p className="text-gray-600 text-base sm:text-lg">
                  {data.description}
                </p>
              )}
            </div>

            {/* Tabs List */}
            <div className="flex flex-col gap-4">
              {data.services.map((service) => {
                const isActive = activeTab === service.id;
                return (
                  <div key={service.id} className="flex flex-col gap-3">
                    <button
                      onClick={() => setActiveTab(isActive ? null : service.id)}
                      className={`flex items-center justify-between w-full p-5 lg:p-6 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#0f9c9b] text-white shadow-lg shadow-[#0f9c9b]/20 scale-[1.02]' 
                          : 'bg-white text-[#051024] border border-gray-100 shadow-sm hover:border-[#0f9c9b]/30 hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-xl lg:text-2xl ${isActive ? 'text-white' : 'text-[#0f9c9b]'}`}>
                          {renderIcon(service.icon)}
                        </div>
                        <span className="text-lg lg:text-xl font-bold">{service.title}</span>
                      </div>
                      <FaArrowRight className={`text-sm lg:text-base ${isActive ? 'text-white' : 'text-gray-400'} transition-transform duration-300 ${isActive ? 'rotate-90 lg:rotate-0' : ''}`} />
                    </button>

                    {/* Mobile Image (Accordion Style - Only visible on small screens when active) */}
                    {isActive && (
                      <div className="lg:hidden w-full animate-fade-in-up">
                        <div className="bg-white p-3 rounded-3xl shadow-sm w-full">
                          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 0vw"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Image (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-[65%]">
            <div className="bg-white p-3 lg:p-4 rounded-3xl shadow-sm w-full h-full">
              <div className="relative w-full h-96 lg:h-full lg:min-h-[28rem] rounded-2xl overflow-hidden">
                <Image
                  key={activeService.id} // Forces re-render/animation on tab change
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
