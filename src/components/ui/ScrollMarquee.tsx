// src/components/ui/ScrollMarquee.tsx
'use client'

import { motion } from 'framer-motion'

const items = [
  'FAA Part 145 Certified',
  'EASA Part 145 Approved',
  'A Check',
  'B Check',
  'C Check',
  'D Check',
  'Engine Overhaul',
  'Avionics Upgrade',
  'ADS-B Compliance',
  'NDT Testing',
  'Composite Repair',
  'AS9110C Quality',
  'Airworthiness Certification',
  'STC Development',
  'Custom Engineering',
]

export default function ScrollMarquee() {
  const doubled = [...items, ...items]

  return (
    <div className="relative py-5 overflow-hidden border-t border-b border-white/6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {item}
            </span>
            <span className="w-1 h-1 bg-[#c8b89a]/40 flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}