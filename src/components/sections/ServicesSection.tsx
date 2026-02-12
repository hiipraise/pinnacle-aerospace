"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Zap,
  Search,
  Settings,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

const serviceIcons = [
  <Wrench size={18} key="w" />,
  <Settings size={18} key="s" />,
  <Zap size={18} key="z" />,
  <Search size={18} key="sr" />,
  <ChevronRight size={18} key="c" />,
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 lg:py-36" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-6 bg-[#c8b89a]" />
              <span className="label-tag" style={{ color: "#c8b89a" }}>
                Our Capabilities
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
              Engineering
              <br />
              <span className="italic text-white/40">Services</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-white/40 text-sm max-w-xs leading-relaxed lg:pb-1"
          >
            Five integrated service lines delivered by FAA and EASA certified
            personnel to the highest aviation standards.
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll on mobile / grid on desktop */}
      {/* Mobile: horizontal scroll */}
      <div className="lg:hidden">
        <div
          ref={scrollRef}
          className="horizontal-scroll-container flex gap-px pl-6 pr-6"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="horizontal-scroll-item bg-[#111111] border border-white/6 flex flex-col gap-5 p-6"
              style={{
                width: "min(85vw, 340px)",
                minWidth: "min(85vw, 340px)",
              }}
            >
              <div className="flex items-start justify-between">
                <div className="text-[#c8b89a]">{serviceIcons[i]}</div>
                <span className="label-tag">{service.code}</span>
              </div>

              <div>
                <h3
                  className="font-display text-2xl text-white mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p className="label-tag">{service.subtitle}</p>
              </div>

              <div className="h-px bg-white/6" />

              <p className="font-body text-white/45 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="flex flex-col gap-2">
                {service.features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#c8b89a]" />
                    <span className="font-mono text-[11px] text-white/40">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Scroll hint */}
        <div className="flex items-center gap-2 px-6 mt-4">
          <div className="h-px flex-1 bg-white/6" />
          <span className="label-tag text-[9px]">Scroll to explore</span>
          <ArrowRight size={10} className="text-white/30" />
        </div>
      </div>

      {/* Desktop: full grid */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-12">
        {/* Top row: 3 services */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-px bg-white/6 mb-px"
        >
          {SERVICES.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="bg-[#0a0a0a] p-10 flex flex-col gap-6 min-h-[420px]"
            >
              <div className="flex items-start justify-between">
                <div className="text-[#c8b89a]">{serviceIcons[i]}</div>
                <span className="label-tag">{service.code}</span>
              </div>

              <div>
                <h3
                  className="font-display text-3xl text-white mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p className="label-tag">{service.subtitle}</p>
              </div>

              <div className="h-px bg-white/6" />

              <p className="font-body text-white/45 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#c8b89a] flex-shrink-0" />
                    <span className="font-mono text-[10px] text-white/40 leading-snug">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: 2 services + contact CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-px bg-white/6"
        >
          {SERVICES.slice(3, 5).map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="bg-[#0a0a0a] p-10 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <div className="text-[#c8b89a]">{serviceIcons[i + 3]}</div>
                <span className="label-tag">{service.code}</span>
              </div>

              <div>
                <h3
                  className="font-display text-3xl text-white mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {service.title}
                </h3>
                <p className="label-tag">{service.subtitle}</p>
              </div>

              <div className="h-px bg-white/6" />

              <p className="font-body text-white/45 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#c8b89a] flex-shrink-0" />
                    <span className="font-mono text-[10px] text-white/40 leading-snug">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA tile */}
          <motion.div
            variants={fadeUp}
            className="bg-[#c8b89a] p-10 flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <span className="label-tag" style={{ color: "rgba(0,0,0,0.5)" }}>
                All Services
              </span>
              <h3
                className="font-display text-4xl text-black mt-4 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Ready to fly?
              </h3>
            </div>

            <div>
              <p className="font-body text-black/60 text-sm mb-8 leading-relaxed">
                Contact our operations team to discuss your maintenance
                requirements and schedule a service.
              </p>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-3 border border-black/20 px-6 py-3 font-mono text-[11px] tracking-[0.15em] uppercase text-black cursor-pointer"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Request Service
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
