import { useScrollReveal }  from '../hooks/useScrollReveal'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import CTABand from '../components/CTABand'
import {
  Sparkles, MessageCircle, Filter, Megaphone, GitBranch,
  MinusCircle, Clock, Rocket, Smile, CheckCircle, Brain,
  Zap, BarChart2, Users,
} from 'lucide-react'

const SOLUTIONS = [
  {
    icon: MessageCircle,
    title: 'AI Chatbots & Assistants',
    desc: 'Deploy intelligent conversational agents on your website, WhatsApp, or app. Handle support queries, qualify leads, and book appointments — all 24/7 without human intervention.',
    features: ['Multi-channel deployment', 'Natural language understanding', 'CRM integration', 'Handoff to human agents'],
  },
  {
    icon: Filter,
    title: 'Lead Generation Automation',
    desc: 'Build automated pipelines that capture, score, and nurture leads from every channel. Never let a hot prospect go cold again.',
    features: ['Lead scoring & qualification', 'Automated follow-up sequences', 'CRM & email integration', 'Real-time pipeline analytics'],
  },
  {
    icon: Megaphone,
    title: 'AI Marketing Systems',
    desc: 'Leverage machine learning to personalise campaigns, predict customer behaviour, and maximise ROI from every marketing dollar you spend.',
    features: ['Personalised content delivery', 'Predictive audience targeting', 'Automated A/B testing', 'Campaign performance insights'],
  },
  {
    icon: GitBranch,
    title: 'Workflow Automation',
    desc: 'Eliminate manual bottlenecks across your operations. Connect your tools, automate repetitive tasks, and free your team to focus on high-value work.',
    features: ['Cross-app integrations (Zapier, Make)', 'Document & approval automation', 'Reporting & alerting pipelines', 'Custom automation logic'],
  },
  {
    icon: Brain,
    title: 'AI Content Generation',
    desc: 'Scale your content production with AI-assisted writing, image generation, and personalisation — without sacrificing brand quality.',
    features: ['Blog & social copy generation', 'Product description automation', 'Brand voice fine-tuning', 'Multi-language support'],
  },
  {
    icon: BarChart2,
    title: 'CRM & Sales Automation',
    desc: 'Automate your entire sales funnel — from first touch to closed deal — with intelligent CRM workflows that keep your pipeline moving.',
    features: ['Automated deal progression', 'Smart task assignment', 'Sales forecasting', 'Win/loss analysis'],
  },
]

const BENEFITS = [
  { icon: MinusCircle, value: '80%',  label: 'Reduction in manual tasks'    },
  { icon: Clock,       value: '3×',   label: 'Faster response times'        },
  { icon: Rocket,      value: '40%',  label: 'Increase in team productivity' },
  { icon: Smile,       value: '24/7', label: 'Customer support coverage'    },
  { icon: Users,       value: '60%',  label: 'Increase in qualified leads'  },
  { icon: Zap,         value: '50%',  label: 'Lower operational costs'      },
]

export default function AIPage() {
  const headerRef   = useRevealOnMount()  // page header — already in viewport
  const benefitRef  = useScrollReveal()
  const solutionRef = useScrollReveal()

  return (
    <>
      {/* ── Page Header (dark) ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1230 0%, #16203a 60%, #0f1635 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-brand/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ background: 'rgba(230,30,42,0.15)', border: '1px solid rgba(230,30,42,0.30)' }}
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-xs font-semibold text-brand tracking-widest uppercase">Our Strongest Capability</span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight mb-6">
              Smarter Business with<br />
              <span style={{ background: 'linear-gradient(135deg, #E61E2A, #ff6b73)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                AI &amp; Automation
              </span>
            </h1>
            <p className="text-white/55 text-xl leading-relaxed">
              We help businesses automate repetitive tasks, improve productivity, and scale faster
              using AI-powered systems built for modern workflows — without the enterprise price tag.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats / Benefits ── */}
      <section className="py-20 bg-white" ref={benefitRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">Real Impact</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              The Numbers Speak
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {BENEFITS.map(({ icon: Icon, value, label }, i) => (
              <div key={label} className="glass-card rounded-2xl p-6 text-center card-lift fade-up" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <div className="font-display font-black text-2xl text-navy">{value}</div>
                <div className="text-xs text-navy/50 mt-1 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="py-20 relative" ref={solutionRef} style={{ background: '#F8FAFB' }}>
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">What We Build</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              AI Solutions We Deliver
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map(({ icon: Icon, title, desc, features }, i) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-7 card-lift fade-up"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-3">{title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-navy/60">
                      <CheckCircle className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
