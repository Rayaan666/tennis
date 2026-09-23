import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Navigation, Lock, Unlock } from 'lucide-react';

export default function LocationMap({ location }) {
  const [isInteractive, setIsInteractive] = useState(false);

  return (
    <section 
      id="locations-map" 
      className="relative w-full bg-[#050505] text-[#F5F5F0] pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 overflow-hidden border-b border-white/10"
      aria-label="Interactive Map to Lion Elite Tennis Academy"
    >
      {/* Background Court Grid Texture */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-2 h-2 bg-[#8CE600]" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#8CE600]">
                02 / FIND YOUR WAY
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none"
            >
              THE NEXT POINT<br />
              <span className="text-[#8CE600]">STARTS HERE.</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Mobile Interaction Toggle Button */}
            <button
              type="button"
              onClick={() => setIsInteractive(!isInteractive)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#121212] border border-white/20 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors lg:hidden"
              aria-label={isInteractive ? "Lock map scroll" : "Unlock map to interact"}
            >
              {isInteractive ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-[#8CE600]" />
                  <span>Map Active (Tap to Lock)</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Tap to Pan Map</span>
                </>
              )}
            </button>

            <a
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#8CE600] hover:text-white transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>DIRECT NAVIGATION LINK</span>
            </a>
          </motion.div>
        </div>

        {/* Large Interactive Map Container with Sharp Corners and Visual Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] bg-[#0c0c0c] border-2 border-white/15 overflow-hidden shadow-2xl"
        >
          {/* Real Google Maps Embed */}
          <iframe
            title="Lion Elite Tennis Academy Location Map - Swiss International Scientific School Dubai"
            src={location.embedMapUrl}
            width="100%"
            height="100%"
            className={`w-full h-full border-0 transition-opacity duration-300 filter contrast-[1.05] brightness-[0.92] ${
              isInteractive ? 'pointer-events-auto' : 'pointer-events-none lg:pointer-events-auto'
            }`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Desktop / Default Custom Lion Green Location Marker Anchor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              {/* Radar pulse rings */}
              <span className="absolute w-12 h-12 rounded-full bg-[#8CE600]/30 animate-ping pointer-events-none" />
              <span className="absolute w-7 h-7 rounded-full bg-[#8CE600]/50 pointer-events-none" />
              {/* Custom Lion Green pin badge */}
              <div className="relative w-8 h-8 rounded-full bg-[#8CE600] text-[#050505] flex items-center justify-center shadow-[0_0_20px_#8CE600] border-2 border-black">
                <MapPin className="w-4 h-4 text-black fill-black" />
              </div>
            </div>
            {/* Minimal coordinate label attached to pin */}
            <div className="mt-2 px-2.5 py-1 bg-[#050505]/90 backdrop-blur-md border border-[#8CE600] text-[10px] font-mono text-[#8CE600] font-bold tracking-wider uppercase whitespace-nowrap shadow-xl">
              LION ELITE // AL JADDAF
            </div>
          </div>

          {/* Overlay: Compact Black Information Panel */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 max-w-[340px] sm:max-w-[380px] w-full">
            <div className="p-5 sm:p-6 bg-[#050505]/95 backdrop-blur-md border border-white/20 shadow-2xl">
              
              {/* Top Accent Strip */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8CE600]" />
                  <span className="font-mono text-[10px] font-bold text-[#8CE600] tracking-widest uppercase">
                    ACADEMY VENUE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">
                  DUBAI, UAE
                </span>
              </div>

              {/* Title & Venue */}
              <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight leading-tight mb-2">
                {location.name}
              </h3>

              <div className="space-y-1 mb-5">
                <div className="font-display text-sm font-semibold text-neutral-200 uppercase">
                  {location.venue}
                </div>
                <div className="font-sans text-xs text-neutral-400">
                  {location.shortAddress}
                </div>
              </div>

              {/* CTA: OPEN IN GOOGLE MAPS ↗ */}
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full inline-flex items-center justify-between px-4 py-3 bg-[#8CE600] text-[#050505] font-display text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white active:scale-[0.98] shadow-md"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-black" />
              </a>

            </div>
          </div>

          {/* Sharp Architectural Corner Brackets on the Map Frame */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#8CE600] pointer-events-none z-20" />
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#8CE600] pointer-events-none z-20" />
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#8CE600] pointer-events-none z-20" />
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#8CE600] pointer-events-none z-20" />

          {/* Subtle Mobile Scroll Notification Overlay if not interactive */}
          {!isInteractive && (
            <div className="absolute inset-x-0 bottom-0 py-2 bg-black/75 backdrop-blur-sm text-center font-mono text-[10px] text-neutral-400 lg:hidden pointer-events-none z-10 border-t border-white/10">
              Page scroll protected • Tap "Tap to Pan Map" above to interact
            </div>
          )}
        </motion.div>

        {/* Map Bottom Metadata Grid */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] text-neutral-500 uppercase tracking-widest px-1">
          <div>
            COORDINATES: <span className="text-white">{location.coordinates.display}</span>
          </div>
          <div>
            OFFICIAL MAP LINK: <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#8CE600] hover:underline">MAPS.APP.GOO.GL</a>
          </div>
        </div>

      </div>
    </section>
  );
}
