import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Shivaram Kotari — Design Executive & Experience Transformation Leader',
  description:
    'Design Executive shaping AI-driven product experiences across global digital ecosystems. 20+ years leading UX transformation for OTT platforms, enterprise systems, and multi-device products used by 100M+ users.',
  keywords: [
    'UX Design',
    'Design Executive',
    'OTT',
    'Product Design',
    'Experience Strategy',
    'AI Personalization',
    'Design Leadership',
  ],
  authors: [{ name: 'Shivaram Kotari' }],
  openGraph: {
    title: 'Shivaram Kotari — Design Executive',
    description:
      'Design Executive shaping AI-driven product experiences across global digital ecosystems.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
