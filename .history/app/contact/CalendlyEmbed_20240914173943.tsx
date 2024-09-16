"use client";

import { useEffect } from 'react';

const CalendlyEmbed: React.FC = () => {
  useEffect(() => {
    // Load the Calendly script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/nexusmindstech-info/project-onboarding?hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
};

export default CalendlyEmbed;
