'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import ContactSection from '../ContactSection';
import SerHero from './SerHero';

// Dynamically import SerTabs to prevent server-side rendering
const SerTabs = dynamic(() => import('./SerTabs'), { ssr: false });

const Page = () => {
  const [tabId, setTabId] = useState<string>('software-development');

  useEffect(() => {
    // Function to get the tab from the URL query string
    const updateTabFromURL = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get('tab');
      if (tab) {
        setTabId(tab);  // Update tabId if it differs from the current one
      }
    };

    // Set tabId when the component mounts
    updateTabFromURL();

    // Listen for changes in the URL to update the tabId
    window.addEventListener('popstate', updateTabFromURL);

    // Clean up the event listener
    return () => {
      window.removeEventListener('popstate', updateTabFromURL);
    };
  }, [tabId]);  // This hook will re-run whenever tabId changes

  return (
    <div>
      <Header />
      <SerHero />
      {/* Pass the tabId to SerTabs */}
      <SerTabs tabId={tabId} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
