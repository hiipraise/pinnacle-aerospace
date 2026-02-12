"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "@/lib/images";

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const director = {
    name: "Anthony Obute",
    title: "Managing Director",
    credentials: "FAA · EASA",
    bio: "Anthony Obute brings over two decades of aviation leadership experience across aircraft maintenance, regulatory compliance, and operational excellence. His strategic direction ensures Pinnacle Aerospace maintains the highest standards of safety, quality, and technical precision.",
  };

  return (
    <section
      id="leadership"
      className="relative py-24 lg:py-36 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px bg-white/4 hidden lg:block"
        style={{ left: "8.33%" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-6 bg-[#c8b89a]" />
              <span className="label-tag" style={{ color: "#c8b89a" }}>
                Senior Leadership
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[clamp(2rem,5vw,4rem)] text-white leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              Our
              <br />
              <span className="italic text-white/40">Director</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white/40 text-sm max-w-xs leading-relaxed"
          >
            Strategic leadership guiding every aspect of our aviation operations.
          </motion.p>
        </div>

        {/* Director Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/6"
        >
          {/* Left: Images */}
          <div className="bg-[#0a0a0a] grid grid-cols-1 gap-3 p-3">
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
              <Image
                src={IMAGES.DIRECTOR_1}
                alt="Anthony Obute portrait"
                fill
                className="object-cover object-top"
                style={{ filter: "grayscale(30%) brightness(0.75)" }}
              />
            </div>

            <div className="relative overflow-hidden" style={{ aspectRatio: "3/2" }}>
              <Image
                src={IMAGES.DIRECTOR_2}
                alt="Anthony Obute professional"
                fill
                className="object-cover object-top"
                style={{ filter: "grayscale(30%) brightness(0.75)" }}
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="bg-[#0a0a0a] p-10 flex flex-col gap-6">
            <div>
              <h3
                className="font-display text-3xl text-white mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {director.name}
              </h3>
              <p className="label-tag" style={{ color: "#c8b89a" }}>
                {director.title}
              </p>
            </div>

            <div className="h-px bg-white/6" />

            <p className="font-body text-white/45 text-sm leading-relaxed">
              {director.bio}
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="h-px flex-1 bg-white/6" />
              <span className="label-tag text-[9px] text-[#c8b89a]">
                Pinnacle Aerospace · {director.credentials}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
