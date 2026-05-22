'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const expertise = [
  { title: 'Product Vision', description: 'Defining experience direction that aligns product, business, and user goals across global markets.' },
  { title: 'Design Leadership', description: 'Building and scaling world-class design organisations with strong culture, process, and craft.' },
  { title: 'AI Personalisation', description: 'Pioneering AI-driven UX patterns for content discovery, recommendations, and adaptive experiences.' },
  { title: 'Global Experience Strategy', description: 'Architecting coherent experience systems across multi-market, multi-platform, multi-brand ecosystems.' },
  { title: 'Design Operations', description: 'Establishing governance, systems, and workflows that scale design quality without sacrificing velocity.' },
  { title: 'Enterprise UX Transformation', description: 'Leading end-to-end transformation of product experience in complex enterprise environments.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-electric" />
              <span className="text-electric text-xs font-semibold tracking-widest uppercase">About</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-ink-100 leading-tight tracking-tight"
            >
              Design Executive.
              <br />
              <span className="gradient-text">Experience Architect.</span>
              <br />
              Strategic Leader.
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-ink-300 text-lg leading-relaxed mb-6">
              For over two decades, I have led design at the intersection of product strategy, technology,
              and human experience — building organisations, frameworks, and ecosystems that transform how
              people engage with digital products at global scale.
            </p>
            <p className="text-ink-400 text-base leading-relaxed">
              From architecting the UX foundation that powered 30+ global set-top deployments at NDS, to
              leading AI-driven OTT experience transformation at Synamedia — my work sits at the convergence
              of design craft, executive leadership, and business outcome thinking. I don&apos;t just design
              products. I build design as a strategic capability.
            </p>
          </motion.div>
        </div>

        {/* Expertise grid */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-ink-400 text-xs font-semibold tracking-widest uppercase mb-8"
          >
            Areas of Strategic Expertise
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-600/30">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="initial"
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.07 }}
                className="bg-ink-900 p-6 group hover:bg-ink-800 transition-colors duration-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-electric mb-4 group-hover:scale-150 transition-transform duration-200" />
                <h4 className="text-ink-100 font-semibold text-base mb-2">{item.title}</h4>
                <p className="text-ink-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
