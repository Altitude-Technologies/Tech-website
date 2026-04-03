import { useScrollReveal } from '../hooks/useScrollReveal'
import { Sparkles, MessageCircle, Filter, Megaphone, GitBranch, MinusCircle, Clock, Rocket, Smile, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const SOLUTIONS = [
  {
    icon: MessageCircle,
    title: 'AI Chatbots',
    desc: 'Intelligent conversational agents for customer support, available 24/7.',
  },
  {
    icon: Filter,
    title: 'Lead Generation Automation',
    desc: 'Automated pipelines that capture, qualify, and nurture leads continuously.',
  },
  {
    icon: Megaphone,
    title: 'AI Marketing Systems',
    desc: 'Data-driven campaigns powered by machine learning insights.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Automation',
    desc: 'Eliminate manual bottlenecks with intelligent process automation.',
  },
]

const BENEFITS = [
  { icon: MinusCircle, title: 'Reduce Manual Work',        sub: 'Up to 80% task reduction'           },
  { icon: Clock,        title: 'Save Time & Cost',          sub: 'Faster ops, lower overhead'         },
  { icon: Rocket,       title: 'Increase Efficiency',       sub: 'Streamlined end-to-end processes'   },
  { icon: Smile,        title: 'Improve Customer Experience', sub: '24/7 intelligent support'         },
]

const DELAYS = ['[transition-delay:0.08s]', '[transition-delay:0.16s]', '[transition-delay:0.24s]', '[transition-delay:0.32s]']

export default function AISection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="ai-automation"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1230 0%, #16203a 50%, #0f1635 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-brand/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ background: 'rgba(230,30,42,0.15)', border: '1px solid rgba(230,30,42,0.30)' }}
          >
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-xs font-semibold text-brand tracking-widest uppercase">Our Strongest Capability</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Smarter Business with<br />
            <span style={{
              background: 'linear-gradient(135deg, #E61E2A, #ff6b73)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              AI &amp; Automation
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We help businesses automate repetitive tasks, improve productivity, and scale
            faster using AI-powered systems built for modern workflows.
          </p>
        </div>

        {/* Solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {SOLUTIONS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`rounded-xl p-6 fade-up ${DELAYS[i]}`}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 text-sm">{title}</h4>
              <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Benefits panel */}
        <div
          className="rounded-2xl p-8 fade-up [transition-delay:0.40s]"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
        >
          <h3 className="font-display font-bold text-white mb-8 text-center text-lg">
            Why Businesses Choose Our AI Solutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BENEFITS.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <div className="text-white font-semibold text-sm">{title}</div>
                <div className="text-white/40 text-xs mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 fade-up [transition-delay:0.48s]">
          <Link
            to="/ai-automation"
            className="inline-flex items-center gap-2 px-7 py-4 bg-brand text-white font-semibold rounded-lg
                       shadow-[0_4px_16px_rgba(230,30,42,0.30)] hover:bg-brand-dark hover:-translate-y-px
                       hover:shadow-[0_6px_24px_rgba(230,30,42,0.40)] transition-all duration-200"
          >
            Explore AI Solutions <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  )
}
