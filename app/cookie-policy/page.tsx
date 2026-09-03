import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { LegalContent } from '@/components/sections/LegalContent';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Cookie Policy - PawVita Pet Services',
  description: 'Understand how PawVita uses cookies on our website.',
};

export default function CookiePolicyPage() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;

  const legalData = sectionData.Legal?.variants?.CookiePolicy;

  return (
    <main className="bg-white min-h-screen font-primary">
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />
      
      {commonData?.cookiePolicyBreadcrumb && (
        <Breadcrumb data={commonData.cookiePolicyBreadcrumb} />
      )}
      
      <LegalContent data={legalData} />
      
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
