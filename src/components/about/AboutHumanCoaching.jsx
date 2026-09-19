import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { aboutCoachingPhilosophy } from '../../data/aboutData';

export default function AboutHumanCoaching({ onNavigate }) {
  const handleCoachesClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/#coaches');
    } else {
      const coachesSection = document.querySelector('#coaches');
      if (coachesSection) {
        coachesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="coaching-philosophy" 
      className="relative bg-[#050505] text-[#F0F4F8] py-28 lg:py-36 border-b border-white/10 overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large B&W Documentary Photograph Occupying ~60% Viewport (7 Cols on LG) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Fine Archival Photo Frame Container */}
            <div className="border border-white/20 bg-[#151515] p-3 sm:p-4 shadow-2xl">
              
              {/* Top Film Frame Stamp */}
              <div className="flex items-center justify-between font-mono text-[9px] text-white/60 tracking-wider pb-2.5 border-b border-white/10 mb-3 uppercase">
                <span className="text-[#8CE600]">DOCUMENTARY RECORD // DUBAI BENCH</span>
                <span>LEICA M MONOCHROME // 50MM</span>
              </div>

              {/* The 60% Viewport B&W Candid Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border border-white/10">
                <img
                  src={aboutCoachingPhilosophy.bwImage}
                  alt={aboutCoachingPhilosophy.bwImageAlt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-[1.01] transition-transform duration-700"
                />
                
                {/* Minimalist Coordinate Corner Stamp */}
                <div className="absolute bottom-3 right-3 font-mono text-[9px] text-[#8CE600] bg-[#050505]/90 px-2 py-1 tracking-widest uppercase border border-white/10">
                  AUTHENTIC COACHING MOMENT // 2026
                </div>
              </div>

              {/* Bottom Archival Legend */}
              <div className="pt-3 flex items-center justify-between font-mono text-[9px] text-white/50">
                <span>FRAME NO. 44 // NON-STAGED CANDID</span>
                <span className="text-[#8CE600]">DUBAI, UNITED ARAB EMIRATES</span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Deliberate, Slowed Emotional Copy & Quote (5 Cols on LG) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Section Index Marker */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#8CE600] tracking-widest uppercase">
                {aboutCoachingPhilosophy.sectionNumber}
              </span>
              <span className="h-[1px] w-6 bg-white/20" />
              <span className="font-mono text-xs font-semibold tracking-wider text-white/60 uppercase">
                {aboutCoachingPhilosophy.sectionLabel}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.92] text-white uppercase">
              THE PERSON <br />
              BEFORE <br />
              <span className="text-[#8CE600]">THE PLAYER.</span>
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#B9B9B9] leading-relaxed font-normal">
              <p>
                Good coaching begins with understanding who is standing on the other side of the net.
              </p>
              <p>
                Every player learns differently, responds differently and competes differently. Lion Elite coaching adapts to the individual while maintaining clear standards for development, discipline and performance.
              </p>
            </div>

            {/* Highlighted Quotation - Editorial Dark Box */}
            <div className="pt-6 pb-6 border-y-2 border-[#8CE600] relative bg-[#111] px-4">
              <div className="absolute -top-2.5 left-4 px-2 bg-[#050505] font-mono text-[10px] text-[#8CE600] tracking-widest uppercase font-bold border border-white/10">
                FOUNDATIONAL MOTTO
              </div>
              <blockquote className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug uppercase">
                {aboutCoachingPhilosophy.quote.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </blockquote>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#coaches"
                onClick={handleCoachesClick}
                className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-[#8CE600] hover:text-white group transition-colors"
              >
                <span>{aboutCoachingPhilosophy.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#8CE600]" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
