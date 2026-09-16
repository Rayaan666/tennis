import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import InteractiveCourtPrograms from './components/InteractiveCourtPrograms';
import PhilosophySection from './components/PhilosophySection';
import CoachingSection from './components/CoachingSection';
import ExperienceSection from './components/ExperienceSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedProgramId, setPreselectedProgramId] = useState("junior-dev");

  const handleOpenBooking = (programId = "junior-dev") => {
    setPreselectedProgramId(programId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F0F4F8] overflow-x-hidden selection:bg-[#8DF000] selection:text-[#050505]">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking("junior-dev")} />

      {/* 01 — HERO (Cinematic Full-Viewport) */}
      <HeroSection onOpenBooking={() => handleOpenBooking("junior-dev")} />

      {/* 02 — INTRODUCTION (Off-White Magazine Editorial) */}
      <IntroSection onOpenBooking={() => handleOpenBooking("junior-dev")} />

      {/* 03 — PROGRAMS (Signature Interactive Overhead Tennis Court) */}
      <InteractiveCourtPrograms onOpenBooking={handleOpenBooking} />

      {/* 04 — PERFORMANCE PHILOSOPHY (Tactical Tennis Visualization) */}
      <PhilosophySection onOpenBooking={() => handleOpenBooking("high-performance")} />

      {/* 05 — COACHING (Warm Off-White Documentary Approach) */}
      <CoachingSection onOpenBooking={() => handleOpenBooking("private-coaching")} />

      {/* 06 — IMMERSIVE BRAND MOMENT (Cinematic Storytelling) */}
      <ExperienceSection />

      {/* 07 — INSIDE THE LINES (Asymmetric Editorial Photography Gallery) */}
      <GallerySection onOpenBooking={() => handleOpenBooking("junior-dev")} />

      {/* 09 — TESTIMONIALS (Off-White Baseline Slider with Travelling Ball) */}
      <TestimonialsSection />

      {/* 10 — FINAL CTA (Dramatic Night Court with Floodlights) */}
      <FinalCtaSection onOpenBooking={() => handleOpenBooking("junior-dev")} />

      {/* FOOTER (Geometric Court Motif, Dubai Coordinates, Links) */}
      <Footer onOpenBooking={() => handleOpenBooking("junior-dev")} />

      {/* Interactive Booking Modal Drawer */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedProgramId={preselectedProgramId}
      />
    </div>
  );
}
