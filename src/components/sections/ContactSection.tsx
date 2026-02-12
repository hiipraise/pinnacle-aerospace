'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/animations'

type FormState = {
  name: string
  company: string
  email: string
  service: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const SERVICE_OPTIONS = [
  'Aircraft Maintenance (A/B/C/D Checks)',
  'Aircraft Repairs & Overhaul',
  'Avionics & Electrical Systems',
  'Inspectors & Certification Services',
  'Custom Engineering Solutions',
  'General Inquiry',
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', company: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'An error occurred. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden" ref={sectionRef}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/6" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-[#c8b89a]" />
              <span className="label-tag" style={{ color: '#c8b89a' }}>
                Get In Touch
              </span>
            </div>

            <h2
              className="font-display text-[clamp(2rem,5vw,4rem)] text-white leading-tight mb-8"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}
            >
              Request a
              <br />
              <span className="italic text-white/40">Service</span>
            </h2>

            <div className="h-px bg-white/8 mb-8" />

            <p className="font-body text-white/45 text-sm leading-relaxed mb-10">
              Contact our operations team to discuss your maintenance requirements, request a
              quote, or schedule an aircraft inspection. We respond to all inquiries within 24
              business hours.
            </p>

            {/* Contact detail */}
            <div className="border border-white/8 p-6 flex flex-col gap-4">
              <span className="label-tag">Operations Contact</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-mono text-sm text-white/80 tracking-wide"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {SITE_CONFIG.email}
              </a>
              <div className="h-px bg-white/6" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="label-tag text-[9px] block mb-1">FAA Auth</span>
                  <span className="font-mono text-[11px] text-white/50">YA0R014L</span>
                </div>
                <div>
                  <span className="label-tag text-[9px] block mb-1">EASA Auth</span>
                  <span className="font-mono text-[11px] text-white/50">EASA.145.00742</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-6">
              <span className="label-tag block mb-2">Facility Address</span>
              <address className="font-body text-white/35 text-sm not-italic leading-relaxed">
                {SITE_CONFIG.address.line1}
                <br />
                {SITE_CONFIG.address.line2}
                <br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state}{' '}
                {SITE_CONFIG.address.zip}
                <br />
                {SITE_CONFIG.address.country}
              </address>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="border border-[#c8b89a]/30 p-10 flex flex-col items-start gap-5 min-h-[500px] justify-center"
                >
                  <CheckCircle size={32} className="text-[#c8b89a]" />
                  <div>
                    <h3
                      className="font-display text-3xl text-white mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Inquiry Received
                    </h3>
                    <p className="font-body text-white/45 text-sm leading-relaxed max-w-sm">
                      Thank you for reaching out. Our operations team will review your
                      request and respond within 24 business hours.
                    </p>
                  </div>
                  <div className="h-px w-full bg-white/8 mt-4" />
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 border border-white/15 px-5 py-2.5 cursor-pointer"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="label-tag">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="input-base"
                        autoComplete="name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="label-tag">Company / Operator</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Airline or company name"
                        className="input-base"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="label-tag">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="operations@yourcompany.com"
                      className="input-base"
                      autoComplete="email"
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label className="label-tag">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="input-base bg-[#0a0a0a]"
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select a service category</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: '#0a0a0a' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="label-tag">Message & Details *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your aircraft type, registration, required service, and any relevant details..."
                      className="input-base resize-none"
                    />
                  </div>

                  {/* Error message */}
                  <AnimatePresence>
                    {status === 'error' && errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 border border-red-900/40 px-4 py-3"
                      >
                        <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                        <span className="font-mono text-[11px] text-red-400">{errorMessage}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Disclaimer */}
                  <p className="font-mono text-[10px] text-white/25 leading-relaxed">
                    By submitting this form you consent to Pinnacle Aerospace processing your inquiry.
                    All communications are treated with strict confidentiality.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-mono text-[11px] tracking-[0.2em] uppercase cursor-pointer mt-2 disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Loader size={13} />
                        </motion.div>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        <Send size={13} />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}