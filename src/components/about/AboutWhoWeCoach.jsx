import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { aboutWhoWeCoachCategories } from '../../data/aboutData';

export default function AboutWhoWeCoach({ onOpenBooking, onNavigate }) {
  const [hoveredCategory, setHoveredCategory] = useState(0);

  const handleProgramClick = (e, programId) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking(programId);
    } else if (onNavigate) {
      onNavigate('/#programs');
    } else {
      const el = document.querySelector('#programs');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="who-we-coach" 
      itemScope
      itemType="https://schema.org/ItemList"
      className="relative bg-[#050505] text-[#F5F5F0] pt-8 sm:pt-12 pb-6 sm:pb-8 border-b border-white/10 overflow-hidden"
    >
      <meta itemProp="name" content="Lion Elite Tennis Academy Coaching Tracks & Player Development Tiers Dubai" />
      <meta itemProp="description" content="Dedicated tennis coaching programs in Dubai for Juniors, Adults, and High-Performance Tournament Players." />
      <meta itemProp="numberOfItems" content={aboutWhoWeCoachCategories.length} />

      {/* Background Court Grid Geometry */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

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
              04
            </span>
            <span className="h-[1px] w-6 bg-white/20" />
            <span className="font-mono text-xs font-semibold tracking-wider text-[#B9B9B9] uppercase">
              EVERY STAGE // TENNIS PROGRAMS & PLAYER TIERS DUBAI
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.92] uppercase text-white mb-6"
          >
            YOUR GAME. <br />
            YOUR STAGE. <br />
            <span className="text-[#8CE600]">YOUR NEXT LEVEL.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-[#B9B9B9] max-w-xl font-normal"
          >
            Whether stepping onto the court for the very first rally or conditioning for regional ITF tournament points, our tennis coaching curriculum in Dubai adapts to where you stand.
          </motion.p>
        </div>

        {/* 3 Horizontal Typographic Rows (NO CARDS) with Hover-Reveal Background Image */}
        <div className="border-t border-white/15">
          {aboutWhoWeCoachCategories.map((tier, idx) => {
            const isHovered = hoveredCategory === idx;

            return (
              <div
                key={tier.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                onMouseEnter={() => setHoveredCategory(idx)}
                className="group relative border-b border-white/15 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <meta itemProp="position" content={idx + 1} />
                <meta itemProp="name" content={tier.fullTitle || tier.category} />
                <meta itemProp="description" content={tier.description} />

                {/* Horizontal Narrow Background Image Revealed Behind Typography on Hover */}
                <div 
                  className={`absolute inset-0 z-0 transition-opacity duration-500 overflow-hidden ${
                    isHovered ? "opacity-30" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={tier.image}
                    alt={tier.imageAlt}
                    itemProp="image"
                    width={1400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Huge Typographic Title & Tagline */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 font-mono text-xs text-[#8CE600] tracking-widest uppercase">
                      <span>0{idx + 1} // DEVELOPMENT TIER DUBAI</span>
                      <span className="text-white/30">•</span>
                      <span className="text-white/70">{tier.tagline}</span>
                    </div>

                    <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white group-hover:text-[#8CE600] transition-colors duration-300">
                      {tier.category}
                    </h3>
                  </div>

                  {/* Right: Description, Details & Program Action */}
                  <div className="max-w-md space-y-4">
                    <p className="font-sans text-base sm:text-lg text-[#F5F5F0]/90 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="font-mono text-xs text-white/60 pt-1">
                      {tier.details}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleProgramClick(e, tier.programRef)}
                      className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-wider text-[#8CE600] hover:text-white uppercase pt-2 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>EXPLORE {tier.category} TRACK DUBAI</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Subtle active line */}
                <div className={`h-[2px] bg-[#8CE600] transition-all duration-300 ${
                  isHovered ? "w-full" : "w-0"
                }`} />
              </div>
            );
          })}
        </div>

        {/* Global Section Action */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
          <div className="font-mono text-xs text-white/50 tracking-wider">
            ALL COACHING SESSIONS CONDUCTED BY ITF / PROFESSIONAL CERTIFIED FACULTY IN DUBAI
          </div>

          <a
            href="#programs"
            onClick={(e) => handleProgramClick(e, 'junior-dev')}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#8CE600] hover:bg-white text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>EXPLORE DUBAI TENNIS PROGRAMS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
