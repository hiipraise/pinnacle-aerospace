"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "@/lib/images";

const DIRECTOR = {
  id: 1,
  name: "Anthony Obute",
  title: "Director & Chief Executive Officer",
  credentials: "ATP · MBA",
  bio: "Decades of combined aviation expertise guiding every aspect of our operations. Anthony brings unparalleled leadership and strategic vision to Pinnacle Aerospace.",
};

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const directorImages = [IMAGES.DIRECTOR_1, IMAGES.DIRECTOR_2];

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
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
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
            Decades of combined aviation expertise guiding every aspect of our
            operations.
          </motion.p>
        </div>

        {/* Director layout: two images + info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/6">

          {/* Primary image — larger */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#0a0a0a] relative overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={directorImages[0]}
              alt={`${DIRECTOR.name} — ${DIRECTOR.title}`}
              fill
              className="object-cover object-top"
              style={{ filter: "grayscale(30%) brightness(0.75)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />

            {/* Credentials badge */}
            <div className="absolute top-4 right-4 border border-[#c8b89a]/30 px-3 py-1.5">
              <span
                className="font-mono text-[10px] tracking-widest text-[#c8b89a]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {DIRECTOR.credentials}
              </span>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-[#0a0a0a] p-8 lg:p-12 flex flex-col justify-center gap-6"
          >
            <div>
              <h3
                className="font-display text-4xl text-white mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {DIRECTOR.name}
              </h3>
              <p className="label-tag" style={{ color: "#c8b89a" }}>
                {DIRECTOR.title}
              </p>
            </div>

            <div className="h-px bg-white/6" />

            <p className="font-body text-white/45 text-sm leading-relaxed">
              {DIRECTOR.bio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="h-px flex-1 bg-white/6" />
              <span className="label-tag text-[9px]">
                Pinnacle Aerospace · {DIRECTOR.credentials}
              </span>
            </div>
          </motion.div>

          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-[#0a0a0a] relative overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={directorImages[1]}
              alt={`${DIRECTOR.name}`}
              fill
              className="object-cover object-center"
              style={{ filter: "grayscale(50%) brightness(0.6)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/60" />

            {/* Subtle name watermark */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <span
                className="font-mono text-[9px] tracking-[0.3em] text-white/25 uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {DIRECTOR.name}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
