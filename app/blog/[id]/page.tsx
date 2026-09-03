import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { BlogDetailContent } from '@/components/sections/BlogDetailContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const data = templateData?.categories?.PawVita?.sections?.BlogDetails?.variants[`PawVitaBlogDetail_${resolvedParams.id}`];

  if (!data) {
    return { title: 'Blog Not Found' };
  }

  return {
    title: `${data.title} - PawVita Blog`,
    description: data.contentTop?.[0]?.substring(0, 160) || 'Blog details',
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;

  const blogData = sectionData.BlogDetails?.variants[`PawVitaBlogDetail_${resolvedParams.id}`];

  if (!blogData) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen font-primary">
      {/* 1. TopBar */}
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />

      {/* 2. Header */}
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />

      {/* 3. Breadcrumb */}
      {commonData?.blogDetailBreadcrumb && (
        <Breadcrumb data={commonData.blogDetailBreadcrumb} />
      )}

      {/* 4. Blog Detail Content */}
      <BlogDetailContent data={blogData} />

      {/* 5. Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
