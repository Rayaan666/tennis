import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function LocationsHero({ location, onExploreClick }) {
  const handleScrollDown = (e) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      const target = document.getElementById('our-location');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="locations-hero" 
      className="relative w-full bg-[#050505] text-[#F5F5F0] pt-28 sm:pt-36 lg:pt-40 pb-4 sm:pb-6 lg:pb-8 overflow-hidden border-b border-white/10"
      aria-label="Lion Elite Tennis Locations Hero"
    >
      {/* Subtle Architectural Baseline Geometry Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-[1px] bg-white/[0.08]" />
        <div className="absolute right-8 lg:right-16 top-0 bottom-0 w-[1px] bg-white/[0.08]" />
        <div className="absolute top-28 left-0 right-0 h-[1px] bg-white/[0.06]" />
        <div className="absolute inset-0 court-grid-pattern opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Editorial Typography & Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2.5 h-2.5 bg-[#8CE600] inline-block border border-black/40" />
              <div className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8CE600]">
                LION ELITE / LOCATIONS <span className="text-neutral-500 mx-1.5">•</span> DUBAI, UNITED ARAB EMIRATES
              </div>
            </motion.div>

            {/* Exactly ONE H1 on the page */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.92] uppercase text-white mb-8"
            >
              YOUR COURT.<br />
              <span className="relative inline-block text-[#8CE600]">
                YOUR CITY.
                {/* Minimal green court baseline accent */}
                <span className="absolute -bottom-2 left-0 w-24 h-1.5 bg-[#8CE600]" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl mb-10"
            >
              Discover where the Lion Elite experience comes to life. Find our tennis training location in Dubai and take the first step towards your next session.
            </motion.p>

            {/* CTA: EXPLORE OUR LOCATION ↓ */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <a
                href="#our-location"
                onClick={handleScrollDown}
                className="group relative inline-flex items-center gap-3.5 px-7 py-4 bg-[#8CE600] text-[#050505] font-display text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-[#050505] shadow-lg active:scale-[0.98]"
              >
                <span>EXPLORE OUR LOCATION</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                {/* Court Corner Notch */}
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black" />
              </a>

              {/* Minimal coordinates quick badge */}
              <div className="hidden sm:flex flex-col font-mono text-[11px] text-neutral-400 pl-4 border-l border-white/15">
                <span className="font-semibold text-white">PRIMARY HUB</span>
                <span>{location.coordinates.display}</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Striking Asymmetric Photographic Composition */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Architectural Frame Offset Backdrop */}
              <div className="absolute -inset-3 sm:-inset-4 border-2 border-white/15 translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Outer Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border-2 border-white/20 shadow-2xl">
                <img
                  src={location.heroImage}
                  alt={location.altTextHero}
                  width={1200}
                  height={900}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Subtle daylight gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Overlay: Small Green Coordinate-Style Location Marker */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2.5 px-3.5 py-2 bg-[#050505]/90 backdrop-blur-md border border-[#8CE600]/40 shadow-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8CE600] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8CE600]" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#8CE600]">
                      {location.area} // {location.city}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] text-neutral-300">
                      {location.coordinates.display}
                    </span>
                  </div>
                </div>

                {/* Bottom Image Tag */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 px-3 py-1.5 bg-[#8CE600] text-[#050505] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow">
                  CHAMPIONSHIP COURTS
                </div>

                {/* Fine Court Lines Overlay Detail */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8CE600]" />
              </div>

              {/* Technical Court Metadata Footer Strip */}
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400 uppercase tracking-widest px-1">
                <span>SURFACE: HARDCOURT PRO</span>
                <span>ATMOSPHERE: NATURAL DAYLIGHT</span>
                <span>STATUS: ACTIVE TRAINING</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
