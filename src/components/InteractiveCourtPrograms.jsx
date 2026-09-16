import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Eye, Layers } from 'lucide-react';
import { programsData } from '../data/programsData';

// Reusable Overhead Tennis Court SVG with interactive tactical zones
function OverheadCourtSvg({ activeProgramId, onSelectProgram, className = "" }) {
  return (
    <div className={`relative w-full aspect-[9/15] ${className}`}>
      <svg
        viewBox="0 0 360 600"
        className="w-full h-full drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Court Exterior Background */}
        <rect
          x="0"
          y="0"
          width="360"
          height="600"
          fill="#0A0A0A"
          stroke="#262626"
          strokeWidth="1.5"
        />

        {/* Singles & Doubles Court Inner Floor (Dark Graphite Court) */}
        <rect
          x="40"
          y="40"
          width="280"
          height="520"
          fill="#121212"
          stroke="#333333"
          strokeWidth="1.5"
        />

        {/* Doubles Alleys (Left & Right) */}
        <line x1="75" y1="40" x2="75" y2="560" stroke="#333333" strokeWidth="1.5" />
        <line x1="285" y1="40" x2="285" y2="560" stroke="#333333" strokeWidth="1.5" />

        {/* Baselines (Top & Bottom) */}
        <line x1="40" y1="40" x2="320" y2="40" stroke="#444444" strokeWidth="2" />
        <line x1="40" y1="560" x2="320" y2="560" stroke="#444444" strokeWidth="2" />

        {/* Center Marks */}
        <line x1="180" y1="40" x2="180" y2="55" stroke="#666666" strokeWidth="2" />
        <line x1="180" y1="545" x2="180" y2="560" stroke="#666666" strokeWidth="2" />

        {/* Net (Midcourt) */}
        <line
          x1="30"
          y1="300"
          x2="330"
          y2="300"
          stroke="#8DF000"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
        <circle cx="30" cy="300" r="3" fill="#8DF000" />
        <circle cx="330" cy="300" r="3" fill="#8DF000" />

        {/* Service Lines */}
        <line x1="75" y1="180" x2="285" y2="180" stroke="#444444" strokeWidth="1.5" />
        <line x1="75" y1="420" x2="285" y2="420" stroke="#444444" strokeWidth="1.5" />

        {/* Center Service Line ('T') */}
        <line x1="180" y1="180" x2="180" y2="420" stroke="#444444" strokeWidth="1.5" />

        {/* ==============================================
            INTERACTIVE HIGHLIGHT ZONES LINKED TO PROGRAMS
            ============================================== */}

        {/* 01 JUNIOR DEV: Service Boxes Zone */}
        <g
          onClick={() => onSelectProgram("junior-dev")}
          className="cursor-pointer group"
        >
          <rect
            x="75"
            y="180"
            width="210"
            height="240"
            fill={activeProgramId === "junior-dev" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "junior-dev" ? 0.25 : 0.05}
            stroke={activeProgramId === "junior-dev" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            strokeDasharray={activeProgramId === "junior-dev" ? "6 3" : "none"}
            className="transition-all duration-300"
          />
          {activeProgramId === "junior-dev" && (
            <circle cx="180" cy="300" r="10" fill="#8DF000" className="animate-ping opacity-75" />
          )}
        </g>

        {/* 02 ADULT TENNIS: Deuce Baseline Rally Box */}
        <g
          onClick={() => onSelectProgram("adult-tennis")}
          className="cursor-pointer"
        >
          <rect
            x="180"
            y="420"
            width="105"
            height="140"
            fill={activeProgramId === "adult-tennis" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "adult-tennis" ? 0.28 : 0.05}
            stroke={activeProgramId === "adult-tennis" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            className="transition-all duration-300"
          />
        </g>

        {/* 03 PRIVATE COACHING: Center 'T' Technical Zone */}
        <g
          onClick={() => onSelectProgram("private-coaching")}
          className="cursor-pointer"
        >
          <rect
            x="130"
            y="260"
            width="100"
            height="80"
            fill={activeProgramId === "private-coaching" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "private-coaching" ? 0.35 : 0.05}
            stroke={activeProgramId === "private-coaching" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            strokeDasharray="4 2"
            className="transition-all duration-300"
          />
        </g>

        {/* 04 HIGH PERFORMANCE: Deep Power Baseline */}
        <g
          onClick={() => onSelectProgram("high-performance")}
          className="cursor-pointer"
        >
          <rect
            x="40"
            y="500"
            width="280"
            height="80"
            fill={activeProgramId === "high-performance" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "high-performance" ? 0.3 : 0.05}
            stroke={activeProgramId === "high-performance" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            className="transition-all duration-300"
          />
        </g>

        {/* 05 GROUP TRAINING: Doubles Alleys */}
        <g
          onClick={() => onSelectProgram("group-training")}
          className="cursor-pointer"
        >
          <rect
            x="40"
            y="40"
            width="35"
            height="520"
            fill={activeProgramId === "group-training" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "group-training" ? 0.25 : 0.05}
            stroke={activeProgramId === "group-training" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            className="transition-all duration-300"
          />
          <rect
            x="285"
            y="40"
            width="35"
            height="520"
            fill={activeProgramId === "group-training" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "group-training" ? 0.25 : 0.05}
            stroke={activeProgramId === "group-training" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            className="transition-all duration-300"
          />
        </g>

        {/* 06 MATCH PLAY: Advantage Opponent Corner */}
        <g
          onClick={() => onSelectProgram("match-play")}
          className="cursor-pointer"
        >
          <rect
            x="75"
            y="40"
            width="105"
            height="140"
            fill={activeProgramId === "match-play" ? "#8DF000" : "transparent"}
            fillOpacity={activeProgramId === "match-play" ? 0.3 : 0.05}
            stroke={activeProgramId === "match-play" ? "#8DF000" : "transparent"}
            strokeWidth="2"
            className="transition-all duration-300"
          />
        </g>

        {/* Dynamic Ball Trajectory Curve on active selection */}
        <motion.path
          key={activeProgramId}
          d="M 180 520 Q 240 320 180 180"
          stroke="#8DF000"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>

      {/* Court Coordinates Tag */}
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-neutral-500 uppercase tracking-widest bg-black/80 px-2 py-0.5 border border-white/5 pointer-events-none">
        ITF STAGE 1 COURT SPEC
      </div>
    </div>
  );
}

// Mini Tactical Radar badge overlay for Mobile view
function TacticalMiniRadar({ activeProgramId, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/20 hover:border-[#8DF000] px-2.5 py-1.5 transition-colors"
      title="View Court Mapping"
    >
      <div className="relative w-5 h-8 border border-white/30 bg-[#121212] overflow-hidden flex items-center justify-center">
        {/* Net line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/40" />
        {/* Active zone dot indicator */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#8DF000] animate-ping" />
      </div>
      <div className="text-left font-mono">
        <span className="block text-[8px] text-neutral-400 uppercase tracking-widest leading-none">TACTICAL</span>
        <span className="text-[10px] text-[#8DF000] font-bold uppercase tracking-wider leading-tight">COURT ZONE</span>
      </div>
    </button>
  );
}

export default function InteractiveCourtPrograms({ onOpenBooking }) {
  const [activeProgramId, setActiveProgramId] = useState("junior-dev");
  const [mobileViewMode, setMobileViewMode] = useState("photo"); // 'photo' | 'court'
  const pillsRef = useRef(null);

  const activeIndex = programsData.findIndex((p) => p.id === activeProgramId);
  const activeProgram = programsData[activeIndex] || programsData[0];

  const handleSelectProgram = (id) => {
    setActiveProgramId(id);
  };

  const handlePrevProgram = () => {
    const prevIdx = (activeIndex - 1 + programsData.length) % programsData.length;
    setActiveProgramId(programsData[prevIdx].id);
  };

  const handleNextProgram = () => {
    const nextIdx = (activeIndex + 1) % programsData.length;
    setActiveProgramId(programsData[nextIdx].id);
  };

  // Auto-scroll the active pill into view on mobile
  useEffect(() => {
    if (pillsRef.current) {
      const activeEl = pillsRef.current.querySelector(`[data-prog-id="${activeProgramId}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeProgramId]);

  return (
    <section
      id="programs"
      className="relative w-full bg-[#050505] text-[#F0F4F8] py-12 sm:py-16 lg:py-20 overflow-hidden border-t-[3px] border-[#8DF000]"
    >
      {/* Subtle Court Line Texture */}
      <div className="absolute inset-0 court-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-6 h-[2px] bg-[#8DF000]" />
              <span className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-semibold">
                02 / TRAINING PROGRAMS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-none">
              FIND <span className="text-[#8DF000]">YOUR GAME.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#B9B9B9] uppercase tracking-wider hidden md:inline-block">
              // INTERACTIVE TACTICAL COURT MAPPING
            </span>
            <button
              type="button"
              onClick={() => onOpenBooking(activeProgram.id)}
              className="group inline-flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 bg-white/10 hover:bg-[#8DF000] text-white hover:text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-white/10 hover:border-[#8DF000]"
            >
              <span>EXPLORE ALL PROGRAMS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE & TABLET REDESIGN (< lg)                              */}
        {/* Instant clarity: Photo & specs right under user's thumb!     */}
        {/* ============================================================ */}
        <div className="block lg:hidden space-y-4">
          
          {/* Horizontal Program Selector Pills (Sticky / Scrollable) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 uppercase tracking-widest px-1">
              <span>SELECT PROGRAM:</span>
              <span className="text-[#8DF000] font-bold">
                {activeProgram.number} / 06 — {activeProgram.title}
              </span>
            </div>

            <div
              ref={pillsRef}
              className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {programsData.map((prog) => {
                const isActive = prog.id === activeProgramId;
                return (
                  <button
                    key={prog.id}
                    data-prog-id={prog.id}
                    type="button"
                    onClick={() => handleSelectProgram(prog.id)}
                    className={`snap-center shrink-0 px-3.5 py-2 border transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-[#8DF000] border-[#8DF000] text-black font-bold shadow-md shadow-[#8DF000]/30"
                        : "bg-[#111111] border-white/10 text-neutral-300 hover:border-white/30 hover:bg-[#161616]"
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? "text-black" : "text-[#8DF000]"}`}>
                      {prog.number}
                    </span>
                    <span className="font-display text-xs tracking-wider uppercase whitespace-nowrap">
                      {prog.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Stage Card: Instant Visual + Toggle + Specs */}
          <div className="bg-[#0D0D0D] border border-white/10 p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4">
            
            {/* View Mode Toggle Header (Photo vs Tactical Court) */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              {/* Toggle Switch */}
              <div className="inline-flex bg-black/60 p-1 border border-white/10 rounded-sm">
                <button
                  type="button"
                  onClick={() => setMobileViewMode("photo")}
                  className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    mobileViewMode === "photo"
                      ? "bg-[#8DF000] text-black font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-3 h-3" />
                  <span>PHOTO</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMobileViewMode("court")}
                  className={`px-3 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    mobileViewMode === "court"
                      ? "bg-[#8DF000] text-black font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>TACTICAL COURT</span>
                </button>
              </div>

              {/* Court Zone Tag */}
              <span className="font-mono text-[10px] text-[#8DF000] uppercase tracking-wider truncate max-w-[140px] sm:max-w-none">
                {activeProgram.courtZone.replace('_', ' ')}
              </span>
            </div>

            {/* Visual Stage (Image or Court SVG) */}
            <div className="relative w-full overflow-hidden bg-black border border-white/10">
              <AnimatePresence mode="wait">
                {mobileViewMode === "photo" ? (
                  <motion.div
                    key={`photo-${activeProgram.id}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="relative aspect-[16/10] w-full"
                  >
                    <img
                      src={activeProgram.image}
                      alt={activeProgram.title}
                      className="w-full h-full object-cover filter brightness-90"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                    {/* Top Left Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-black/85 border border-white/10 px-2.5 py-1 font-mono text-[10px] text-[#8DF000] uppercase tracking-wider">
                      PROG {activeProgram.number} // {activeProgram.specs.ratio}
                    </div>

                    {/* Top Right Mini Tactical Radar */}
                    <div className="absolute top-2.5 right-2.5">
                      <TacticalMiniRadar
                        activeProgramId={activeProgram.id}
                        onClick={() => setMobileViewMode("court")}
                      />
                    </div>

                    {/* Bottom Title & Focus Strip */}
                    <div className="absolute bottom-2.5 inset-x-2.5 flex items-end justify-between pointer-events-none">
                      <div>
                        <span className="font-mono text-[10px] text-[#8DF000] uppercase tracking-widest block">
                          {activeProgram.specs.focus}
                        </span>
                        <h3 className="font-display text-lg font-bold tracking-wide uppercase text-white leading-tight">
                          {activeProgram.title}
                        </h3>
                      </div>
                    </div>

                    {/* Quick Swipe Prev/Next Overlays */}
                    <button
                      type="button"
                      onClick={handlePrevProgram}
                      className="absolute left-1 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 border border-white/10 text-white rounded-full transition-all"
                      aria-label="Previous Program"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextProgram}
                      className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-black/90 border border-white/10 text-white rounded-full transition-all"
                      aria-label="Next Program"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`court-${activeProgram.id}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 flex flex-col items-center justify-center bg-[#0A0A0A]"
                  >
                    <div className="w-full max-w-[240px] sm:max-w-[280px]">
                      <OverheadCourtSvg
                        activeProgramId={activeProgram.id}
                        onSelectProgram={handleSelectProgram}
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <span className="font-mono text-[10px] text-[#8DF000] uppercase tracking-wider block">
                        📍 {activeProgram.zoneLabel}
                      </span>
                      <p className="font-sans text-[11px] text-neutral-400 mt-0.5">
                        Tap court zones to jump between training modules
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Program Information & Tagline */}
            <div className="space-y-3 pt-1">
              <div>
                <p className="font-sans text-xs text-[#E0E0E0] leading-relaxed">
                  {activeProgram.description}
                </p>
              </div>

              {/* Technical Specs 3-Column Grid */}
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
                <div className="p-2 bg-[#141414] border border-white/5">
                  <span className="text-neutral-500 block text-[8px] uppercase">RATIO</span>
                  <span className="text-white font-bold truncate block">{activeProgram.specs.ratio}</span>
                </div>
                <div className="p-2 bg-[#141414] border border-white/5">
                  <span className="text-neutral-500 block text-[8px] uppercase">AGES</span>
                  <span className="text-white font-bold truncate block">{activeProgram.specs.ages}</span>
                </div>
                <div className="p-2 bg-[#141414] border border-white/5">
                  <span className="text-neutral-500 block text-[8px] uppercase">SCHEDULE</span>
                  <span className="text-white font-bold truncate block">{activeProgram.specs.schedule}</span>
                </div>
              </div>

              {/* Bullet Highlights */}
              <ul className="space-y-1.5 text-xs text-[#B9B9B9] font-sans pt-1">
                {activeProgram.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8DF000] shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Next/Prev Navigation & Direct Booking CTA */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevProgram}
                    className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>PREV</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextProgram}
                    className="flex-1 py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-[11px] font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>NEXT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(activeProgram.id)}
                  className="w-full py-3.5 px-4 bg-[#8DF000] hover:bg-white text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#8DF000]/20"
                >
                  <span>BOOK {activeProgram.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* DESKTOP LAYOUT (>= lg)                                       */}
        {/* Left Program List (40%) & Right Interactive Court (60%)      */}
        {/* ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Program Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest mb-3">
              SELECT PROGRAM OR HOVER COURT ZONES:
            </p>

            {programsData.map((prog) => {
              const isActive = prog.id === activeProgramId;
              return (
                <div
                  key={prog.id}
                  onMouseEnter={() => handleSelectProgram(prog.id)}
                  onClick={() => handleSelectProgram(prog.id)}
                  className={`group relative p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#151515] border-[#8DF000] shadow-lg shadow-[#8DF000]/5"
                      : "bg-[#0A0A0A] border-white/5 hover:border-white/20 hover:bg-[#111111]"
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProgramBar"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#8DF000]"
                    />
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`font-mono text-xs font-bold tracking-wider ${isActive ? "text-[#8DF000]" : "text-neutral-500"}`}>
                          {prog.number}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-wide uppercase text-white">
                          {prog.title}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-[#B9B9B9] line-clamp-2 pr-4 mt-0.5 leading-relaxed">
                        {prog.tagline}
                      </p>
                    </div>

                    <span className={`font-mono text-[10px] uppercase px-2 py-1 tracking-wider border shrink-0 transition-colors ${
                      isActive 
                        ? "border-[#8DF000] text-[#8DF000] bg-[#8DF000]/10" 
                        : "border-white/10 text-neutral-500 group-hover:text-neutral-300"
                    }`}>
                      {prog.specs.ratio}
                    </span>
                  </div>

                  {/* Active expanded detail on selection */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-[#8DF000]"
                    >
                      <span>ZONE: {prog.zoneLabel}</span>
                      <span className="flex items-center gap-1 font-sans text-white hover:underline">
                        Apply for spot <ArrowRight className="w-3 h-3" />
                      </span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Abstract Overhead Tennis Court Visualization & Dynamic Telemetry (7 Cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
              
              {/* Technical Header Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8DF000] animate-ping" />
                  <span className="text-white uppercase tracking-wider">
                    {activeProgram.zoneLabel}
                  </span>
                </div>
                <span className="text-[#8DF000] uppercase tracking-widest hidden sm:inline-block">
                  PROGRAM {activeProgram.number} / 06
                </span>
              </div>

              {/* Dynamic Court View + Image Preview Split */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Overhead SVG Tennis Court (7 cols) */}
                <div className="md:col-span-7 flex justify-center py-2">
                  <OverheadCourtSvg
                    activeProgramId={activeProgramId}
                    onSelectProgram={handleSelectProgram}
                    className="max-w-[320px]"
                  />
                </div>

                {/* Program Photography & Deep Specs Reveal (5 cols) */}
                <div className="md:col-span-5 space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProgram.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      {/* Image Preview Container */}
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-white/10 group">
                        <img
                          src={activeProgram.image}
                          alt={activeProgram.title}
                          className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-[#050505]/90 border border-white/10 px-2.5 py-1 font-mono text-[10px] text-[#8DF000] uppercase tracking-wider">
                          PROGRAM {activeProgram.number}
                        </div>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/40 to-transparent p-3">
                          <span className="font-display text-sm uppercase text-white font-bold tracking-wide">
                            {activeProgram.specs.focus}
                          </span>
                        </div>
                      </div>

                      {/* Technical Specs Cards */}
                      <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                        <div className="p-2.5 bg-[#141414] border border-white/5">
                          <span className="text-neutral-500 block text-[9px] uppercase">COACHING RATIO</span>
                          <span className="text-white font-bold">{activeProgram.specs.ratio}</span>
                        </div>
                        <div className="p-2.5 bg-[#141414] border border-white/5">
                          <span className="text-neutral-500 block text-[9px] uppercase">PARTICIPANTS</span>
                          <span className="text-white font-bold">{activeProgram.specs.ages}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 text-xs text-[#B9B9B9] font-sans">
                        {activeProgram.bulletPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#8DF000] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Direct Booking CTA */}
                      <button
                        type="button"
                        onClick={() => onOpenBooking(activeProgram.id)}
                        className="w-full py-3 px-4 bg-[#8DF000] hover:bg-white text-[#050505] font-display text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                      >
                        <span>BOOK {activeProgram.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

