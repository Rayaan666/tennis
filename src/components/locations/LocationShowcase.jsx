import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, MessageSquare } from 'lucide-react';

export default function LocationShowcase({ location, onOpenBooking }) {
  const handleEnquire = () => {
    if (onOpenBooking) {
      onOpenBooking("junior-dev");
    } else {
      window.open(location.whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="our-location" 
      className="relative w-full bg-[#050505] text-[#F5F5F0] pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 overflow-hidden border-b border-white/10"
      aria-label="Lion Elite Training Location Showcase"
    >
      {/* Background Architectural Geometry */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-1/3 w-80 h-80 rounded-full bg-[#8CE600]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-2 h-2 bg-[#8CE600]" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8CE600]">
              01 / OUR TRAINING LOCATION
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none"
          >
            FIND US<br />
            <span className="text-[#8CE600]">IN AL JADDAF.</span>
          </motion.h2>
        </div>

        {/* Large Location Showcase: Left Photography + Right Architectural Information Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT: Dominant Landscape Photograph showing tennis facilities */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl group">
              
              <img
                src={location.facilityImage}
                alt={location.altTextFacility}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Facility Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2.5 px-3 py-1.5 bg-[#050505]/85 backdrop-blur-md border border-white/20">
                <Compass className="w-3.5 h-3.5 text-[#8CE600]" />
                <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-white">
                  VENUE FACILITY OVERVIEW
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
                <div className="p-4 sm:p-5 bg-[#050505]/90 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] text-[#8CE600] uppercase tracking-widest block mb-0.5">
                      OFFICIAL TRAINING HOME
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                      {location.venue}
                    </h3>
                  </div>
                  <div className="font-mono text-xs text-neutral-400 sm:text-right shrink-0">
                    <span className="text-white block">{location.area}</span>
                    <span>{location.coordinates.display}</span>
                  </div>
                </div>
              </div>

              {/* Court Corner Markers */}
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#8CE600]" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#8CE600]" />
            </div>
          </motion.div>

          {/* RIGHT: Clean Architectural Information Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#101010] border border-white/15 relative"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8CE600] via-transparent to-transparent" />

            <div>
              {/* LOCATION 01 Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8CE600]" />
                  <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
                    LOCATION {location.number}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest border border-white/15 px-2 py-0.5">
                  {location.badge}
                </span>
              </div>

              {/* Academy Name */}
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-8">
                {location.name}
              </h3>

              {/* Architectural Venue & Address Specification */}
              <div className="space-y-6 mb-8">
                
                {/* VENUE */}
                <div className="border-l-2 border-[#8CE600] pl-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#8CE600] block mb-1">
                    VENUE:
                  </span>
                  <div className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                    {location.venue}
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="border-l-2 border-neutral-700 pl-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                    ADDRESS:
                  </span>
                  <address className="font-sans text-sm sm:text-base text-neutral-300 not-italic leading-relaxed">
                    Dubai Healthcare City, Phase 2,<br />
                    Al Jaddaf, Dubai,<br />
                    United Arab Emirates.
                  </address>
                </div>

              </div>

              {/* Supporting Copy */}
              <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed mb-8 pt-4 border-t border-white/10">
                {location.description}
              </p>

              {/* Display Metadata Badges */}
              <div className="grid grid-cols-3 gap-2.5 mb-10 pt-2">
                {location.displayTags.map((tag) => (
                  <div key={tag.label} className="p-2.5 bg-[#171717] border border-white/10 text-center">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block mb-0.5">
                      {tag.label}
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white tracking-wider block">
                      {tag.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3.5 pt-4 border-t border-white/10">
              
              {/* PRIMARY CTA: GET DIRECTIONS → */}
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full flex items-center justify-between px-6 py-4 bg-[#8CE600] text-[#050505] font-display text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white active:scale-[0.99] shadow-lg"
              >
                <span>GET DIRECTIONS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black" />
              </a>

              {/* SECONDARY CTA: ENQUIRE ABOUT TRAINING → */}
              <button
                type="button"
                onClick={handleEnquire}
                className="group w-full flex items-center justify-between px-6 py-4 bg-transparent border border-white/20 text-white font-display text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:border-[#8CE600] hover:text-[#8CE600] hover:bg-white/[0.02] active:scale-[0.99]"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#8CE600]" />
                  <span>ENQUIRE ABOUT TRAINING</span>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
