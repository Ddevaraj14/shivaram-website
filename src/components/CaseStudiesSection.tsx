'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/data/content'

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
}

export default function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="case-studies" ref={ref} className="py-28 lg:py-36 bg-ink-900">
      <div className="section-divider mb-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 lg:pt-36">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric text-xs font-semibold tracking-widest uppercase">
                Selected Work
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-ink-100 leading-tight tracking-tight"
            >
              Transformation
              <br />
              Case Studies
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink-400 text-base max-w-sm"
          >
            Four executive-level stories of design-led transformation, organisational impact, and
            measurable business outcomes.
          </motion.p>
        </div>

        {/* Case study grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.1 }}
            >
              <Link href={`/case-studies/${cs.slug}`} className="group block">
                <div
                  className="relative h-full rounded-xl border border-ink-600/40 bg-ink-800 p-8 overflow-hidden hover:border-ink-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${cs.gradientFrom} 0%, ${cs.gradientTo} 100%), #111111`,
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-3"
                        style={{
                          color: cs.accentColor,
                          borderColor: `${cs.accentColor}40`,
                          backgroundColor: `${cs.accentColor}10`,
                        }}
                      >
                        {cs.company}
                      </span>
                      <div className="text-ink-400 text-xs font-medium">{cs.period}</div>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2"
                      style={{ borderColor: `${cs.accentColor}60`, color: cs.accentColor }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-ink-100 text-xl font-bold leading-snug mb-3 group-hover:text-white transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-ink-400 text-sm leading-relaxed mb-6">{cs.tagline}</p>

                  {/* Category tags */}
                  <div className="flex flex-wrap gap-2">
                    {cs.category.split(' · ').map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-ink-900/60 text-ink-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom outcomes preview */}
                  <div className="mt-6 pt-6 border-t border-ink-600/30 flex items-center justify-between">
                    <span className="text-ink-400 text-xs">
                      {cs.outcomes.length} key outcomes
                    </span>
                    <span
                      className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                      style={{ color: cs.accentColor }}
                    >
                      Read case study <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
