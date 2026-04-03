import { useScrollReveal }   from '../hooks/useScrollReveal'
import { useRevealOnMount }  from '../hooks/useRevealOnMount'
import { Target, Eye, Users, Award, ArrowRight } from 'lucide-react'
import CTABand from '../components/CTABand'

const VALUES = [
  { icon: Target, title: 'Client-Centric',  desc: 'Every decision starts with the impact it has on your business goals.'           },
  { icon: Award,  title: 'Quality-First',   desc: 'We ship clean, tested, production-ready code — no shortcuts, ever.'              },
  { icon: Users,  title: 'Collaborative',   desc: 'We work as an extension of your team, not an external vendor.'                   },
  { icon: Eye,    title: 'Transparent',     desc: 'Clear communication, honest timelines, and no hidden surprises.'                  },
]

const STEPS = [
  { num: '01', title: 'Understand Your Business',         desc: 'Deep-dive into your goals, audience, and competitive landscape.',                  accent: true  },
  { num: '02', title: 'Design Scalable Solutions',        desc: 'Architect systems built to handle your growth for years ahead.',                    accent: false },
  { num: '03', title: 'Develop with Latest Technologies', desc: 'Leverage cutting-edge frameworks and AI to build robust, maintainable products.',   accent: false },
  { num: '04', title: 'Optimize for Growth',              desc: 'Continuously refine performance, conversions, and user experience post-launch.',    accent: true  },
]

export default function AboutPage() {
  const headerRef  = useRevealOnMount()   // page header — already in viewport
  const missionRef = useScrollReveal()    // mission/vision cards
  const valRef     = useScrollReveal()    // core values
  const stepsRef   = useScrollReveal()    // approach steps

  return (
    <>
      {/* ── Page Header ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 10% 50%, rgba(230,30,42,0.05) 0%, transparent 70%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <span className="section-label mb-4">Who We Are</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-4 mb-6">
              Built to Elevate<br />
              <span className="text-gradient">Your Digital Future</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed">
              Altitude Technologies is a modern technology company focused on delivering innovative
              digital solutions using AI, automation, and cutting-edge development frameworks.
              We don&apos;t just build products — we create growth ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 bg-white" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-10 fade-up">
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-brand" />
              </div>
              <h2 className="font-display font-black text-2xl text-navy mb-4">Our Mission</h2>
              <p className="text-navy/60 leading-relaxed text-lg">
                To empower businesses with smart, scalable, and intelligent digital solutions
                that drive growth and efficiency — making enterprise-grade technology accessible
                to every ambitious business.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-10 fade-up [transition-delay:0.12s]">
              <div className="w-12 h-12 rounded-xl bg-navy/8 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-navy" />
              </div>
              <h2 className="font-display font-black text-2xl text-navy mb-4">Our Vision</h2>
              <p className="text-navy/60 leading-relaxed text-lg">
                To become a global leader in AI-powered digital transformation — a company
                synonymous with innovation, reliability, and measurable business impact
                for clients across every continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 relative" ref={valRef} style={{ background: '#F8FAFB' }}>
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">What Drives Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`glass-card rounded-2xl p-7 card-lift fade-up`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-20 bg-white" ref={stepsRef}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">How We Work</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Approach
            </h2>
          </div>
          <div className="space-y-0">
            {STEPS.map(({ num, title, desc, accent }, i) => (
              <div key={num} className={`flex gap-6 items-start relative fade-up ${i < STEPS.length - 1 ? 'pb-10' : ''}`} style={{ transitionDelay: `${i * 0.10}s` }}>
                {i < STEPS.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-brand/25 to-transparent" />
                )}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${accent ? 'bg-brand shadow-sm' : 'bg-navy/10'}`}>
                  <span className={`text-sm font-bold ${accent ? 'text-white' : 'text-navy'}`}>{num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-bold text-lg text-navy mb-2">{title}</h3>
                  <p className="text-navy/55 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center fade-up">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg
                         shadow-[0_4px_16px_rgba(230,30,42,0.25)] hover:bg-brand-dark hover:-translate-y-px
                         hover:shadow-[0_6px_24px_rgba(230,30,42,0.35)] transition-all duration-200"
            >
              Start Working With Us <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
