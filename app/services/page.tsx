import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ServicesTabs } from '@/components/sections/ServicesTabs';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';
import { Faqs } from '@/components/sections/Faqs';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;

  if (!sectionData) {
    return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;
  }

  return (
    <main className="bg-white min-h-screen font-primary">
      {/* 1. TopBar */}
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />

      {/* 2. Header */}
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />

      {/* 3. Breadcrumb */}
      <Breadcrumb data={commonData?.servicesBreadcrumb} />
      
      {/* 4. Services Tabs Section */}
      <ServicesTabs data={sectionData.Services?.variants?.PawVitaServicesTabs1} />

      {/* 5. Services Grid Section */}
      <ServicesGridSection data={sectionData.Services?.variants?.PawVitaServicesGrid1} />

      {/* 6. FAQs */}
      <Faqs data={sectionData.Faqs?.variants?.PawVitaFaqs1} />

      {/* Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
