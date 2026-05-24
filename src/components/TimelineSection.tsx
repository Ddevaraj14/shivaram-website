'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { timelineEntries, siteContent } from '@/data/content'
import { MapPin } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" ref={ref} className="py-28 lg:py-36 bg-ink-900">
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
          <div className="h-px w-8 bg-electric" />
          <span className="text-electric text-xs font-semibold tracking-widest uppercase">
            {siteContent.timelineSection.eyebrow}
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-ink-100 leading-tight tracking-tight mb-16"
        >
          {siteContent.timelineSection.title}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric/40 via-electric/20 to-transparent origin-top"
            style={{ transform: isInView ? undefined : 'scaleY(0)' }}
          />

          <div className="space-y-0">
            {timelineEntries.map((entry, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={entry.company}
                  variants={fadeUp}
                  initial="initial"
                  animate={isInView ? 'animate' : 'initial'}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
                  className={`relative flex items-start gap-6 md:gap-0 pb-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 z-10">
                    <div className="w-3 h-3 rounded-full bg-electric border-2 border-ink-900 shadow-[0_0_12px_rgba(79,142,247,0.5)]" />
                  </div>

                  {/* Card — offset for mobile, alternating for desktop */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group rounded-xl border border-ink-600/40 bg-ink-800/60 p-6 hover:border-electric/30 hover:bg-ink-700/40 transition-all duration-300">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <h3 className="text-ink-100 font-bold text-lg">{entry.company}</h3>
                          <p className="text-ink-300 text-sm font-medium mt-0.5">{entry.role}</p>
                        </div>
                        <span className="text-electric text-sm font-semibold tabular-nums whitespace-nowrap">
                          {entry.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-ink-400 text-xs mb-4">
                        <MapPin size={12} />
                        {entry.location}
                      </div>
                      <ul className="space-y-1.5">
                        {entry.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-ink-400 text-sm">
                            <span className="text-electric mt-1.5 shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
