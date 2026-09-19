import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { aboutDevelopmentStages } from '../../data/aboutData';

export default function AboutDevelopmentProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      id="development-process" 
      ref={containerRef}
      itemScope
      itemType="https://schema.org/HowTo"
      className="relative bg-[#050505] text-[#F0F4F8] pt-8 sm:pt-12 pb-6 sm:pb-8 border-b border-white/10 overflow-hidden"
    >
      <meta itemProp="name" content="Lion Elite Tennis Academy Player Development Process Dubai" />
      <meta itemProp="description" content="Structured 6-stage tennis player development process in Dubai: Observe, Understand, Build, Test, Refine, and Repeat." />

      {/* Background Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

      {/* Editorial Court Watermark */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 font-display font-black text-[18vw] text-white/[0.02] tracking-tighter uppercase select-none pointer-events-none">
        PROCESS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
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
              DEVELOPMENT // PLAYER DEVELOPMENT PROCESS DUBAI
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.92] uppercase text-white mb-6"
          >
            PROGRESS <br />
            HAS A <span className="text-[#8CE600]">PROCESS.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-[#B9B9B9] max-w-xl font-normal"
          >
            Our systematic 6-stage tennis player development process in Dubai transforms technique, athletic footwork, and competitive tactical decision-making into instinctive habits.
          </motion.p>
        </div>

        {/* Diagonal / Step Architectural Progression Path */}
        <div className="relative">
          
          {/* Central Connecting Thin Technical Line (Desktop Progressive Draw) */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 w-[1px] bg-white/15 hidden md:block">
            <motion.div 
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-[#8CE600]"
            />
          </div>

          {/* Six Sequential Stages */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {aboutDevelopmentStages.map((stage, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={stage.step}
                  itemProp="step"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-12"
                >
                  <meta itemProp="position" content={idx + 1} />
                  <meta itemProp="name" content={stage.fullTitle || stage.label} />

                  {/* Left Column Content */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:text-right" : "lg:order-3 lg:text-left"}`}>
                    
                    {/* Step Archival Identification */}
                    <div className={`flex items-center gap-2 mb-2 font-mono text-xs text-[#8CE600] font-bold tracking-widest uppercase ${
                      isEven ? "lg:justify-end" : "lg:justify-start"
                    }`}>
                      <span>STAGE // {stage.step}</span>
                    </div>

                    {/* Stage Name */}
                    <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase mb-3">
                      {stage.label}
                    </h3>

                    {/* Core Directive */}
                    <p itemProp="text" className="font-sans text-base sm:text-lg font-medium text-white/90 mb-2">
                      {stage.description}
                    </p>

                    {/* Fine Subtext Annotation */}
                    <p className="font-mono text-xs text-[#B9B9B9] max-w-md inline-block leading-relaxed">
                      {stage.subtext}
                    </p>
                  </div>

                  {/* Center Node (Coordinate Crosshair) */}
                  <div className="lg:col-span-2 flex justify-start sm:justify-center items-center relative lg:order-2">
                    <div className="w-9 h-9 bg-[#151515] border border-white/30 flex items-center justify-center font-mono text-xs font-bold text-[#8CE600] relative z-10 shadow-lg">
                      {stage.step}
                      {/* Technical corner ticks */}
                      <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#8CE600]" />
                    </div>
                  </div>

                  {/* Opposite Column Spacer */}
                  <div className={`hidden lg:block lg:col-span-5 ${isEven ? "lg:order-3" : "lg:order-1 lg:text-right"}`}>
                    <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase py-2 px-3 border border-white/10 inline-block bg-[#111]">
                      {isEven ? `VECTOR ${stage.step} // FEEDBACK LOOP DUBAI` : `SYSTEM PHASE ${stage.step} // METRIC EVALUATION`}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Loop Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#8CE600]" />
            <span className="font-bold uppercase tracking-wider text-white">
              CONTINUOUS DEVELOPMENT CYCLE // DUBAI TENNIS ACADEMY
            </span>
          </div>
          <div className="tracking-widest uppercase text-[11px] text-[#8CE600]">
            OBSERVE → UNDERSTAND → BUILD → TEST → REFINE → REPEAT
          </div>
        </motion.div>

      </div>
    </section>
  );
}
