import React from 'react';
import Link from 'next/link';
import { ServiceAreasData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PawMark } from '@/components/ui/PawMark';
import { FaMapMarkerAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  if (iconName === 'FaMapMarkerAlt') return <FaMapMarkerAlt />;
  return null;
};

export const ServiceAreasGrid = ({ data }: { data?: ServiceAreasData }) => {
  if (!data) return null;

  return (
    <section 
      className="py-8 lg:py-12 w-full relative overflow-hidden bg-[#f8f9f9]"
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

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.locations.map((loc) => (
            <Link 
              href={`/locations/${loc.id}`}
              key={loc.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col block"
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

      </div>
    </section>
  );
};
