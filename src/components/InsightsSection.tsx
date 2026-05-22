'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { articles } from '@/data/content'
import { ArrowUpRight, Clock } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function InsightsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="insights" ref={ref} className="py-28 lg:py-36 bg-ink-900">
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
            Thought Leadership
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
            Insights &amp; Articles
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink-400 text-sm max-w-xs"
          >
            Perspectives on design leadership, OTT strategy, AI experience, and the future of product.
          </motion.p>
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              className="group rounded-xl border border-ink-600/40 bg-ink-800/60 p-6 hover:border-electric/30 hover:bg-ink-700/40 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric">
                  {article.tag}
                </span>
                <div className="flex items-center gap-1.5 text-ink-500 text-xs">
                  <Clock size={11} />
                  {article.readTime}
                </div>
              </div>
              <h3 className="text-ink-100 font-bold text-base leading-snug mb-3 group-hover:text-white transition-colors flex-1">
                {article.title}
              </h3>
              <p className="text-ink-400 text-sm leading-relaxed mb-6">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-ink-600/30">
                <span className="text-ink-500 text-xs">{article.date}</span>
                <span className="text-electric text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Read <ArrowUpRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 text-center"
        >
          <p className="text-ink-400 text-sm">
            More articles and perspectives coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
