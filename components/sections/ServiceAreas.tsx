'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ServiceAreasData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PawMark } from '@/components/ui/PawMark';
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  if (iconName === 'FaMapMarkerAlt') return <FaMapMarkerAlt />;
  return null;
};

export const ServiceAreas = ({ data }: { data?: ServiceAreasData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) return null;

  // Handle scroll to update dots
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
        const gap = 24; // 1.5rem (gap-6)
        const totalWidth = cardWidth + gap;
        const index = Math.round(scrollLeft / totalWidth);
        setActiveIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      if (containerRef.current.scrollLeft <= 10) {
        containerRef.current.scrollTo({ left: containerRef.current.scrollWidth, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      
      if (containerRef.current.scrollLeft >= maxScroll - 10) {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        containerRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
      }
    }
  };

  // Auto-play infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToDot = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0]?.clientWidth || 0;
      containerRef.current.scrollTo({ left: (cardWidth + 24) * index, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="py-16 lg:py-24 w-full relative overflow-hidden bg-[#f8f9f9]"
      style={data.bgImage ? { backgroundImage: `url('${data.bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Background Decorators */}
      <PawMark className="top-24 left-10 xl:left-20 text-8xl xl:text-9xl -rotate-12" />
      <PawMark className="top-16 right-20 xl:right-40 text-7xl xl:text-8xl rotate-12" />
      <PawMark className="top-40 right-4 xl:right-16 text-6xl xl:text-7xl rotate-45" />

      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Heading Component */}
        <SectionHeading data={data.heading} />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight mb-12">
          {data.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              <span className={i === 0 ? "text-[#4d3d3a]" : "text-primary"}>
                {line}
              </span>
              <br />
            </React.Fragment>
          ))}
        </h2>

        {/* Slider Container Wrapper */}
        <div className="relative w-full mx-auto flex items-center">
          
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft}
            className="hidden md:flex absolute -left-2 lg:-left-6 xl:-left-10 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>

          {/* Scrollable Cards Container */}
          <div 
            ref={containerRef}
            className="flex w-full overflow-x-auto gap-4 lg:gap-5 snap-x snap-mandatory pb-8 pt-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {data.locations.map((loc) => (
              <Link 
                href={`/locations/${loc.id}`}
                key={loc.id} 
                className="w-[85vw] sm:w-64 md:w-56 lg:w-[calc(16.666%-1.25rem)] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 snap-start border border-gray-100 flex flex-col"
              >
                {/* Card Image */}
                <div className="w-full h-56 md:h-48 lg:h-60 relative">
                  <img 
                    src={loc.image} 
                    alt={loc.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Card Content */}
                <div className="p-4 lg:p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{loc.title}</h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    {renderIcon(loc.icon)}
                    <span className="text-gray-600 font-normal">{loc.subtitle}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight}
            className="hidden md:flex absolute -right-2 lg:-right-6 xl:-right-10 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-full items-center justify-center text-white shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Scroll right"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {data.locations.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToDot(i)}
              className={`w-3 h-3 rounded-full transition-all ${activeIndex === i ? 'bg-primary w-4 h-4' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
