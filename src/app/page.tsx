// src/app/page.tsx
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Footer from "@/components/layout/Footer";
import HomeClient from "@/components/HomeClient";

// Server-safe dynamic imports
const CertificationSection = dynamic(
  () => import("@/components/sections/CertificationSection"),
);
const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
);
const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection"),
);
const LeadershipSection = dynamic(
  () => import("@/components/sections/LeadershipSection"),
);
const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection"),
);

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] pt-16">

      {/* Navigation */}
      <Navbar />

      {/* Client-only components */}
      <HomeClient />

      {/* Sections */}
      <HeroSection />

      <CertificationSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <LeadershipSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
