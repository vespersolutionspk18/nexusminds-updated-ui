'use client';

import { usePathname } from 'next/navigation';
import SerTabs from '../SerTabs'; // Adjust the import path as needed

const ServicePage = () => {
  const pathname = usePathname();
  const tabId = pathname.split('/').pop();

  if (!tabId) {
    return null; // or a loading indicator
  }

  return <SerTabs tabId={tabId} />;
};

export default ServicePage;