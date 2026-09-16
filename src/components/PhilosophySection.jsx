import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { philosophyStages } from '../data/philosophyData';
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

// Reusable Overhead Tennis Court Tactical Vector Canvas
function TacticalCourtSvg({ activeStepIndex }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Overhead Tennis Court Tactical Telemetry Diagram"
    >
      {/* Outer Court Line */}
      <rect x="60" y="40" width="680" height="420" stroke="#262626" strokeWidth="2" />

      {/* Singles Sidelines (Inner) */}
      <line x1="60" y1="90" x2="740" y2="90" stroke="#333333" strokeWidth="1.5" />
      <line x1="60" y1="410" x2="740" y2="410" stroke="#333333" strokeWidth="1.5" />

      {/* Net (Vertical divider) */}
      <line
        x1="400"
        y1="30"
        x2="400"
        y2="470"
        stroke="#8DF000"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <text x="408" y="48" fill="#8DF000" fontSize="10" fontFamily="monospace">
        NET // 0.914M
      </text>

      {/* Service Lines */}
      <line x1="240" y1="90" x2="240" y2="410" stroke="#333333" strokeWidth="1.5" />
      <line x1="560" y1="90" x2="560" y2="410" stroke="#333333" strokeWidth="1.5" />

      {/* Center Service Line */}
      <line x1="240" y1="250" x2="560" y2="250" stroke="#333333" strokeWidth="1.5" />

      {/* Center Marks on Baselines */}
      <line x1="60" y1="250" x2="80" y2="250" stroke="#555" strokeWidth="2" />
      <line x1="720" y1="250" x2="740" y2="250" stroke="#555" strokeWidth="2" />

      {/* Step 0: TECHNIQUE (Cross-Court Forehand Vector) */}
      {activeStepIndex === 0 && (
        <g>
          <circle cx="140" cy="380" r="10" fill="#8DF000" />
          <circle cx="140" cy="380" r="22" stroke="#8DF000" strokeWidth="1" strokeDasharray="3 3" className="animate-pulse" />
          <text x="110" y="415" fill="#FFF" fontSize="11" fontFamily="monospace">
            PLAYER [STANCE: OPEN]
          </text>
          <motion.path
            d="M 140 380 Q 400 230 660 120"
            stroke="#8DF000"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="660" cy="120" r="28" fill="#8DF000" fillOpacity="0.2" stroke="#8DF000" strokeWidth="1.5" />
          <circle cx="660" cy="120" r="5" fill="#8DF000" />
          <text x="590" y="95" fill="#8DF000" fontSize="10" fontFamily="monospace">
            CROSSCOURT TARGET // 2,850 RPM
          </text>
        </g>
      )}

      {/* Step 1: MOVEMENT (Deceleration & Lateral Split Recovery) */}
      {activeStepIndex === 1 && (
        <g>
          <circle cx="110" cy="130" r="10" fill="#FFF" />
          <text x="80" y="105" fill="#FFF" fontSize="11" fontFamily="monospace">
            EXTREME REACH [4.2G]
          </text>
          <motion.path
            d="M 110 130 Q 150 200 150 250"
            stroke="#8DF000"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <circle cx="150" cy="250" r="12" fill="#8DF000" fillOpacity="0.3" stroke="#8DF000" strokeWidth="2" />
          <circle cx="150" cy="250" r="4" fill="#8DF000" />
          <text x="170" y="255" fill="#8DF000" fontSize="10" fontFamily="monospace">
            RECOVERY HUB [0.18S SPLIT-STEP]
          </text>
        </g>
      )}

      {/* Step 2: DECISION (Down-the-line Attack Lane) */}
      {activeStepIndex === 2 && (
        <g>
          <circle cx="210" cy="360" r="10" fill="#8DF000" />
          <text x="180" y="395" fill="#FFF" fontSize="11" fontFamily="monospace">
            INSIDE-OUT STRIKE POSITION
          </text>
          <circle cx="680" cy="340" r="9" fill="#555" />
          <text x="630" y="375" fill="#777" fontSize="10" fontFamily="monospace">
            OPPONENT RECOVERING
          </text>
          <motion.path
            d="M 210 360 L 680 110"
            stroke="#8DF000"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <rect x="620" y="90" width="100" height="50" fill="#8DF000" fillOpacity="0.25" stroke="#8DF000" strokeWidth="1.5" />
          <text x="630" y="120" fill="#8DF000" fontSize="10" fontFamily="monospace font-bold">
            OPEN COURT WINNER
          </text>
        </g>
      )}

      {/* Step 3: COMPETE (Ace Down The T / Match Point) */}
      {activeStepIndex === 3 && (
        <g>
          <circle cx="90" cy="250" r="12" fill="#8DF000" />
          <text x="70" y="225" fill="#FFF" fontSize="11" fontFamily="monospace">
            SERVE [DEUCE COURT]
          </text>
          <motion.path
            d="M 90 250 L 560 250"
            stroke="#8DF000"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, repeat: Infinity }}
          />
          <circle cx="560" cy="250" r="18" fill="#8DF000" fillOpacity="0.3" stroke="#8DF000" strokeWidth="2" />
          <circle cx="560" cy="250" r="5" fill="#8DF000" />
          <text x="500" y="225" fill="#8DF000" fontSize="11" fontFamily="monospace font-bold">
            ACE DOWN THE 'T' // 204 KM/H
          </text>
        </g>
      )}
    </svg>
  );
}

export default function PhilosophySection({ onOpenBooking }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage = philosophyStages[activeStepIndex];
  const pillsRef = useRef(null);

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + philosophyStages.length) % philosophyStages.length);
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % philosophyStages.length);
  };

  // Auto-scroll the active pill into view on mobile
  useEffect(() => {
    if (pillsRef.current) {
      const activeEl = pillsRef.current.querySelector(`[data-phase-index="${activeStepIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeStepIndex]);

  return (
    <section
      id="philosophy"
      className="relative w-full bg-[#050505] text-[#F0F4F8] py-12 sm:py-16 lg:py-20 overflow-hidden border-t-[3px] border-[#8DF000]"
      itemScope
      itemType="https://schema.org/EducationalOccupationalProgram"
    >
      {/* Hidden SEO Microdata */}
      <meta itemProp="name" content="Lion Elite Tennis Player Development Methodology Dubai" />
      <meta itemProp="description" content="Structured 4-phase tennis player development methodology in Dubai covering stroke mechanics, movement & split-step recovery, tactical court positioning, and match mentality." />

      {/* Background Graphic Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="max-w-3xl mb-6 sm:mb-10">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="w-6 h-[2px] bg-[#8DF000]" />
            <h2 className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-semibold">
              03 / PLAYER DEVELOPMENT — ATHLETE PERFORMANCE METHODOLOGY IN DUBAI
            </h2>
          </div>

          <h3 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-[0.9] mb-4 sm:mb-6">
            EVERY POINT <br />
            TELLS US <span className="text-[#8DF000]">SOMETHING.</span>
          </h3>

          <p className="font-sans text-sm sm:text-lg text-[#B9B9B9] leading-relaxed">
            Match outcomes are decided long before match point. Our Dubai performance methodology dissects tennis player development into four progressive dimensions: kinetic stroke mechanics, court positioning, tactical decision-making, and competitive psychology.
          </p>
        </header>

        {/* ============================================================ */}
        {/* MOBILE & TABLET REDESIGN (< lg)                              */}
        {/* Instant visual clarity: Tactical Court Graph Front & Center  */}
        {/* ============================================================ */}
        <div className="block lg:hidden space-y-4">
          
          {/* Horizontal Phase Selector Pills */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 uppercase tracking-widest px-1">
              <span>PERFORMANCE PHASE:</span>
              <span className="text-[#8DF000] font-bold">
                PHASE 0{activeStepIndex + 1} / 04 — {currentStage.label.split(' / ')[1]}
              </span>
            </div>

            <div
              ref={pillsRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {philosophyStages.map((stage, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={stage.step}
                    data-phase-index={idx}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`snap-center shrink-0 px-3.5 py-2 border transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-[#8DF000] border-[#8DF000] text-black font-bold shadow-md shadow-[#8DF000]/30"
                        : "bg-[#111111] border-white/10 text-neutral-300 hover:border-white/30 hover:bg-[#161616]"
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? "text-black" : "text-[#8DF000]"}`}>
                      {stage.step}
                    </span>
                    <span className="font-display text-xs tracking-wider uppercase whitespace-nowrap">
                      {stage.label.split(' / ')[1]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Stage Card: Interactive Tactical Graph Front & Center */}
          <div className="bg-[#0D0D0D] border border-white/10 p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4">
            
            {/* Tactical Status Banner */}
            <div className="flex items-center justify-between font-mono text-[11px] pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-white">
                <Activity className="w-3.5 h-3.5 text-[#8DF000] animate-pulse shrink-0" />
                <span className="tracking-wider uppercase truncate max-w-[170px] sm:max-w-none">
                  {currentStage.concept}
                </span>
              </div>
              <span className="text-[#8DF000] text-[10px] uppercase font-bold shrink-0">
                TARGET: {currentStage.tacticalVector.targetZone}
              </span>
            </div>

            {/* Overhead Court Canvas with Dynamic Trajectory */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] flex items-center justify-center bg-[#070707] border border-white/5 p-3 sm:p-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-canvas-${activeStepIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full"
                >
                  <TacticalCourtSvg activeStepIndex={activeStepIndex} />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Quick Nav Arrows Over Graph */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-black/90 border border-white/10 text-white rounded-full transition-all"
                aria-label="Previous Phase"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-black/90 border border-white/10 text-white rounded-full transition-all"
                aria-label="Next Phase"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stage Details & Description */}
            <div className="space-y-3 pt-1">
              <div>
                <span className="font-mono text-[10px] text-[#8DF000] uppercase tracking-widest font-bold block mb-1">
                  {currentStage.label}
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold tracking-wide uppercase text-white leading-tight mb-2">
                  {currentStage.title}
                </h4>
                <p className="font-sans text-xs text-[#B9B9B9] leading-relaxed">
                  {currentStage.description}
                </p>
              </div>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[10px] pt-1">
                {currentStage.tacticalVector.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-2 bg-[#141414] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8DF000] shrink-0" />
                    <span className="text-white font-semibold truncate">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons & Direct CTA */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>PREV PHASE</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>NEXT PHASE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-4 bg-[#8DF000] hover:bg-white text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#8DF000]/20"
                >
                  <span>APPLY FOR {currentStage.label.split(' / ')[1]} ASSESSMENT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (>= lg)                                       */}
        {/* Left Phase List (40%) & Right Interactive Court (60%)        */}
        {/* ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Step-by-Step Tactical Dimension Selector (5 Cols) */}
          <nav className="lg:col-span-5 space-y-3" aria-label="Player Development Phases">
            {philosophyStages.map((stage, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <article
                  key={stage.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 sm:p-6 border transition-all duration-300 cursor-pointer text-left relative ${
                    isActive
                      ? "bg-[#151515] border-[#8DF000] shadow-xl shadow-[#8DF000]/5"
                      : "bg-[#0A0A0A] border-white/5 hover:border-white/20 hover:bg-[#111111]"
                  }`}
                  itemProp="hasCourse"
                  itemScope
                  itemType="https://schema.org/Course"
                  aria-current={isActive ? "step" : undefined}
                >
                  <meta itemProp="name" content={stage.title} />
                  <meta itemProp="description" content={stage.description} />

                  {/* Left Bar for active state */}
                  {isActive && (
                    <motion.div
                      layoutId="activePhilosophyBar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8DF000]"
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono text-xs font-bold tracking-widest ${isActive ? "text-[#8DF000]" : "text-neutral-500"}`}>
                      {stage.label}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-display text-xl sm:text-2xl font-bold tracking-wide uppercase text-white mb-2">
                    {stage.title}
                  </h4>

                  <p className="font-sans text-xs sm:text-sm text-[#B9B9B9] leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Telemetry Metrics on Active State */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2"
                    >
                      {stage.tacticalVector.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="font-mono text-[10px] bg-[#8DF000]/20 text-[#8DF000] px-2 py-0.5 border border-[#8DF000]/30"
                        >
                          {metric}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </article>
              );
            })}
          </nav>

          {/* Right Side: Tactical Overhead Court Graphic with Animated Vectors (7 Cols) */}
          <figure className="lg:col-span-7" aria-label="Tactical Overhead Court Visualization">
            <div className="relative bg-[#0D0D0D] border border-white/10 p-6 sm:p-10 shadow-2xl">
              
              {/* Tactical Status Banner */}
              <figcaption className="flex items-center justify-between font-mono text-xs pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Activity className="w-3.5 h-3.5 text-[#8DF000]" />
                  <span className="tracking-widest uppercase">
                    TACTICAL VECTOR // {currentStage.concept}
                  </span>
                </div>
                <span className="text-[#8DF000]">TARGET: {currentStage.tacticalVector.targetZone}</span>
              </figcaption>

              {/* Overhead Court Canvas */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] flex items-center justify-center bg-[#070707] border border-white/5 p-4 sm:p-6">
                <TacticalCourtSvg activeStepIndex={activeStepIndex} />
              </div>

              {/* Bottom Telemetry Legend */}
              <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#8DF000]" />
                    <span>TRAJECTORY VECTOR</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 border border-[#8DF000]" />
                    <span>PRECISION TARGET</span>
                  </span>
                </div>
                <span>DUBAI HIGH PERFORMANCE METRIC LOG</span>
              </div>
            </div>
          </figure>

        </div>

      </div>
    </section>
  );
}

