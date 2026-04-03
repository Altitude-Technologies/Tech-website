import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import { useScrollReveal }  from '../hooks/useScrollReveal'
import CTABand from '../components/CTABand'
import {
  Palette, PenTool, Layout, Compass, Layers, Smartphone,
  CheckCircle2, ArrowRight, Code2, Zap, Star, Eye,
  ClipboardList, Map, Wrench, Rocket, Search,
  TrendingUp, Shield, Plus, Minus, Users, MousePointer,
  Monitor, Pen, BarChart2, Heart,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Compass,
    title: 'User Experience (UX) Design',
    desc: 'Research-driven design that puts users first and drives real results.',
    pastel: 'rgba(243,232,255,0.45)', border: 'rgba(196,181,253,0.30)', iconBg: 'rgba(196,181,253,0.35)', iconColor: '#6d28d9',
    items: ['User research & personas', 'Information architecture', 'User journey mapping', 'Usability testing'],
  },
  {
    icon: Layout,
    title: 'User Interface (UI) Design',
    desc: 'Pixel-perfect interfaces that are beautiful, consistent, and on-brand.',
    pastel: 'rgba(219,234,254,0.45)', border: 'rgba(147,197,253,0.30)', iconBg: 'rgba(147,197,253,0.35)', iconColor: '#1d4ed8',
    items: ['Visual design & branding', 'Design systems', 'Component libraries', 'Responsive layouts'],
  },
  {
    icon: PenTool,
    title: 'Wireframing & Prototyping',
    desc: 'From rough sketches to interactive prototypes — validated before development.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['Low & high-fidelity wireframes', 'Interactive prototypes', 'Click-through demos', 'Stakeholder presentations'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App UI/UX',
    desc: 'Native-feeling mobile experiences for iOS and Android.',
    pastel: 'rgba(220,252,231,0.45)', border: 'rgba(134,239,172,0.30)', iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    items: ['iOS & Android design', 'Gesture-based interactions', 'App onboarding flows', 'Touch-optimised layouts'],
  },
  {
    icon: Monitor,
    title: 'Web & SaaS Product Design',
    desc: 'End-to-end product design for web apps, dashboards, and SaaS platforms.',
    pastel: 'rgba(254,243,199,0.45)', border: 'rgba(252,211,77,0.30)', iconBg: 'rgba(252,211,77,0.35)', iconColor: '#92400e',
    items: ['Dashboard & admin panels', 'SaaS onboarding flows', 'Data visualisation', 'Complex form design'],
  },
  {
    icon: Palette,
    title: 'Brand Identity & Design Systems',
    desc: 'Cohesive brand visuals and scalable design systems for your product.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['Logo & brand guidelines', 'Color & typography systems', 'Icon sets', 'Reusable component libraries'],
  },
]

const PROCESS = [
  { icon: ClipboardList, step: '01', title: 'Discovery & Research',   desc: 'Understanding your users, goals, and business context.'       },
  { icon: Map,           step: '02', title: 'Strategy & Planning',    desc: 'Defining user flows, IA, and design direction.'              },
  { icon: PenTool,       step: '03', title: 'Wireframing',            desc: 'Low-fidelity layouts to validate structure early.'           },
  { icon: Palette,       step: '04', title: 'Visual Design',          desc: 'High-fidelity UI with your brand language applied.'          },
  { icon: MousePointer,  step: '05', title: 'Prototyping',            desc: 'Interactive prototypes ready for testing and feedback.'      },
  { icon: Search,        step: '06', title: 'Usability Testing',      desc: 'Real user feedback to refine and perfect the experience.'    },
  { icon: Rocket,        step: '07', title: 'Handoff & Support',      desc: 'Developer-ready assets, specs, and ongoing design support.'  },
]

const TECH = [
  {
    label: 'Design Tools',
    icon: Pen,
    color: '#6d28d9',
    items: ['Figma', 'Adobe XD', 'Sketch', 'Illustrator'],
    desc: 'Industry-standard tools for precise, collaborative design.',
  },
  {
    label: 'Prototyping',
    icon: MousePointer,
    color: '#be123c',
    items: ['Figma Prototype', 'InVision', 'Framer', 'Lottie'],
    desc: 'High-fidelity interactive prototypes that feel real.',
  },
  {
    label: 'Research & Testing',
    icon: Users,
    color: '#15803d',
    items: ['Maze', 'Hotjar', 'Google Analytics', 'Notion'],
    desc: 'Data-driven insights that back every design decision.',
  },
]

const WHY_US = [
  { icon: Users,       title: 'User-Centred Approach',    desc: 'Every design decision is grounded in real user research.'         },
  { icon: Eye,         title: 'Conversion-Focused',       desc: 'We design to engage, retain, and convert — not just look good.'  },
  { icon: Layers,      title: 'Scalable Design Systems',  desc: 'Build once, scale everywhere with reusable components.'           },
  { icon: Zap,         title: 'Fast Turnaround',          desc: 'Quick iterations without losing attention to detail.'             },
  { icon: Code2,       title: 'Dev-Ready Handoffs',       desc: 'Precise specs and assets that developers love working with.'     },
  { icon: Star,        title: 'Brand Consistency',        desc: 'Every screen feels like it belongs to the same product.'         },
]

const IMPACT = [
  { icon: TrendingUp,  value: 'Increase',  label: 'Conversion Rates'    },
  { icon: Heart,       value: 'Improve',   label: 'User Satisfaction'   },
  { icon: BarChart2,   value: 'Reduce',    label: 'Bounce Rates'        },
  { icon: Rocket,      value: 'Accelerate', label: 'Product Adoption'   },
]

const FAQS = [
  { q: 'Do you design for both mobile and web?',    a: 'Yes, we design fully responsive experiences for web, iOS, and Android platforms.'                         },
  { q: 'Will I get the source design files?',       a: 'Absolutely. You receive all Figma/XD source files with organised layers and components.'                  },
  { q: 'Can you redesign an existing product?',     a: 'Yes, we specialise in UX audits and redesigns that improve usability and conversions.'                    },
  { q: 'Do you work with developers during handoff?', a: 'Yes, we provide detailed specs, assets, and are available to support developers throughout build.'      },
]

const STATS = [
  { value: '60+',  label: 'Screens Designed'      },
  { value: '100%', label: 'Client Satisfaction'   },
  { value: '7d',   label: 'First Draft Delivery'  },
  { value: '24/7', label: 'Design Support'        },
]

export default function UiUxPage() {
  const headerRef  = useRevealOnMount()
  const introRef   = useScrollReveal()
  const cardsRef   = useScrollReveal()
  const processRef = useScrollReveal()
  const techRef    = useScrollReveal()
  const impactRef  = useScrollReveal()
  const whyRef     = useScrollReveal()
  const faqRef     = useScrollReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 85% 40%, rgba(109,40,217,0.07) 0%, transparent 65%),
                       radial-gradient(ellipse 50% 40% at 10% 80%, rgba(29,78,216,0.04) 0%, transparent 60%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-20 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.07]"
          style={{ border: '2px solid #6d28d9', transform: 'translate(35%,-20%)' }} />
        <div className="absolute right-0 top-20 w-[380px] h-[380px] rounded-full pointer-events-none opacity-[0.05]"
          style={{ border: '2px solid #1d4ed8', transform: 'translate(40%,-10%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(109,40,217,0.08)', color: '#6d28d9', border: '1px solid rgba(109,40,217,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#6d28d9' }} />
              UI/UX Design
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-2 mb-6 leading-[1.1]">
              Designs That Elevate UX<br />
              <span className="text-gradient">& Drive Engagement</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed mb-10 max-w-2xl">
              We create intuitive, beautiful, and conversion-focused digital experiences — combining
              user psychology, modern aesthetics, and your brand identity.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl hover:-translate-y-px transition-transform duration-200 text-base"
                style={{ color: '#fff', boxShadow: '0 4px 20px rgba(230,30,42,0.4)' }}
              >
                Start Your Design Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold rounded-xl border-2 border-navy/20 hover:border-brand hover:text-brand hover:-translate-y-px transition-all duration-200 shadow-sm text-base"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center px-5 py-3 rounded-xl"
                  style={{ background: 'rgba(230,30,42,0.05)', border: '1px solid rgba(230,30,42,0.15)', boxShadow: '0 2px 12px rgba(230,30,42,0.06)' }}>
                  <p className="font-display font-black text-2xl text-navy">{value}</p>
                  <p className="text-navy/45 text-xs mt-0.5 whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 bg-white" ref={introRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <p className="text-navy/65 text-lg leading-relaxed mb-10">
              At Altitude Technologies, we combine aesthetics with psychology to create interfaces
              users love. From startups to enterprises, our designs are built to deliver:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Eye,         label: 'Stunning Visuals'     },
                { icon: Users,       label: 'User-Centred'         },
                { icon: TrendingUp,  label: 'Conversion-Focused'   },
                { icon: Layers,      label: 'Scalable Systems'     },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl px-4 py-4 text-sm font-semibold text-navy flex flex-col items-center gap-2"
                  style={{ background: 'rgba(243,232,255,0.4)', border: '1px solid rgba(196,181,253,0.3)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#6d28d9' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white" ref={cardsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">What We Design</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our UI/UX Design Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, pastel, border, iconBg, iconColor, items }, i) => (
              <div key={title} className="rounded-2xl p-7 card-lift fade-up relative overflow-hidden group"
                style={{ background: pastel, backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: `1px solid ${border}`, boxShadow: '0 4px 32px rgba(13,18,48,0.06)', transitionDelay: `${(i % 3) * 0.08}s` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${iconColor}60, ${iconColor}20)` }} />
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
                <p className="text-navy/55 text-sm mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-navy/65">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: iconColor }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20" ref={processRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">How We Work</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Design Process
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">A 7-step human-centred process from discovery to developer handoff.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={step} className="glass-card rounded-2xl p-7 card-lift fade-up relative overflow-hidden group"
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="absolute top-4 right-5 font-display font-black text-5xl select-none leading-none transition-colors duration-300 text-navy/[0.05] group-hover:text-brand">{step}</span>
                <div className="absolute top-7 left-0 w-1 h-8 rounded-r-full bg-brand/20" />
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-1.5">{title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <UiUxTechSection techRef={techRef} />

      {/* ── Impact ── */}
      <section className="py-20 bg-white" ref={impactRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center">Design Impact</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              What Great Design Achieves
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {IMPACT.map(({ icon: Icon, value, label }, i) => (
              <div key={label} className="glass-card rounded-2xl p-7 fade-up text-center card-lift"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <p className="font-display font-black text-2xl text-navy">{value}</p>
                <p className="text-navy/50 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-24" ref={whyRef} style={{ background: 'linear-gradient(135deg, #0D1230 0%, #1a2050 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center" style={{ color: 'rgba(230,30,42,0.9)' }}>Why Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mt-4">Why Choose Altitude?</h2>
            <p className="mt-4 text-white/40 max-w-md mx-auto">We don't just make things look good. We make them work beautifully.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl px-6 py-5 fade-up"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', transitionDelay: `${i * 0.07}s` }}>
                <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <p className="font-display font-bold text-white text-base mb-1">{title}</p>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <UiUxFAQSection faqRef={faqRef} />

      <CTABand />
    </>
  )
}

function UiUxTechSection({ techRef }) {
  const [active, setActive] = useState(0)
  const current = TECH[active]

  return (
    <section className="py-24 relative overflow-hidden" ref={techRef}
      style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f5f0ff 50%, #f0f4ff 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">Our Toolkit</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Tools & Technologies</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Industry-leading design tools for pixel-perfect, collaborative outcomes.</p>
        </div>
        <div className="flex justify-center mb-10 fade-up">
          <div className="inline-flex rounded-2xl p-1.5 gap-1" style={{ background: 'rgba(13,18,48,0.06)', border: '1px solid rgba(13,18,48,0.08)' }}>
            {TECH.map(({ label, icon: Icon, color }, i) => (
              <button key={label} onClick={() => setActive(i)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                style={active === i ? { background: '#fff', color, boxShadow: '0 2px 12px rgba(13,18,48,0.10)', border: `1px solid ${color}30` }
                  : { color: 'rgba(13,18,48,0.45)', background: 'transparent', border: '1px solid transparent' }}>
                <Icon className="w-4 h-4" />{label}
              </button>
            ))}
          </div>
        </div>
        <div key={active} className="rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${current.color}20`, boxShadow: `0 20px 60px ${current.color}12, 0 4px 16px rgba(13,18,48,0.06)` }}>
          <div className="flex flex-col lg:flex-row min-h-[300px]">
            <div className="lg:w-80 flex-shrink-0 p-10 flex flex-col justify-between" style={{ background: `${current.color}10` }}>
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${current.color}20`, border: `1px solid ${current.color}30` }}>
                  <current.icon className="w-7 h-7" style={{ color: current.color }} />
                </div>
                <h3 className="font-display font-black text-3xl text-navy mb-2">{current.label}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{current.desc}</p>
              </div>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: current.color }}>{current.items.length} Tools</p>
                <div className="flex gap-1.5">
                  {TECH.map((_, i) => (
                    <div key={i} className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{ background: i === active ? current.color : `${current.color}25` }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-px flex-shrink-0" style={{ background: `${current.color}15` }} />
            <div className="flex-1 p-10 bg-white flex flex-col justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {current.items.map((tool, j) => (
                  <div key={tool} className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 cursor-default"
                    style={{ background: j % 3 === 0 ? `${current.color}10` : j % 3 === 1 ? 'rgba(13,18,48,0.03)' : `${current.color}06`, border: `1px solid ${current.color}18`, boxShadow: `0 2px 12px ${current.color}08` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${current.color}15` }}>
                      <span className="font-display font-black text-xs" style={{ color: current.color }}>{tool.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <p className="font-display font-bold text-navy text-base">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function UiUxFAQSection({ faqRef }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 relative overflow-hidden" ref={faqRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">FAQs</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Common Questions</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Everything you need to know before starting your design project.</p>
        </div>
        <div className="space-y-3 fade-up">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div key={q} className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ border: isOpen ? '1px solid rgba(230,30,42,0.25)' : '1px solid rgba(13,18,48,0.08)', boxShadow: isOpen ? '0 8px 32px rgba(230,30,42,0.08)' : '0 2px 12px rgba(13,18,48,0.04)', background: isOpen ? 'rgba(254,226,226,0.25)' : 'rgba(255,255,255,0.9)' }}>
                <button className="w-full flex items-center justify-between px-7 py-5 text-left" onClick={() => setOpen(isOpen ? null : i)}>
                  <div className="flex items-center gap-4">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-xs transition-colors duration-300"
                      style={{ background: isOpen ? '#E61E2A' : 'rgba(13,18,48,0.06)', color: isOpen ? '#fff' : '#0D1230' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-display font-bold text-base transition-colors duration-200 ${isOpen ? 'text-brand' : 'text-navy'}`}>{q}</span>
                  </div>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                    style={{ background: isOpen ? '#E61E2A' : 'rgba(13,18,48,0.06)' }}>
                    {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-navy" />}
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                  <div className="px-7 pb-6 flex gap-4">
                    <div className="w-px bg-brand/20 ml-3.5 flex-shrink-0" />
                    <p className="text-navy/60 text-sm leading-relaxed ml-3">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
