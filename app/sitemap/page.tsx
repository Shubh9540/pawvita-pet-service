import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { SitemapPageContent } from '@/components/sections/SitemapPageContent';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Sitemap - PawVita Pet Services',
  description: 'Explore all pages and sections of the PawVita website.',
};

export default function SitemapPage() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;
  
  if (!sectionData) return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;

  const sitemapData = sectionData.Sitemap?.variants?.PawVitaSitemap1;

  return (
    <main className="bg-white min-h-screen font-primary flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />
      
      {commonData?.sitemapBreadcrumb && (
        <Breadcrumb data={commonData.sitemapBreadcrumb} />
      )}
      
      <div className="flex-grow">
        <SitemapPageContent data={sitemapData} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
