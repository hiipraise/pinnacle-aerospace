'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '@/lib/data'

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8" ref={ref}>
      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="mb-6">
              <span
                className="block font-display text-3xl text-white tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 300, letterSpacing: '0.15em' }}
              >
                Pinnacle
              </span>
              <span
                className="block font-mono text-[10px] tracking-[0.35em] text-[#c8b89a] uppercase mt-1"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Aerospace
              </span>
            </div>

            <p className="font-body text-white/35 text-sm leading-relaxed mb-8 max-w-xs">
              FAA and EASA certified aircraft maintenance, repair, and overhaul organization.
              Delivering precision engineering for aviation since {SITE_CONFIG.founded}.
            </p>

            {/* Cert badges */}
            <div className="flex flex-wrap gap-2">
              {SITE_CONFIG.certifications.map((cert) => (
                <span
                  key={cert}
                  className="cert-badge font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="label-tag mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <h4 className="label-tag mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="font-body text-sm text-white/40 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h4 className="label-tag mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <span className="label-tag text-[9px] block mb-1">Email</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-mono text-xs text-white/50 break-all"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="label-tag text-[9px] block mb-1">Address</span>
                <address className="font-body text-xs text-white/35 not-italic leading-relaxed">
                  {SITE_CONFIG.address.line1}<br />
                  {SITE_CONFIG.address.line2}<br />
                  {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                </address>
              </div>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/15 px-5 py-2.5 font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 w-fit cursor-pointer mt-2"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Request Service
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="label-tag text-[9px]">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="label-tag text-[9px]">FAA Cert No: YA0R014L</span>
            <span className="label-tag text-[9px]">EASA Cert No: EASA.145.00742</span>
          </div>
        </div>
      </div>
    </footer>
  )
}