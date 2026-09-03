import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { PricingSection } from '@/components/sections/PricingSection';
import { Counter } from '@/components/sections/Counter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Packages - PawVita Pet Services',
  description: 'Simple, transparent, and affordable pricing for every pet. Choose the perfect grooming or care package for your furry friend.',
};

export const dynamic = 'force-dynamic';

export default function PricingPage() {
  const templateData: PawVitaTemplateData = rawData;
  const commonData = templateData?.common;
  const sections = templateData?.categories?.PawVita?.sections;

  if (!sections) return <div className="min-h-screen flex items-center justify-center">{commonData?.globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-white">
      {/* Navigation */}
      <TopBar data={sections.TopBar?.variants.PawVitaTopBar1} />
      <Header data={sections.Header?.variants.PawVitaHeader1} />

      {/* Breadcrumb */}
      {commonData?.pricingBreadcrumb && (
        <Breadcrumb data={commonData.pricingBreadcrumb} />
      )}

      {/* Main Content */}
      <PricingSection data={sections.Pricing?.variants.PawVitaPricing1} />

      {/* Counter Section */}
      <Counter data={sections.Counter?.variants.PawVitaCounter1} />

      {/* Footer */}
      <Footer data={sections.Footer?.variants.PawVitaFooter1} />
    </main>
  );
}
