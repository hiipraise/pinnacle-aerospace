'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Award, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeUp, lineExpand } from '@/lib/animations'

const certifications = [
  {
    code: 'CERT-01',
    authority: 'FAA',
    title: 'Federal Aviation Administration',
    designation: 'FAA Part 145 Repair Station',
    number: 'YA0R014L',
    scope: 'Airframe · Powerplant · Propeller · Radio · Instrument · Accessory',
    flag: '🇺🇸',
    flagLabel: 'USA',
  },
  {
    code: 'CERT-02',
    authority: 'EASA',
    title: 'European Union Aviation Safety Agency',
    designation: 'EASA Part 145 Approved Organisation',
    number: 'EASA.145.00742',
    scope: 'Class A · Class B · Class C · Class D',
    flag: '🇪🇺',
    flagLabel: 'EU',
  },
  {
    code: 'CERT-03',
    authority: 'AS9110C',
    title: 'Aerospace Quality Management',
    designation: 'AS9110C Quality System Certified',
    number: 'QMS-9110-3892',
    scope: 'Design · Production · Maintenance · Overhaul',
    flag: null,
    flagLabel: 'IAQG',
  },
]

export default function CertificationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="relative py-24 lg:py-36 overflow-hidden" ref={sectionRef}>
      {/* Subtle vertical lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/3" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-white/3" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-6"
          >
            <Shield size={12} className="text-[#c8b89a]" />
            <span className="label-tag" style={{ color: '#c8b89a' }}>
              Regulatory Compliance
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,5vw,4rem)] text-white leading-tight mb-4"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
          >
            Certified to the
            <br />
            <span className="italic text-white/40">Highest Standards</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/40 font-body text-sm max-w-lg"
          >
            Our certifications represent an unwavering commitment to safety, precision, and regulatory compliance across every operation we perform.
          </motion.p>
        </div>

        {/* Certification badges - prominent display */}
        <motion.div
          className="mb-16 border border-[#c8b89a]/20 p-6 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16">
            <div className="flex flex-col items-center text-center gap-2">
              <span
                className="font-display text-[clamp(1.8rem,4vw,3rem)] text-[#c8b89a] tracking-widest"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                FAA
              </span>
              <span className="label-tag text-[9px]">Part 145 Certified</span>
              <span className="font-mono text-[10px] text-white/30">Repair Station</span>
            </div>

            <div className="hidden lg:block w-px h-16 bg-white/10" />
            <div className="block lg:hidden h-px w-16 bg-white/10" />

            <div className="flex flex-col items-center text-center gap-2">
              <span
                className="font-display text-[clamp(1.8rem,4vw,3rem)] text-[#c8b89a] tracking-widest"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                EASA
              </span>
              <span className="label-tag text-[9px]">Part 145 Approved</span>
              <span className="font-mono text-[10px] text-white/30">Maintenance Organisation</span>
            </div>

            <div className="hidden lg:block w-px h-16 bg-white/10" />
            <div className="block lg:hidden h-px w-16 bg-white/10" />

            <div className="flex flex-col items-center text-center gap-2">
              <span
                className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-[#c8b89a] tracking-widest"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                AS9110C
              </span>
              <span className="label-tag text-[9px]">Quality Management</span>
              <span className="font-mono text-[10px] text-white/30">Aviation MRO Certified</span>
            </div>
          </div>
        </motion.div>

        {/* Detailed cert cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.code}
              variants={fadeUp}
              className="bg-[#0a0a0a] p-8 border-t border-white/6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="label-tag mb-2 block">{cert.code}</span>
                  <span
                    className="font-display text-3xl text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {cert.authority}
                  </span>
                </div>
                <Award size={18} className="text-[#c8b89a] mt-1" />
              </div>

              <div className="h-px bg-white/6 w-full" />

              <div>
                <p className="font-body text-white/70 text-sm font-medium mb-1">{cert.designation}</p>
                <p className="label-tag">No: {cert.number}</p>
              </div>

              <div className="mt-auto">
                <p className="label-tag mb-2">Scope of Approval</p>
                <p className="font-mono text-[11px] text-white/40 leading-relaxed">{cert.scope}</p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/4">
                <CheckCircle size={12} className="text-[#c8b89a]" />
                <span className="label-tag text-[9px]" style={{ color: '#c8b89a' }}>
                  Certificate Active · Current
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}