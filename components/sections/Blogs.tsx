'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogsData } from '@/types/templates.types';
import { PawMark } from '@/components/ui/PawMark';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPaw, FaArrowRight, FaCalendarAlt, FaComments } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaArrowRight': return <FaArrowRight />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    default: return null;
  }
};

export const Blogs = ({ data }: { data?: BlogsData }) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decorators */}
      <PawMark className="top-24 left-10 text-9xl rotate-12 opacity-[0.03]" />
      <PawMark className="bottom-20 right-10 text-8xl -rotate-12 opacity-[0.03]" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1300px] relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-12 lg:mb-16">
          <SectionHeading data={data.heading} />
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          
          <p className="text-[#6b7280] max-w-2xl mx-auto text-sm md:text-base">
            {data.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left - Featured Post */}
          <div className="w-full lg:w-5/12 h-[500px] lg:h-auto lg:min-h-[600px] relative rounded-[2rem] overflow-hidden group shadow-lg">
            <Image 
              src={data.featuredPost.image} 
              alt={data.featuredPost.title} 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b4d45] via-[#0b4d45]/70 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 flex flex-col gap-4 z-10">
              <div className="inline-flex items-center gap-2 bg-[#12695c]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-[13px] font-semibold w-max shadow-sm">
                <FaCalendarAlt />
                {data.featuredPost.date}
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                {data.featuredPost.title}
              </h3>
              
              <div className="w-12 h-1 bg-white/30 rounded-full my-1"></div>
              
              <p className="text-white/90 text-[15px] leading-relaxed mb-2 max-w-[95%]">
                {data.featuredPost.excerpt}
              </p>
              
              <Link 
                href={data.featuredPost.url}
                className="inline-flex items-center gap-2 bg-white text-[#00695c] px-6 py-3 rounded-xl font-bold text-sm w-max hover:bg-[#e0f2f1] transition-colors mt-2"
              >
                Read More
                <FaArrowRight className="text-[13px]" />
              </Link>
            </div>
          </div>
          
          {/* Right - Post List */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 justify-between">
            {data.posts.map((post) => (
              <div key={post.id} className="bg-white rounded-[2rem] p-4 lg:p-5 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md border border-gray-100 group transition-colors transition-transform transition-shadow duration-300 transform-gpu">
                
                {/* Text Content */}
                <div className="flex-1 order-2 sm:order-1 flex flex-col gap-3 py-2 pl-2 lg:pl-4">
                  <div className="inline-flex items-center gap-2 bg-[#12695c] text-white px-3 py-1.5 rounded-full text-[12px] font-semibold w-max">
                    <FaCalendarAlt />
                    {post.date}
                  </div>
                  
                  <h3 className="text-lg lg:text-xl font-bold text-[#051024] group-hover:text-[#00695c] transition-colors leading-snug">
                    <Link href={post.url}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-[#6b7280] text-[14px] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={post.url}
                    className="inline-flex items-center gap-2 text-[#00695c] font-bold text-[14px] mt-1 hover:text-[#004d40]"
                  >
                    Read More
                    <FaArrowRight className="text-[12px]" />
                  </Link>
                </div>
                
                {/* Image */}
                <div className="w-full sm:w-[220px] lg:w-[260px] h-48 sm:h-[190px] order-1 sm:order-2 rounded-2xl overflow-hidden relative shrink-0">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 260px, 260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Button */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <Link 
            href={data.viewAllButton.url}
            className="inline-flex items-center gap-4 bg-[#1b6b61] text-white pl-2 pr-6 py-2 rounded-full font-semibold hover:bg-[#125048] transition-colors shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              {renderIcon(data.viewAllButton.icon || 'FaPaw')}
            </div>
            {data.viewAllButton.text}
            <FaArrowRight className="text-sm ml-2" />
          </Link>
        </div>
        
      </div>
    </section>
  );
};
