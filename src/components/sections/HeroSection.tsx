"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { SITE_CONFIG } from "@/lib/data";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, opacity: imageOpacity }}
      >
        <Image
          src={IMAGES.HERO_AIRCRAFT}
          alt="Aircraft hangar — Pinnacle Aerospace"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          style={{ filter: "brightness(0.35) contrast(1.1)" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/20" />
      </motion.div>

      {/* Technical overlay lines */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/3" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/3" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-end px-6 lg:px-12 pb-20 pt-32 max-w-[1440px] mx-auto w-full"
        style={{ y: textY }}
      >
        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-10 bg-[#c8b89a]" />
          <span className="label-tag" style={{ color: "#c8b89a" }}>
            FAA Part 145 · EASA Part 145 Certified
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Pinnacle
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.92] text-white/30 tracking-tight italic"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Aerospace
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-white/15 w-full max-w-xl mb-8 origin-left"
        />

        {/* Subtext row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
            className="font-body text-white/55 text-base max-w-md leading-relaxed"
          >
            {SITE_CONFIG.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={scrollToServices}
              className="border border-white/25 px-8 py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-white/80 cursor-pointer transition-colors duration-200"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Explore Services
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#c8b89a] px-8 py-3.5 font-mono text-[11px] tracking-[0.2em] uppercase text-black cursor-pointer"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Request Quote
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={scrollToServices}
          className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2 cursor-pointer"
        >
          <span
            className="label-tag"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.25em" }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} className="text-white/30" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="relative z-10 border-t border-white/8"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {[
            { val: "20+", desc: "Years of Excellence" },
            { val: "4,000+", desc: "Aircraft Serviced" },
            { val: "120+", desc: "Certified Technicians" },
            { val: "98.7%", desc: "On-Time Delivery" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#0a0a0a] px-6 py-4 flex flex-col gap-1">
              <span
                className="font-display text-2xl text-white"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {stat.val}
              </span>
              <span className="label-tag text-[9px]">{stat.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
