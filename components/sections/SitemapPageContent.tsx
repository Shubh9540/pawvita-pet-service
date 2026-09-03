import React from 'react';
import Link from 'next/link';
import { SitemapData } from '@/types/templates.types';
import { 
  FaPaw, 
  FaRegFileAlt, 
  FaRegCalendarAlt, 
  FaUserFriends, 
  FaTags, 
  FaMapMarkerAlt, 
  FaImages, 
  FaRegQuestionCircle, 
  FaHandshake, 
  FaRegNewspaper, 
  FaShieldAlt, 
  FaExclamationCircle,
  FaArrowRight
} from 'react-icons/fa';

interface Props {
  data?: SitemapData;
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaRegFileAlt': return <FaRegFileAlt />;
    case 'FaRegCalendarAlt': return <FaRegCalendarAlt />;
    case 'FaUserFriends': return <FaUserFriends />;
    case 'FaTags': return <FaTags />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaImages': return <FaImages />;
    case 'FaRegQuestionCircle': return <FaRegQuestionCircle />;
    case 'FaHandshake': return <FaHandshake />;
    case 'FaRegNewspaper': return <FaRegNewspaper />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaExclamationCircle': return <FaExclamationCircle />;
    default: return <FaPaw />;
  }
};

export const SitemapPageContent = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#fcfdfd] relative overflow-hidden font-primary">
      {/* Decorative Paws in background */}
      <FaPaw className="absolute top-10 left-10 text-[#00695c]/5 text-6xl -rotate-12" />
      <FaPaw className="absolute top-20 right-20 text-[#00695c]/5 text-5xl rotate-45" />

      <div className="w-full max-w-[1300px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4 text-[#00695c]">
            <FaPaw className="text-4xl" />
            <span className="text-2xl font-black ml-2 mt-1">PawVita</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#00695c] mb-6">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-3 text-[#00695c]">
            <span className="w-16 h-[2px] bg-[#00695c]/30"></span>
            <FaPaw className="text-xl" />
            <span className="w-16 h-[2px] bg-[#00695c]/30"></span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.categories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300"
            >
              
              {/* Card Header (Overlapping Icon & Badge) */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-lg border border-[#00695c]/20 flex items-center justify-center shrink-0 z-10 bg-white">
                  <span className="text-xl text-[#00695c]">
                    {renderIcon(category.icon)}
                  </span>
                </div>
                <div className="bg-[#00695c] text-white font-semibold text-sm py-2 px-4 rounded-r-lg -ml-4 pl-7 w-full shadow-sm">
                  {category.title}
                </div>
              </div>

              {/* Links List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00695c] shrink-0"></div>
                    <Link 
                      href={link.url} 
                      className="text-[#4a4a4a] hover:text-[#00695c] text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* View All Button */}
              <div className="mt-auto pt-4 border-t border-gray-50">
                <Link 
                  href={category.links[0]?.url || '/'} 
                  className="text-[#00695c] text-sm font-bold hover:text-[#c49250] flex items-center gap-2 transition-colors duration-200 w-fit"
                >
                  View All Pages <FaArrowRight className="text-xs" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
