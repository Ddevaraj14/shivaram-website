'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteContent } from '@/data/content'

const principles = siteContent.leadershipSection.principles

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function LeadershipSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leadership" ref={ref} className="py-28 lg:py-36 bg-ink-950">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-violet" />
              <span className="text-violet text-xs font-semibold tracking-widest uppercase">
                {siteContent.leadershipSection.eyebrow}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-ink-100 leading-tight tracking-tight"
            >
              {siteContent.leadershipSection.titleLine1}
              <br />
              <span style={{ backgroundImage: 'linear-gradient(135deg, #F2F2F2, #9B7FEA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {siteContent.leadershipSection.titleLine2}
              </span>
            </motion.h2>
          </div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center"
          >
            <blockquote className="border-l-2 border-violet pl-6">
              <p className="text-ink-200 text-xl font-light leading-relaxed italic">
                &ldquo;{siteContent.leadershipSection.quote}&rdquo;
              </p>
            </blockquote>
          </motion.div>
        </div>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="group rounded-xl border border-ink-600/40 bg-ink-800/60 p-6 hover:border-violet/30 hover:bg-ink-700/60 transition-all duration-300"
            >
              <div className="text-violet/40 text-4xl font-black mb-4 group-hover:text-violet/60 transition-colors">
                {p.number}
              </div>
              <h3 className="text-ink-100 font-bold text-base mb-3">{p.title}</h3>
              <p className="text-ink-400 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
