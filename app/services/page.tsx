'use client';

import React, { useEffect, useState } from 'react';
import SerTabs from './SerTabs';
import { useSearchParams } from 'next/navigation';
import Header from '../Header';
import Footer from '../Footer';
import ContactSection from '../ContactSection';
import SerHero from './SerHero';

const TabsWithSearchParams = () => {
  const searchParams = useSearchParams();
  const [tabId, setTabId] = useState<string>('software-development');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setTabId(tab);
    }
  }, [searchParams]);

  return <SerTabs tabId={tabId} />;
};

const Page = () => {
  return (
    <div>
      <Header />
      <SerHero />
      {/* Ensure the TabsWithSearchParams component uses the client-side rendering properly */}
      <TabsWithSearchParams />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
