'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import ContactSection from '../ContactSection';
import SerHero from './SerHero';

// Dynamically import SerTabs to prevent it from being rendered on the server
const SerTabs = dynamic(() => import('./SerTabs'), { ssr: false });

const Page = () => {
  const [tabId, setTabId] = useState<string>('software-development');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tab = searchParams.get('tab');
    if (tab) {
      setTabId(tab);
    }
  }, []);

  return (
    <div>
      <Header />
      <SerHero />
      {/* Render SerTabs dynamically to ensure client-side rendering */}
      <SerTabs tabId={tabId} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
