'use client';
import React, { useEffect, useState, useRef } from 'react';
import { CounterData } from '@/types/templates.types';
import { FaPaw, FaHome, FaCalendarAlt, FaAward } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPaw': return <FaPaw />;
    case 'FaHome': return <FaHome />;
    case 'FaCalendarAlt': return <FaCalendarAlt />;
    case 'FaAward': return <FaAward />;
    default: return <FaPaw />;
  }
};

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated, target, duration]);

  const startAnimation = () => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutExpo for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Format with commas (e.g., 2,580)
  return <span ref={elementRef}>{count.toLocaleString('en-US')}</span>;
};

export const Counter = ({ data }: { data?: CounterData }) => {
  if (!data || !data.items) return null;

  return (
    <section className="relative bg-primary py-12 lg:py-14 overflow-hidden">

      {/* Background Watermark Paws */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <FaPaw className="absolute top-4 left-[10%] text-6xl -rotate-12" />
        <FaPaw className="absolute bottom-4 left-[30%] text-8xl rotate-45" />
        <FaPaw className="absolute top-10 right-[20%] text-7xl rotate-12" />
        <FaPaw className="absolute bottom-8 right-[5%] text-9xl -rotate-12" />
      </div>

      <div className="w-full max-w-screen-2xl mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-0 md:divide-x divide-white/20 w-full">

          {data.items.map((item) => (
            <div key={item.id} className="w-full flex flex-col md:flex-row items-center md:items-start xl:items-center justify-center md:justify-start gap-3 md:gap-4 xl:gap-6 px-2 md:px-4 xl:px-8">
              
              {/* Icon Circle */}
              <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center shrink-0">
                <div className="text-2xl sm:text-3xl md:text-4xl text-white">
                  {renderIcon(item.icon)}
                </div>
              </div>

              {/* Text Area */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left mt-2 md:mt-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white flex items-baseline">
                  <AnimatedCounter target={item.number} />
                  <span>{item.suffix}</span>
                </div>
                <p className="text-white/90 text-xs sm:text-sm xl:text-base font-medium mt-1">
                  {item.label}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
