import { Linkedin, Mail } from 'lucide-react'
import { siteContent } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-600/40 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-electric/10 border border-electric/20 flex items-center justify-center">
            <svg viewBox={siteContent.brand.logoSvg.viewBox} className="w-4 h-4 text-electric" fill="currentColor" aria-hidden="true">
              <path d={siteContent.brand.logoSvg.path} />
            </svg>
          </div>
          <span className="text-ink-400 text-sm">
            © {year} {siteContent.brand.fullName}. {siteContent.footer.copyrightSuffix}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={siteContent.contactSection.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-500 hover:text-electric transition-colors p-1.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${siteContent.contactSection.email}`}
            className="text-ink-500 hover:text-electric transition-colors p-1.5"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <span className="text-ink-600 text-xs">{siteContent.brand.roleTagline}</span>
        </div>
      </div>
    </footer>
  )
}
