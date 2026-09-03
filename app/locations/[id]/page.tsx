import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { LocationDetailContent } from '@/components/sections/LocationDetailContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const locationDetails = templateData?.categories?.PawVita?.sections?.LocationDetails?.variants?.PawVitaLocationDetails1?.items;
  
  const location = locationDetails?.find((item) => item.id === id);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `${location.title} | PawVita Pet Services`,
    description: location.description?.[0] || `Pet Care Services in ${location.title}.`,
  };
}

export default async function LocationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const commonData = templateData?.common;
  const sections = templateData?.categories?.PawVita?.sections;

  if (!sections) return <div className="min-h-screen flex items-center justify-center">{commonData?.globalUI?.loading || 'Loading...'}</div>;

  const locationDetailsData = sections.LocationDetails?.variants?.PawVitaLocationDetails1?.items;
  const allLocations = sections.ServiceAreas?.variants?.PawVitaServiceAreas1?.locations;
  const currentLocation = locationDetailsData?.find((item) => item.id === id);

  if (!currentLocation) {
    notFound();
  }

  // Use the location name in the breadcrumb if available
  const breadcrumbData = commonData?.locationDetailBreadcrumb ? {
    ...commonData.locationDetailBreadcrumb,
    paths: [
      ...commonData.locationDetailBreadcrumb.paths,
    ],
  } : undefined;

  if (breadcrumbData) {
    breadcrumbData.paths[breadcrumbData.paths.length - 1] = {
      label: currentLocation.title,
    };
  }

  return (
    <main className="bg-white min-h-screen font-primary">
      <TopBar data={sections.TopBar?.variants?.PawVitaTopBar1} />
      <Header data={sections.Header?.variants?.PawVitaHeader1} />
      
      {breadcrumbData && <Breadcrumb data={breadcrumbData} />}
      
      <LocationDetailContent 
        currentLocation={currentLocation} 
        allLocations={allLocations} 
      />
      
      <Footer data={sections.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
