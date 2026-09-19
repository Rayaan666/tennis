import React from 'react';
import { motion } from 'framer-motion';
import { aboutNumbersData } from '../../data/aboutData';

export default function AboutNumbers() {
  return (
    <section 
      id="academy-numbers" 
      className="relative bg-[#050505] text-[#F0F4F8] py-28 sm:py-36 border-b border-white/10 overflow-hidden"
    >
      {/* Background Court Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

      {/* Archival Reference Stamp */}
      <div className="absolute top-10 left-10 font-mono text-[9px] text-white/30 tracking-widest uppercase pointer-events-none select-none">
        METRIC DOSSIER // OFFICIAL ACADEMY ARCHIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
              METRICS
            </span>
            <span className="h-[1px] w-6 bg-white/20" />
            <span className="font-mono text-xs font-semibold tracking-wider text-white/60 uppercase">
              LION ELITE IN NUMBERS
            </span>
          </motion.div>

          <h2 className="sr-only">Lion Elite Tennis Academy in Numbers</h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs text-white/60 uppercase tracking-wider max-w-xl"
          >
            DOCUMENTED REPUTATION BUILT ON COURT RESULTS, DEDICATED COACHING FACULTY AND EXPEDIENT PLAYER ADVANCEMENT IN DUBAI.
          </motion.p>
        </div>

        {/* Minimal Statistics Grid with Generous Whitespace */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {aboutNumbersData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between pb-8 group"
            >
              <div>
                {/* Huge Minimalist Placeholder Number */}
                <div className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-none mb-4 group-hover:text-[#8CE600] transition-colors">
                  {stat.value}
                </div>

                {/* Stat Label */}
                <div className="font-mono text-xs font-bold tracking-widest text-[#8CE600] uppercase mb-2">
                  {stat.label}
                </div>

                {/* Contextual Subtext */}
                <p className="font-sans text-xs text-[#B9B9B9] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              {/* Thin Baseline-Style Rule Underneath */}
              <div className="w-full h-[1px] bg-white/15 mt-8 group-hover:bg-[#8CE600] group-hover:h-[2px] transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Verified Data Note */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[9px] text-white/40 uppercase tracking-wider">
          <span>SOURCE: LION ELITE PERFORMANCE AUDIT // UPDATED ANNUALLY</span>
          <span className="text-[#8CE600]">LOCATION: JUMEIRAH & DUBAI SPORTS CITY</span>
        </div>

      </div>
    </section>
  );
}
