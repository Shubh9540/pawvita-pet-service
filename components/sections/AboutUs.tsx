import React from 'react';
import { AboutUsData } from '@/types/templates.types';
import Image from 'next/image';
import { FaPaw, FaHeart, FaPlusSquare, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaHeart': return <FaHeart />;
    case 'FaPlusSquare': return <FaPlusSquare />;
    case 'FaArrowRight': return <FaArrowRight />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    default: return null;
  }
};

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-24 bg-[#f4f7f6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image with Badges */}
          <div className="w-full lg:w-5/12 relative rounded-3xl overflow-hidden">
            <div className="relative aspect-[3/4] w-full">
              <Image 
                src={data.image} 
                alt={data.imageAlt} 
                fill 
                className="object-cover rounded-3xl"
              />
            </div>
            
            {/* Trusted Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-6 bg-[#00695c] text-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg w-28 sm:w-32 lg:w-40 z-10">
              <div className="flex -space-x-2 mb-2 lg:mb-3 justify-center">
                {data.trustedBadge.avatars.map((avatar, idx) => (
                  <div key={idx} className="w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 border-[#00695c] overflow-hidden relative">
                    <Image src={avatar} alt={`${data.trustedBadge.avatarAlt} ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-green-100 font-medium mb-1 justify-center">
                <FaPaw className="text-xs lg:text-sm" />
                <span>{data.trustedBadge.title}</span>
              </div>
              <div className="text-xl lg:text-3xl font-bold mb-1 text-center leading-none">{data.trustedBadge.count}</div>
              <div className="text-xs text-green-100 text-center leading-tight">{data.trustedBadge.subtitle}</div>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-6 bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg flex items-center gap-2 lg:gap-3 pr-4 lg:pr-6 z-10">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#00695c] text-white flex items-center justify-center text-lg lg:text-xl shrink-0">
                {renderIcon(data.experienceBadge.icon)}
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xl lg:text-2xl font-bold text-primary leading-none mb-1">{data.experienceBadge.years}</div>
                <div className="text-xs text-gray-600 leading-tight font-medium w-20 sm:w-24 lg:w-28">
                  {data.experienceBadge.text}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12 lg:pl-6">
            <div className="flex items-center gap-2 text-[#00695c] font-bold tracking-widest text-sm mb-4 uppercase">
              {data.heading.icon && renderIcon(data.heading.icon)}
              {data.heading.title}
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            
            <p className="text-gray-600 text-base mb-10 leading-relaxed pr-4">
              {data.description}
            </p>

            <div className="space-y-4 mb-10">
              {data.features.map(feature => (
                <div key={feature.id} className="flex gap-5 p-5 lg:p-6 rounded-2xl bg-[#ebf4f2] border border-[#dcebe8]">
                  <div className="flex-shrink-0 w-12 h-12 border border-[#00695c] rounded-full flex items-center justify-center text-[#00695c] text-lg bg-transparent">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href={data.button.url}
              className="inline-flex items-center gap-3 bg-[#00695c] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#004d40] transition-colors"
            >
              {data.button.text}
              {data.button.icon && renderIcon(data.button.icon)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
