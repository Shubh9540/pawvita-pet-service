import React from 'react';
import { TopBarData } from '@/types/templates.types';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaYoutube': return <FaYoutube />;
    default: return null;
  }
};

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  return (
    <div className="hidden lg:flex bg-primary text-white py-3 px-8 justify-between items-center text-sm font-light">
      <div className="flex items-center gap-6">
        {data.phone && (
          <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-accent-light transition-colors">
            {renderIcon(data.phoneIcon || 'FaPhoneAlt')}
            <span>{data.phone}</span>
          </a>
        )}
        {data.phone && data.email && <span className="text-white/30">|</span>}
        {data.email && (
          <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-accent-light transition-colors">
            {renderIcon(data.emailIcon || 'FaEnvelope')}
            <span>{data.email}</span>
          </a>
        )}
      </div>
      <div className="flex items-center gap-4">
        {data.socialTitle && <span>{data.socialTitle}</span>}
        {data.socialLinks && data.socialLinks.length > 0 && (
          <div className="flex items-center gap-3">
            {data.socialLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.url} 
                className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              >
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
