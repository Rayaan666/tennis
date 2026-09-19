import React from 'react';
import { motion } from 'framer-motion';
import { aboutStandardData } from '../../data/aboutData';

export default function AboutTheStandard() {
  return (
    <section 
      id="the-standard" 
      className="relative bg-[#050505] text-[#F0F4F8] py-10 sm:py-12 lg:py-14 border-b border-white/10 overflow-hidden select-none"
    >
      {/* Abstract Tennis Measurements & Court Coordinates Watermark Sequence at Low Opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex flex-col justify-around opacity-[0.04]">
        {aboutStandardData.courtCoordinates.map((coord, idx) => (
          <div 
            key={idx} 
            className="font-mono text-3xl sm:text-5xl lg:text-7xl font-black whitespace-nowrap tracking-tighter text-white"
          >
            {coord} • {coord} • {coord}
          </div>
        ))}
      </div>

      {/* Subtle Court Line Hairlines */}
      <div className="absolute top-0 left-1/3 bottom-0 w-[1px] bg-white/5 pointer-events-none" />
      <div className="absolute top-0 right-1/3 bottom-0 w-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Tiny Archival Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
            {aboutStandardData.sectionNumber}
          </span>
          <span className="h-[1px] w-6 bg-white/20" />
          <span className="font-mono text-xs font-semibold tracking-wider text-white/60 uppercase">
            {aboutStandardData.sectionLabel}
          </span>
        </motion.div>

        {/* Massive Typographic Declaration */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto mb-10"
        >
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white uppercase">
            YOU DON'T <br />
            BECOME BETTER <br />
            BY ACCIDENT.
          </h2>

          <div className="mt-4 sm:mt-6">
            <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white uppercase">
              YOU{' '}
              <span className="text-[#8CE600] underline decoration-[#8CE600] decoration-4 sm:decoration-8 underline-offset-8">
                BUILD IT.
              </span>
            </span>
          </div>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-sans text-lg sm:text-2xl text-[#B9B9B9] max-w-2xl mx-auto font-normal leading-relaxed mb-12"
        >
          {aboutStandardData.supportingCopy}
        </motion.p>

        {/* Fine Editorial Notation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="inline-block font-mono text-[10px] text-white/40 tracking-widest uppercase border-b border-white/20 pb-1"
        >
          DISCIPLINE • PROGRESSION • ACCOUNTABILITY // DUBAI, UAE
        </motion.div>

      </div>
    </section>
  );
}
