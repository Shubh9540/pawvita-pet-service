import React from 'react';
import { BlogDetailData } from '@/types/templates.types';
import { FaCalendarAlt, FaPaw, FaRegClock, FaQuoteLeft, FaUsers, FaBone, FaShieldAlt, FaCapsules } from 'react-icons/fa';

interface Props {
  data?: BlogDetailData;
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaUsers': return <FaUsers />;
    case 'FaBone': return <FaBone />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaCapsules': return <FaCapsules />;
    default: return <FaPaw />;
  }
};

export const BlogDetailContent = ({ data }: Props) => {
  if (!data) return null;

  return (
    <article className="py-8 lg:py-12 bg-white relative">
      <div className="w-full max-w-[1250px] mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-[#6b7280] font-semibold text-sm mb-4">
            <FaCalendarAlt className="text-[#00695c]" />
            <span>{data.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[#051024] leading-tight mb-6">
            {data.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#00695c]">
            {data.tags.map((tag, index) => (
              <div key={index} className="flex items-center gap-2 bg-[#f0fdfa] px-3 py-1.5 rounded-md border border-[#ccfbf1]">
                <FaPaw />
                <span>{tag}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-[#6b7280]">
              <FaRegClock />
              <span>{data.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-12 shadow-md">
          <img 
            src={data.heroImage} 
            alt={data.title} 
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Top Content */}
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6 mb-12">
          {data.contentTop.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Blockquote */}
        <div className="bg-[#f0fdfa] rounded-2xl p-6 sm:p-8 md:p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-[#00695c] opacity-10">
            <FaQuoteLeft className="text-6xl sm:text-8xl" />
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <FaQuoteLeft className="text-3xl sm:text-4xl text-[#00695c] shrink-0 sm:mt-2" />
            <p className="text-[#051024] text-lg sm:text-xl font-semibold leading-relaxed">
              {data.blockquote.text}
            </p>
          </div>
        </div>

        {/* Middle Heading & Content */}
        <div className="mb-12">
          <div className="mb-6 inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-[#00695c]">
              {data.middleHeading}
            </h2>
            <div className="w-1/2 h-1 bg-[#00695c] mt-2 rounded-full"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            {data.middleContent.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {data.features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50/50">
              <div className="w-12 h-12 rounded-full bg-[#e0f2f1] text-[#00695c] flex items-center justify-center shrink-0 text-xl">
                {renderIcon(feature.icon)}
              </div>
              <div>
                <h4 className="font-bold text-[#051024] mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          {data.contentBottom.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </article>
  );
};
