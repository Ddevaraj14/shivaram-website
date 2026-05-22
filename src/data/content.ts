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

export const caseStudies: CaseStudy[] = [
  {
    slug: 'synamedia-ott-transformation',
    title: 'AI-Driven OTT Experience Transformation',
    company: 'Synamedia',
    period: '2017–Present',
    category: 'Product Strategy · AI Personalization · UX Leadership',
    tagline: 'Reimagining connected TV for global broadcasters',
    description:
      'Led the comprehensive UX transformation of Synamedia\'s OTT platform ecosystem — introducing AI-powered personalization, unified design systems, and cross-platform strategy serving 100M+ users across 70+ global operator deployments.',
    challenge: [
      'Fragmented user experience across 70+ operator deployments worldwide',
      'Content discovery inefficiency driving subscriber churn',
      'Inconsistent multi-device experience across TV, mobile, tablet, and web',
      'Legacy UI systems limiting innovation velocity and time-to-market',
      'No unified design language, governance model, or team structure',
    ],
    approach: [
      {
        title: 'Experience Vision',
        description:
          'Defined a 3-year UX transformation roadmap aligned with product strategy and operator business goals',
      },
      {
        title: 'UX Governance',
        description:
          'Established design principles, review processes, and quality standards across all global deployments',
      },
      {
        title: 'AI Personalization',
        description:
          'Pioneered AI-driven content discovery and recommendation UX patterns for the OTT ecosystem',
      },
      {
        title: 'Design System',
        description:
          'Built a scalable, configurable design system enabling rapid operator customization at global scale',
      },
      {
        title: 'Cross-Platform Strategy',
        description:
          'Unified experience architecture across 10-foot TV, mobile, tablet, and browser platforms',
      },
    ],
    outcomes: [
      '40% improvement in content discovery engagement metrics',
      '60% reduction in time-to-market for new operator deployments',
      'Unified design language adopted across 70+ global deployments',
      'AI-powered recommendation UX adopted by tier-1 operators',
      'Design team scaled from 3 to 12 across UK, India, and Israel studios',
    ],
    leadership:
      'Built and led a global design organization across three continents. Established Synamedia\'s design function from the ground up, creating processes, culture, and capabilities that transformed design from a service function into a strategic business driver and competitive differentiator.',
    accentColor: '#4F8EF7',
    gradientFrom: 'rgba(79,142,247,0.12)',
    gradientTo: 'rgba(155,127,234,0.06)',
    index: 0,
  },
  {
    slug: 'evolution-framework',
    title: 'Evolution Framework — Scalable UX Foundation',
    company: 'Cisco / NDS',
    period: '2006–2017',
    category: 'Design System · Enterprise UX · Product Foundation',
    tagline: 'Architectural foundation for next-generation set-top experiences',
    description:
      'Architected and delivered the Evolution Framework — a comprehensive UX foundation standardising experience design across NDS and Cisco\'s global product portfolio, enabling consistent, scalable deployments for major pay-TV operators worldwide.',
    challenge: [
      'Each product team building separate, inconsistent UI frameworks',
      'Massive duplication of effort across global engineering teams',
      'Operator customisation consuming disproportionate engineering resources',
      'No shared design vocabulary or reusable component architecture',
      'Fragmented user experience across the NDS/Cisco product portfolio',
    ],
    approach: [
      {
        title: 'Framework Architecture',
        description:
          'Designed a comprehensive UI framework with reusable components, patterns, and interaction models',
      },
      {
        title: 'Design System',
        description:
          'Created the first enterprise-wide design system for NDS\'s product portfolio',
      },
      {
        title: 'Operator Enablement',
        description:
          'Built flexible theming and customisation layers for operator-specific branding needs',
      },
      {
        title: 'Stakeholder Alignment',
        description:
          'Drove organisational buy-in across product, engineering, and business leadership',
      },
      {
        title: 'Global Rollout',
        description:
          'Managed framework adoption across product teams in UK, India, Israel, and US',
      },
    ],
    outcomes: [
      'Adopted as the standard UX framework across NDS/Cisco product portfolio',
      'Deployed across 30+ operator deployments globally',
      '50% reduction in new product development time',
      'Established UX governance model across the organisation',
      'Framework became the foundation for Synamedia\'s product evolution',
    ],
    leadership:
      'Navigated cross-functional influence without direct authority across multiple global engineering and product teams. Demonstrated executive-level stakeholder management, driving a strategic platform decision that shaped the company\'s product direction for over a decade.',
    accentColor: '#9B7FEA',
    gradientFrom: 'rgba(155,127,234,0.12)',
    gradientTo: 'rgba(79,142,247,0.06)',
    index: 1,
  },
  {
    slug: 'bein-sports-al-jazeera',
    title: 'beIN Sports / Al Jazeera Global Experience Integration',
    company: 'NDS / Cisco',
    period: '2012–2014',
    category: 'Brand Integration · Localization · Global Strategy',
    tagline: 'Bridging world-class sports with authentic cultural experience',
    description:
      'Led end-to-end UX strategy for beIN Sports and Al Jazeera\'s digital platform integration — creating a culturally resonant, globally consistent experience honouring distinct brand identities while delivering unified customer experiences across MENA and global markets.',
    challenge: [
      'Two iconic brands with distinct identities requiring cohesive digital experience',
      'Complex RTL/LTR localization across Arabic, English, and French markets',
      'Diverse audience expectations across MENA, Europe, and North America',
      'Sports UX differentiation in a competitive global broadcast market',
      'Real-time, high-stakes live sports experience requirements',
    ],
    approach: [
      {
        title: 'Brand Experience Strategy',
        description:
          'Developed a framework unifying brand identities while preserving each brand\'s distinct personality',
      },
      {
        title: 'Cultural Localization',
        description:
          'Deep cultural research driving authentic RTL Arabic and multilingual experience design',
      },
      {
        title: 'Sports UX Innovation',
        description:
          'Pioneered sports-specific interaction patterns for live content, scores, and editorial experiences',
      },
      {
        title: 'Global Consistency',
        description:
          'Created experience guidelines adaptable across 8 regional market variations',
      },
      {
        title: 'Cross-Functional Alignment',
        description:
          'Aligned broadcast, digital, and brand teams across multiple geographies',
      },
    ],
    outcomes: [
      'Launched across MENA markets to critical acclaim',
      'Established beIN Sports as a premium digital sports destination',
      'RTL experience model became reference for future Arabic digital projects',
      'Increased digital engagement metrics post-launch',
      'Recognised as a model for sports broadcasting UX excellence',
    ],
    leadership:
      'Navigated complex cultural, organisational, and brand dynamics across a multinational project. Led cross-functional teams spanning editorial, broadcast, engineering, and brand — demonstrating the ability to align diverse stakeholders around a unified experience vision.',
    accentColor: '#F59E0B',
    gradientFrom: 'rgba(245,158,11,0.12)',
    gradientTo: 'rgba(249,115,22,0.06)',
    index: 2,
  },
  {
    slug: 'sumtotal-enterprise-rebrand',
    title: 'SumTotal Systems Enterprise Brand Transformation',
    company: 'SumTotal Systems',
    period: '2003–2006',
    category: 'Brand Strategy · Creative Leadership · Marketing Ecosystem',
    tagline: 'Transforming enterprise software through design and brand strategy',
    description:
      'Led the comprehensive brand transformation of SumTotal Systems — repositioning brand identity, marketing ecosystem, and product visual language across global enterprise markets for one of the world\'s largest HR software companies.',
    challenge: [
      'Fragmented brand identity following multiple company acquisitions',
      'Visual language disconnected from enterprise market positioning',
      'Marketing materials lacking executive-level polish and strategic clarity',
      'No unified creative standards across global marketing teams',
      'Product UI inconsistency undermining enterprise brand credibility',
    ],
    approach: [
      {
        title: 'Brand Strategy',
        description:
          'Developed comprehensive brand architecture and positioning strategy for the enterprise market',
      },
      {
        title: 'Identity System',
        description:
          'Created cohesive visual identity system adaptable across digital, print, and product contexts',
      },
      {
        title: 'Marketing Ecosystem',
        description:
          'Redesigned the entire marketing collateral ecosystem for executive-level audiences',
      },
      {
        title: 'Creative Operations',
        description:
          'Built and led a global creative team with consistent quality standards and workflows',
      },
      {
        title: 'Product Alignment',
        description:
          'Aligned product UI visual language with the refreshed brand identity',
      },
    ],
    outcomes: [
      'Brand positioned successfully in the enterprise HR software market',
      'Marketing materials elevated to executive-level quality standards',
      'Creative team scaled and professionalised for global delivery',
      'Consistent brand experience across 50+ markets',
      'Foundation for $200M+ company valuation realisation',
    ],
    leadership:
      'This role established the pattern of leading creative transformation at the intersection of strategy, brand, and execution. Built SumTotal\'s creative function into a strategic capability — demonstrating that design leadership encompasses both visual craft and business strategy.',
    accentColor: '#10B981',
    gradientFrom: 'rgba(16,185,129,0.12)',
    gradientTo: 'rgba(20,184,166,0.06)',
    index: 3,
  },
]

export const timelineEntries: TimelineEntry[] = [
  {
    period: '2017 — Present',
    company: 'Synamedia',
    role: 'Director of UX Design / Design Executive',
    location: 'UK · India · Israel',
    highlights: [
      'Built and scaled global design organisation',
      'Led AI-driven OTT experience transformation',
      'Deployed across 70+ global operator platforms',
      'Established design as strategic business function',
    ],
  },
  {
    period: '2012 — 2017',
    company: 'Cisco',
    role: 'Senior Design Manager, Video & Collaboration',
    location: 'UK · USA · India',
    highlights: [
      'Led design for Cisco\'s video product portfolio',
      'Managed cross-functional design teams globally',
      'Drove UX strategy for enterprise collaboration',
      'Multiple Cisco Excellence Awards recipient',
    ],
  },
  {
    period: '2006 — 2012',
    company: 'NDS Group',
    role: 'UX Lead / Design Manager',
    location: 'UK · Israel · India',
    highlights: [
      'Architected the Evolution Framework design system',
      'Led UX for set-top box and OTT products',
      'Managed design for 30+ global deployments',
      'Established NDS UX design standards',
    ],
  },
  {
    period: '2003 — 2006',
    company: 'SumTotal Systems',
    role: 'Creative Director',
    location: 'India · USA',
    highlights: [
      'Led enterprise brand transformation',
      'Built and managed global creative team',
      'Redesigned full marketing ecosystem',
      'Delivered consistent brand across 50+ markets',
    ],
  },
]

export const achievements: Achievement[] = [
  {
    award: 'CSI Award — Best UX Innovation',
    event: 'Cable & Satellite International',
    year: '2022',
    description:
      'Recognised for pioneering AI-driven personalisation UX in the OTT sector',
  },
  {
    award: 'VideoTech Innovation Award',
    event: 'VideoTech Innovation Summit',
    year: '2020',
    description:
      'Industry recognition for transformative OTT user experience design',
  },
  {
    award: 'CSI Award — Product Innovation',
    event: 'Cable & Satellite International',
    year: '2019',
    description:
      'Recognised for design innovation in multi-screen OTT experiences',
  },
  {
    award: 'Cisco Excellence Award',
    event: 'Cisco Internal Recognition',
    year: '2016',
    description:
      'Awarded for outstanding design leadership and cross-functional impact',
  },
  {
    award: 'HOW Conference Speaker',
    event: 'HOW Design Conference',
    year: '2008',
    description:
      'Featured speaker on enterprise design systems and UX governance',
  },
  {
    award: 'ASTD Expo — Featured Presentation',
    event: 'ASTD International Conference & Expo',
    year: '2005',
    description:
      'Presented on brand-led digital transformation in enterprise software',
  },
]

export const articles: Article[] = [
  {
    title: 'The Future of OTT UX: AI, Personalisation, and the Human Touch',
    excerpt:
      'As AI reshapes content discovery, the real design challenge isn\'t automation — it\'s maintaining the serendipitous delight of discovery while eliminating irrelevant friction.',
    tag: 'OTT Design',
    readTime: '8 min',
    date: 'January 2024',
  },
  {
    title: 'Design Maturity: Why Your UX Team Is a Strategic Business Asset',
    excerpt:
      'Most organisations treat design as a service. The highest-performing ones treat it as a strategic capability that shapes product direction, drives growth, and creates competitive moats.',
    tag: 'Design Leadership',
    readTime: '6 min',
    date: 'November 2023',
  },
  {
    title: 'Building Global UX Systems: Lessons from 70+ Operator Deployments',
    excerpt:
      'Scaling UX systems across global markets teaches you one fundamental truth: consistency is never the goal. Coherence is. Here\'s the difference, and why it matters.',
    tag: 'Design Systems',
    readTime: '10 min',
    date: 'September 2023',
  },
]
