import React from 'react';
import Link from 'next/link';
import { BreadcrumbData } from '@/types/templates.types';
import { FaHome, FaChevronRight } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section 
      className="relative w-full py-16 lg:py-24 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url('${data.bgImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#4a1727]/85"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {data.title}
        </h1>

        <div className="flex items-center space-x-2 text-sm md:text-base font-medium">
          {data.paths.map((path, index) => {
            const isLast = index === data.paths.length - 1;

            return (
              <React.Fragment key={path.label}>
                {path.url ? (
                  <Link href={path.url} className="flex items-center hover:text-[var(--color-accent)] transition-colors">
                    {index === 0 && <FaHome className="mr-2" />}
                    {path.label}
                  </Link>
                ) : (
                  <span className="flex items-center text-[#f93766]">
                    {path.label}
                  </span>
                )}

                {!isLast && (
                  <FaChevronRight className="text-sm mx-1 text-white" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
