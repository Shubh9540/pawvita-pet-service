import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamData } from '@/types/templates.types';
import { PawMark } from '@/components/ui/PawMark';
import { FaPaw, FaCheckCircle, FaAward } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw size={16} />;
    case 'FaCheckCircle': return <FaCheckCircle size={16} />;
    case 'FaAward': return <FaAward size={16} />;
    default: return <FaCheckCircle size={16} />;
  }
};

export const Team = ({ data }: { data?: TeamData }) => {
  if (!data) return null;

  return (
    <section className="relative py-16 lg:py-24 bg-[#fafaf9] overflow-hidden">
      
      {/* Background Decorators */}
      <PawMark className="top-20 left-10 text-8xl rotate-12 opacity-[0.03]" />
      <PawMark className="bottom-20 right-10 text-9xl -rotate-12 opacity-[0.03]" />
      
      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm sm:text-base uppercase">
              {data.heading.icon && <span className="text-xl">{renderIcon(data.heading.icon)}</span>}
              {data.heading.title}
            </div>
            <div className="h-[2px] w-12 bg-primary"></div>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          
          <p className="text-gray-600 text-base md:text-lg">
            {data.description}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 xl:gap-12">
          
          {/* Left Side - Large Image */}
          <div className="w-full lg:w-1/3 shrink-0 relative">
            <div className="w-full h-[450px] lg:h-full min-h-[500px] relative rounded-[32px] overflow-hidden shadow-sm">
              <Image 
                src={data.leftImage} 
                alt="Grooming dog" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-0 bg-primary text-white py-5 px-6 rounded-r-2xl shadow-xl flex flex-col gap-4 z-10 min-w-[240px]">
                
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                    <FaPaw size={16} />
                  </div>
                  <span className="font-semibold text-sm sm:text-base tracking-wide">{data.badge.title}</span>
                </div>
                
                <div className="w-full h-[1px] bg-white/20"></div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary shrink-0">
                    <FaCheckCircle size={16} />
                  </div>
                  <span className="font-semibold text-sm sm:text-base tracking-wide">{data.badge.subtitle}</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Side - Team Grid */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {data.members.map((member) => (
                <Link 
                  href={`/team/${member.id}`}
                  key={member.id} 
                  className="group flex flex-col items-center justify-center text-center p-8 rounded-[32px] transition-colors transition-transform transition-shadow duration-300 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 hover:bg-primary cursor-pointer transform-gpu"
                >
                  
                  {/* Photo */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-5 relative border-4 border-gray-50 transition-colors duration-300 group-hover:border-white/20">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="font-bold text-lg mb-1 text-primary transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h3>
                  
                  <div className="text-sm font-medium relative pb-4 text-gray-500 transition-colors duration-300 group-hover:text-white/90">
                    {member.role}
                    
                    {/* Thin Line that fades out on hover */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-primary rounded-full transition-opacity duration-300 group-hover:opacity-0"></div>
                  </div>
                  
                </Link>
              ))}
              
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};
