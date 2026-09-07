import React from 'react';
import { ServiceDetailData, ServiceDetailSidebarData } from '@/types/templates.types';
import Image from 'next/image';
import { FaCheckCircle, FaPaw, FaCut, FaHome, FaUserFriends, FaWalking, FaStethoscope, FaSyringe, FaBone, FaFlask, FaClipboard, FaAmbulance, FaHeartbeat, FaVial, FaClipboardCheck, FaCheck } from 'react-icons/fa';
import { ServiceDetailSidebar } from './ServiceDetailSidebar';

const renderIcon = (iconName?: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaCut': return <FaCut />;
    case 'FaHome': return <FaHome />;
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaWalking': return <FaWalking />;
    case 'FaStethoscope': return <FaStethoscope />;
    case 'FaSyringe': return <FaSyringe />;
    case 'FaBone': return <FaBone />;
    case 'FaFlask': return <FaFlask />;
    case 'FaClipboard': return <FaClipboard />;
    case 'FaAmbulance': return <FaAmbulance />;
    case 'FaHeartbeat': return <FaHeartbeat />;
    case 'FaVial': return <FaVial />;
    case 'FaClipboardCheck': return <FaClipboardCheck />;
    default: return <FaCheckCircle />;
  }
};

interface ServiceDetailContentProps {
  data?: ServiceDetailData;
  allItems?: ServiceDetailData[];
  sidebarData?: ServiceDetailSidebarData;
}

export const ServiceDetailContent = ({ data, allItems = [], sidebarData }: ServiceDetailContentProps) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Sidebar (Sticky) */}
          <div className="lg:col-span-4 order-2 lg:order-1 sticky top-24 self-start">
            <ServiceDetailSidebar 
              allItems={allItems} 
              activeId={data.id} 
              sidebarData={sidebarData} 
            />
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            
            {/* Main Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden mb-10 shadow-sm">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Body */}
            <div>
              {/* Badge */}
              {data.badge && (
                <div className="inline-flex items-center gap-2 bg-[#f0f9f9] text-[#0f9c9b] px-4 py-2 rounded-full text-sm font-bold mb-4">
                  <FaPaw />
                  <span>{data.badge}</span>
                </div>
              )}

              {/* Main Heading & Description 1 */}
              <h2 className="text-3xl md:text-4xl leading-tight font-bold text-[#051024] mb-6">
                {data.mainHeading || data.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {data.description1 || data.description}
              </p>

              {/* Subheading 1 & Description 2 */}
              {data.subHeading1 && (
                <>
                  <h3 className="text-2xl font-bold text-[#051024] mb-4">
                    {data.subHeading1}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {data.description2}
                  </p>
                </>
              )}

              {/* Separator with Icon */}
              {(data.subHeading2 || data.featureCards) && (
                <div className="flex items-center gap-4 my-10 max-w-2xl mx-auto">
                  <div className="h-px bg-gray-200 flex-1"></div>
                  <FaPaw className="text-[#0f9c9b] text-xl" />
                  <div className="h-px bg-gray-200 flex-1"></div>
                </div>
              )}

              {/* Subheading 2 & Description 3 (Centered section) */}
              {data.subHeading2 && (
                <div className="text-center mb-10 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-[#051024] mb-4">
                    {data.subHeading2}
                  </h3>
                  {data.description3 && (
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {data.description3}
                    </p>
                  )}
                </div>
              )}

              {/* Feature Cards Grid */}
              {data.featureCards && data.featureCards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {data.featureCards.map((card, idx) => (
                    <div key={idx} className="bg-[#f8fcfc] rounded-3xl p-6 lg:p-8 flex flex-col gap-4">
                      {/* Card Header (Icon + Title) */}
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-full bg-white text-[#0f9c9b] flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                          {renderIcon(card.icon)}
                        </div>
                        <h4 className="font-bold text-[#051024] text-xl">
                          {card.title}
                        </h4>
                      </div>
                      
                      {/* Card Description */}
                      {card.description && (
                        <p className="text-gray-600 text-sm leading-relaxed border-b border-gray-200 pb-4 mb-2">
                          {card.description}
                        </p>
                      )}
                      
                      {/* Card List */}
                      {card.list && card.list.length > 0 && (
                        <ul className="flex flex-col gap-3 mt-2">
                          {card.list.map((listItem, lIdx) => (
                            <li key={lIdx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-[#0f9c9b]/10 text-[#0f9c9b] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <FaCheck className="text-xs" />
                              </div>
                              <span className="text-gray-700 text-base">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Fallback for older simpler data (if featureCards not present but features are) */}
              {!data.featureCards && data.features && data.features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-[#051024] mb-6">Key Features & Benefits</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#0f9c9b] mt-1 flex-shrink-0 text-xl" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
