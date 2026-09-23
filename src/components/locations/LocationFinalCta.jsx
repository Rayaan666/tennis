import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export default function LocationFinalCta({ onOpenBooking, onNavigate }) {
  const handleBookSession = () => {
    if (onOpenBooking) {
      onOpenBooking("junior-dev");
    }
  };

  const handleExplorePrograms = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/programs');
    } else {
      window.location.href = '/programs';
    }
  };

  return (
    <section 
      id="locations-final-cta" 
      className="relative w-full bg-[#050505] text-white pt-10 sm:pt-14 lg:pt-16 pb-10 sm:pb-12 lg:pb-14 overflow-hidden border-t border-white/10 selection:bg-white selection:text-[#050505]"
      aria-label="Tennis Academy Location Dubai - Book a Training Session at Lion Elite"
      itemScope
      itemType="https://schema.org/ReserveAction"
    >
      {/* Background Image Overlay (/locations/CTA.png) */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src="/locations/CTA.png"
          alt="Lion Elite Tennis Academy Court Background"
          className="w-full h-full object-cover opacity-40 filter brightness-[0.6] contrast-[1.15]"
        />
        {/* Subtle Dark Vignette & Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          
          {/* Small Keyword-Structured Label */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4 sm:mb-6"
          >
            <span className="w-2.5 h-2.5 bg-white inline-block" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-court uppercase text-white">
              03 / TENNIS ACADEMY AL JADDAF — YOUR COURT IS WAITING
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] uppercase text-white mb-6 sm:mb-8"
            itemProp="name"
          >
            SEE YOU<br />
            ON COURT.
          </motion.h2>

          {/* Supporting Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-neutral-200 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
            itemProp="description"
          >
            Ready to start your tennis training in Dubai? Connect with <strong className="font-bold text-white">Lion Elite Tennis Academy</strong> at Swiss International Scientific School in Al Jaddaf. Explore our tailored junior and adult tennis coaching programs or arrange your next court session today.
          </motion.p>

          {/* Action CTAs: Primary + Secondary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            {/* PRIMARY CTA: BOOK A SESSION → */}
            <button
              type="button"
              onClick={handleBookSession}
              aria-label="Book a Tennis Training Session at Lion Elite Tennis Academy Dubai"
              title="Book a Tennis Session in Al Jaddaf, Dubai"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#050505] font-display text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 shadow-2xl active:scale-[0.98]"
            >
              <span>BOOK A SESSION</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black" />
            </button>

            {/* SECONDARY CTA: EXPLORE PROGRAMS → */}
            <a
              href="/programs"
              onClick={handleExplorePrograms}
              aria-label="Explore Tennis Coaching Programs at Lion Elite Dubai"
              title="Explore Professional Tennis Programs in Dubai"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-display text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-[#050505] active:scale-[0.98]"
            >
              <span>EXPLORE PROGRAMS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* SEO Metadata Footer Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-4 border-t border-white/20 flex flex-wrap items-center gap-y-2 gap-x-4 font-mono text-[11px] font-semibold text-neutral-300 uppercase tracking-widest"
          >
            <div className="flex items-center gap-1.5 text-white">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span>AL JADDAF, DUBAI, UAE</span>
            </div>
            <span>•</span>
            <span>TENNIS COACHING DUBAI</span>
            <span>•</span>
            <span>TENNIS LESSONS AL JADDAF</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
