import React from 'react';
import Link from 'next/link';
import { ServiceDetailData, ServiceDetailSidebarData } from '@/types/templates.types';
import { FaPaw, FaArrowRight, FaCut, FaHome, FaUserFriends, FaWalking, FaStethoscope, FaSyringe, FaBone, FaFlask, FaClipboard, FaAmbulance, FaHeartbeat, FaVial, FaClipboardCheck, FaPhoneAlt } from 'react-icons/fa';

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
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    default: return <FaPaw />;
  }
};

interface ServiceDetailSidebarProps {
  allItems: ServiceDetailData[];
  activeId: string;
  sidebarData?: ServiceDetailSidebarData;
}

export const ServiceDetailSidebar = ({ allItems, activeId, sidebarData }: ServiceDetailSidebarProps) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Explore Services Menu */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-[#0f9c9b] px-6 py-5 flex items-center gap-3 text-white">
          <FaPaw className="text-xl flex-shrink-0" />
          <h3 className="font-bold text-lg">Explore Our Services</h3>
        </div>
        
        <div className="flex flex-col p-3 gap-2">
          {allItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <Link 
                key={item.id} 
                href={`/services/${item.id}`}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-colors duration-300 ${
                  isActive 
                    ? 'bg-[#f0f9f9] text-[#0f9c9b] font-bold' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-lg flex-shrink-0 ${isActive ? 'text-[#0f9c9b]' : 'text-[#0f9c9b]'}`}>
                    {renderIcon(item.icon)}
                  </div>
                  <span className="text-base">{item.title}</span>
                </div>
                <FaArrowRight className={`text-sm flex-shrink-0 ${isActive ? 'text-[#0f9c9b]' : 'text-gray-400'}`} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Need Help Card */}
      {sidebarData && (
        <div className="bg-[#f8fcfc] rounded-3xl p-6 lg:p-8 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full bg-white text-[#0f9c9b] flex items-center justify-center text-xl shadow-sm flex-shrink-0">
              {renderIcon(sidebarData.icon)}
            </div>
            <h3 className="font-bold text-[#051024] text-xl">
              {sidebarData.title}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {sidebarData.description}
          </p>
          
          <Link 
            href={sidebarData.buttonUrl}
            className="bg-[#0f9c9b] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#00695c] transition-colors duration-300 flex items-center gap-2"
          >
            {sidebarData.buttonText}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      )}
    </div>
  );
};
