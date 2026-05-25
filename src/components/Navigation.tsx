'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { siteContent } from '@/data/content'

const navLinks = siteContent.navigation.links

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ink-900/80 backdrop-blur-xl border-b border-ink-600/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <Image
              src={siteContent.assets.profileImage}
              alt={siteContent.brand.fullName}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover border border-electric/30"
              priority
            />
            <span className="text-ink-100 font-semibold text-sm hidden sm:block tracking-wide">
              {siteContent.brand.fullName}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-ink-300 hover:text-ink-100 text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href={siteContent.assets.resumeFile}
              className="ml-2 px-4 py-2 rounded-md border border-ink-500 text-ink-200 text-sm font-medium hover:border-electric hover:text-electric transition-all duration-200"
            >
              {siteContent.navigation.desktopResumeLabel}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-ink-300 hover:text-ink-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 bg-ink-900/95 backdrop-blur-xl border-b border-ink-600/50 md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-ink-200 hover:text-electric text-base font-medium text-left transition-colors py-1"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={siteContent.assets.resumeFile}
                className="mt-2 px-4 py-2.5 rounded-md border border-ink-500 text-ink-200 text-sm font-medium text-center hover:border-electric hover:text-electric transition-all"
              >
                {siteContent.navigation.mobileResumeLabel}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
