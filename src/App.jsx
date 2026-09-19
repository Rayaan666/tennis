import React, { useState, useEffect } from 'react';
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
import AboutPage from './components/about/AboutPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedProgramId, setPreselectedProgramId] = useState("junior-dev");

  // Determine initial route based on browser URL or hash
  const getInitialRoute = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path === '/about' || path.startsWith('/about/') || hash === '#about' || hash === '#/about') {
      return 'about';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialRoute);

  // Sync with browser history back/forward button events
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/about' || path.startsWith('/about/') || hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Central zero-reload navigation handler
  const handleNavigate = (target) => {
    if (target === '/about' || target === '#about') {
      if (window.location.pathname !== '/about') {
        window.history.pushState({}, '', '/about');
      }
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Home page route or section anchor
      const parts = target.split('#');
      const hash = parts[1];
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
      }
      setCurrentPage('home');

      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (programId = "junior-dev") => {
    setPreselectedProgramId(programId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F0F4F8] overflow-x-hidden selection:bg-[#8DF000] selection:text-[#050505]">
      {/* Global Navigation - Shared across pages, ABOUT active on /about */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking("junior-dev")} 
        activePage={currentPage === 'about' ? 'ABOUT' : 'HOME'}
        onNavigate={handleNavigate}
      />

      {/* Conditionally Render Dedicated About Page OR Complete Unmodified Homepage */}
      {currentPage === 'about' ? (
        /* DEDICATED ABOUT PAGE AT /about (11 Editorial Sections) */
        <AboutPage 
          onOpenBooking={handleOpenBooking} 
          onNavigate={handleNavigate}
        />
      ) : (
        /* COMPLETE HOMEPAGE (Preserved 100% Unmodified) */
        <>
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
        </>
      )}

      {/* Global Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking("junior-dev")} 
        onNavigate={handleNavigate}
      />

      {/* Interactive Booking Modal Drawer */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedProgramId={preselectedProgramId}
      />
    </div>
  );
}
