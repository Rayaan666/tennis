import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonialsData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#0A0A0A] text-[#F0F4F8] py-16 sm:py-20 lg:py-24 overflow-hidden border-t-[3px] border-[#8DF000]"
    >
      {/* Dark Court Grid Pattern */}
      <div className="absolute inset-0 court-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[2px] bg-[#8DF000]" />
          <span className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-bold">
            06 / PLAYER STORIES
          </span>
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
            [MATCH LOGS & PROGRESSION]
          </span>
        </div>

        <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-[0.9] mb-16 sm:mb-20">
          FROM THE OTHER <br />
          <span className="text-[#8DF000]">SIDE OF THE NET.</span>
        </h2>

        {/* The Featured Single Testimonial (Large Editorial Typography) */}
        <div className="min-h-[280px] sm:min-h-[320px] flex flex-col justify-between mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Quote Mark Decoration */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#8DF000] uppercase tracking-widest font-bold">
                  TESTIMONIAL 0{currentIndex + 1} // 0{testimonialsData.length}
                </span>
                <span className="text-neutral-500 font-mono text-xs">•</span>
                <span className="font-mono text-xs text-neutral-400 uppercase">
                  {current.courtPosition}
                </span>
              </div>

              {/* Massive Editorial Quote Text */}
              <blockquote className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight text-[#F0F4F8] tracking-tight max-w-4xl">
                "{current.quote}"
              </blockquote>

              {/* Player Metadata Strip */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {current.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 font-sans mt-0.5">
                    <span className="font-medium text-[#8DF000]">{current.role}</span>
                    <span>•</span>
                    <span>{current.program}</span>
                    <span>•</span>
                    <span className="text-neutral-500">{current.location}</span>
                  </div>
                </div>

                {/* Achievement Metric Callout */}
                <div className="px-4 py-2 bg-[#151515] border border-white/10 shadow-lg shrink-0 self-start sm:self-center">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block leading-none mb-1">
                    VERIFIED OUTCOME
                  </span>
                  <span className="font-display text-lg font-bold text-[#8DF000] uppercase tracking-wide leading-none">
                    {current.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controller */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
              BASELINE TRAJECTORY CONTROLLER
            </span>

            {/* Prev / Next Chevrons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 bg-[#151515] border border-white/10 hover:border-[#8DF000] transition-colors"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 bg-[#151515] border border-white/10 hover:border-[#8DF000] transition-colors"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Interactive Baseline Track */}
          <div className="relative w-full h-8 flex items-center cursor-pointer">
            <div className="w-full h-[2px] bg-white/10 relative">
              <div className="absolute inset-0 flex justify-between">
                {testimonialsData.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-[2px] h-3 -top-[5px] relative transition-colors ${
                      idx === currentIndex ? "bg-[#8DF000]" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* The Animated Tennis Ball Indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 z-10"
              animate={{
                left: `${(currentIndex / (testimonialsData.length - 1)) * 98}%`,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            >
              <div className="relative group">
                <div className="w-5 h-5 rounded-full bg-[#8DF000] border-2 border-[#8DF000] shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black opacity-80" />
                </div>
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-[#8DF000] border border-[#8DF000]/40 px-1.5 py-0.5 font-mono text-[9px] uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  POINT 0{currentIndex + 1}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Names under track */}
          <div className="flex justify-between pt-2 text-[11px] font-mono text-neutral-400">
            {testimonialsData.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-colors text-left ${
                  idx === currentIndex ? "text-[#8DF000] font-bold" : "hover:text-white"
                }`}
              >
                0{idx + 1}. {t.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
