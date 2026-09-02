import React from 'react';
import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { Header } from '@/components/common/Header';

export default function NotFound() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData.categories?.PawVita?.sections;

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header data={sectionData?.Header?.variants?.PawVitaHeader1} />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-text-light mb-8">Page not found</p>
          <a href="/" className="bg-primary text-white px-8 py-3 rounded-md font-medium text-base hover:bg-primary/90 transition-all shadow-md">
            Go Back Home
          </a>
        </div>
      </div>
    </main>
  );
}
