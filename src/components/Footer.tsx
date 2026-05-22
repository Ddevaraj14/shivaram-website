import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-600/40 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-electric/10 border border-electric/20 flex items-center justify-center">
            <span className="text-electric text-xs font-bold">SK</span>
          </div>
          <span className="text-ink-400 text-sm">
            © {year} Shivaram Kotari. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/shivaramkotari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-500 hover:text-electric transition-colors p-1.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:shivaram.kotari@gmail.com"
            className="text-ink-500 hover:text-electric transition-colors p-1.5"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <span className="text-ink-600 text-xs">Design Executive · UX Leader · OTT Specialist</span>
        </div>
      </div>
    </footer>
  )
}
