import React from 'react';
import { motion } from 'framer-motion';
import { aboutManifestoValues } from '../../data/aboutData';

export default function AboutManifesto() {
  return (
    <section 
      id="values-manifesto" 
      className="relative bg-[#050505] text-[#F0F4F8] py-24 sm:py-32 lg:py-40 overflow-hidden select-none border-b border-white/10"
    >
      {/* Editorial Watermark Baseline Stamp */}
      <div className="absolute top-8 left-8 sm:left-12 flex items-center gap-3 font-mono text-[10px] text-[#8CE600] tracking-widest uppercase">
        <span className="w-2 h-2 bg-[#8CE600]" />
        <span>05 / WHAT DEFINES US</span>
        <span className="hidden sm:inline text-white/50">• ACADEMY MANIFESTO</span>
      </div>

      {/* Background Architectural Ruled Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '100% 120px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Semantic SEO Heading */}
        <div className="sr-only">
          <h2>What Defines Lion Elite</h2>
        </div>

        {/* Staggered Typographic Poster Array */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16 pt-8">
          {aboutManifestoValues.map((item, index) => {
            const isRightAligned = index % 2 !== 0;

            return (
              <motion.div
                key={item.word}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col ${
                  isRightAligned ? "items-start md:items-end md:text-right" : "items-start text-left"
                }`}
              >
                {/* Thin Editorial Reference Tag */}
                <div className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#8CE600] uppercase mb-1">
                  {item.tag}
                </div>

                {/* Massive Manifesto Word */}
                <div className="relative group">
                  <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.88] text-white uppercase transition-colors duration-300 block group-hover:text-[#8CE600]">
                    {item.word}
                  </span>

                  {/* Paired Editorial Definition */}
                  <div className={`mt-2 sm:mt-3 font-sans text-sm sm:text-lg font-semibold text-[#B9B9B9] tracking-wide max-w-lg ${
                    isRightAligned ? "md:ml-auto" : ""
                  }`}>
                    {item.definition}
                  </div>
                </div>

                {/* Subtle Horizontal Baseline Separator */}
                <div className="w-full max-w-xs sm:max-w-md h-[1px] bg-white/10 mt-6 group-hover:bg-[#8CE600]/40 transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* Footer Dossier Note */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          <span>NON-NEGOTIABLE CULTURAL PILLARS // EST. DUBAI</span>
          <span className="text-[#8CE600]">LION ELITE TENNIS ACADEMY MIDDLE EAST</span>
        </div>

      </div>
    </section>
  );
}
