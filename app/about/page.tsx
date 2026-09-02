import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { AboutUs } from '@/components/sections/AboutUs';
import { AboutMission } from '@/components/sections/AboutMission';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Team } from '@/components/sections/Team';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-white min-h-screen font-primary">
      {/* 1. TopBar */}
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />

      {/* 2. Header */}
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />

      {/* 3. Breadcrumb */}
      <Breadcrumb data={commonData?.aboutBreadcrumb} />
      
      {/* 4. About Us */}
      <AboutUs data={sectionData.AboutUs?.variants?.PawVitaAboutUs1} />

      {/* 5. Mission & Vision */}
      <AboutMission data={sectionData.AboutMission?.variants?.PawVitaAboutMission1} />

      {/* 6. Why Choose Us */}
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.PawVitaWhyChooseUs1} />

      {/* 7. Team */}
      <Team data={sectionData.Team?.variants?.PawVitaTeam1} />

      {/* Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
