'use client';

import React, { useEffect, useState, Suspense } from 'react';
import SerTabs from './SerTabs';
import { useSearchParams } from 'next/navigation';
import Header from '../Header';
import Footer from '../Footer';
import ContactSection from '../ContactSection';
import SerHero from './SerHero';

const Page = () => {
  const searchParams = useSearchParams();
  const [tabId, setTabId] = useState<string>('software-development');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) {
      setTabId(tab);
    }
  }, [searchParams]);

  return (
    <div>
      <Header />
      <SerHero />
      <Suspense fallback={<div>Loading tabs...</div>}>
        <SerTabs tabId={tabId} />
      </Suspense>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
