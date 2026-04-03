import { useScrollReveal }  from '../hooks/useScrollReveal'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import CTABand from '../components/CTABand'
import {
  Code2, Globe, Smartphone, Cpu, Layers,
  Palette, Compass, Layout, PenTool,
  TrendingUp, Search, Share2, BarChart2, Star,
  Bot, MessageSquare, GitBranch, Brain, Zap,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    id: 'web',
    icon: Code2,
    title: 'Web Development',
    tagline: 'Fast. Secure. Scalable.',
    desc: 'We create fast, secure, and SEO-friendly websites that convert visitors into customers. From landing pages to full e-commerce platforms, built with modern frameworks.',
    pastel: 'rgba(254, 226, 226, 0.45)',
    border: 'rgba(252, 165, 165, 0.30)',
    corner: 'rgba(230, 30, 42, 0.03)',
    iconBg: 'rgba(252, 165, 165, 0.35)', iconColor: '#be123c',
    knowMore: '/services/web-development',
    items: [
      { icon: Globe,      text: 'Static & Dynamic Websites' },
      { icon: Smartphone, text: 'E-commerce Platforms'      },
      { icon: Cpu,        text: 'Custom Web Applications'   },
      { icon: Layers,     text: 'SaaS Product Development'  },
    ],
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'Mobile App Development',
    tagline: 'Android & iOS. Built for scale.',
    desc: 'Custom Android & iOS apps designed for performance, scalability, and delightful user experiences. From MVP to enterprise-grade mobile solutions.',
    pastel: 'rgba(219, 234, 254, 0.45)',
    border: 'rgba(147, 197, 253, 0.30)',
    corner: 'rgba(13, 18, 48, 0.03)',
    iconBg: 'rgba(147, 197, 253, 0.35)', iconColor: '#1d4ed8',
    knowMore: '/services/mobile-app',
    items: [
      { icon: Smartphone, text: 'Native iOS Development'        },
      { icon: Smartphone, text: 'Native Android Development'     },
      { icon: Layers,     text: 'Cross-Platform (React Native)'  },
      { icon: Cpu,        text: 'App Performance Optimization'   },
    ],
  },
  {
    id: 'software',
    icon: Cpu,
    title: 'Software Development',
    tagline: 'Tailor-made for your operations.',
    desc: 'Tailor-made business software solutions that automate operations, integrate with your existing tools, and scale with your team.',
    pastel: 'rgba(254, 243, 199, 0.45)',
    border: 'rgba(252, 211, 77, 0.30)',
    corner: 'rgba(230, 30, 42, 0.03)',
    iconBg: 'rgba(252, 211, 77, 0.35)', iconColor: '#92400e',
    knowMore: '/services/software',
    items: [
      { icon: Code2,      text: 'Custom Business Software'      },
      { icon: GitBranch,  text: 'API Development & Integration' },
      { icon: Layers,     text: 'Legacy System Modernization'   },
      { icon: Cpu,        text: 'Cloud-Native Architecture'     },
    ],
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    tagline: 'Design that drives engagement.',
    desc: 'Designs that enhance user experience and increase engagement. We combine aesthetics with psychology to create interfaces users love.',
    pastel: 'rgba(243, 232, 255, 0.45)',
    border: 'rgba(196, 181, 253, 0.30)',
    corner: 'rgba(13, 18, 48, 0.03)',
    iconBg: 'rgba(196, 181, 253, 0.35)', iconColor: '#6d28d9',
    knowMore: '/services/ui-ux',
    items: [
      { icon: Compass,  text: 'User Experience Strategy'  },
      { icon: Layout,   text: 'Interface Design'           },
      { icon: PenTool,  text: 'Prototyping & Wireframing'  },
      { icon: Star,     text: 'Brand Identity Design'      },
    ],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    tagline: 'Growth you can measure.',
    desc: 'Data-driven strategies to grow your online presence, drive traffic, and convert visitors. Every campaign is tracked, measured, and optimized.',
    pastel: 'rgba(220, 252, 231, 0.45)',
    border: 'rgba(134, 239, 172, 0.30)',
    corner: 'rgba(230, 30, 42, 0.03)',
    iconBg: 'rgba(134, 239, 172, 0.35)', iconColor: '#15803d',
    knowMore: '/services/digital-marketing',
    items: [
      { icon: Search,    text: 'SEO Optimization'          },
      { icon: Share2,    text: 'Social Media Marketing'    },
      { icon: BarChart2, text: 'Paid Ads (PPC)'            },
      { icon: Star,      text: 'Content Marketing'         },
    ],
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'AI & Automation',
    tagline: 'Your strongest competitive edge.',
    desc: 'Intelligent systems that automate repetitive workflows, improve productivity, and help your business scale faster — without scaling your headcount.',
    dark: true,
    items: [
      { icon: MessageSquare, text: 'AI Chatbots & Assistants'   },
      { icon: GitBranch,     text: 'Business Process Automation' },
      { icon: Brain,         text: 'AI Marketing Systems'       },
      { icon: Zap,           text: 'Workflow Automation Tools'  },
    ],
  },
]

export default function ServicesPage() {
  const headerRef  = useRevealOnMount()  // page header — already in viewport
  const cardsRef   = useScrollReveal()

  return (
    <>
      {/* ── Page Header ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 90% 50%, rgba(230,30,42,0.03) 0%, transparent 70%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <span className="section-label mb-4">What We Offer</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-4 mb-6">
              End-to-End Digital<br />
              <span className="text-gradient">Solutions That Scale</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed">
              From concept to deployment — development, design, marketing, and AI automation
              all under one roof, so you never have to stitch together a dozen vendors.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-white" ref={cardsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map(({ icon: Icon, title, tagline, desc, dark, pastel, border, corner, iconBg, iconColor, knowMore, items }, i) => (
              <div
                key={title}
                className="rounded-2xl p-9 card-lift fade-up relative overflow-hidden"
                style={{
                  transitionDelay: `${(i % 2) * 0.10}s`,
                  ...(dark ? {
                    background: 'linear-gradient(135deg, #0D1230 0%, #1a2050 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  } : {
                    background: pastel,
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: `1px solid ${border}`,
                    boxShadow: '0 4px 32px rgba(13,18,48,0.06)',
                  }),
                }}
              >
                {/* Corner accent */}
                {!dark && (
                  <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none"
                    style={{ background: corner }} />
                )}
                {dark && (
                  <div className="absolute top-0 right-0 w-48 h-48 rounded-bl-full bg-brand/15 pointer-events-none" />
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={dark ? { background: '#E61E2A' } : { background: iconBg }}
                >
                  <Icon className="w-6 h-6" style={dark ? { color: '#fff' } : { color: iconColor }} />
                </div>

                {/* Text */}
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${dark ? 'text-brand' : 'text-brand/70'}`}>
                  {tagline}
                </p>
                <h3 className={`font-display font-bold text-2xl mb-3 ${dark ? 'text-white' : 'text-navy'}`}>
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-white/55' : 'text-navy/55'}`}>
                  {desc}
                </p>

                {/* Feature list */}
                <ul className="space-y-2.5">
                  {items.map(({ icon: ItemIcon, text }) => (
                    <li key={text} className={`flex items-center gap-2.5 text-sm ${dark ? 'text-white/65' : 'text-navy/65'}`}>
                      <ItemIcon className="w-4 h-4 flex-shrink-0" style={dark ? { color: '#E61E2A' } : { color: iconColor }} />
                      {text}
                    </li>
                  ))}
                </ul>

                {knowMore && !dark && (
                  <Link
                    to={knowMore}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                    style={{ color: iconColor }}
                  >
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {dark && (
                  <Link
                    to="/ai-automation"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                  >
                    Explore AI Solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
