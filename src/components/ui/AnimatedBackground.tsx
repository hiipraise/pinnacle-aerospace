'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = 0
    let height = 0

    // Particles for technical aerospace grid nodes
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
    }[] = []

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    const initParticles = () => {
      particles.length = 0
      const count = Math.floor((width * height) / 28000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.3 + 0.05,
        })
      }
    }

    const drawGrid = () => {
      const gridSize = 70
      ctx.strokeStyle = 'rgba(255,255,255,0.022)'
      ctx.lineWidth = 0.5
      ctx.beginPath()
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    let time = 0

    const drawHorizonLine = () => {
      time += 0.003
      const yPos = height * 0.5 + Math.sin(time * 0.4) * height * 0.02
      const gradient = ctx.createLinearGradient(0, 0, width, 0)
      gradient.addColorStop(0, 'rgba(200,184,154,0)')
      gradient.addColorStop(0.3, 'rgba(200,184,154,0.06)')
      gradient.addColorStop(0.5, 'rgba(200,184,154,0.12)')
      gradient.addColorStop(0.7, 'rgba(200,184,154,0.06)')
      gradient.addColorStop(1, 'rgba(200,184,154,0)')
      ctx.strokeStyle = gradient
      ctx.lineWidth = 0.8
      ctx.beginPath()
      ctx.moveTo(0, yPos)
      ctx.lineTo(width, yPos)
      ctx.stroke()
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      drawGrid()
      drawHorizonLine()

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,184,154,${p.alpha})`
        ctx.fill()
      })

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.strokeStyle = `rgba(200,184,154,${0.03 * (1 - dist / 140)})`
            ctx.lineWidth = 0.4
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initParticles()
    animate()

    window.addEventListener('resize', () => {
      resize()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  )
}