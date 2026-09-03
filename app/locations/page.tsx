import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ServiceAreasGrid } from '@/components/sections/ServiceAreasGrid';
import { Counter } from '@/components/sections/Counter';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Service Locations - PawVita Pet Services',
  description: 'PawVita proudly serves pets across multiple locations. Find a pet care center near you in Delhi NCR and beyond.',
};

export default function LocationsPage() {
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
      <Breadcrumb data={{
        title: 'Our Locations',
        paths: [
          { label: 'Home', url: '/' },
          { label: 'Locations' }
        ],
        bgImage: '/banner/ban1.jpg'
      }} />

      {/* 4. Service Areas Grid */}
      <ServiceAreasGrid data={sectionData.ServiceAreas?.variants?.PawVitaServiceAreas1} />

      {/* 5. Counter */}
      <Counter data={sectionData.Counter?.variants?.PawVitaCounter1} />

      {/* 5. Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
