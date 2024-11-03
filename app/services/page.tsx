'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Footer from '../Footer';
import ContactSection from '../ContactSection';
import SerHero from './SerHero';

// Dynamically import SerTabs
const SerTabs = dynamic(() => import('./SerTabs'), { ssr: false });

const Page = () => {
  const [tabId, setTabId] = useState<string>('software-development');

  useEffect(() => {
    // Function to update tabId from URL query string
    const updateTabFromURL = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get('tab');
      if (tab) {
        setTabId(tab); // Update tabId with the new query param
      }
    };

    // Initially set the tabId from the URL when the page loads
    updateTabFromURL();

    // Listen for URL changes (when history changes, including tab clicks)
    window.addEventListener('popstate', updateTabFromURL);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('popstate', updateTabFromURL);
    };
  }, []);

  useEffect(() => {
    // Listen for manual tab changes (when clicking links that update the URL)
    const handleTabChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const tab = searchParams.get('tab');
      if (tab && tab !== tabId) {
        setTabId(tab); // Ensure tabId state updates if different
      }
    };

    // Trigger handleTabChange on URL change
    window.addEventListener('popstate', handleTabChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('popstate', handleTabChange);
    };
  }, [tabId]);

  return (
    <div>
      <Header />
      <SerHero />
      {/* Pass the current tabId to SerTabs */}
      <SerTabs tabId={tabId} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
