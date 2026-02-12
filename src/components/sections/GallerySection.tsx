'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { IMAGES } from '@/lib/images'

const galleryItems = [
  {
    src: IMAGES.AIRCRAFT_HANGAR_1,
    alt: 'Aircraft in maintenance hangar',
    label: 'Hangar Operations',
    code: 'OPS-01',
    span: 'col-span-2',
  },
  {
    src: IMAGES.ENGINEER_2,
    alt: 'Avionics technician at work',
    label: 'Avionics Servicing',
    code: 'OPS-02',
    span: 'col-span-1',
  },
  {
    src: IMAGES.SERVICE_AVIONICS,
    alt: 'Aircraft avionics systems',
    label: 'Electrical Systems',
    code: 'OPS-03',
    span: 'col-span-1',
  },
  {
    src: IMAGES.AIRCRAFT_OVERHAUL,
    alt: 'Engine overhaul process',
    label: 'Engine Overhaul',
    code: 'OPS-04',
    span: 'col-span-1',
  },
  {
    src: IMAGES.ENGINEER_TEAM,
    alt: 'Maintenance engineering team',
    label: 'Engineering Team',
    code: 'OPS-05',
    span: 'col-span-2',
  },
  {
    src: IMAGES.SERVICE_INSPECTION,
    alt: 'Aircraft inspection process',
    label: 'Inspection & Cert.',
    code: 'OPS-06',
    span: 'col-span-1',
  },
]

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden" ref={sectionRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-6 bg-[#c8b89a]" />
            <span className="label-tag" style={{ color: '#c8b89a' }}>
              Operations Gallery
            </span>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="label-tag hidden lg:block"
          >
            {galleryItems.length} images
          </motion.span>
        </div>

        {/* Desktop mosaic grid */}
        <div className="hidden lg:grid grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden ${item.span}`}
              style={{ aspectRatio: item.span === 'col-span-2' ? '16/7' : '4/3' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.6) contrast(1.05)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 flex items-end justify-between w-full">
                <span className="font-body text-white/80 text-sm">{item.label}</span>
                <span className="label-tag text-[9px]">{item.code}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden flex flex-col gap-3">
          {galleryItems.slice(0, 4).map((item, i) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.6)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 flex items-end justify-between w-full">
                <span className="font-body text-white/80 text-sm">{item.label}</span>
                <span className="label-tag text-[9px]">{item.code}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}