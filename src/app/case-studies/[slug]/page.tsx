import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { caseStudies, siteContent } from '@/data/content'
import CaseStudyContent from './CaseStudyContent'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} — Shivaram Kotari`,
    description: cs.description,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) notFound()

  const others = caseStudies.filter((c) => c.slug !== params.slug).slice(0, 2)

  return (
    <div className="bg-ink-900 min-h-screen">
      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-900/80 backdrop-blur-xl border-b border-ink-600/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-ink-300 hover:text-ink-100 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            {siteContent.caseStudyPage.backToPortfolioLabel}
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-electric/10 border border-electric/20 flex items-center justify-center">
              <svg viewBox={siteContent.brand.logoSvg.viewBox} className="w-4 h-4 text-electric" fill="currentColor" aria-hidden="true">
                <path d={siteContent.brand.logoSvg.path} />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      <CaseStudyContent cs={cs} others={others} />
    </div>
  )
}
