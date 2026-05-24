import rawSiteContent from './site-content.json'

export interface CaseStudy {
  slug: string
  title: string
  company: string
  period: string
  category: string
  tagline: string
  description: string
  challenge: string[]
  approach: { title: string; description: string }[]
  outcomes: string[]
  leadership: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  index: number
}

export interface TimelineEntry {
  period: string
  company: string
  role: string
  location: string
  highlights: string[]
}

export interface Achievement {
  award: string
  event: string
  year: string
  description: string
}

export interface Article {
  title: string
  excerpt: string
  tag: string
  readTime: string
  date: string
}

export interface Metric {
  value: string
  numericEnd: number
  suffix: string
  label: string
  sublabel: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SiteContent {
  metadata: {
    title: string
    description: string
    keywords: string[]
    author: string
    openGraphTitle: string
    openGraphDescription: string
    openGraphImage: string
  }
  assets: {
    resumeFile: string
  }
  brand: {
    fullName: string
    firstName: string
    lastName: string
    initials: string
    roleTagline: string
    logoSvg: {
      viewBox: string
      path: string
    }
  }
  navigation: {
    links: NavLink[]
    desktopResumeLabel: string
    mobileResumeLabel: string
  }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    taglineLead: string
    taglineSub: string
    primaryCtaLabel: string
    secondaryCtaLabel: string
    tertiaryCtaLabel: string
    scrollLabel: string
    teaserMetrics: { value: string; label: string }[]
  }
  metrics: Metric[]
  aboutSection: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    titleLine3: string
    paragraph1: string
    paragraph2: string
    expertiseTitle: string
    expertise: { title: string; description: string }[]
  }
  caseStudiesSection: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    description: string
    readLabel: string
    outcomesSuffix: string
  }
  leadershipSection: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    quote: string
    principles: { number: string; title: string; description: string }[]
  }
  timelineSection: {
    eyebrow: string
    title: string
  }
  achievementsSection: {
    eyebrow: string
    title: string
    description: string
  }
  insightsSection: {
    eyebrow: string
    title: string
    description: string
    footerCta: string
  }
  contactSection: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    headlineLine3: string
    description: string
    emailButtonLabel: string
    linkedinButtonLabel: string
    location: string
    availability: string
    email: string
    linkedinUrl: string
  }
  footer: {
    copyrightSuffix: string
    caseStudyBackLabel: string
  }
  caseStudyPage: {
    backToPortfolioLabel: string
    overviewLabel: string
    companyLabel: string
    periodLabel: string
    focusAreasLabel: string
    challengeLabel: string
    challengeSymbol: string
    approachLabel: string
    ecosystemLabel: string
    processStages: string[]
    processConnectorSvg: {
      width: number
      height: number
      x1: number
      y1: number
      x2: number
      y2: number
      strokeWidth: number
      strokeDasharray: string
    }
    outcomesLabel: string
    leadershipLabel: string
    moreCaseStudiesLabel: string
    readCaseStudyLabel: string
  }
  caseStudies: CaseStudy[]
  timelineEntries: TimelineEntry[]
  achievements: Achievement[]
  articles: Article[]
}

export const siteContent = rawSiteContent as SiteContent

export const caseStudies = siteContent.caseStudies
export const timelineEntries = siteContent.timelineEntries
export const achievements = siteContent.achievements
export const articles = siteContent.articles
