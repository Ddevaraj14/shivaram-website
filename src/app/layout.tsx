import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/data/content'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: siteContent.metadata.keywords,
  authors: [{ name: siteContent.metadata.author }],
  openGraph: {
    title: siteContent.metadata.openGraphTitle,
    description: siteContent.metadata.openGraphDescription,
    type: 'website',
    images: [siteContent.metadata.openGraphImage],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
