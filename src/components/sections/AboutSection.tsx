'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '@/lib/images'
import { SITE_CONFIG } from '@/lib/data'
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '@/lib/animations'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.012] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="h-px w-6 bg-[#c8b89a]" />
          <span className="label-tag" style={{ color: '#c8b89a' }}>
            About Pinnacle Aerospace
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2
              className="font-display text-[clamp(2.2rem,5vw,4.5rem)] text-white leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Precision
              <br />
              <span className="italic text-white/35">above all else</span>
            </h2>

            <div className="h-px bg-white/8 mb-8" />

            <p className="font-body text-white/55 text-base leading-relaxed mb-6">
              Founded in {SITE_CONFIG.founded}, Pinnacle Aerospace has operated at the forefront of
              aircraft maintenance and engineering. From our state-of-the-art hangar complex, we
              deliver maintenance, repair, and overhaul services to operators across commercial,
              corporate, and government aviation sectors.
            </p>

            <p className="font-body text-white/40 text-sm leading-relaxed mb-10">
              Every task we perform — from a routine line inspection to a full-scope D check — is
              executed under the authority of our FAA and EASA certifications, with approved
              procedures, qualified personnel, and a zero-tolerance policy for safety deviation.
            </p>

            {/* Values row */}
            <div className="grid grid-cols-3 gap-px bg-white/6">
              {[
                { label: 'Safety', value: 'First' },
                { label: 'Quality', value: 'Assured' },
                { label: 'Integrity', value: 'Always' },
              ].map((v) => (
                <div key={v.label} className="bg-[#0a0a0a] px-4 py-5 flex flex-col gap-1">
                  <span
                    className="font-display text-xl text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {v.value}
                  </span>
                  <span className="label-tag text-[9px]">{v.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-3"
          >
            {/* Main image with parallax */}
            <div ref={imgRef} className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <motion.div className="absolute inset-0" style={{ y: imgY }}>
                <Image
                  src={IMAGES.FACILITY_INTERIOR}
                  alt="Pinnacle Aerospace facility interior"
                  fill
                  className="object-cover"
                  style={{ filter: 'brightness(0.7) contrast(1.05)' }}
                />
              </motion.div>
              {/* Image overlay label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="label-tag">Main Hangar Complex · Atlanta, GA</span>
              </div>
            </div>

            {/* Two smaller images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={IMAGES.ENGINEER_1}
                  alt="Aircraft maintenance engineer"
                  fill
                  className="object-cover"
                  style={{ filter: 'brightness(0.65)' }}
                />
              </div>
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={IMAGES.AIRCRAFT_MAINTENANCE}
                  alt="Aircraft undergoing maintenance"
                  fill
                  className="object-cover"
                  style={{ filter: 'brightness(0.65)' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom feature row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6"
        >
          {[
            {
              title: 'Approved Quality System',
              desc: 'AS9110C certified quality management system governing every maintenance activity.',
            },
            {
              title: 'OEM Trained Personnel',
              desc: 'Type-rated and OEM-trained technicians for all major aircraft platforms.',
            },
            {
              title: 'Tooling & Equipment',
              desc: 'Full calibrated tooling inventory meeting manufacturer specifications.',
            },
            {
              title: 'Parts Traceability',
              desc: '100% parts traceability and airworthiness documentation on every job.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-[#0a0a0a] p-8 flex flex-col gap-3"
            >
              <div className="w-1 h-5 bg-[#c8b89a]" />
              <h4
                className="font-body text-white text-sm font-medium leading-snug"
              >
                {item.title}
              </h4>
              <p className="font-body text-white/35 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}