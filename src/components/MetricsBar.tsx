'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Metric {
  value: string
  numericEnd: number
  suffix: string
  label: string
  sublabel: string
}

const metrics: Metric[] = [
  { value: '20+', numericEnd: 20, suffix: '+', label: 'Years', sublabel: 'of Design Leadership' },
  { value: '100M+', numericEnd: 100, suffix: 'M+', label: 'Users', sublabel: 'Impacted Globally' },
  { value: '70+', numericEnd: 70, suffix: '+', label: 'Deployments', sublabel: 'Worldwide' },
  { value: '4×', numericEnd: 4, suffix: '×', label: 'Industry Awards', sublabel: 'Recognised' },
]

function CountUp({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number
    const duration = 1800
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(ease * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, started])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function MetricsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="border-y border-ink-600/40 bg-ink-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-ink-600/40">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:px-8"
            >
              <div className="text-4xl sm:text-5xl font-black text-ink-100 tabular-nums tracking-tight">
                <CountUp end={m.numericEnd} suffix={m.suffix} started={isInView} />
              </div>
              <div className="mt-2 text-electric text-sm font-semibold tracking-wide uppercase">
                {m.label}
              </div>
              <div className="text-ink-400 text-xs mt-1">{m.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
