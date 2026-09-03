import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogsList } from '@/components/sections/BlogsList';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Our Blog - PawVita Pet Services',
  description: 'Helpful tips, grooming advice, and heartwarming stories to keep your furry friends happy, healthy, and well cared for.',
};

export default function BlogPage() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;

  return (
    <main className="bg-[#f8f9f9] min-h-screen font-primary">
      {/* 1. TopBar */}
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />

      {/* 2. Header */}
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />

      {/* 3. Breadcrumb */}
      {commonData?.blogBreadcrumb && (
        <Breadcrumb data={commonData.blogBreadcrumb} />
      )}

      {/* 4. Blogs List */}
      <BlogsList data={sectionData.BlogsList?.variants?.PawVitaBlogsList1} />

      {/* 5. Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
