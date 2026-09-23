import React, { useEffect } from 'react';
import { getPrimaryLocation } from '../../data/locationsData';
import LocationsHero from './LocationsHero';
import LocationShowcase from './LocationShowcase';
import LocationMap from './LocationMap';
import LocationFinalCta from './LocationFinalCta';

export default function LocationsPage({ onOpenBooking, onNavigate }) {
  const primaryLocation = getPrimaryLocation();

  // Dynamic SEO, Canonical & JSON-LD Structured Data Lifecycle
  useEffect(() => {
    // Scroll to top upon navigation to /locations
    window.scrollTo(0, 0);

    // Save previous document attributes for clean cleanup
    const prevTitle = document.title;
    document.title = "Tennis Academy Location Dubai | Lion Elite Tennis Academy";

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Find Lion Elite Tennis Academy in Al Jaddaf, Dubai. Explore our training location, get directions and enquire about professional tennis coaching.'
      );
    }

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const prevKeywords = metaKeywords ? metaKeywords.getAttribute('content') : '';
    if (metaKeywords) {
      metaKeywords.setAttribute(
        'content',
        'Tennis Academy Al Jaddaf, Tennis Coaching Al Jaddaf, Tennis Academy Dubai, Tennis Lessons Dubai, Tennis Training Dubai, Tennis Academy Location Dubai'
      );
    }

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical ? canonical.getAttribute('href') : '';
    if (canonical) {
      canonical.setAttribute('href', 'https://lionelitetennis.ae/locations');
    }

    // Open Graph Metadata
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Tennis Academy Location Dubai | Lion Elite Tennis Academy');
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', 'Find Lion Elite Tennis Academy in Al Jaddaf, Dubai. Explore our training location, get directions and enquire about professional tennis coaching.');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', 'https://lionelitetennis.ae/locations');

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', 'https://lionelitetennis.ae/locations/hero-court.jpg');

    // LocalBusiness / SportsActivityLocation Structured Data (JSON-LD)
    const scriptId = 'locations-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["SportsActivityLocation", "LocalBusiness"],
        "@id": "https://lionelitetennis.ae/locations#sisd-jaddaf",
        "name": primaryLocation.name,
        "alternateName": "Lion Elite Tennis Academy Al Jaddaf Dubai",
        "description": "Premier professional tennis academy training location at Swiss International Scientific School in Al Jaddaf, Dubai. Offering tournament-grade tennis coaching, junior player pathways, and adult private coaching.",
        "url": "https://lionelitetennis.ae/locations",
        "telephone": primaryLocation.contactPhone,
        "email": primaryLocation.contactEmail,
        "containedInPlace": {
          "@type": "Place",
          "name": primaryLocation.venue,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": primaryLocation.address,
            "addressLocality": primaryLocation.city,
            "addressRegion": "Dubai",
            "addressCountry": primaryLocation.country
          }
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": primaryLocation.address,
          "addressLocality": primaryLocation.city,
          "addressRegion": "Dubai",
          "addressCountry": primaryLocation.country
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": primaryLocation.coordinates.lat,
          "longitude": primaryLocation.coordinates.lng
        },
        "hasMap": primaryLocation.googleMapsUrl,
        "sport": "Tennis",
        "priceRange": "$$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "06:00",
            "closes": "23:00"
          }
        ],
        "keywords": "Tennis Academy Al Jaddaf, Tennis Coaching Al Jaddaf, Tennis Academy Dubai, Tennis Lessons Dubai, Tennis Training Dubai, Tennis Academy Location Dubai",
        "image": "https://lionelitetennis.ae/locations/hero-court.jpg"
      });
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) metaDesc.setAttribute('content', prevDesc);
      if (metaKeywords && prevKeywords) metaKeywords.setAttribute('content', prevKeywords);
      if (canonical && prevCanonical) canonical.setAttribute('href', prevCanonical);
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [primaryLocation]);

  return (
    <main 
      className="relative w-full bg-[#050505] text-[#F5F5F0] overflow-x-hidden selection:bg-[#8CE600] selection:text-[#050505]"
      aria-label="Lion Elite Tennis Academy Dubai Locations Page"
    >
      {/* 01 — HERO: FIND YOUR COURT */}
      <LocationsHero 
        location={primaryLocation} 
        onExploreClick={() => {
          const el = document.getElementById('our-location');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 02 — OUR LOCATION: LOCATION SHOWCASE */}
      <LocationShowcase 
        location={primaryLocation} 
        onOpenBooking={onOpenBooking}
      />

      {/* 03 — INTERACTIVE MAP */}
      <LocationMap 
        location={primaryLocation} 
      />

      {/* 04 — FINAL CTA */}
      <LocationFinalCta 
        onOpenBooking={onOpenBooking} 
        onNavigate={onNavigate}
      />
    </main>
  );
}
