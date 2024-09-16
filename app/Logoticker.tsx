import React from 'react';
import ClientCarousel from './ClientCarousel';

const Logoticker = () => {
  return (
    <div className="relative flex items-center justify-center w-full overflow-clip">
      {/* Client carousel */}
      <div className="relative z-10">
        <ClientCarousel />
      </div>

      {/* Left gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-white to-transparent via-transparent z-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to right, white 50%, transparent 70%)' }}>
      </div>
      
      {/* Right gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white to-transparent via-transparent z-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to left, white 50%, transparent 70%)' }}>
      </div>
    </div>
  );
};

export default Logoticker;
