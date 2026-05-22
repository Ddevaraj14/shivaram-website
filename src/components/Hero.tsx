'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80])

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-900"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute rounded-full blur-[120px]"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(circle, rgba(79,142,247,0.13) 0%, transparent 70%)',
            top: '-15%',
            right: '-10%',
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 60, 0], scale: [1, 1.15, 0.9, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full blur-[100px]"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(155,127,234,0.1) 0%, transparent 70%)',
            bottom: '5%',
            left: '-8%',
          }}
          animate={{ x: [0, -30, 50, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute rounded-full blur-[80px]"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)',
            top: '55%',
            right: '20%',
          }}
          animate={{ x: [0, 50, -30, 0], y: [0, -60, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(242,242,242,0.015) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(242,242,242,0.015) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-10 bg-electric" />
          <span className="text-electric text-sm font-medium tracking-widest uppercase">
            Design Executive
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-ink-100 leading-none tracking-tight mb-6"
        >
          Shivaram
          <br />
          <span className="gradient-text">Kotari</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-ink-300 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed font-light mb-12"
        >
          Shaping AI-driven product experiences across global digital ecosystems.
          <br className="hidden sm:block" />
          <span className="text-ink-200">
            {' '}20+ years of UX transformation, OTT innovation, and enterprise design leadership.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap gap-4 mb-20"
        >
          <button
            onClick={() => handleScroll('#case-studies')}
            className="group flex items-center gap-2 px-7 py-3.5 bg-electric text-white font-semibold text-sm rounded-lg hover:bg-electric/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,142,247,0.35)]"
          >
            View Case Studies
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-7 py-3.5 border border-ink-500 text-ink-200 font-semibold text-sm rounded-lg hover:border-ink-300 hover:text-ink-100 transition-all duration-200"
          >
            Download Resume
            <ExternalLink size={15} />
          </a>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-7 py-3.5 text-ink-300 font-semibold text-sm hover:text-electric transition-colors duration-200"
          >
            Let&apos;s Connect →
          </button>
        </motion.div>

        {/* Impact metrics teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap gap-8 sm:gap-12"
        >
          {[
            { value: '20+', label: 'Years of Design Leadership' },
            { value: '100M+', label: 'Users Impacted' },
            { value: '70+', label: 'Global Deployments' },
            { value: '4×', label: 'Industry Awards' },
          ].map((m) => (
            <div key={m.label}>
              <div className="text-2xl sm:text-3xl font-black text-ink-100 tabular-nums">
                {m.value}
              </div>
              <div className="text-ink-400 text-xs sm:text-sm mt-0.5 font-medium">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-ink-400 to-transparent"
        />
        <span className="text-ink-400 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
