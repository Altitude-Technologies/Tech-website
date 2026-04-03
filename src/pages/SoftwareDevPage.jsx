import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import { useScrollReveal }  from '../hooks/useScrollReveal'
import CTABand from '../components/CTABand'
import {
  Bot, Layers, Zap, Database, GitBranch,
  CheckCircle2, ArrowRight, Code2, Cloud, Settings,
  ClipboardList, Map, PenTool, Wrench, Rocket, ShieldCheck,
  TrendingUp, Star, Shield, Plus, Minus, BarChart2,
  GraduationCap, Building2, ShoppingBag, Heart, Briefcase,
  UserCheck, Lock, Plug, Server,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Settings,
    title: 'Custom Software Development',
    desc: 'Tailor-made software built around your exact business requirements.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['Business management systems', 'Inventory systems', 'ERP solutions', 'CRM software'],
  },
  {
    icon: Cloud,
    title: 'Web-Based Software (SaaS)',
    desc: 'Cloud-based applications accessible anytime, anywhere.',
    pastel: 'rgba(219,234,254,0.45)', border: 'rgba(147,197,253,0.30)', iconBg: 'rgba(147,197,253,0.35)', iconColor: '#1d4ed8',
    items: ['Multi-user access', 'Subscription models', 'Real-time data management', 'Secure cloud infrastructure'],
  },
  {
    icon: Database,
    title: 'Enterprise Software Solutions',
    desc: 'Robust systems designed for large-scale operations.',
    pastel: 'rgba(254,243,199,0.45)', border: 'rgba(252,211,77,0.30)', iconBg: 'rgba(252,211,77,0.35)', iconColor: '#92400e',
    items: ['Workflow automation', 'Data management systems', 'Integration with existing tools'],
  },
  {
    icon: Zap,
    title: 'Automation Software',
    desc: 'Automate business processes and eliminate manual work.',
    pastel: 'rgba(220,252,231,0.45)', border: 'rgba(134,239,172,0.30)', iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    items: ['Task automation systems', 'CRM automation', 'Lead management systems', 'Email & marketing automation'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Software',
    desc: 'Intelligent systems that think, learn, and adapt to your business.',
    pastel: 'rgba(243,232,255,0.45)', border: 'rgba(196,181,253,0.30)', iconBg: 'rgba(196,181,253,0.35)', iconColor: '#6d28d9',
    items: ['AI-based decision making', 'Predictive analytics', 'Chatbots & virtual assistants', 'Smart data processing'],
  },
  {
    icon: GitBranch,
    title: 'API Development & Integration',
    desc: 'Connect your systems and third-party services seamlessly.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['RESTful & GraphQL APIs', 'Third-party integrations', 'Legacy system modernization', 'Microservices architecture'],
  },
]

const KEY_FEATURES = [
  { icon: UserCheck, label: 'User-Friendly Interface'      },
  { icon: Lock,      label: 'High Security & Data Protection' },
  { icon: Layers,    label: 'Scalable Architecture'        },
  { icon: Plug,      label: 'API Integration'              },
  { icon: Server,    label: 'Cloud & On-Premise Options'   },
]

const PROCESS = [
  { icon: ClipboardList, step: '01', title: 'Requirement Analysis', desc: 'Understanding your business challenges and goals.'        },
  { icon: Map,           step: '02', title: 'System Design',        desc: 'Creating architecture and workflow planning.'             },
  { icon: PenTool,       step: '03', title: 'UI/UX Design',         desc: 'Designing intuitive and efficient interfaces.'           },
  { icon: Code2,         step: '04', title: 'Development',          desc: 'Building robust and scalable software.'                  },
  { icon: Wrench,        step: '05', title: 'Testing & QA',         desc: 'Ensuring performance, security, and reliability.'        },
  { icon: Rocket,        step: '06', title: 'Deployment',           desc: 'Launching your software smoothly.'                      },
  { icon: ShieldCheck,   step: '07', title: 'Support & Maintenance','desc': 'Continuous monitoring and updates.'                    },
]

const TECH = [
  {
    label: 'Backend',
    icon: Code2,
    color: '#be123c',
    items: ['Node.js', 'PHP (Laravel)', 'Python'],
    desc: 'Powerful server-side logic built for performance and scale.',
  },
  {
    label: 'Frontend & DB',
    icon: Database,
    color: '#92400e',
    items: ['React', 'Angular', 'MySQL', 'MongoDB'],
    desc: 'Modern interfaces and reliable data storage solutions.',
  },
  {
    label: 'Cloud & APIs',
    icon: Cloud,
    color: '#1d4ed8',
    items: ['AWS', 'Firebase', 'REST APIs', 'Integrations'],
    desc: 'Scalable cloud infrastructure and seamless connectivity.',
  },
]

const WHY_US = [
  { icon: Bot,        title: 'AI & Automation Expertise',    desc: 'Smart features that give your business a real edge.'           },
  { icon: Settings,   title: 'Fully Custom Solutions',       desc: 'Every solution is built from scratch for your exact needs.'   },
  { icon: Layers,     title: 'Scalable & Future-Ready',      desc: 'Architecture designed to grow with your business.'            },
  { icon: Zap,        title: 'Fast Delivery',                desc: 'Rapid turnaround without compromising on quality.'            },
  { icon: TrendingUp, title: 'Affordable Pricing',           desc: 'Premium quality at transparent, competitive rates.'           },
  { icon: Shield,     title: 'Secure & Reliable',            desc: 'Enterprise-grade security baked into every layer.'            },
]

const IMPACT = [
  { icon: Zap,        value: 'Automate',  label: 'Operations'          },
  { icon: TrendingUp, value: 'Improve',   label: 'Productivity'        },
  { icon: ShieldCheck,value: 'Reduce',    label: 'Manual Errors'       },
  { icon: Rocket,     value: 'Scale',     label: 'Your Business Faster'},
]

const INDUSTRIES = [
  { icon: Heart,       label: 'Healthcare'          },
  { icon: GraduationCap, label: 'Education'         },
  { icon: Building2,   label: 'Real Estate'         },
  { icon: BarChart2,   label: 'Finance'             },
  { icon: ShoppingBag, label: 'E-commerce'          },
  { icon: Briefcase,   label: 'Startups & Enterprises' },
]

const FAQS = [
  { q: 'How much does custom software cost?',   a: 'Pricing depends on features and complexity. We offer flexible and scalable pricing tailored to your budget.'  },
  { q: 'How long does development take?',        a: 'Typically 30–120 days based on project scope, complexity, and requirements.'                                  },
  { q: 'Can you upgrade existing software?',    a: 'Yes, we provide full modernization and upgrade services for legacy systems.'                                   },
  { q: 'Do you provide ongoing support?',       a: 'Yes, we offer dedicated maintenance and support services post-launch.'                                         },
]

const STATS = [
  { value: '40+',  label: 'Software Projects'   },
  { value: '7+',   label: 'Industries Served'   },
  { value: '100%', label: 'Custom-Built'        },
  { value: '24/7', label: 'Support Available'   },
]

export default function SoftwareDevPage() {
  const headerRef  = useRevealOnMount()
  const introRef   = useScrollReveal()
  const cardsRef   = useScrollReveal()
  const featRef    = useScrollReveal()
  const processRef = useScrollReveal()
  const techRef    = useScrollReveal()
  const impactRef  = useScrollReveal()
  const indRef     = useScrollReveal()
  const whyRef     = useScrollReveal()
  const faqRef     = useScrollReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 85% 40%, rgba(146,64,14,0.06) 0%, transparent 65%),
                       radial-gradient(ellipse 50% 40% at 10% 80%, rgba(190,18,60,0.04) 0%, transparent 60%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-20 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.07]"
          style={{ border: '2px solid #92400e', transform: 'translate(35%,-20%)' }} />
        <div className="absolute right-0 top-20 w-[380px] h-[380px] rounded-full pointer-events-none opacity-[0.05]"
          style={{ border: '2px solid #be123c', transform: 'translate(40%,-10%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(146,64,14,0.08)', color: '#92400e', border: '1px solid rgba(146,64,14,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#92400e' }} />
              Software Development
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-2 mb-6 leading-[1.1]">
              Custom Software Built for<br />
              <span className="text-gradient">Performance & Growth</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed mb-10 max-w-2xl">
              We design and develop scalable, secure, and intelligent software tailored to your business
              needs — powered by modern technologies, automation, and AI.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl hover:-translate-y-px transition-transform duration-200 text-base"
                style={{ color: '#fff', boxShadow: '0 4px 20px rgba(230,30,42,0.4)' }}
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
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
              At Altitude Technologies, we build custom software solutions that simplify operations,
              improve efficiency, and accelerate business growth. From startups to enterprises, we deliver software that is:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Settings,   label: 'Fully Customized'  },
                { icon: Layers,     label: 'Highly Scalable'   },
                { icon: Shield,     label: 'Secure & Reliable' },
                { icon: TrendingUp, label: 'Built to Last'     },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl px-4 py-4 text-sm font-semibold text-navy flex flex-col items-center gap-2"
                  style={{ background: 'rgba(254,243,199,0.4)', border: '1px solid rgba(252,211,77,0.3)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#92400e' }} />
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
            <span className="section-label justify-center">What We Build</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Software Development Services
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

      {/* ── Key Features ── */}
      <section className="py-16" ref={featRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 fade-up">
            <span className="section-label justify-center">Built-In Quality</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-navy tracking-tight mt-4">
              Key Features of Our Software
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 fade-up">
            {KEY_FEATURES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card card-lift"
                style={{ boxShadow: '0 2px 16px rgba(13,18,48,0.06)' }}>
                <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-brand" />
                </div>
                <span className="font-semibold text-navy text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-white" ref={processRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">How We Work</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Development Process
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">A proven 7-step process from concept to deployment and beyond.</p>
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

      {/* ── Technologies ── */}
      <SoftwareTechSection techRef={techRef} />

      {/* ── Business Impact ── */}
      <section className="py-20 bg-white" ref={impactRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center">Business Impact</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              What Our Software Enables
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

      {/* ── Industries ── */}
      <section className="py-16" ref={indRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 fade-up">
            <span className="section-label justify-center">Our Reach</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-navy tracking-tight mt-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map(({ icon: Icon, label }, i) => (
              <div key={label} className="glass-card rounded-2xl p-5 text-center card-lift fade-up"
                style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <span className="text-sm font-medium text-navy">{label}</span>
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
            <p className="mt-4 text-white/40 max-w-md mx-auto">We don't just write code. We engineer business outcomes.</p>
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
      <SoftwareFAQSection faqRef={faqRef} />

      <CTABand />
    </>
  )
}

function SoftwareTechSection({ techRef }) {
  const [active, setActive] = useState(0)
  const current = TECH[active]

  return (
    <section className="py-24 relative overflow-hidden" ref={techRef}
      style={{ background: 'linear-gradient(160deg, #fafafa 0%, #fffbf0 50%, #fff5f5 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">Our Stack</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Technologies We Use</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Enterprise-grade technologies chosen for reliability, performance, and longevity.</p>
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
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: current.color }}>{current.items.length} Technologies</p>
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
                {current.items.map((tech, j) => (
                  <div key={tech} className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 cursor-default"
                    style={{ background: j % 3 === 0 ? `${current.color}10` : j % 3 === 1 ? 'rgba(13,18,48,0.03)' : `${current.color}06`, border: `1px solid ${current.color}18`, boxShadow: `0 2px 12px ${current.color}08` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${current.color}15` }}>
                      <span className="font-display font-black text-xs" style={{ color: current.color }}>{tech.slice(0, 2).toUpperCase()}</span>
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

function SoftwareFAQSection({ faqRef }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 relative overflow-hidden" ref={faqRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">FAQs</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Common Questions</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Everything you need to know before starting your software project.</p>
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
