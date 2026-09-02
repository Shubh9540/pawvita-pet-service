import React from 'react';
import { ServicesData } from '@/types/templates.types';
import Image from 'next/image';
import Link from 'next/link';
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

export const ServicesGridSection = ({ data }: { data?: ServicesData }) => {
  if (!data || !data.services || data.services.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#f8fcfc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-3xl p-3 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image Container with overlapping icon */}
              <div className="relative mb-8">
                <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Overlapping Icon */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-[#0f9c9b] text-white flex items-center justify-center border-4 border-white z-10 shadow-sm box-content">
                  <div className="text-xl">
                    {renderIcon(service.icon)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-bold text-[#051024] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>
                <Link 
                  href={service.url}
                  className="inline-flex items-center gap-2 text-[#0f9c9b] font-bold text-sm hover:text-[#00695c] transition-colors"
                >
                  Read More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
