import React from 'react';
import { HeroData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPaw, FaHeart, FaShieldAlt, FaLeaf, FaRegCalendarAlt } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaHeart': return <FaHeart />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaLeaf': return <FaLeaf />;
    case 'FaRegCalendarAlt': return <FaRegCalendarAlt />;
    default: return null;
  }
};

export const HeroBanner = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative w-full bg-cover bg-center min-h-[32rem] lg:min-h-[36rem] flex items-center bg-[#f4f2ee] py-12 lg:py-16"
      style={{ backgroundImage: `url('${data.bgImage}')` }}
    >
      {/* Mobile/Tablet Gradient Overlay for Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 lg:hidden z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Content Column */}
          <div className="w-full lg:w-5/12 xl:w-2/5 relative z-10">
            {/* Subtitle via Reusable Component */}
            <div className="mb-4">
              <SectionHeading data={{ title: data.subtitle, icon: data.subtitleIcon, variant: 'simple' }} />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  <span className={i === 0 ? "text-[#111827]" : "text-primary"}>
                    {line}
                  </span>
                  <br />
                </React.Fragment>
              ))}
            </h1>

            {/* Description */}
            <p className="text-text-light text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              {data.description}
            </p>

            {/* CTA Button */}
            <a 
              href={data.button.url} 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium text-base hover:bg-primary/90 transition-all shadow-md mb-12"
            >
              {data.button.text}
              <span className="text-lg">{renderIcon(data.button.icon)}</span>
            </a>

            {/* Features list */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
              {data.features.map(feature => (
                <div key={feature.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#dce8e8] flex items-center justify-center text-primary text-lg flex-shrink-0">
                    {renderIcon(feature.icon)}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#1b3e40] leading-tight max-w-20">
                    {feature.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Empty Column (Background image fills this area) */}
          <div className="w-full lg:w-7/12 xl:w-3/5"></div>
        </div>
      </div>
    </section>
  );
};
