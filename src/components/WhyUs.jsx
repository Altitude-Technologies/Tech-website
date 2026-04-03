import { useScrollReveal } from '../hooks/useScrollReveal'
import { Brain, Maximize2, Tag, Boxes, Timer } from 'lucide-react'

const REASONS = [
  {
    icon: Brain,
    title: 'Advanced AI & ML Integration',
    desc: 'Cutting-edge intelligence built into every product we deliver.',
    accent: true,
  },
  {
    icon: Maximize2,
    title: 'Scalable & Future-Proof',
    desc: 'Built to grow with your business, not against it.',
    accent: false,
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    desc: 'Enterprise-grade quality without the enterprise-grade price tag.',
    accent: true,
  },
  {
    icon: Boxes,
    title: 'End-to-End Development',
    desc: 'From concept to deployment — everything under one roof.',
    accent: false,
  },
  {
    icon: Timer,
    title: 'Fast Delivery & Support',
    desc: 'Rapid timelines with dedicated post-launch support.',
    accent: true,
  },
]

const DELAYS = ['[transition-delay:0.08s]', '[transition-delay:0.16s]', '[transition-delay:0.24s]', '[transition-delay:0.32s]', '[transition-delay:0.40s]']

export default function WhyUs() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span className="section-label justify-center">Our Edge</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
            Why Choose Altitude
          </h2>
          <p className="text-navy/55 mt-4 max-w-lg mx-auto">
            Five reasons top businesses partner with us to build their digital future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {REASONS.map(({ icon: Icon, title, desc, accent }, i) => (
            <div
              key={title}
              className={`glass-card rounded-2xl p-6 text-center card-lift fade-up ${DELAYS[i]}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                accent ? 'bg-brand/10' : 'bg-navy/8'
              }`}>
                <Icon className={`w-6 h-6 ${accent ? 'text-brand' : 'text-navy'}`} />
              </div>
              <h4 className="font-display font-semibold text-sm text-navy mb-2">{title}</h4>
              <p className="text-xs text-navy/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
