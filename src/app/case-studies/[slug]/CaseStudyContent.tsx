'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle } from 'lucide-react'
import { CaseStudy, siteContent } from '@/data/content'

interface Props {
  cs: CaseStudy
  others: CaseStudy[]
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function CaseStudyContent({ cs, others }: Props) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative py-28 lg:py-40 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${cs.gradientFrom} 0%, ${cs.gradientTo} 50%, #0A0A0A 100%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span
              className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{
                color: cs.accentColor,
                borderColor: `${cs.accentColor}50`,
                backgroundColor: `${cs.accentColor}10`,
              }}
            >
              {cs.company}
            </span>
            <span className="text-ink-400 text-xs">{cs.period}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-100 leading-tight tracking-tight mb-6"
          >
            {cs.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ink-300 text-xl max-w-2xl leading-relaxed mb-8"
          >
            {cs.tagline}
          </motion.p>

          {/* Category tags */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {cs.category.split(' · ').map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-lg bg-ink-800/70 text-ink-300 border border-ink-600/40"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20 border-t border-ink-600/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-4">
                {siteContent.caseStudyPage.overviewLabel}
              </h2>
              <p className="text-ink-200 text-lg leading-relaxed">{cs.description}</p>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-ink-500 text-xs font-semibold tracking-widest uppercase mb-1">
                  {siteContent.caseStudyPage.companyLabel}
                </div>
                <div className="text-ink-100 font-semibold">{cs.company}</div>
              </div>
              <div>
                <div className="text-ink-500 text-xs font-semibold tracking-widest uppercase mb-1">
                  {siteContent.caseStudyPage.periodLabel}
                </div>
                <div className="text-ink-100 font-semibold">{cs.period}</div>
              </div>
              <div>
                <div className="text-ink-500 text-xs font-semibold tracking-widest uppercase mb-1">
                  {siteContent.caseStudyPage.focusAreasLabel}
                </div>
                <div className="space-y-1">
                  {cs.category.split(' · ').map((tag) => (
                    <div key={tag} className="text-ink-300 text-sm">{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Challenge */}
      <section className="py-16 lg:py-20 border-t border-ink-600/40 bg-ink-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8">
            {siteContent.caseStudyPage.challengeLabel}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {cs.challenge.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-ink-800/60 border border-ink-600/30"
              >
                <span className="text-red-400 mt-0.5 shrink-0 text-base">
                  {siteContent.caseStudyPage.challengeSymbol}
                </span>
                <p className="text-ink-300 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Approach */}
      <section className="py-16 lg:py-20 border-t border-ink-600/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8">
            {siteContent.caseStudyPage.approachLabel}
          </h2>
          <div className="space-y-4">
            {cs.approach.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex gap-6 p-6 rounded-xl border border-ink-600/40 bg-ink-800/40 hover:bg-ink-700/40 transition-colors"
              >
                <div
                  className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold border"
                  style={{
                    color: cs.accentColor,
                    borderColor: `${cs.accentColor}40`,
                    backgroundColor: `${cs.accentColor}10`,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-ink-100 font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-ink-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="py-16 lg:py-20 border-t border-ink-600/40 bg-ink-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8">
            {siteContent.caseStudyPage.ecosystemLabel}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {siteContent.caseStudyPage.processStages.map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <div
                    className="px-5 py-3 rounded-lg border text-sm font-semibold text-center min-w-[120px]"
                    style={{
                      borderColor: `${cs.accentColor}40`,
                      backgroundColor: `${cs.accentColor}08`,
                      color: i === 0 || i === 5 ? cs.accentColor : '#C0C0C0',
                    }}
                  >
                    {stage}
                  </div>
                  {i < siteContent.caseStudyPage.processStages.length - 1 && (
                    <svg
                      width={siteContent.caseStudyPage.processConnectorSvg.width}
                      height={siteContent.caseStudyPage.processConnectorSvg.height}
                      className="text-ink-500 shrink-0"
                    >
                      <line
                        x1={siteContent.caseStudyPage.processConnectorSvg.x1}
                        y1={siteContent.caseStudyPage.processConnectorSvg.y1}
                        x2={siteContent.caseStudyPage.processConnectorSvg.x2}
                        y2={siteContent.caseStudyPage.processConnectorSvg.y2}
                        stroke="currentColor"
                        strokeWidth={siteContent.caseStudyPage.processConnectorSvg.strokeWidth}
                        strokeDasharray={siteContent.caseStudyPage.processConnectorSvg.strokeDasharray}
                      />
                    </svg>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 lg:py-20 border-t border-ink-600/40">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8">
            {siteContent.caseStudyPage.outcomesLabel}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {cs.outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-ink-800/60 border border-ink-600/30"
              >
                <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: cs.accentColor }} />
                <p className="text-ink-200 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Contribution */}
      <section className="py-16 lg:py-20 border-t border-ink-600/40 bg-ink-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-6">
            {siteContent.caseStudyPage.leadershipLabel}
          </h2>
          <blockquote
            className="border-l-2 pl-8 py-2"
            style={{ borderColor: cs.accentColor }}
          >
            <p className="text-ink-200 text-xl font-light leading-relaxed">{cs.leadership}</p>
          </blockquote>
        </div>
      </section>

      {/* Next Case Studies */}
      {others.length > 0 && (
        <section className="py-16 lg:py-20 border-t border-ink-600/40">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <h2 className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8">
              {siteContent.caseStudyPage.moreCaseStudiesLabel}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((other) => (
                <Link key={other.slug} href={`/case-studies/${other.slug}`} className="group block">
                  <div className="rounded-xl border border-ink-600/40 bg-ink-800/60 p-6 hover:border-ink-400/40 hover:bg-ink-700/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: other.accentColor }}
                      >
                        {other.company}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-ink-500 group-hover:text-ink-200 transition-colors"
                      />
                    </div>
                    <h3 className="text-ink-100 font-bold text-base mb-2 group-hover:text-white transition-colors">
                      {other.title}
                    </h3>
                    <p className="text-ink-400 text-xs">{other.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="border-t border-ink-600/40 bg-ink-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 text-center">
          <Link
            href="/"
            className="text-ink-400 hover:text-electric text-sm transition-colors flex items-center gap-2 justify-center"
          >
            ← {siteContent.footer.caseStudyBackLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
