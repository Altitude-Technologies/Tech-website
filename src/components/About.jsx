import { useScrollReveal } from '../hooks/useScrollReveal'
import { Target, Eye, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const STEPS = [
  { num: '01', title: 'Understand Your Business',         desc: 'Deep-dive into your goals, audience, and competitive landscape.',                   accent: true  },
  { num: '02', title: 'Design Scalable Solutions',        desc: 'Architect systems built to handle your growth for years ahead.',                     accent: false },
  { num: '03', title: 'Develop with Latest Technologies', desc: 'Leverage cutting-edge frameworks and AI to build robust, maintainable products.',     accent: false },
  { num: '04', title: 'Optimize for Growth',              desc: 'Continuously refine performance, conversions, and user experience post-launch.',      accent: true  },
]

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#F8FAFB' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Text Column ── */}
          <div className="fade-up">
            <span className="section-label">About Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4 mb-6">
              We Build Digital<br />
              <span className="text-gradient">Growth Ecosystems</span>
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-5">
              Altitude Technologies is a modern technology company focused on delivering innovative
              digital solutions using AI, automation, and cutting-edge development frameworks.
            </p>
            <p className="text-navy/55 leading-relaxed mb-8">
              We don&apos;t just build products — we create growth ecosystems powered by technology,
              tailored to your unique business goals and built for the long run.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-card rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center mb-3">
                  <Target className="w-4 h-4 text-brand" />
                </div>
                <h4 className="font-display font-semibold text-sm text-navy mb-1">Our Mission</h4>
                <p className="text-xs text-navy/55 leading-relaxed">
                  Empower businesses with smart, scalable, and intelligent digital solutions
                  that drive growth and efficiency.
                </p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="w-8 h-8 rounded-lg bg-navy/8 flex items-center justify-center mb-3">
                  <Eye className="w-4 h-4 text-navy" />
                </div>
                <h4 className="font-display font-semibold text-sm text-navy mb-1">Our Vision</h4>
                <p className="text-xs text-navy/55 leading-relaxed">
                  To become a global leader in AI-powered digital transformation.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand text-white font-semibold rounded-lg
                         shadow-[0_4px_16px_rgba(230,30,42,0.25)] hover:bg-brand-dark hover:-translate-y-px
                         hover:shadow-[0_6px_24px_rgba(230,30,42,0.35)] transition-all duration-200"
            >
              Work With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* ── Visual Column ── */}
          <div className="fade-up [transition-delay:0.18s] relative">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-lg text-navy mb-8">Our Approach</h3>

              <div className="space-y-0">
                {STEPS.map(({ num, title, desc, accent }, i) => (
                  <div key={num} className={`flex gap-4 items-start relative ${i < STEPS.length - 1 ? 'pb-8' : ''}`}>
                    {/* Connector line */}
                    {i < STEPS.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-brand/25 to-transparent" />
                    )}
                    {/* Step bubble */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      accent ? 'bg-brand shadow-sm' : 'bg-navy/10'
                    }`}>
                      <span className={`text-xs font-bold ${accent ? 'text-white' : 'text-navy'}`}>{num}</span>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-semibold text-navy mb-1 text-sm">{title}</h4>
                      <p className="text-xs text-navy/55 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 glass-card rounded-xl p-4 shadow-xl hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-navy">Project Success Rate</div>
                <div className="text-xl font-black text-navy font-display">
                  98<span className="text-brand">%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
