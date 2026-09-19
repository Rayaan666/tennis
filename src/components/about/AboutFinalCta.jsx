import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { aboutFinalCtaData } from '../../data/aboutData';

export default function AboutFinalCta({ onOpenBooking, onNavigate }) {
  const handleProgramsClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
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
      id="about-final-cta" 
      itemScope
      itemType="https://schema.org/ReserveAction"
      className="relative bg-[#050505] text-[#F0F4F8] pt-8 sm:pt-10 pb-20 overflow-hidden"
    >
      <meta itemProp="name" content="Book Professional Tennis Coaching Session at Lion Elite Tennis Academy Dubai" />
      <meta itemProp="description" content="Join Lion Elite Tennis Academy in Dubai for personalized player development, junior & adult coaching, and high-performance training." />
      <meta itemProp="target" content="https://lionelitetennis.com/#programs" />

      {/* Background Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-10 pointer-events-none" />

      {/* Background Featured CTA Image Overlay */}
      {aboutFinalCtaData.ctaImage && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-25">
          <img
            src={aboutFinalCtaData.ctaImage}
            alt={aboutFinalCtaData.ctaImageAlt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>
      )}

      {/* Editorial Top Marker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-white/50 uppercase">
          <span className="text-[#8CE600]">06 // EPILOGUE — TENNIS ACADEMY DUBAI CTA</span>
          <span>EST. MIDDLE EAST // DUBAI</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Large Centered-But-Offset Editorial Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto mb-8"
        >
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.92] text-white uppercase">
            YOUR GAME <br />
            IS STILL <br />
            <span className="text-[#8CE600]">BEING WRITTEN.</span>
          </h2>
        </motion.div>

        {/* Featured Editorial Photo Frame for CTA.png */}
        {aboutFinalCtaData.ctaImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-10 p-2 bg-[#151515] border border-white/20 shadow-2xl"
          >
            <div className="flex items-center justify-between font-mono text-[9px] text-white/50 px-2 py-1 mb-1.5 uppercase">
              <span className="text-[#8CE600]">FINAL FRAME // COURT CALL DUBAI</span>
              <span>LION ELITE DUBAI</span>
            </div>
            <div className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden border border-white/10 bg-[#050505]">
              <img
                src={aboutFinalCtaData.ctaImage}
                alt={aboutFinalCtaData.ctaImageAlt}
                itemProp="image"
                width={1200}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center contrast-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        )}

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans text-lg sm:text-xl text-[#B9B9B9] max-w-xl mx-auto font-normal leading-relaxed mb-12"
        >
          {aboutFinalCtaData.supportingCopy}
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-28"
        >
          <button
            type="button"
            onClick={() => onOpenBooking && onOpenBooking("junior-dev")}
            className="w-full sm:w-auto px-8 py-4 bg-[#8CE600] text-[#050505] font-display text-sm font-bold tracking-wider uppercase transition-all duration-200 hover:bg-white hover:text-[#050505] shadow-lg flex items-center justify-center gap-3 group"
          >
            <span>{aboutFinalCtaData.primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#programs"
            onClick={handleProgramsClick}
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-display text-sm font-bold tracking-wider uppercase transition-colors duration-200 hover:bg-white hover:text-[#050505] flex items-center justify-center"
          >
            {aboutFinalCtaData.secondaryCtaText}
          </a>
        </motion.div>

      </div>

      {/* Signature Minimalist Interactive Horizontal Baseline with Rolling Tennis Ball */}
      <div className="relative w-full mt-12 pt-8">
        
        {/* The Thin White/Green Horizontal Baseline */}
        <div className="w-full h-[2px] bg-white/20 relative">
          
          {/* Subtle Court Measurement Markings along baseline */}
          <div className="absolute left-8 -top-4 font-mono text-[8px] text-white/40 tracking-widest uppercase">
            0.00m // LEFT SIDELINE
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 font-mono text-[8px] text-white/40 tracking-widest uppercase">
            CENTER MARK
          </div>
          <div className="absolute right-8 -top-4 font-mono text-[8px] text-white/40 tracking-widest uppercase">
            8.23m // RIGHT SIDELINE
          </div>

          {/* Realistic Tennis Ball Rolling Smoothly Across Baseline on Viewport Entry */}
          <motion.div
            initial={{ left: "0%", rotate: 0 }}
            whileInView={{ left: "62%", rotate: 720 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 3.2, 
              ease: [0.25, 1, 0.5, 1],
              delay: 0.2 
            }}
            className="absolute -top-7 w-7 h-7 -translate-x-1/2 cursor-pointer group"
            title="The Next Point"
          >
            {/* The Optic Yellow-Green Ball Sphere */}
            <div className="relative w-full h-full rounded-full bg-[#8CE600] border border-[#a8cc00] shadow-[0_0_12px_rgba(140,230,0,0.6)] overflow-hidden">
              <div className="absolute inset-0 rounded-full border border-white/60 scale-75 opacity-70" />
              <div className="absolute top-1 left-1 w-2.5 h-2.5 rounded-full bg-white/50 blur-[0.5px]" />
              <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 28 28">
                <path d="M4 14 Q14 6 24 14" stroke="#ffffff" strokeWidth="1.2" fill="none" />
                <path d="M4 14 Q14 22 24 14" stroke="#ffffff" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            {/* Subtle glow shadow on the line */}
            <div className="w-5 h-1 bg-[#8CE600]/40 rounded-full blur-[2px] mx-auto mt-0.5" />
          </motion.div>

        </div>

        {/* Bottom Technical Coordinates */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex items-center justify-between font-mono text-[9px] text-white/40 tracking-widest uppercase">
          <span>COURT BASELINE SPECIFICATION // ITF REGULATION</span>
          <span className="text-[#8CE600]">BALL POSITION: IN // 25.2048° N, 55.2708° E</span>
        </div>

      </div>
    </section>
  );
}
