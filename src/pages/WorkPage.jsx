import { useScrollReveal }  from '../hooks/useScrollReveal'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import CTABand from '../components/CTABand'
import { Globe, Smartphone, Palette, Zap, TrendingUp, ArrowRight } from 'lucide-react'

const CATEGORIES = [
  { icon: Globe,      label: 'Website Projects'    },
  { icon: Smartphone, label: 'App Development'     },
  { icon: Palette,    label: 'Branding Projects'   },
  { icon: Zap,        label: 'Automation Systems'  },
]

const PROJECTS = [
  {
    category: 'Website Projects',
    title: 'E-commerce Platform Redesign',
    desc: 'Rebuilt a legacy e-commerce store with a modern stack — 2× faster load times, 45% increase in conversions, and a fully headless architecture.',
    results: ['45% more conversions', '2× faster page speed', 'Headless CMS integration'],
    accent: true,
  },
  {
    category: 'App Development',
    title: 'Real Estate Mobile App',
    desc: 'End-to-end iOS & Android app for a property management company — listing search, virtual tours, and integrated booking flow.',
    results: ['10K+ downloads in 3 months', '4.8 App Store rating', 'Real-time chat & notifications'],
    accent: false,
  },
  {
    category: 'Automation Systems',
    title: 'AI Lead Nurturing System',
    desc: 'Built an automated lead scoring and nurturing pipeline for a SaaS startup — integrating CRM, email, and an AI chatbot.',
    results: ['60% more qualified leads', '80% less manual follow-up', 'Response time under 2 minutes'],
    accent: true,
  },
  {
    category: 'Website Projects',
    title: 'SaaS Dashboard & Marketing Site',
    desc: 'Designed and developed the full marketing site and product dashboard for an HR-tech SaaS — from wireframes to production.',
    results: ['3× increase in demo requests', 'Sub-1s load time', 'Fully accessible (WCAG 2.1)'],
    accent: false,
  },
  {
    category: 'Branding Projects',
    title: 'Healthcare Brand Identity',
    desc: 'Complete brand identity for a telehealth startup — logo, colour system, typography, and a design system for their product team.',
    results: ['Full design system delivered', 'Brand guidelines & assets', 'Website + app visual language'],
    accent: true,
  },
  {
    category: 'Automation Systems',
    title: 'Retail Inventory Automation',
    desc: 'Built a smart inventory management automation that syncs stock across 5 platforms, triggers reorders, and generates weekly reports.',
    results: ['Zero stockouts in 6 months', '12 hrs/week saved', 'Integrated with Shopify & ERP'],
    accent: false,
  },
]

export default function WorkPage() {
  const headerRef  = useRevealOnMount()  // page header — already in viewport
  const catRef     = useScrollReveal()   // category pills
  const cardsRef   = useScrollReveal()   // project cards

  return (
    <>
      {/* ── Page Header ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 60%, rgba(230,30,42,0.05) 0%, transparent 70%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <span className="section-label mb-4">Portfolio</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-4 mb-6">
              Our Work Speaks<br />
              <span className="text-gradient">for Our Expertise</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed">
              A selection of projects that showcase our capabilities across development, design,
              and AI automation — each one built to deliver measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category Pills ── */}
      <section className="py-8 bg-white border-b border-black/5" ref={catRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 fade-up">
            {CATEGORIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium text-navy/70"
              >
                <Icon className="w-4 h-4 text-brand" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-20 bg-white" ref={cardsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map(({ category, title, desc, results, accent }, i) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-7 card-lift fade-up flex flex-col"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${accent ? 'text-brand' : 'text-navy/50'}`}>
                  {category}
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-3">{title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                <div className="space-y-2">
                  {results.map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                      <span className="text-xs font-medium text-navy/65">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results highlight ── */}
      <section className="py-20 relative" style={{ background: '#F8FAFB' }}>
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="glass-card rounded-2xl p-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-navy mb-4">
              Results-Driven by Design
            </h2>
            <p className="text-navy/55 leading-relaxed mb-8 max-w-2xl mx-auto">
              Every project is measured against real business KPIs — conversions, speed, efficiency,
              and growth. We don&apos;t ship code; we ship outcomes.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { icon: TrendingUp, value: '150+', label: 'Projects Delivered'   },
                { icon: Globe,      value: '98%',  label: 'Client Satisfaction'  },
                { icon: Zap,        value: '12+',  label: 'Countries Served'     },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <div className="font-display font-black text-3xl text-navy">{value}</div>
                  <div className="text-xs text-navy/45 mt-1">{label}</div>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand text-white font-semibold rounded-lg
                         shadow-[0_4px_16px_rgba(230,30,42,0.25)] hover:bg-brand-dark hover:-translate-y-px
                         hover:shadow-[0_6px_24px_rgba(230,30,42,0.35)] transition-all duration-200"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
