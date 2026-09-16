import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems } from '../data/galleryData';
import { ArrowRight, Maximize2, X, Camera } from 'lucide-react';

export default function GallerySection({ onOpenBooking }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#050505] text-[#F5F5F0] py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-white/10"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 court-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#276B0B]" />
              <span className="font-mono text-xs tracking-court uppercase text-[#276B0B] font-semibold">
                05 / ACADEMY LIFE
              </span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-none">
              INSIDE <span className="text-[#276B0B]">THE LINES.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#B9B9B9] uppercase tracking-wider hidden lg:inline">
              // ARCHIVAL DOCUMENTARY SPORTS PHOTOGRAPHY
            </span>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-[#276B0B] text-white hover:text-[#050505] font-display text-xs font-bold uppercase tracking-wider transition-colors border border-white/10 hover:border-[#276B0B]"
            >
              <span>VIEW THE ACADEMY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Unconventional Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          
          {/* Item 0: Kinetic Compression (Extreme Macro Strings) - 7 cols */}
          <div
            onClick={() => setLightboxImage(galleryItems[0])}
            className="md:col-span-7 relative group overflow-hidden bg-[#111111] border border-white/10 cursor-pointer aspect-[16/10]"
          >
            <img
              src={galleryItems[0].image}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Number Tag */}
            <div className="absolute top-4 left-4 bg-[#050505]/90 px-3 py-1 font-mono text-[10px] text-[#276B0B] uppercase tracking-wider border-l border-[#276B0B]">
              PLATE 01 // HIGH SPEED MACRO
            </div>
            {/* Inset Hover Telemetry */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="font-mono text-xs text-[#276B0B] uppercase tracking-widest">{galleryItems[0].specs.shutter} • {galleryItems[0].specs.focal}</span>
              <h4 className="font-display text-2xl uppercase font-bold text-white tracking-wide">{galleryItems[0].title}</h4>
              <p className="text-xs text-neutral-300 font-sans mt-1">{galleryItems[0].subtitle}</p>
            </div>
          </div>

          {/* Item 1: Geometry of the Serve (Aerial Clay Serve) - 5 cols tall portrait */}
          <div
            onClick={() => setLightboxImage(galleryItems[1])}
            className="md:col-span-5 relative group overflow-hidden bg-[#111111] border border-white/10 cursor-pointer aspect-[4/5] md:aspect-auto md:h-full"
          >
            <img
              src={galleryItems[1].image}
              alt={galleryItems[1].title}
              className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#050505]/90 px-3 py-1 font-mono text-[10px] text-[#276B0B] uppercase tracking-wider border-l border-[#276B0B]">
              PLATE 02 // AERIAL PERSPECTIVE
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <span className="font-mono text-xs text-[#276B0B] uppercase tracking-widest">{galleryItems[1].specs.location}</span>
              <h4 className="font-display text-2xl uppercase font-bold text-white tracking-wide">{galleryItems[1].title}</h4>
              <p className="text-xs text-neutral-300 font-sans mt-1">{galleryItems[1].subtitle}</p>
            </div>
          </div>

          {/* Item 2: Running Forehand Action - 4 cols */}
          <div
            onClick={() => setLightboxImage(galleryItems[2])}
            className="md:col-span-4 relative group overflow-hidden bg-[#111111] border border-white/10 cursor-pointer aspect-square"
          >
            <img
              src={galleryItems[2].image}
              alt={galleryItems[2].title}
              className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#050505]/90 px-3 py-1 font-mono text-[10px] text-[#276B0B] uppercase tracking-wider border-l border-[#276B0B]">
              PLATE 03 // ACTION
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
              <h4 className="font-display text-xl uppercase font-bold text-white tracking-wide">{galleryItems[2].title}</h4>
              <p className="text-xs text-neutral-300 font-sans">{galleryItems[2].subtitle}</p>
            </div>
          </div>

          {/* Item 3: Net Strings Detail - 4 cols */}
          <div
            onClick={() => setLightboxImage(galleryItems[3])}
            className="md:col-span-4 relative group overflow-hidden bg-[#111111] border border-white/10 cursor-pointer aspect-square"
          >
            <img
              src={galleryItems[3].image}
              alt={galleryItems[3].title}
              className="w-full h-full object-cover filter contrast-105 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#050505]/90 px-3 py-1 font-mono text-[10px] text-[#276B0B] uppercase tracking-wider border-l border-[#276B0B]">
              PLATE 04 // NET DETAIL
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
              <h4 className="font-display text-xl uppercase font-bold text-white tracking-wide">{galleryItems[3].title}</h4>
              <p className="text-xs text-neutral-300 font-sans">{galleryItems[3].subtitle}</p>
            </div>
          </div>

          {/* Item 4: Post-Set Seated Focus - 4 cols */}
          <div
            onClick={() => setLightboxImage(galleryItems[4])}
            className="md:col-span-4 relative group overflow-hidden bg-[#111111] border border-white/10 cursor-pointer aspect-square"
          >
            <img
              src={galleryItems[4].image}
              alt={galleryItems[4].title}
              className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-[#050505]/90 px-3 py-1 font-mono text-[10px] text-[#276B0B] uppercase tracking-wider border-l border-[#276B0B]">
              PLATE 05 // ATMOSPHERE
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
              <h4 className="font-display text-xl uppercase font-bold text-white tracking-wide">{galleryItems[4].title}</h4>
              <p className="text-xs text-neutral-300 font-sans">{galleryItems[4].subtitle}</p>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#111] border border-white/20 p-4 sm:p-6"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-white hover:text-[#276B0B] p-2 bg-black/50"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-[16/10] overflow-hidden mb-4 bg-black">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs border-t border-white/10 pt-4">
                <div>
                  <h4 className="font-display text-xl uppercase font-bold text-white">{lightboxImage.title}</h4>
                  <p className="text-neutral-400 font-sans text-xs">{lightboxImage.subtitle}</p>
                </div>
                <div className="text-right text-[#276B0B]">
                  <span>{lightboxImage.specs.location} // {lightboxImage.specs.shutter}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
