import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Activity } from 'lucide-react';

export default function CoachingSection({ onOpenBooking }) {
  const steps = [
    { num: "01", name: "ASSESS", desc: "Kinematic video baseline & strength screen" },
    { num: "02", name: "DEVELOP", desc: "Biomechanical refinement & technical drills" },
    { num: "03", name: "APPLY", desc: "Pressure patterns & situational decision-making" },
    { num: "04", name: "COMPETE", desc: "Tournament match play & score execution" },
    { num: "05", name: "REVIEW", desc: "Data telemetry feedback & roadmap recalibration" },
  ];

  return (
    <section
      id="coaches"
      className="relative w-full bg-[#F5F5F0] text-[#050505] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Light Court Line Grid Background */}
      <div className="absolute inset-0 court-grid-light opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[2px] bg-[#276B0B]" />
          <span className="font-mono text-xs tracking-court uppercase text-[#276B0B] font-bold">
            04 / OUR APPROACH
          </span>
          <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
            [INDIVIDUALIZED ROADMAP]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Authentic Net Documentary Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 bg-white border border-neutral-300 shadow-2xl p-2 sm:p-3">
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[14/11]">
                <img
                  src="/assets/images/coach-player.jpg"
                  alt="Lion Elite head coach communicating tactical instructions to player beside the tennis net"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  loading="lazy"
                />
                
                {/* Authentic Net Cord Label */}
                <div className="absolute bottom-3 left-3 bg-[#050505]/90 backdrop-blur-sm text-white px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase border-l-2 border-[#276B0B]">
                  NET-SIDE BRIEFING // REAL-TIME STRATEGY
                </div>
              </div>
            </div>

            {/* Background Graphic Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neutral-300 pointer-events-none -z-0 hidden sm:block" />
          </div>

          {/* Right Column: Editorial Copy & Manifesto */}
          <div className="lg:col-span-6">
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.9] tracking-tighter uppercase text-[#050505] mb-8">
              DIFFERENT PLAYER. <br />
              <span className="text-[#276B0B]">DIFFERENT GAME PLAN.</span>
            </h2>

            <div className="w-20 h-[3px] bg-[#276B0B] mb-8" />

            <p className="font-sans text-lg sm:text-xl text-neutral-800 font-medium leading-relaxed mb-6">
              No two players move, compete or learn exactly the same way. Our coaching approach develops the individual — identifying strengths, correcting weaknesses and building a game that works under pressure.
            </p>

            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              Cookie-cutter academy drilling breeds predictable players. At Lion Elite, every athlete undergoes an initial kinematic assessment followed by a personalized progression protocol. Whether preparing for college tennis scholarships, national junior tournaments, or mastering aggressive baseline tennis, your coaching blueprint is uniquely yours.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#050505] text-white font-display text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:bg-[#276B0B]"
              >
                <span>MEET THE COACHES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                // 1:1 COACH EVALUATIONS AVAILABLE DAILY
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Development Sequence with Animated Connecting Line */}
        <div className="mt-8 pt-6 border-t border-neutral-300">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#276B0B]">
              THE PROGRESSION SEQUENCE // 5-PHASE ATHLETE PROTOCOL
            </h3>
            <span className="font-mono text-[11px] text-neutral-400 uppercase hidden sm:inline">
              CONTINUOUS ROTATIONAL ROADMAP
            </span>
          </div>

          <div className="relative">
            {/* Animated Connecting Horizontal Line */}
            <div className="hidden lg:block absolute top-7 left-8 right-8 h-[2px] bg-neutral-300 z-0">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="h-full bg-[#276B0B]"
              />
            </div>

            {/* Sequence Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={step.num}
                  className="bg-white p-5 border border-neutral-200 shadow-sm relative group hover:border-[#276B0B] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#276B0B] bg-[#276B0B]/10 px-2 py-0.5">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">PHASE</span>
                  </div>

                  <h4 className="font-display text-xl font-bold uppercase text-[#050505] tracking-wide mb-1.5">
                    {step.name}
                  </h4>

                  <p className="font-sans text-xs text-neutral-600 leading-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
