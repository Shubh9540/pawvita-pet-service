'use client';
import React, { useState, useEffect } from 'react';
import { GalleryVideosData, GalleryVideoItem } from '@/types/templates.types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaPaw, FaPlay, FaTimes } from 'react-icons/fa';

interface Props {
  data?: GalleryVideosData;
}

export const GalleryVideos = ({ data }: Props) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVideoUrl(null);
    };
    if (selectedVideoUrl !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedVideoUrl]);

  if (!data) return null;

  return (
    <section className="py-8 lg:py-12 bg-[#f8f9f9] relative">
      {/* Background Decorators */}
      <div className="absolute top-20 left-10 text-white opacity-50 transform -rotate-12 pointer-events-none">
        <FaPaw className="text-8xl" />
      </div>
      <div className="absolute top-60 right-20 text-white opacity-50 transform rotate-12 pointer-events-none">
        <FaPaw className="text-9xl" />
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionHeading data={{ title: data.headingTitle, icon: data.headingIcon, variant: 'decorated' }} />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] mb-6 leading-tight">
            {data.title.split('Gallery').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <span className="text-[#00695c]">Gallery</span>}
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.items.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-black h-56 md:h-64 shadow-md transition-transform duration-300 hover:-translate-y-2"
              onClick={() => setSelectedVideoUrl(item.videoUrl)}
            >
              {/* Thumbnail */}
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                loading="lazy"
              />
              
              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-black/40 border-2 border-white/60 flex items-center justify-center text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#00695c]/80 group-hover:border-transparent">
                  <FaPlay className="text-xl ml-1" />
                </div>
              </div>

              {/* Bottom Gradient Overlay & Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 pb-4 px-5">
                <div className="flex items-center gap-2 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <FaPaw className="text-[#00695c] shrink-0" />
                  <h4 className="font-semibold text-sm md:text-base truncate">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Overlay */}
      {selectedVideoUrl !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedVideoUrl(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <FaTimes className="text-3xl" />
          </button>

          {/* Video Player */}
          <div className="relative w-full max-w-5xl px-4 md:px-10 aspect-video flex justify-center items-center">
            {selectedVideoUrl.includes('youtube') || selectedVideoUrl.includes('vimeo') ? (
              <iframe 
                src={selectedVideoUrl} 
                className="w-full h-full rounded-xl shadow-2xl bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <video 
                src={selectedVideoUrl} 
                controls 
                autoPlay 
                className="w-full h-full rounded-xl shadow-2xl bg-black"
              ></video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
