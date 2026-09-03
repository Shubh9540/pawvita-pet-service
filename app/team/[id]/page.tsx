import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const teamDetails = templateData?.categories?.PawVita?.sections?.TeamDetails?.variants?.PawVitaTeamDetails1?.items;
  
  const member = teamDetails?.find((item) => item.id === id);
  
  if (!member) {
    return {
      title: 'Member Not Found',
    };
  }

  return {
    title: `${member.name} - ${member.role} | PawVita Pet Services`,
    description: member.about?.description?.[0] || `${member.name} is a ${member.role} at PawVita.`,
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const commonData = templateData?.common;
  const sections = templateData?.categories?.PawVita?.sections;

  if (!sections) return <div className="min-h-screen flex items-center justify-center">{commonData?.globalUI?.loading || 'Loading...'}</div>;

  const teamDetailsData = sections.TeamDetails?.variants?.PawVitaTeamDetails1?.items;
  const currentMember = teamDetailsData?.find((item) => item.id === id);

  if (!currentMember) {
    notFound();
  }

  // Use the member's name in the breadcrumb if available
  const breadcrumbData = commonData?.teamDetailBreadcrumb ? {
    ...commonData.teamDetailBreadcrumb,
    paths: [
      ...commonData.teamDetailBreadcrumb.paths,
    ],
  } : undefined;

  if (breadcrumbData) {
    breadcrumbData.paths[breadcrumbData.paths.length - 1] = {
      label: currentMember.name
    };
  }

  return (
    <main className="bg-white">
      {/* Navigation */}
      <TopBar data={sections.TopBar?.variants.PawVitaTopBar1} />
      <Header data={sections.Header?.variants.PawVitaHeader1} />

      {/* Breadcrumb */}
      {breadcrumbData && (
        <Breadcrumb data={breadcrumbData} />
      )}

      {/* Main Content */}
      <TeamDetailContent data={currentMember} />

      {/* Footer */}
      <Footer data={sections.Footer?.variants.PawVitaFooter1} />
    </main>
  );
}
