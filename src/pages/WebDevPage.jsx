import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import { useScrollReveal }  from '../hooks/useScrollReveal'
import CTABand from '../components/CTABand'
import {
  Globe, ShoppingCart, Cpu, Palette, Zap, Bot,
  CheckCircle2, ArrowRight, Code2, Smartphone, Layers,
  Search, BarChart2, MessageSquare, GitBranch, Brain,
  ClipboardList, Map, PenTool, Wrench, Rocket,
  TrendingUp, Star, Shield, Plus, Minus, Layout,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'Business Website Development',
    desc: 'Professional websites designed to represent your brand and attract customers.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['Company profile websites', 'Service-based websites', 'Portfolio websites'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    desc: 'Sell your products online with powerful and secure e-commerce platforms.',
    pastel: 'rgba(219,234,254,0.45)', border: 'rgba(147,197,253,0.30)', iconBg: 'rgba(147,197,253,0.35)', iconColor: '#1d4ed8',
    items: ['Payment gateway integration', 'Product management', 'Order tracking', 'Mobile-friendly design'],
  },
  {
    icon: Cpu,
    title: 'Custom Web Applications',
    desc: 'Advanced applications tailored to your business needs.',
    pastel: 'rgba(254,243,199,0.45)', border: 'rgba(252,211,77,0.30)', iconBg: 'rgba(252,211,77,0.35)', iconColor: '#92400e',
    items: ['CRM systems', 'Booking platforms', 'SaaS products', 'Dashboards'],
  },
  {
    icon: Palette,
    title: 'UI/UX Focused Development',
    desc: 'Design meets performance with user-centered interfaces.',
    pastel: 'rgba(243,232,255,0.45)', border: 'rgba(196,181,253,0.30)', iconBg: 'rgba(196,181,253,0.35)', iconColor: '#6d28d9',
    items: ['Intuitive navigation', 'Modern design systems', 'Conversion-focused layouts'],
  },
  {
    icon: Zap,
    title: 'High-Speed & SEO Optimized',
    desc: 'Ensuring your website ranks well and loads fast.',
    pastel: 'rgba(220,252,231,0.45)', border: 'rgba(134,239,172,0.30)', iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    items: ['SEO-ready structure', 'Fast loading speed', 'Mobile responsiveness', 'Core Web Vitals optimization'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Website Features',
    desc: 'Take your website to the next level with intelligent automation.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['AI Chatbots', 'Smart lead capture systems', 'Automation workflows', 'Personalized user experience'],
  },
]

const PROCESS = [
  { icon: ClipboardList, step: '01', title: 'Requirement Analysis',  desc: 'Understanding your business goals and target audience in depth.' },
  { icon: Map,           step: '02', title: 'Planning & Strategy',   desc: 'Creating a detailed roadmap for features and functionality.'     },
  { icon: PenTool,       step: '03', title: 'Design & Prototyping',  desc: 'Wireframes and pixel-perfect UI designs for your approval.'      },
  { icon: Code2,         step: '04', title: 'Development',           desc: 'Clean, scalable code built with the latest technologies.'        },
  { icon: Wrench,        step: '05', title: 'Testing & Optimization','desc': 'Rigorous performance, responsiveness and QA checks.'           },
  { icon: Rocket,        step: '06', title: 'Launch & Support',      desc: 'Smooth deployment and ongoing maintenance plans.'                },
]

const TECH = [
  {
    label: 'Frontend',
    icon: Layout,
    color: '#be123c',
    bg: 'rgba(252,165,165,0.15)',
    border: 'rgba(252,165,165,0.35)',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js'],
    desc: 'Pixel-perfect, blazing-fast interfaces users love.',
  },
  {
    label: 'Backend',
    icon: Cpu,
    color: '#1d4ed8',
    bg: 'rgba(147,197,253,0.15)',
    border: 'rgba(147,197,253,0.35)',
    items: ['PHP', 'Laravel', 'Node.js'],
    desc: 'Robust, secure server-side logic and APIs.',
  },
  {
    label: 'CMS / Platforms',
    icon: Globe,
    color: '#15803d',
    bg: 'rgba(134,239,172,0.15)',
    border: 'rgba(134,239,172,0.35)',
    items: ['WordPress', 'Shopify'],
    desc: 'Easy-to-manage content and e-commerce platforms.',
  },
]

const WHY_US = [
  { icon: Bot,         title: 'AI-Driven Development',      desc: 'We integrate AI into every layer of your web solution.'       },
  { icon: Code2,       title: 'Custom-Built, No Templates', desc: 'Every line of code is written specifically for your needs.'   },
  { icon: Zap,         title: 'Fast Delivery',              desc: 'Rapid turnaround without compromising on quality.'            },
  { icon: Shield,      title: 'Reliable Support',           desc: 'Dedicated post-launch maintenance and updates.'              },
  { icon: TrendingUp,  title: 'Affordable Pricing',         desc: 'Premium quality at competitive, transparent prices.'         },
  { icon: Star,        title: 'Future-Proof Systems',       desc: 'Scalable architecture built to grow with your business.'     },
]

const FAQS = [
  { q: 'How long does it take to build a website?',  a: 'Typically 7–30 days depending on complexity and project scope.'  },
  { q: 'Will my website be mobile-friendly?',         a: 'Yes, all our websites are fully responsive across all devices.'  },
  { q: 'Do you provide support after launch?',        a: 'Yes, we offer flexible maintenance and support plans post-launch.'},
]

const STATS = [
  { value: '50+',  label: 'Projects Delivered' },
  { value: '7d',   label: 'Fastest Turnaround' },
  { value: '100%', label: 'Responsive Design'  },
  { value: '24/7', label: 'Post-Launch Support' },
]

export default function WebDevPage() {
  const headerRef  = useRevealOnMount()
  const introRef   = useScrollReveal()
  const cardsRef   = useScrollReveal()
  const processRef = useScrollReveal()
  const techRef    = useScrollReveal()
  const whyRef     = useScrollReveal()
  const faqRef     = useScrollReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 85% 40%, rgba(230,30,42,0.07) 0%, transparent 65%),
                       radial-gradient(ellipse 50% 40% at 10% 80%, rgba(13,18,48,0.04) 0%, transparent 60%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

        {/* Floating decorative ring */}
        <div className="absolute right-0 top-20 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.07]"
          style={{ border: '2px solid #E61E2A', transform: 'translate(35%, -20%)' }} />
        <div className="absolute right-0 top-20 w-[380px] h-[380px] rounded-full pointer-events-none opacity-[0.05]"
          style={{ border: '2px solid #0D1230', transform: 'translate(40%, -10%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(230,30,42,0.08)', color: '#E61E2A', border: '1px solid rgba(230,30,42,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Web Development Services
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-2 mb-6 leading-[1.1]">
              Custom Web Development<br />
              <span className="text-gradient">That Drives Real Growth</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed mb-10 max-w-2xl">
              We design and develop fast, secure, and scalable websites tailored to your business goals —
              powered by modern technologies, AI integration, and conversion-focused design.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl hover:-translate-y-px transition-transform duration-200 text-base"
                style={{
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(230,30,42,0.4)',
                }}
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold rounded-xl
                           border-2 border-navy/20 hover:border-brand hover:text-brand hover:-translate-y-px transition-all duration-200
                           shadow-sm text-base"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats row */}
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
              At Altitude Technologies, we don't just build websites — we create powerful digital experiences
              that help businesses grow, convert, and scale. Whether you're a startup, small business, or enterprise,
              our web solutions are designed to deliver:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Zap,        label: 'High Performance'       },
                { icon: Palette,    label: 'Seamless UX'            },
                { icon: Globe,      label: 'Strong Online Presence' },
                { icon: BarChart2,  label: 'Measurable Results'     },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl px-4 py-4 text-sm font-semibold text-navy flex flex-col items-center gap-2"
                  style={{ background: 'rgba(254,226,226,0.35)', border: '1px solid rgba(252,165,165,0.25)' }}
                >
                  <Icon className="w-5 h-5 text-brand" />
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
            <span className="section-label justify-center">What We Offer</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Web Development Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, pastel, border, iconBg, iconColor, items }, i) => (
              <div
                key={title}
                className="rounded-2xl p-7 card-lift fade-up relative overflow-hidden group"
                style={{
                  background: pastel,
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: `1px solid ${border}`,
                  boxShadow: '0 4px 32px rgba(13,18,48,0.06)',
                  transitionDelay: `${(i % 3) * 0.08}s`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${iconColor}60, ${iconColor}20)` }} />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: iconBg }}>
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
      <section
        className="py-20"
        ref={processRef}
        style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">How We Work</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Development Process
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">A proven 6-step process that delivers results on time, every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map(({ icon: Icon, step, title, desc }, i) => (
              <div
                key={step}
                className="glass-card rounded-2xl p-7 card-lift fade-up relative overflow-hidden group"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Step number watermark — turns red on card hover */}
                <span className="absolute top-4 right-5 font-display font-black text-5xl select-none leading-none transition-colors duration-300 text-navy/[0.05] group-hover:text-brand">
                  {step}
                </span>
                {/* Connector bar */}
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

      {/* ── Technologies ── */}
      <TechSection techRef={techRef} />

      {/* ── Why Us ── */}
      <section
        className="py-24"
        ref={whyRef}
        style={{ background: 'linear-gradient(135deg, #0D1230 0%, #1a2050 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center" style={{ color: 'rgba(230,30,42,0.9)' }}>Why Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mt-4">
              Why Choose Altitude?
            </h2>
            <p className="mt-4 text-white/40 max-w-md mx-auto">We don't just build websites. We build growth engines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {WHY_US.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="rounded-2xl px-6 py-5 fade-up"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
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
      <FAQSection faqRef={faqRef} />


      <CTABand />
    </>
  )
}

function TechSection({ techRef }) {
  const [active, setActive] = useState(0)
  const current = TECH[active]

  return (
    <section
      className="py-24 relative overflow-hidden"
      ref={techRef}
      style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f0f4ff 50%, #fff5f5 100%)' }}
    >
      {/* decorative blobs */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">Our Stack</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
            Technologies We Use
          </h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">
            Battle-tested tools and frameworks for reliable, modern web products.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10 fade-up">
          <div className="inline-flex rounded-2xl p-1.5 gap-1"
            style={{ background: 'rgba(13,18,48,0.06)', border: '1px solid rgba(13,18,48,0.08)' }}>
            {TECH.map(({ label, icon: Icon, color }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250"
                style={active === i ? {
                  background: '#fff',
                  color,
                  boxShadow: '0 2px 12px rgba(13,18,48,0.10)',
                  border: `1px solid ${color}30`,
                } : {
                  color: 'rgba(13,18,48,0.45)',
                  background: 'transparent',
                  border: '1px solid transparent',
                }}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div
          key={active}
          className="rounded-3xl overflow-hidden"
          style={{
            border: `1px solid ${current.color}20`,
            boxShadow: `0 20px 60px ${current.color}12, 0 4px 16px rgba(13,18,48,0.06)`,
          }}
        >
          <div className="flex flex-col lg:flex-row min-h-[340px]">

            {/* Left — identity panel */}
            <div
              className="lg:w-80 flex-shrink-0 p-10 flex flex-col justify-between relative overflow-hidden"
              style={{ background: `${current.color}10` }}
            >
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${current.color}20`, border: `1px solid ${current.color}30` }}
                >
                  <current.icon className="w-7 h-7" style={{ color: current.color }} />
                </div>
                <h3 className="font-display font-black text-3xl text-navy mb-2">{current.label}</h3>
                <p className="text-navy/50 text-sm leading-relaxed">{current.desc}</p>
              </div>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: current.color }}>
                  {current.items.length} Technologies
                </p>
                <div className="flex gap-1.5">
                  {TECH.map((_, i) => (
                    <div key={i} className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{ background: i === active ? current.color : `${current.color}25` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px flex-shrink-0" style={{ background: `${current.color}15` }} />

            {/* Right — tech grid */}
            <div className="flex-1 p-10 bg-white flex flex-col justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {current.items.map((tech, j) => (
                  <div
                    key={tech}
                    className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 cursor-default"
                    style={{
                      background: j % 3 === 0
                        ? `${current.color}10`
                        : j % 3 === 1
                          ? 'rgba(13,18,48,0.03)'
                          : `${current.color}06`,
                      border: `1px solid ${current.color}18`,
                      boxShadow: `0 2px 12px ${current.color}08`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${current.color}15` }}>
                      <span className="font-display font-black text-xs" style={{ color: current.color }}>
                        {tech.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <p className="font-display font-bold text-navy text-base">{tech}</p>
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

function FAQSection({ faqRef }) {
  const [open, setOpen] = useState(null)

  return (
    <section
      className="py-24 relative overflow-hidden"
      ref={faqRef}
      style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">FAQs</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
            Common Questions
          </h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Everything you need to know before starting your project.</p>
        </div>

        <div className="space-y-3 fade-up">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen ? '1px solid rgba(230,30,42,0.25)' : '1px solid rgba(13,18,48,0.08)',
                  boxShadow: isOpen ? '0 8px 32px rgba(230,30,42,0.08)' : '0 2px 12px rgba(13,18,48,0.04)',
                  background: isOpen ? 'rgba(254,226,226,0.25)' : 'rgba(255,255,255,0.9)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-7 py-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-xs transition-colors duration-300"
                      style={{
                        background: isOpen ? '#E61E2A' : 'rgba(13,18,48,0.06)',
                        color: isOpen ? '#fff' : '#0D1230',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`font-display font-bold text-base transition-colors duration-200 ${isOpen ? 'text-brand' : 'text-navy'}`}>
                      {q}
                    </span>
                  </div>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                    style={{
                      background: isOpen ? '#E61E2A' : 'rgba(13,18,48,0.06)',
                    }}
                  >
                    {isOpen
                      ? <Minus className="w-4 h-4 text-white" />
                      : <Plus  className="w-4 h-4 text-navy" />
                    }
                  </span>
                </button>

                {/* Answer panel */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
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
