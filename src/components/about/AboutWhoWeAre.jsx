import React from 'react';
import { motion } from 'framer-motion';
import { aboutWhoWeAreData } from '../../data/aboutData';

export default function AboutWhoWeAre() {
  return (
    <section 
      id="who-we-are" 
      aria-label="Who We Are - Lion Elite Tennis Academy Dubai"
      itemScope 
      itemType="https://schema.org/AboutPage"
      className="relative bg-[#050505] text-[#F0F4F8] pt-8 sm:pt-12 pb-0 overflow-hidden border-b border-white/10"
    >
      {/* Background Architectural Markings */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/5 pointer-events-none" />
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index & SEO Label Marker */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
            {aboutWhoWeAreData.sectionNumber}
          </span>
          <span className="h-[1px] w-6 bg-white/20" />
          <span className="font-mono text-xs font-semibold tracking-wider text-white/60 uppercase" itemProp="genre">
            {aboutWhoWeAreData.sectionLabel}
          </span>
        </motion.div>

        {/* Oversized Full-Width Editorial Headline (H2) Optimized for Search Intent */}
        <header className="max-w-5xl mb-12 lg:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-white uppercase"
            itemProp="name"
          >
            <span className="block font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8CE600] uppercase mb-3">
              {aboutWhoWeAreData.subHeadline}
            </span>
            <span>{aboutWhoWeAreData.headlineLine1}</span> <br />
            <span className="text-[#8CE600]">{aboutWhoWeAreData.headlineLine2}</span>
          </motion.h2>
        </header>

        {/* Editorial Two-Column Text Composition with Thin Vertical Green Line */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 items-start">
          
          {/* Column 1: Primary Keyword-Rich Paragraph (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
            itemProp="description"
          >
            <p className="font-sans text-xl sm:text-2xl text-white leading-relaxed font-normal">
              {aboutWhoWeAreData.primaryParagraph}
            </p>
            
            <div className="flex items-center gap-3 pt-2 font-mono text-xs text-[#8CE600] tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#8CE600]" />
              <span>{aboutWhoWeAreData.statsAnnotation}</span>
            </div>

            {/* Structured Highlight Feature Pills for Search Crawler Keywords */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-[11px] text-white/70">
              {aboutWhoWeAreData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 border border-white/10">
                  <span className="w-1.5 h-1.5 bg-[#8CE600]" />
                  <span className="tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Secondary Copy + Thin Vertical Green Line + Callout (5 Cols) */}
          <motion.aside 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between border-l-2 border-[#8CE600] pl-6 lg:pl-8 space-y-8"
          >
            <p className="font-sans text-base sm:text-lg text-[#B9B9B9] leading-relaxed">
              {aboutWhoWeAreData.secondaryParagraph}
            </p>

            {/* Side Editorial Callout Annotation */}
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[11px] text-[#8CE600] tracking-widest block uppercase mb-1">
                ACADEMY PRINCIPLE // DUBAI
              </span>
              <div className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-snug uppercase">
                {aboutWhoWeAreData.calloutBadge.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          </motion.aside>

        </article>

        {/* Oversized Cropped Tennis Image at Bottom Edge Transitioning into Section 03 */}
        <motion.figure 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden mt-6 m-0"
        >
          {/* Subtle Technical Frame Header */}
          <div className="flex items-center justify-between font-mono text-[9px] text-white/50 px-2 py-1.5 border-t border-x border-white/10 bg-[#151515]">
            <span>TRANSITION SEQUENCE // REFINEMENT IN MOTION</span>
            <span>DUBAI PRACTICE COURTS // 08:30 GST</span>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-[#050505]">
            <img
              src={aboutWhoWeAreData.transitionImage}
              alt={aboutWhoWeAreData.transitionImageAlt}
              title={aboutWhoWeAreData.transitionImageAlt}
              width={1600}
              height={700}
              loading="lazy"
              decoding="async"
              itemProp="image"
              className="w-full h-full object-cover object-center contrast-[1.1] scale-105 hover:scale-100 transition-transform duration-1000"
            />
            {/* Seamless gradient fade directly into #050505 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
            <figcaption className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[#F5F5F0] font-mono text-xs z-10">
              <span className="text-[#8CE600] tracking-widest uppercase text-[10px]">
                NEXT: 02 // OUR METHOD
              </span>
              <span className="text-[#B9B9B9] text-[10px] hidden sm:inline">
                SCROLL TO DECONSTRUCT THE ARCHITECTURE
              </span>
            </figcaption>
          </div>
        </motion.figure>

      </div>
    </section>
  );
}
