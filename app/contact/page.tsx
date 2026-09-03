import { PawVitaTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Footer } from '@/components/common/Footer';
import { ContactUs } from '@/components/sections/ContactUs';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Contact Us - PawVita Pet Services',
  description: 'Get in touch with PawVita for any questions or to book an appointment.',
};

export default function ContactPage() {
  const templateData: PawVitaTemplateData = rawData as PawVitaTemplateData;
  const sectionData = templateData?.categories?.PawVita?.sections;
  const commonData = templateData?.common;
  
  if (!sectionData) return <div className="min-h-screen flex items-center justify-center">{templateData?.common?.globalUI?.loading || 'Loading...'}</div>;

  const contactData = sectionData.Contact?.variants?.PawVitaContact1;

  return (
    <main className="bg-white min-h-screen font-primary flex flex-col">
      <TopBar data={sectionData.TopBar?.variants?.PawVitaTopBar1} />
      <Header data={sectionData.Header?.variants?.PawVitaHeader1} />
      
      {commonData?.contactBreadcrumb && (
        <Breadcrumb data={commonData.contactBreadcrumb} />
      )}
      
      <div className="flex-grow">
        <ContactUs data={contactData} />
      </div>
      
      <Footer data={sectionData.Footer?.variants?.PawVitaFooter1} />
    </main>
  );
}
