import React from 'react';
import Link from 'next/link';
import { BlogsListData } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPaw, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

interface Props {
  data?: BlogsListData;
}

export const BlogsList = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="py-16 lg:py-24 bg-[#f8f9f9] relative">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeading data={{ title: data.headingTitle, icon: data.headingIcon, variant: 'decorated' }} />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6 leading-tight">
            {data.title.split('Tips').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <span className="text-[#00695c]">Tips</span>}
              </React.Fragment>
            ))}
          </h2>
          
          <div className="flex justify-center mb-6">
            <FaPaw className="text-[#00695c]" />
          </div>

          <p className="text-gray-500 text-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {data.items.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-[1.5rem] p-4 sm:p-5 flex flex-col sm:flex-row items-stretch gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
            >
              
              {/* Text Content */}
              <div className="flex-1 order-2 sm:order-1 flex flex-col justify-center py-2 sm:pl-2">
                <div className="inline-flex items-center gap-2 bg-[#00695c] text-white px-3 py-1.5 rounded-md text-[12px] font-semibold w-max mb-4">
                  <FaCalendarAlt />
                  {post.date}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-[#051024] group-hover:text-[#00695c] transition-colors leading-snug mb-3">
                  <Link href={post.url}>{post.title}</Link>
                </h3>
                
                <p className="text-[#6b7280] text-[15px] leading-relaxed line-clamp-3 mb-5">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={post.url}
                  className="inline-flex items-center gap-2 text-[#00695c] font-bold text-[14px] hover:text-[#004d40] mt-auto"
                >
                  Read More
                  <FaArrowRight className="text-[12px]" />
                </Link>
              </div>
              
              {/* Image */}
              <div className="w-full sm:w-[240px] md:w-[280px] h-56 sm:h-auto order-1 sm:order-2 rounded-xl overflow-hidden relative shrink-0">
                <Link href={post.url} className="block w-full h-full">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
