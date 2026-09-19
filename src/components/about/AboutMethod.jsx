import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { aboutMethodData } from '../../data/aboutData';

export default function AboutMethod() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section 
      id="method" 
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative bg-[#050505] text-[#F5F5F0] pt-20 pb-12 border-b border-white/10 overflow-hidden"
    >
      <meta itemProp="name" content="Lion Elite Tennis Academy Coaching Methodology & 4 Development Pillars Dubai" />
      <meta itemProp="description" content="Our 4-pillar tennis player development methodology in Dubai: Technique, Movement, Game Intelligence, and Mentality." />
      <meta itemProp="numberOfItems" content={aboutMethodData.pillars.length} />

      {/* Background Court Grid Geometry */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />
      
      {/* Subdued Watermark Coordinates */}
      <div className="absolute top-12 right-8 font-mono text-[9px] text-white/20 tracking-widest uppercase hidden lg:block">
        METHODOLOGICAL BLUEPRINT // 4 PILLARS DUBAI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
              {aboutMethodData.sectionNumber}
            </span>
            <span className="h-[1px] w-6 bg-white/20" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[#B9B9B9] uppercase">
              {aboutMethodData.sectionLabel}
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.92] uppercase text-white mb-6"
          >
            THE WORK <br />
            BEHIND <br />
            <span className="text-[#8CE600]">THE GAME.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-[#B9B9B9] max-w-xl font-normal"
          >
            {aboutMethodData.supportingLine}
          </motion.p>
        </div>

        {/* 4 Stacked Architectural Bands (Editorial Index System) */}
        <div className="border-t border-white/15">
          {aboutMethodData.pillars.map((pillar, index) => {
            const isActive = activePillar === index;

            return (
              <div 
                key={pillar.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                onMouseEnter={() => setActivePillar(index)}
                onClick={() => setActivePillar(index === activePillar ? -1 : index)}
                className="group relative border-b border-white/15 transition-colors duration-300 cursor-pointer overflow-hidden"
              >
                <meta itemProp="position" content={index + 1} />
                <meta itemProp="name" content={pillar.title} />
                <meta itemProp="description" content={pillar.description} />

                {/* Horizontal Progress Line on Activation */}
                <motion.div 
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-[#8CE600] origin-left z-20"
                />

                {/* Primary Row Content */}
                <div className={`py-8 sm:py-10 transition-colors duration-300 ${
                  isActive ? "bg-[#151515]" : "hover:bg-[#0c0c0c]"
                }`}>
                  <div className="px-4 sm:px-6 lg:px-8">
                    
                    {/* Top Row: Number, Title, Indicator */}
                    <div className="flex items-baseline justify-between gap-6">
                      <div className="flex items-baseline gap-6 sm:gap-12">
                        {/* Number Changes to Lion Green when Active */}
                        <span className={`font-mono text-2xl sm:text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                          isActive ? "text-[#8CE600]" : "text-white/30 group-hover:text-white/60"
                        }`}>
                          {pillar.number}
                        </span>

                        {/* Title */}
                        <h3 className={`font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}>
                          {pillar.displayTitle || pillar.title}
                        </h3>
                      </div>

                      {/* Desktop Expand cue / Mobile Toggle Indicator */}
                      <div className="flex items-center gap-3">
                        <span className="hidden md:inline font-mono text-[10px] text-white/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          {isActive ? "ACTIVE PILLAR" : "EXPLORE"}
                        </span>
                        <div className={`p-1.5 transition-colors ${
                          isActive ? "text-[#8CE600]" : "text-white/40"
                        }`}>
                          {isActive ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Editorial Tray */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 sm:pt-10 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-white/10 mt-6">
                            
                            {/* Narrow Documentary Photograph */}
                            <div className="lg:col-span-4 relative overflow-hidden bg-neutral-900 border border-white/20 aspect-[16/9] lg:aspect-[4/3]">
                              <img
                                src={pillar.image}
                                alt={pillar.imageAlt}
                                itemProp="image"
                                width={600}
                                height={450}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale-[20%] contrast-110"
                              />
                              <div className="absolute top-2 left-2 bg-[#050505]/80 font-mono text-[9px] text-[#8CE600] px-2 py-0.5 uppercase tracking-wider">
                                {pillar.number} // LIVE DRILL DUBAI
                              </div>
                            </div>

                            {/* Description & Technical Breakdown */}
                            <div className="lg:col-span-8 space-y-4">
                              <p className="font-sans text-xl sm:text-2xl text-white font-normal leading-relaxed">
                                {pillar.description}
                              </p>

                              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 font-mono text-xs text-[#B9B9B9]">
                                <span className="text-[#8CE600] font-bold tracking-widest uppercase">
                                  TACTICAL FOCUS:
                                </span>
                                <span className="text-white/80">
                                  {pillar.technicalDetails}
                                </span>
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Technical Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-white/40 tracking-wider">
          <span>PILLARS INTEGRATED ACROSS ALL JUNIOR & ADULT CURRICULUMS IN DUBAI</span>
          <span className="text-[#8CE600]">SYSTEMATIC REPETITION // CONTROLLED PRESSURE</span>
        </div>

      </div>
    </section>
  );
}
