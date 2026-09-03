import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaw, FaRegClock } from 'react-icons/fa';

interface Props {
  data?: ContactData;
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    default: return <FaPaw />;
  }
};

export const ContactUs = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden font-primary">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Top Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-[#00695c] font-bold tracking-widest text-sm mb-4 uppercase">
            <span className="w-6 h-[2px] bg-[#00695c]"></span>
            <span>{data.headingTitle}</span>
            <span className="w-6 h-[2px] bg-[#00695c]"></span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl font-bold text-[#051024] mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          
          <div className="flex items-center justify-center gap-3 text-[#00695c] mb-6">
            <span className="w-10 h-[1px] bg-gray-300"></span>
            <FaPaw className="text-lg" />
            <span className="w-10 h-[1px] bg-gray-300"></span>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Info & Hours */}
          <div className="space-y-10">
            
            {/* Get In Touch Header */}
            <div>
              <h2 className="text-3xl font-bold text-[#051024] mb-4 inline-block relative">
                {data.leftTitle}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00c9a7]"></span>
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                {data.leftDescription}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {data.contactCards.map((card) => (
                <div key={card.id} className={`${card.bgColorClass} rounded-2xl p-6 flex gap-6 items-center`}>
                  <div className={`w-14 h-14 rounded-full bg-[#00695c] text-white flex flex-shrink-0 items-center justify-center text-xl`}>
                    {renderIcon(card.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#051024] mb-2">{card.title}</h3>
                    {card.details.map((detail, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="pt-4">
              <div className="flex items-center gap-3 mb-6">
                <FaRegClock className="text-[#00695c] text-2xl" />
                <h3 className="text-xl font-bold text-[#051024]">{data.businessHoursTitle}</h3>
              </div>
              <div className="space-y-4">
                {data.businessHours.map((bh) => (
                  <div key={bh.id} className="flex justify-between items-center text-gray-700 pb-4 border-b border-gray-100 last:border-0">
                    <span>{bh.day}</span>
                    <span className="font-medium text-[#051024]">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#f8fcfc] rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 h-full">
            
            {/* Form Header */}
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#051024] mb-4 inline-block relative">
                {data.rightTitle}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#00c9a7]"></span>
              </h2>
              <p className="text-gray-600 mt-6 leading-relaxed">
                {data.rightDescription}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6 flex flex-col h-[calc(100%-140px)]">
              <div>
                <input 
                  type="text" 
                  placeholder={data.formPlaceholders.name} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7] transition-all text-gray-700 shadow-sm"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder={data.formPlaceholders.phone} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7] transition-all text-gray-700 shadow-sm"
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  placeholder={data.formPlaceholders.email} 
                  className="w-full bg-white border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7] transition-all text-gray-700 shadow-sm"
                />
              </div>

              <div className="flex-grow">
                <textarea 
                  placeholder={data.formPlaceholders.message} 
                  className="w-full h-full min-h-[160px] bg-white border border-gray-200 rounded-lg px-6 py-4 focus:outline-none focus:border-[#00c9a7] focus:ring-1 focus:ring-[#00c9a7] transition-all text-gray-700 shadow-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#00695c] hover:bg-[#004d40] text-white px-8 py-4 rounded-xl font-bold transition-colors duration-300 text-lg shadow-md mt-4"
              >
                {data.buttonText}
              </button>
            </form>

          </div>

        </div>

        {/* Map Section */}
        <div className="w-full h-[400px] mt-20 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <iframe 
            src={data.mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

