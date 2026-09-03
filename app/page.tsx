import React from 'react';
import rawData from '@/data/templates.json';
import { PawVitaTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { ServiceAreas } from '@/components/sections/ServiceAreas';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Counter } from '@/components/sections/Counter';
import { Team } from '@/components/sections/Team';
import { Faqs } from '@/components/sections/Faqs';
import { Blogs } from '@/components/sections/Blogs';
import { Footer } from '@/components/common/Footer';

import { TopBar } from '@/components/common/TopBar';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;

  if (!sectionData) {
    return <div>{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white min-h-screen">
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />
      <HeroBanner data={sectionData.Hero?.variants?.PawVitaHero1} />
      <ServiceAreas data={sectionData.ServiceAreas?.variants?.PawVitaServiceAreas1} />
      <AboutUs data={sectionData.AboutUs?.variants?.PawVitaAboutUs1} />
      <Services data={sectionData.Services?.variants?.PawVitaServices1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.PawVitaWhyChooseUs1} />
      <Counter data={sectionData.Counter?.variants?.PawVitaCounter1} />
      <Team data={sectionData.Team?.variants?.PawVitaTeam1} />
      <Faqs data={sectionData.Faqs?.variants?.PawVitaFaqs1} />
      <Blogs data={sectionData.Blogs?.variants?.PawVitaBlogs1} />
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
