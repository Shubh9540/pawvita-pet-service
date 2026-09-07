'use client';
import React from 'react';
import { BookAppointmentData } from '@/types/templates.types';
import { 
  FaPaw, FaRegClock, FaStethoscope, FaHeadset, FaUserMd, 
  FaShieldAlt, FaClipboardCheck, FaHeart, FaUser, FaEnvelope,
  FaPhoneAlt, FaListUl, FaCalendarAlt, FaRegCommentDots
} from 'react-icons/fa';

const renderIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw className={className} />;
    case 'FaRegClock': return <FaRegClock className={className} />;
    case 'FaStethoscope': return <FaStethoscope className={className} />;
    case 'FaHeadset': return <FaHeadset className={className} />;
    case 'FaUserMd': return <FaUserMd className={className} />;
    case 'FaShieldAlt': return <FaShieldAlt className={className} />;
    case 'FaClipboardCheck': return <FaClipboardCheck className={className} />;
    case 'FaHeart': return <FaHeart className={className} />;
    default: return <FaPaw className={className} />;
  }
};

interface Props {
  data?: BookAppointmentData;
}

export const BookAppointmentSection = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-white relative">
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-12 space-y-12">
        
        {/* Top Content: Left & Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left Column: Image + Info Box */}
          <div className="flex flex-col rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {/* Image */}
            <div className="w-full h-[300px] md:h-[400px]">
              <img 
                src={data.leftSide.image} 
                alt="Emergency Care" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info Box */}
            <div className="bg-[#f0f7f5] p-8 md:p-10 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#00695c] mb-4">
                {data.leftSide.boxTitle}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {data.leftSide.boxDescription}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8">
                {data.leftSide.features.map((feature, idx) => (
                  <div 
                    key={feature.id} 
                    className={`flex items-start gap-4 ${
                      idx % 2 === 0 ? 'sm:border-r border-gray-200/80 sm:pr-4 md:pr-6' : 'sm:pl-4 md:pl-6'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00695c] text-xl shrink-0 shadow-sm">
                      {renderIcon(feature.icon)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#051024] text-sm md:text-base leading-tight mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm">{feature.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Text + Form */}
          <div className="flex flex-col justify-center py-4 lg:py-8 lg:px-4">
            
            {/* Heading Section */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-[#00695c] font-bold text-sm tracking-widest uppercase mb-4">
                {renderIcon(data.rightSide.headingIcon || 'FaPaw')}
                <span>{data.rightSide.headingTitle}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6 leading-tight">
                {data.rightSide.title}
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {data.rightSide.description}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00695c]">
                    <FaUser />
                  </div>
                  <input 
                    type="text" 
                    placeholder={data.rightSide.form.namePlaceholder} 
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00695c]">
                    <FaEnvelope />
                  </div>
                  <input 
                    type="email" 
                    placeholder={data.rightSide.form.emailPlaceholder} 
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00695c]">
                    <FaPhoneAlt />
                  </div>
                  <input 
                    type="tel" 
                    placeholder={data.rightSide.form.phonePlaceholder} 
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00695c]">
                    <FaListUl />
                  </div>
                  <select 
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm text-gray-500 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>{data.rightSide.form.servicePlaceholder}</option>
                    {data.rightSide.form.services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00695c]">
                    <FaCalendarAlt />
                  </div>
                  <input 
                    type="text" 
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : null)}
                    placeholder={data.rightSide.form.datePlaceholder} 
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm text-gray-500"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#00695c]">
                    <FaRegClock />
                  </div>
                  <input 
                    type="text" 
                    onFocus={(e) => (e.target.type = "time")}
                    onBlur={(e) => (e.target.value === "" ? e.target.type = "text" : null)}
                    placeholder={data.rightSide.form.timePlaceholder} 
                    className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm text-gray-500"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-[#00695c]">
                  <FaRegCommentDots />
                </div>
                <textarea 
                  rows={4}
                  placeholder={data.rightSide.form.messagePlaceholder} 
                  className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#00695c] focus:border-transparent transition-all shadow-sm resize-none"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit"
                  className="bg-[#00695c] hover:bg-[#051024] text-white px-8 py-4 rounded-xl font-bold transition-colors duration-300 w-full"
                >
                  {data.rightSide.form.submitButton}
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Features Banner */}
        <div className="w-full bg-[#f8f9f9] rounded-3xl p-8 lg:py-10 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:divide-x divide-gray-200/80">
            {data.bottomBanner.map((item, idx) => (
              <div 
                key={item.id} 
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:px-8 ${
                  idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-[#eaf3f1] flex items-center justify-center text-[#00695c] text-2xl shrink-0">
                  {renderIcon(item.icon)}
                </div>
                <div>
                  <h4 className="font-bold text-[#051024] mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
