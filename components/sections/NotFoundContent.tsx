import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NotFoundData } from '@/types/templates.types';
import { FaPaw, FaArrowLeft } from 'react-icons/fa';

interface Props {
  data?: NotFoundData;
}

export const NotFoundContent = ({ data }: Props) => {
  if (!data) return null;

  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Image with decorative background */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {/* Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[#e6f4f1] rounded-[100px] rotate-12 -z-10"></div>
          
          {/* Floating Paws */}
          <FaPaw className="absolute top-10 left-10 text-[#00695c]/10 text-4xl -rotate-12" />
          <FaPaw className="absolute bottom-20 right-10 text-[#00695c]/10 text-3xl rotate-45" />
          
          <div className="relative z-10">
            <Image 
              src={data.image} 
              alt="Not Found Dog" 
              width={500} 
              height={600} 
              className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text & Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Big 404 with Paw */}
          <div className="flex items-center justify-center lg:justify-start gap-4 text-[100px] sm:text-[150px] md:text-[200px] font-black text-[#00695c] leading-none mb-4">
            <span>4</span>
            <FaPaw className="text-[80px] sm:text-[120px] md:text-[150px] -mt-4 sm:-mt-8" />
            <span>4</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#051024] mb-6">
            {data.title}
          </h1>
          
          <div className="flex items-center gap-3 text-[#00695c] mb-6">
            <span className="w-12 h-[2px] bg-[#00695c]/30"></span>
            <FaPaw className="text-lg" />
            <span className="w-12 h-[2px] bg-[#00695c]/30"></span>
          </div>
          
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg whitespace-pre-line">
            {data.description}
          </p>

          <Link href={data.buttonUrl}>
            <button className="flex items-center justify-center gap-3 bg-[#00695c] hover:bg-[#004d40] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors duration-300">
              <FaArrowLeft />
              {data.buttonText}
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};
