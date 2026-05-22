'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Mail, MapPin } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-36 bg-ink-950 relative overflow-hidden">
      <div className="section-divider" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(79,142,247,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36 text-center relative z-10">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-electric" />
          <span className="text-electric text-xs font-semibold tracking-widest uppercase">
            Contact
          </span>
          <div className="h-px w-8 bg-electric" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-ink-100 leading-tight tracking-tight mb-6"
        >
          Let&apos;s build
          <br />
          <span className="gradient-text">transformative</span>
          <br />
          experiences.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-ink-300 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Available for Director / VP Design leadership roles, strategic consulting, and advisory
          engagements across OTT, enterprise, and product organisations.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <a
            href="mailto:shivaram.kotari@gmail.com"
            className="group flex items-center gap-2 px-8 py-4 bg-electric text-white font-semibold rounded-lg hover:bg-electric/90 transition-all duration-200 hover:shadow-[0_0_40px_rgba(79,142,247,0.35)]"
          >
            <Mail size={16} />
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/shivaramkotari"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border border-ink-500 text-ink-200 font-semibold rounded-lg hover:border-electric hover:text-electric transition-all duration-200"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Details row */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-ink-400 text-sm"
        >
          <div className="flex items-center gap-1.5">
            <MapPin size={13} />
            <span>United Kingdom</span>
          </div>
          <span className="text-ink-600">·</span>
          <span>Open to global opportunities</span>
          <span className="text-ink-600">·</span>
          <a
            href="mailto:shivaram.kotari@gmail.com"
            className="hover:text-electric transition-colors"
          >
            shivaram.kotari@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
