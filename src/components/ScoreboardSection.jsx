import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scoreboardData } from '../data/scoreboardData';
import { ArrowRight, Trophy, Zap, ChevronRight } from 'lucide-react';

export default function ScoreboardSection({ onOpenBooking }) {
  const [activeScoreIndex, setActiveScoreIndex] = useState(0);
  const currentItem = scoreboardData[activeScoreIndex];

  return (
    <section
      id="scoreboard"
      className="relative w-full bg-[#050505] text-[#F0F4F8] py-24 sm:py-32 lg:py-40 overflow-hidden border-t-[3px] border-[#8DF000]"
    >
      {/* Electronic Scoreboard Background Grid & Line Movement */}
      <div className="absolute inset-0 court-grid-pattern opacity-20 pointer-events-none" />

      {/* Subtle Horizontal Court Line Sweep */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#8DF000]" />
              <span className="font-mono text-xs tracking-court uppercase text-[#8DF000] font-semibold">
                WHY LION ELITE // SCOREBOARD TELEMETRY
              </span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-none">
              THE SCORING OF <span className="text-[#8DF000]">EXCELLENCE.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-[#B9B9B9]">
            <span className="w-2 h-2 rounded-full bg-[#8DF000] animate-pulse" />
            <span>ELECTRONIC TOURNAMENT SCOREBOARD // MATCH PHILOSOPHY</span>
          </div>
        </div>

        {/* Scoreboard Layout: Left Oversized Vertical Scores & Right Dynamic Principle Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Oversized Vertically Arranged Tennis Scores (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-3 pl-2">
              MATCH POINT PROGRESSION // CLICK TO INSPECT
            </div>

            {scoreboardData.map((item, idx) => {
              const isActive = idx === activeScoreIndex;
              return (
                <button
                  key={item.score}
                  type="button"
                  onClick={() => setActiveScoreIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-300 flex items-center justify-between group relative ${
                    isActive
                      ? "bg-[#151515] border-[#8DF000] shadow-lg shadow-[#8DF000]/10"
                      : "bg-[#090909] border-white/5 hover:border-white/20 hover:bg-[#111111]"
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeScoreGlow"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8DF000]"
                    />
                  )}

                  <div className="flex items-baseline gap-4 sm:gap-6">
                    {/* Oversized Score Typography */}
                    <span
                      className={`font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter uppercase leading-none transition-colors duration-300 ${
                        isActive ? "text-[#8DF000]" : "text-neutral-500 group-hover:text-white"
                      }`}
                    >
                      {item.score}
                    </span>

                    {/* Brief Principle Header */}
                    <div className="flex flex-col">
                      <span className={`font-display text-base sm:text-lg font-bold tracking-wide uppercase ${isActive ? "text-white" : "text-[#B9B9B9]"}`}>
                        {item.principle}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isActive
                        ? "text-[#8DF000] translate-x-1"
                        : "text-neutral-600 group-hover:text-white"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Principle Display Panel with Tournament Scoreboard Graphics (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#0E0E0E] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl">
              
              {/* Top Scoreboard Digital Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8 font-mono text-xs text-[#B9B9B9]">
                <div className="flex items-center gap-3">
                  <span className="text-[#8DF000] font-bold">LION ELITE //</span>
                  <span>COURT 01 DUBAI</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-2 py-0.5 bg-[#8DF000]/10 text-[#8DF000] border border-[#8DF000]/30 text-[10px]">
                    SET 1 • ACTIVE
                  </span>
                  <span>SCORE: {currentItem.score}</span>
                </div>
              </div>

              {/* Dynamic Principle Content with Fade/Slide Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.score}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 font-mono text-xs text-[#8DF000] uppercase tracking-widest">
                    <span>{currentItem.tag}</span>
                    <span className="text-neutral-600">—</span>
                    <span>PRINCIPLE LEVEL {activeScoreIndex + 1} OF 5</span>
                  </div>

                  {/* Principle Name */}
                  <h3 className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none">
                    {currentItem.principle}
                  </h3>

                  {/* Quote */}
                  <p className="font-sans text-lg sm:text-xl text-[#8DF000] italic font-normal border-l-2 border-[#8DF000] pl-4 my-4">
                    "{currentItem.quote}"
                  </p>

                  {/* Detailed Description */}
                  <p className="font-sans text-sm sm:text-base text-[#B9B9B9] leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Tournament Metric Callout Card */}
                  <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#151515] p-4 border border-white/5">
                      <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-1">
                        {currentItem.stats.label}
                      </span>
                      <span className="font-display text-2xl font-bold text-white uppercase tracking-wider">
                        {currentItem.stats.metric}
                      </span>
                    </div>

                    <div className="bg-[#151515] p-4 border border-white/5">
                      <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-1">
                        ACADEMY BENCHMARK
                      </span>
                      <span className="font-sans text-xs text-[#B9B9B9] block">
                        {currentItem.stats.courtFact}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Trigger */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenBooking()}
                      className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#8DF000] hover:text-white transition-colors"
                    >
                      <span>TRAIN UNDER THIS PRINCIPLE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="font-mono text-[10px] text-neutral-500">
                      POINT {activeScoreIndex + 1}/5
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Corner Bracket */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#8DF000]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#8DF000]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
