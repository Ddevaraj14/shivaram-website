'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements } from '@/data/content'
import { Award } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" ref={ref} className="py-28 lg:py-36 bg-ink-950">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-violet" />
          <span className="text-violet text-xs font-semibold tracking-widest uppercase">
            Recognition
          </span>
        </motion.div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <motion.h2
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-ink-100 leading-tight tracking-tight"
          >
            Awards &amp; Recognition
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink-400 text-sm max-w-xs"
          >
            Industry-recognised leadership in design innovation, OTT excellence, and strategic impact.
          </motion.p>
        </div>

        {/* Awards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={`${ach.award}-${i}`}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.08 }}
              className="group rounded-xl border border-ink-600/40 bg-ink-800/60 p-6 hover:border-violet/30 hover:bg-ink-700/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                  <Award size={16} className="text-violet" />
                </div>
                <span className="text-ink-500 text-xs font-semibold tabular-nums">{ach.year}</span>
              </div>
              <h3 className="text-ink-100 font-bold text-sm mb-1 leading-snug">{ach.award}</h3>
              <p className="text-electric text-xs font-medium mb-3">{ach.event}</p>
              <p className="text-ink-400 text-xs leading-relaxed">{ach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
