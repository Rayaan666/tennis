/**
 * Locations Data Architecture for Lion Elite Tennis Academy
 * Structured as an expandable array for future multi-location scalability.
 */

export const locationsData = [
  {
    id: "al-jaddaf",
    number: "01",
    name: "Lion Elite Tennis Academy",
    badge: "MAIN TRAINING LOCATION",
    venue: "Swiss International Scientific School in Dubai",
    address: "Dubai Healthcare City, Phase 2, Al Jaddaf, Dubai, United Arab Emirates.",
    shortAddress: "Al Jaddaf, Dubai, UAE",
    city: "Dubai",
    country: "UAE",
    area: "Al Jaddaf",
    subDistrict: "Dubai Healthcare City, Phase 2",
    coordinates: {
      lat: 25.2094,
      lng: 55.3327,
      display: "25°12'34\" N, 55°19'58\" E",
    },
    heroImage: "/locations/hero-court.jpg",
    facilityImage: "/locations/facility-courts.jpg",
    altTextHero: "Lion Elite championship tennis court under bright natural daylight in Dubai with modern architecture",
    altTextFacility: "Lion Elite premier tennis training facility with championship courts at Swiss International Scientific School Dubai",
    googleMapsUrl: "https://maps.app.goo.gl/hrLRsoCudoPXbSHV9?g_st=ac",
    embedMapUrl: "https://maps.google.com/maps?q=Swiss+International+Scientific+School+in+Dubai,+Al+Jaddaf,+Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed",
    description: "Find Lion Elite Tennis Academy at Swiss International Scientific School in Dubai, Al Jaddaf. Explore our tennis coaching programs and get in touch to arrange your training session.",
    displayTags: [
      { label: "LOCATION", value: "AL JADDAF" },
      { label: "CITY", value: "DUBAI" },
      { label: "COUNTRY", value: "UAE" }
    ],
    contactPhone: "+971 4 800 8366",
    contactEmail: "info@lionelitetennis.ae",
    whatsappUrl: "https://wa.me/971500000000?text=Hello%20Lion%20Elite,%20I%20would%20like%20to%20enquire%20about%20tennis%20training%20at%20your%20Al%20Jaddaf%20location."
  }
];

export const getPrimaryLocation = () => locationsData[0];
