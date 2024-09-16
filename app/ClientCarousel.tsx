import React from 'react';
import Marquee from 'react-fast-marquee';
import BrLogo from '@/public/assets/bluerangelogo.svg';
import EcMdCLogo from '@/public/assets/ecmdclogo.svg';
import EcLogo from '@/public/assets/ecpaklogo.svg';
import G1Logo from '@/public/assets/g1logo.svg';
import LeSLogo from '@/public/assets/leserenelogo.svg';
import MctexLogo from '@/public/assets/microtexlogo.svg';
import RmsLogo from '@/public/assets/rmslogo.svg';
import SarzLogo from '@/public/assets/sarzlogo.svg';
import V360Logo from '@/public/assets/v360logo.svg';
import VesperLogo from '@/public/assets/vesperlogo.svg';
import OsdLogo from '@/public/assets/osdcorplogo.svg';
import UnityLogo from '@/public/assets/unitylogo.svg';
import LevelsLogo from '@/public/assets/levelslogo.svg';
import LotusLogo from '@/public/assets/lotuslogo.svg';
import AceTekLogo from '@/public/assets/aceteklogo.svg';

const ClientCarousel = () => {
  const logoSize = { height: 40 };
  const logoStyle = { margin: '0 25px' };

  const logos = [
    <BrLogo key="br" {...logoSize} />,
    <EcMdCLogo key="ecmdc" {...logoSize} />,
    <EcLogo key="ec" {...logoSize} />,
    <G1Logo key="g1" {...logoSize} />,
    <LeSLogo key="les" {...logoSize} />,
    <MctexLogo key="mctex" {...logoSize} />,
    <RmsLogo key="rms" {...logoSize} />,
    <SarzLogo key="sarz" {...logoSize} />,
    <V360Logo key="v360" {...logoSize} />,
    <VesperLogo key="vesper" {...logoSize} />,
    <OsdLogo key="osd" {...logoSize} />,
    <UnityLogo key="unity" {...logoSize} />,
    <LevelsLogo key="levels" {...logoSize} />,
    <LotusLogo key="lotus" {...logoSize} />,
    <AceTekLogo key="acetek" {...logoSize} />,
  ];

  return (
    <div className="mb-10">
      <p className="text-lg text-center mt-20 mb-10">Trusted by our customers</p>
      <div className="relative z-10">
        {/* Left gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-white to-transparent via-transparent z-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to right, white 30%, transparent 70%)' }}>
      </div>
      
      {/* Right gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white to-transparent via-transparent z-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to left, white 30%, transparent 70%)' }}>
      </div>
    <div className="overflow-hidden opacity-75">
      <Marquee gradient={false} pauseOnHover={false} speed={50}>
        {logos.map((logo, index) => (
          <div key={index} style={logoStyle}>
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`repeat-${index}`} style={logoStyle}>
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`repeat2-${index}`} style={logoStyle}>
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
    </div>
    
    </div>
  );
};

export default ClientCarousel;