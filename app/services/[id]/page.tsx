import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !sectionData.ServiceDetails) {
    return notFound();
  }

  const detailItems = sectionData.ServiceDetails.variants?.PawVitaServiceDetails1?.items || [];
  const currentService = detailItems.find(item => item.id === id);

  if (!currentService) {
    return notFound();
  }

  // Update breadcrumb title dynamically
  const breadcrumb = commonData?.serviceDetailBreadcrumb 
    ? { 
        ...commonData.serviceDetailBreadcrumb, 
        title: currentService.title,
        paths: commonData.serviceDetailBreadcrumb.paths.map((path, idx, arr) => 
          idx === arr.length - 1 ? { ...path, label: currentService.title } : path
        )
      } 
    : undefined;

  return (
    <main className="bg-white min-h-screen font-primary">
      {/* 1. TopBar */}
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />

      {/* 2. Header */}
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />

      {/* 3. Breadcrumb */}
      <Breadcrumb data={breadcrumb} />
      
      {/* 4. Detail Content */}
      <ServiceDetailContent 
        data={currentService} 
        allItems={detailItems}
        sidebarData={sectionData.ServiceDetails.variants?.PawVitaServiceDetails1?.sidebar}
      />

      {/* Footer */}
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
