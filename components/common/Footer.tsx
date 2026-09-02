'use client';

import React from 'react';
import Link from 'next/link';
import { FooterData } from '@/types/templates.types';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaPaw,
  FaChevronRight
} from 'react-icons/fa';
import { FiPhoneCall, FiMapPin, FiClock, FiMail } from 'react-icons/fi';

const renderIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'FaInstagram': return <FaInstagram className={className} />;
    case 'FaFacebookF': return <FaFacebookF className={className} />;
    case 'FaYoutube': return <FaYoutube className={className} />;
    case 'FaWhatsapp': return <FaWhatsapp className={className} />;
    case 'FaPhoneAlt': return <FiPhoneCall className={className} />;
    case 'FaMapMarkerAlt': return <FiMapPin className={className} />;
    case 'FaEnvelope': return <FiMail className={className} />;
    case 'FaClock': return <FiClock className={className} />;
    case 'FaPaw': return <FaPaw className={className} />;
    case 'FaChevronRight': return <FaChevronRight className={className} />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  return (
    <footer className="bg-[#0b131a] text-white pt-16 pb-8 border-t-[8px] border-[#00695c]">
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          
          {/* Col 1: Contact Info */}
          <div className="flex flex-col">
            {data.contactItems.map((item, index) => (
              <div key={item.id} className={`flex items-start gap-3 pb-5 ${index !== 0 ? 'pt-5' : ''} ${index !== data.contactItems.length - 1 ? 'border-b border-white/10' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-[#1b3a38] flex flex-shrink-0 items-center justify-center text-white text-xl">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <div className="text-[#00c9a7] font-semibold text-[15px] mb-1">{item.subtitle}</div>
                  <div className="text-[#8c9ba5] text-[13px] leading-tight">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Col 2-5: Link Columns */}
          {data.columns.map((col) => (
            <div key={col.id} className="flex flex-col pt-2">
              <h3 className="text-white font-bold text-[17px] mb-5 flex flex-col">
                {col.title}
                <span className="w-8 h-[2px] bg-[#00c9a7] mt-2"></span>
              </h3>
              
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.url} className="text-[#8c9ba5] hover:text-[#00c9a7] flex items-center gap-2 transition-colors text-[13px]">
                      {link.icon && <span className="text-[#00c9a7] text-[10px]">{renderIcon(link.icon)}</span>}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-8"></div>

        {/* Bottom Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Text */}
          <div className="text-[#8c9ba5] text-sm flex items-center flex-wrap gap-2 justify-center md:justify-start">
            {data.copyrightText} <span className="text-white/20">|</span> Powered by <Link href="#" className="text-[#00c9a7] hover:underline">Lestow</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-white font-medium text-sm mr-2">Follow Us</span>
            <div className="flex items-center gap-3">
              {data.socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="w-10 h-10 rounded-full border border-[#00c9a7]/30 flex items-center justify-center text-[#00c9a7] hover:bg-[#00c9a7] hover:text-white transition-all duration-300 text-sm"
                  aria-label={item.icon}
                >
                  {renderIcon(item.icon)}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
