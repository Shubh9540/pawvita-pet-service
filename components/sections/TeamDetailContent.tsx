import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamDetailData } from '@/types/templates.types';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheckCircle, FaAward, FaHeart, FaPaw, FaArrowUp, FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdOutlineVerified } from 'react-icons/md';
import { PiSealCheckFill } from 'react-icons/pi';

const renderIcon = (iconName: string, className?: string) => {
  const props = { className: className || "text-[#00695c]" };
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF {...props} />;
    case 'FaTwitter': return <FaTwitter {...props} />;
    case 'FaInstagram': return <FaInstagram {...props} />;
    case 'FaLinkedinIn': return <FaLinkedinIn {...props} />;
    case 'FaAward': return <FaAward {...props} />;
    case 'FaHeart': return <FaHeart {...props} />;
    case 'FaPaw': return <FaPaw {...props} />;
    default: return <FaCheckCircle {...props} />;
  }
};

export const TeamDetailContent = ({ data }: { data?: TeamDetailData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Sidebar */}
          <div className="w-full lg:w-1/3 shrink-0 flex flex-col gap-6">
            
            {/* Main Profile Card */}
            <div className="bg-[#00695c] rounded-2xl overflow-hidden flex flex-col">
              <div className="relative w-full h-[300px] sm:h-[350px]">
                <Image 
                  src={data.image} 
                  alt={data.name} 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              <div className="p-8 text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white mb-1">{data.name}</h2>
                <div className="text-teal-100 font-medium text-[15px] mb-4">{data.role}</div>
                
                <div className="flex items-center justify-center w-full gap-4 mb-6">
                  <div className="h-[1px] bg-teal-600/50 flex-1"></div>
                  <FaPaw className="text-teal-100 text-sm" />
                  <div className="h-[1px] bg-teal-600/50 flex-1"></div>
                </div>
                
                {data.socialLinks && data.socialLinks.length > 0 && (
                  <div className="flex gap-4 justify-center w-full">
                    {data.socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-teal-500/50 flex items-center justify-center text-white hover:bg-white hover:text-[#00695c] transition-colors duration-300"
                        aria-label={social.platform}
                      >
                        {renderIcon(social.icon, "text-current")}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Contact Card */}
            {data.contactCard && (
              <div className="bg-[#f5f8f8] p-6 rounded-2xl border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00695c] rounded-full flex items-center justify-center shrink-0">
                    {renderIcon(data.contactCard.icon, "text-white text-xl")}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#051024] mb-2">{data.contactCard.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {data.contactCard.description}
                    </p>
                    <Link 
                      href={data.contactCard.buttonUrl}
                      className="inline-flex items-center gap-2 bg-[#00695c] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#051024] transition-colors"
                    >
                      {data.contactCard.buttonText}
                      <BsArrowUpRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Expertise Card */}
            {data.expertise && data.expertise.length > 0 && (
              <div className="bg-[#f5f8f8] p-6 sm:p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-[#051024] mb-6">Areas of Expertise</h4>
                <ul className="space-y-4">
                  {data.expertise.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#00695c] shrink-0" size={16} />
                      <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Why Choose Us Card */}
            {data.whyChooseUs && (
              <div className="bg-[#f5f8f8] p-6 sm:p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white shrink-0">
                    {renderIcon(data.whyChooseUs.icon, "text-[#00695c]")}
                  </div>
                  <h4 className="text-xl font-bold text-[#051024]">{data.whyChooseUs.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {data.whyChooseUs.description}
                </p>
              </div>
            )}
            
          </div>
          
          {/* Right Side - Bio and Details */}
          <div className="w-full lg:w-2/3 py-2">
            
            {data.about && (
              <div className="mb-12">
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-[#051024]">{data.about.titlePrefix} </span>
                  <span className="text-[#00695c]">{data.about.titleName}</span>
                </h3>
                
                <div className="flex items-center justify-start gap-4 mb-8 w-48">
                  <div className="h-[2px] bg-gray-200 flex-1"></div>
                  <FaPaw className="text-[#00695c] text-lg" />
                  <div className="h-[2px] bg-gray-200 flex-1"></div>
                </div>
                
                <div className="prose max-w-none text-gray-600 space-y-6">
                  {data.about.description.map((paragraph, idx) => (
                    <p key={idx} className="text-[16px] leading-[1.8]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}
            
            <div className="w-full h-[1px] bg-gray-200 my-12"></div>
            
            {/* Professional Skills */}
            {data.professionalSkills && data.professionalSkills.length > 0 && (
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#051024] mb-2">Professional Skills</h4>
                <div className="w-12 h-[3px] bg-[#00695c] mb-8"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {data.professionalSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#00695c] shrink-0" size={16} />
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="w-full h-[1px] bg-gray-200 my-12"></div>
            
            {/* Experience */}
            {Array.isArray(data.experience) && data.experience.length > 0 && (
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-[#051024] mb-2">Experience</h4>
                <div className="w-12 h-[3px] bg-[#00695c] mb-10"></div>
                
                <div className="space-y-10">
                  {data.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-10">
                      {/* Timeline Dot & Line */}
                      <div className="absolute left-0 top-1 bottom-0 flex flex-col items-center">
                        <div className="w-3 h-3 bg-[#00695c] rounded-full"></div>
                        {idx !== data.experience!.length - 1 && (
                          <div className="w-[1px] bg-gray-200 flex-1 mt-2 mb-[-32px]"></div>
                        )}
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:gap-8">
                        <div className="md:w-1/3 mb-4 md:mb-0 shrink-0">
                          <h5 className="font-bold text-[#051024] text-lg mb-1">{exp.role}</h5>
                          <div className="text-[#00695c] font-medium mb-1">{exp.company}</div>
                          <div className="text-gray-500 text-sm">{exp.duration}</div>
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-gray-600 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="w-full h-[1px] bg-gray-200 my-12"></div>
            
            {/* Education & Certification */}
            {data.education && data.education.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-[#051024] mb-2">Education & Certification</h4>
                <div className="w-12 h-[3px] bg-[#00695c] mb-8"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <PiSealCheckFill className="text-[#00695c] text-3xl shrink-0 mt-1" />
                      <div>
                        <h5 className="font-bold text-[#051024] mb-1">{edu.degree}</h5>
                        <p className="text-gray-500 text-sm">{edu.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
