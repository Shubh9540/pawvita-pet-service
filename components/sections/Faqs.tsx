'use client';

import React, { useState } from 'react';
import { FaqsData } from '@/types/templates.types';
import { PawMark } from '@/components/ui/PawMark';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPaw, FaShieldAlt, FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaAward': return <FaAward />;
    default: return null;
  }
};

export const Faqs = ({ data }: { data?: FaqsData }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  if (!data) return null;

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-10 lg:py-20 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decorators */}
      <PawMark className="top-10 left-10 text-9xl rotate-12 opacity-[0.03]" />
      <PawMark className="bottom-20 right-10 text-8xl -rotate-12 opacity-[0.03]" />
      
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-10 lg:mb-16">
          <SectionHeading data={data.heading} />
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          
          <p className="text-[#6b7280] max-w-2xl mx-auto text-sm md:text-base">
            {data.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center">
          {/* Left Image & Cards */}
          <div className="w-full lg:w-5/12 relative flex-shrink-0">
            <div className="relative w-full max-w-[450px] mx-auto pt-8">
              {/* Background Circle */}
              <div className="absolute top-0 left-0 w-full aspect-square bg-[#e8f2f1] rounded-full overflow-hidden">
                {/* Decorative border */}
                <div className="absolute inset-4 rounded-full border border-dashed border-[#a8cfcb] opacity-60"></div>
              </div>
              
              <img 
                src={data.leftImage} 
                alt="FAQs" 
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute bottom-0 md:bottom-4 -left-4 md:-left-8 lg:-left-16 xl:-left-24 bg-white p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col gap-5 z-20 w-[90%] max-w-[280px] transform-gpu">
              {data.cards?.map((card) => (
                <div key={card.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00695c] text-white flex items-center justify-center flex-shrink-0 text-lg md:text-xl">
                    {renderIcon(card.icon)}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#051024] text-[14px] md:text-[15px] mb-1 leading-tight">{card.title}</h5>
                    <p className="text-[#6b7280] text-[12px] md:text-[13px] leading-relaxed">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right FAQs Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            {data.faqs?.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              const num = (index + 1).toString().padStart(2, '0');
              
              return (
                <div 
                  key={faq.id}
                  className={`bg-white rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'shadow-[0_4px_20px_rgba(0,105,92,0.08)]' : 'shadow-sm hover:shadow-md'
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#00695c]' : 'text-[#00695c]'}`}>
                        {num}
                      </span>
                      <h4 className="font-bold text-[#051024] text-base md:text-lg">
                        {faq.question}
                      </h4>
                    </div>
                    <div className={`w-8 h-8 rounded-md flex flex-shrink-0 items-center justify-center transition-colors ${
                      isOpen ? 'bg-[#00695c] text-white' : 'bg-[#e0f2f1] text-[#00695c]'
                    }`}>
                      {isOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[400px] opacity-100 pb-6 px-6 md:px-16' : 'max-h-0 opacity-0 px-6 md:px-16'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[#6b7280] text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
