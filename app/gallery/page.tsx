import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { GalleryImages } from '@/components/sections/GalleryImages';
import { GalleryVideos } from '@/components/sections/GalleryVideos';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Gallery - PawVita Pet Services',
  description: 'Explore our gallery of joyful tails, friendly faces, and caring hands at PawVita.',
};

export default function GalleryPage() {
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
      {commonData?.galleryBreadcrumb && (
        <Breadcrumb data={commonData.galleryBreadcrumb} />
      )}

      {/* 4. Gallery Images Section */}
      <GalleryImages data={sectionData.GalleryImages?.variants?.PawVitaGalleryImages1} />

      {/* 5. Gallery Videos Section */}
      <GalleryVideos data={sectionData.GalleryVideos?.variants?.PawVitaGalleryVideos1} />

      {/* 6. Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
