import React from 'react';
import { motion } from 'framer-motion';
import { aboutContactSheetFrames } from '../../data/aboutData';

export default function AboutBetweenThePoints() {
  return (
    <section 
      id="between-the-points" 
      itemScope
      itemType="https://schema.org/ImageGallery"
      className="relative bg-[#050505] text-[#F0F4F8] pt-6 sm:pt-8 pb-10 sm:pb-12 border-b border-white/10 overflow-hidden"
    >
      <meta itemProp="name" content="Lion Elite Tennis Academy Behind-the-Scenes Training Archive Dubai" />
      <meta itemProp="description" content="Visual contact sheet archive capturing tennis micro-routines, biomechanics, baseline footwork, and coaching debriefs in Dubai." />

      {/* Background Architectural Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

      {/* Editorial Watermark Baseline Stamp */}
      <div className="absolute top-10 right-10 font-mono text-[9px] text-white/20 uppercase tracking-widest pointer-events-none select-none hidden md:block">
        CONTACT STRIP ARCHIVE // TENNIS TRAINING DUBAI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
              03
            </span>
            <span className="h-[1px] w-6 bg-white/20" />
            <span className="font-mono text-xs font-semibold tracking-wider text-white/60 uppercase">
              THE DETAILS // TENNIS ACADEMY TRAINING ARCHIVE DUBAI
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white uppercase mb-6"
          >
            THE GAME IS BUILT <br />
            <span className="text-[#8CE600]">BETWEEN THE POINTS.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-[#B9B9B9] max-w-xl font-normal leading-relaxed"
          >
            Match outcomes aren't decided only by ball strikes. They are forged in the quiet micro-routines, string adjustments, recovery mechanics, and tactical focus observed on our tennis courts in Dubai.
          </motion.p>
        </div>

        {/* Archival 35mm Film Strip / Contact Sheet Grid */}
        <div className="bg-[#111111] p-3 sm:p-6 border border-white/20 shadow-2xl">
          
          {/* Top Film Sprocket Border Bar */}
          <div className="flex items-center justify-between font-mono text-[9px] text-[#B9B9B9] px-2 py-2 border-b border-white/10 mb-4 uppercase">
            <div className="flex items-center gap-4">
              <span className="text-[#8CE600] font-bold">CONTACT DOSSIER // DUBAI TENNIS ACADEMY</span>
              <span className="hidden sm:inline">DEVELOPER: LION ELITE ACADEMY DUBAI</span>
            </div>
            <span>ROLL: LE-2026-B</span>
          </div>

          {/* 8 Film Frames Array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {aboutContactSheetFrames.map((frame, idx) => (
              <motion.div
                key={frame.frameNumber}
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#050505] border border-white/10 p-2.5 flex flex-col justify-between group hover:border-[#8CE600]/60 transition-colors"
              >
                <meta itemProp="contentUrl" content={frame.image} />
                <meta itemProp="name" content={frame.archivalTag} />
                <meta itemProp="caption" content={frame.caption} />
                <meta itemProp="description" content={frame.alt} />

                {/* Sprocket / Frame Reference Marker */}
                <div className="flex items-center justify-between font-mono text-[8px] text-white/50 mb-2 uppercase">
                  <span>{frame.frameNumber}</span>
                  <span className="text-[#8CE600]">{frame.archivalTag}</span>
                </div>

                {/* Film Image with Precise Sharp Crop */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 mb-2.5 border border-white/10">
                  <img
                    src={frame.image}
                    alt={frame.alt}
                    width={500}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-[#8CE600]" />
                </div>

                {/* Archival Photographic Caption */}
                <p className="font-mono text-[10px] sm:text-[11px] text-[#B9B9B9] leading-snug line-clamp-2">
                  {frame.caption}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Film Strip Legend */}
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[8px] sm:text-[9px] text-white/40 uppercase">
            <span>PRINTED PROOF SHEET // ARCHIVAL DOCUMENTATION DUBAI</span>
            <span className="text-[#8CE600]">CONTACT NEGATIVES STORED AT LION ELITE PERFORMANCE LAB DUBAI</span>
          </div>

        </div>

      </div>
    </section>
  );
}
