import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { Testimonials } from '@/components/sections/Testimonials';
import { Counter } from '@/components/sections/Counter';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Testimonials - PawVita Pet Services',
  description: 'See what pet parents are saying about PawVita pet services.',
};

export default function TestimonialsPage() {
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
      {commonData?.testimonialsBreadcrumb && (
        <Breadcrumb data={commonData.testimonialsBreadcrumb} />
      )}

      {/* 4. Testimonials Section */}
      <Testimonials data={sectionData.Testimonials?.variants?.PawVitaTestimonials1} />

      {/* 5. Counter Section */}
      <Counter data={sectionData.Counter?.variants?.PawVitaCounter1} />

      {/* 6. Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
