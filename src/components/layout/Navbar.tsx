// src/components/layout/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/8 backdrop-blur-md bg-black/70'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex flex-col gap-0 leading-none"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <span
              className="text-white font-display text-xl tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
            >
              Pinnacle
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.3em] text-[#c8b89a] uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Aerospace
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/50 transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="label-tag">FAA / EASA Certified</span>
            <button
              onClick={() => handleNav('#contact')}
              className="border border-white/20 px-5 py-2 font-mono text-[11px] tracking-[0.15em] uppercase text-white/80 transition-all duration-200 cursor-pointer"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Request Service
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white/70 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-16 flex flex-col"
          >
            <div className="flex flex-col px-6 pt-12 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-5 border-b border-white/6 font-display text-3xl text-white/80 cursor-pointer"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNav('#contact')}
                className="mt-8 border border-white/20 py-4 font-mono text-[11px] tracking-[0.2em] uppercase text-white/70 cursor-pointer"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Request Service
              </motion.button>
            </div>
            <div className="mt-auto px-6 pb-8">
              <p className="label-tag">FAA / EASA Certified Repair Organization</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}