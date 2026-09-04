'use client';
import React, { useState, useEffect } from 'react';
import { GalleryData, GalleryItem } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPaw, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Props {
  data?: GalleryData;
}

export const GalleryImages = ({ data }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  if (!data) return null;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % data.items.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + data.items.length) % data.items.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative">
      {/* Background Decorators */}
      <div className="absolute top-20 left-10 text-gray-50 opacity-50 transform -rotate-12 pointer-events-none">
        <FaPaw className="text-8xl" />
      </div>
      <div className="absolute top-60 right-20 text-gray-50 opacity-50 transform rotate-12 pointer-events-none">
        <FaPaw className="text-9xl" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeading data={{ title: data.headingTitle, icon: data.headingIcon, variant: 'decorated' }} />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6 leading-tight">
            {data.title.split('Photos').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <span className="text-[#00695c]">Photos</span>}
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

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4">
          {data.items.map((item, index) => {
            // Assign specific column spans to create the varied-width look from the screenshot
            const spanClasses = [
              'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-2',
              'lg:col-span-2', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-2',
              'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3'
            ];
            const spanClass = spanClasses[index % spanClasses.length];

            return (
              <div 
                key={item.id} 
                className={`relative group overflow-hidden rounded-xl cursor-pointer h-64 sm:col-span-1 md:col-span-2 ${spanClass}`}
                onClick={() => setSelectedIndex(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaPaw className="text-white text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <FaTimes className="text-3xl" />
          </button>

          {/* Previous Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors z-50 p-4"
          >
            <FaChevronLeft className="text-4xl md:text-5xl" />
          </button>

          {/* Current Image */}
          <div className="relative max-w-7xl max-h-[90vh] px-4 md:px-20 w-full flex justify-center items-center h-full">
            <img 
              src={data.items[selectedIndex].image} 
              alt={data.items[selectedIndex].alt} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-wide">
              {selectedIndex + 1} / {data.items.length}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-4"
          >
            <FaChevronRight className="text-4xl md:text-5xl" />
          </button>

        </div>
      )}
    </section>
  );
};
