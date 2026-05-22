import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import MetricsBar from '@/components/MetricsBar'
import AboutSection from '@/components/AboutSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import LeadershipSection from '@/components/LeadershipSection'
import TimelineSection from '@/components/TimelineSection'
import AchievementsSection from '@/components/AchievementsSection'
import InsightsSection from '@/components/InsightsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="bg-ink-900 min-h-screen">
      <Navigation />
      <Hero />
      <MetricsBar />
      <AboutSection />
      <CaseStudiesSection />
      <LeadershipSection />
      <TimelineSection />
      <AchievementsSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
