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
    // Function to update the tabId from the URL query string
    const updateTabFromURL = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get('tab');
      if (tab) {
        setTabId(tab);  // Update tabId based on the URL
      }
    };

    // Update the tab on component mount
    updateTabFromURL();

    // Listen for changes in the URL (when the user clicks a different tab)
    window.addEventListener('popstate', updateTabFromURL);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', updateTabFromURL);
    };
  }, []);

  return (
    <div>
      <Header />
      <SerHero />
      {/* Render SerTabs dynamically with the current tabId */}
      <SerTabs tabId={tabId} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
