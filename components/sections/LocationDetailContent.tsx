import React from 'react';
import Link from 'next/link';
import { LocationDetailItem, LocationItem } from '@/types/templates.types';
import { FaPaw, FaMapMarkerAlt, FaUsers, FaHospital, FaCertificate, FaUserMd, FaArrowRight } from 'react-icons/fa';

const renderIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw className={className} />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt className={className} />;
    case 'FaUsers': return <FaUsers className={className} />;
    case 'FaHospital': return <FaHospital className={className} />;
    case 'FaCertificate': return <FaCertificate className={className} />;
    case 'FaUserMd': return <FaUserMd className={className} />;
    default: return <FaPaw className={className} />;
  }
};

interface Props {
  currentLocation?: LocationDetailItem;
  allLocations?: LocationItem[];
}

export const LocationDetailContent = ({ currentLocation, allLocations }: Props) => {
  if (!currentLocation || !allLocations) return null;

  return (
    <section className="py-8 lg:py-12 w-full bg-white">
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Top Section with Image and Intro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Image */}
              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg relative">
                <img 
                  src={currentLocation.image} 
                  alt={currentLocation.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Intro Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#00695c] font-bold text-sm tracking-widest uppercase mb-4">
                  {renderIcon(currentLocation.heading.icon || 'FaPaw')}
                  <span>{currentLocation.heading.title}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-[#051024] mb-4 leading-tight">
                  {currentLocation.title}
                </h1>
                
                <div className="flex items-center gap-2 text-[#00695c] font-medium mb-6">
                  {renderIcon(currentLocation.subtitleIcon || 'FaMapMarkerAlt')}
                  <span>{currentLocation.subtitle}</span>
                </div>

                <div className="space-y-4 text-gray-500 leading-relaxed text-sm">
                  {currentLocation.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Pet Overview Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fdfaf6] p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#00695c]">
                  {renderIcon(currentLocation.overview.icon, "text-2xl")}
                  <h3 className="text-2xl font-bold text-[#00695c]">{currentLocation.overview.title}</h3>
                </div>
                
                <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                  {currentLocation.overview.description.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="w-full h-64 rounded-3xl overflow-hidden shadow-md">
                <img 
                  src={currentLocation.overview.image} 
                  alt={currentLocation.overview.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentLocation.stats.map((stat) => (
                <div key={stat.id} className="bg-[#f8f9f9] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3">
                  <div className="text-[#00695c] text-3xl">
                    {renderIcon(stat.icon)}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">{stat.title}</div>
                    <div className="text-xl md:text-2xl font-bold text-[#051024]">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-[#eaf3f1] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
              <div className="w-full md:w-5/12 h-48 md:h-64">
                <img 
                  src={currentLocation.cta.image} 
                  alt={currentLocation.cta.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col items-start justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#051024] mb-3">{currentLocation.cta.title}</h3>
                <p className="text-gray-600 mb-8">{currentLocation.cta.description}</p>
                <Link 
                  href={currentLocation.cta.buttonUrl}
                  className="bg-[#00695c] text-white px-8 py-3 rounded-full font-bold hover:bg-[#051024] transition-colors duration-300 flex items-center gap-3"
                >
                  {currentLocation.cta.buttonText}
                </Link>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-[#fdfaf6] rounded-3xl p-6 md:p-8 sticky top-32 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-white bg-[#00695c] p-4 rounded-xl mb-8 shadow-md">
                <FaPaw className="text-xl" />
                <h3 className="text-xl font-bold">Our Service Locations</h3>
              </div>
              
              <div className="space-y-4">
                {allLocations.map((loc) => {
                  const isActive = loc.id === currentLocation.id;
                  return (
                    <Link 
                      key={loc.id} 
                      href={`/locations/${loc.id}`}
                      className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gray-100 shadow-inner border border-gray-200' 
                          : 'hover:bg-white hover:shadow-sm border border-transparent'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 shadow-sm">
                        <img 
                          src={loc.image} 
                          alt={loc.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className={`font-bold ${isActive ? 'text-[#051024]' : 'text-gray-800'}`}>
                          {loc.title}
                        </h4>
                        <p className="text-gray-500 text-xs mt-1">{loc.subtitle}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
