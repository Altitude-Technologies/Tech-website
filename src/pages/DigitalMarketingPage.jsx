import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import { useScrollReveal }  from '../hooks/useScrollReveal'
import CTABand from '../components/CTABand'
import {
  TrendingUp, Search, Share2, BarChart2, Star, Zap,
  CheckCircle2, ArrowRight, Bot, Brain, Target, Megaphone,
  ClipboardList, Map, Rocket, Eye, Shield, Users,
  Globe, PenTool, Plus, Minus, Layers, MessageSquare,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    desc: 'Rank higher on Google and attract organic traffic that converts.',
    pastel: 'rgba(220,252,231,0.45)', border: 'rgba(134,239,172,0.30)', iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    items: ['Keyword research', 'On-page SEO', 'Technical SEO', 'Link building', 'Local SEO'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing (SMM)',
    desc: 'Build your brand and engage your audience across all major platforms.',
    pastel: 'rgba(219,234,254,0.45)', border: 'rgba(147,197,253,0.30)', iconBg: 'rgba(147,197,253,0.35)', iconColor: '#1d4ed8',
    items: ['Content creation', 'Post design', 'Reels & video marketing', 'Page management'],
  },
  {
    icon: Target,
    title: 'Performance Marketing (Paid Ads)',
    desc: 'Run targeted ad campaigns on Google & Meta that generate real results.',
    pastel: 'rgba(254,226,226,0.45)', border: 'rgba(252,165,165,0.30)', iconBg: 'rgba(252,165,165,0.35)', iconColor: '#be123c',
    items: ['Google Ads', 'Meta Ads (Facebook & Instagram)', 'Instant traffic', 'Lead generation & sales-focused campaigns'],
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    desc: 'Attract and educate your audience with valuable, SEO-optimised content.',
    pastel: 'rgba(254,243,199,0.45)', border: 'rgba(252,211,77,0.30)', iconBg: 'rgba(252,211,77,0.35)', iconColor: '#92400e',
    items: ['Blog writing', 'Website content', 'Ad copywriting', 'SEO content'],
  },
  {
    icon: Star,
    title: 'Branding & Creative Design',
    desc: 'Build a strong, memorable brand identity that stands out in the market.',
    pastel: 'rgba(243,232,255,0.45)', border: 'rgba(196,181,253,0.30)', iconBg: 'rgba(196,181,253,0.35)', iconColor: '#6d28d9',
    items: ['Logo design', 'Social media creatives', 'Marketing materials'],
  },
  {
    icon: Bot,
    title: 'AI-Powered Marketing',
    desc: 'Stay ahead with smart, automated marketing solutions driven by AI.',
    pastel: 'rgba(220,252,231,0.45)', border: 'rgba(134,239,172,0.30)', iconBg: 'rgba(134,239,172,0.35)', iconColor: '#15803d',
    items: ['AI-based audience targeting', 'Automated campaigns', 'Chatbot lead generation', 'Predictive analytics'],
  },
]

const PROCESS = [
  { icon: ClipboardList, step: '01', title: 'Research & Strategy',  desc: 'Understanding your business, audience, and competitors.'   },
  { icon: Map,           step: '02', title: 'Campaign Planning',    desc: 'Creating a custom marketing plan tailored to your goals.'   },
  { icon: Rocket,        step: '03', title: 'Execution',            desc: 'Launching campaigns across the right platforms.'            },
  { icon: BarChart2,     step: '04', title: 'Optimization',         desc: 'Continuous improvement based on live data and insights.'   },
  { icon: Eye,           step: '05', title: 'Reporting',            desc: 'Transparent performance reports with actionable insights.' },
]

const TECH = [
  {
    label: 'SEO & Analytics',
    icon: Search,
    color: '#15803d',
    items: ['Google Analytics', 'Ahrefs', 'SEMrush', 'Google Search Console'],
    desc: 'Data-backed tools to track, measure, and improve organic performance.',
  },
  {
    label: 'Paid Ads',
    icon: Target,
    color: '#be123c',
    items: ['Google Ads', 'Meta Business Suite', 'Google Tag Manager', 'Meta Pixel'],
    desc: 'Precision targeting platforms to maximise your ad spend ROI.',
  },
  {
    label: 'Automation & AI',
    icon: Bot,
    color: '#6d28d9',
    items: ['HubSpot', 'Zapier', 'Mailchimp', 'ChatGPT API'],
    desc: 'Smart automation tools that scale your marketing without scaling effort.',
  },
]

const WHY_US = [
  { icon: BarChart2,    title: 'Data-Driven Strategies',      desc: 'Every decision is backed by real data, not guesswork.'              },
  { icon: Bot,          title: 'AI-Powered Marketing',         desc: 'Leverage AI for smarter targeting and automated campaigns.'         },
  { icon: TrendingUp,   title: 'ROI-Focused Campaigns',        desc: 'We measure success by the revenue we generate for your business.'  },
  { icon: Brain,        title: 'Creative & Technical Expertise', desc: 'The perfect blend of creativity and analytical thinking.'        },
  { icon: Shield,       title: 'Affordable Monthly Plans',     desc: 'Flexible plans that fit businesses of all sizes and budgets.'      },
  { icon: Users,        title: 'Dedicated Account Manager',    desc: 'A single point of contact who knows your business inside-out.'     },
]

const IMPACT = [
  { icon: Globe,       value: 'Increase', label: 'Website Traffic'      },
  { icon: Target,      value: 'Generate', label: 'Quality Leads'        },
  { icon: TrendingUp,  value: 'Boost',    label: 'Conversion Rates'     },
  { icon: BarChart2,   value: 'Maximise', label: 'ROI on Ad Spend'      },
]

const INDUSTRIES = [
  { icon: Globe,        label: 'Education'              },
  { icon: Shield,       label: 'Healthcare'             },
  { icon: Layers,       label: 'Real Estate'            },
  { icon: Megaphone,    label: 'E-commerce'             },
  { icon: Rocket,       label: 'Startups & Businesses'  },
  { icon: MessageSquare,label: 'SaaS & Tech'            },
]

const FAQS = [
  { q: 'How long does it take to see results?',         a: 'SEO typically takes 2–3 months to show measurable results, while paid ads can generate traffic and leads instantly from day one.' },
  { q: 'Do you provide monthly packages?',              a: 'Yes, we offer flexible monthly marketing plans tailored to your budget and goals. No long-term lock-in required.' },
  { q: 'Can you manage our social media accounts?',     a: 'Absolutely. We provide full social media management including content creation, scheduling, posting, and engagement.' },
  { q: 'Will I get performance reports?',               a: 'Yes, we provide regular detailed performance reports covering traffic, leads, conversions, and key campaign metrics.' },
]

const STATS = [
  { value: '3×',   label: 'Avg. ROI Delivered'    },
  { value: '50+',  label: 'Campaigns Launched'    },
  { value: '90%',  label: 'Client Retention Rate' },
  { value: '24/7', label: 'Campaign Monitoring'   },
]

export default function DigitalMarketingPage() {
  const headerRef  = useRevealOnMount()
  const introRef   = useScrollReveal()
  const cardsRef   = useScrollReveal()
  const processRef = useScrollReveal()
  const techRef    = useScrollReveal()
  const impactRef  = useScrollReveal()
  const industryRef = useScrollReveal()
  const whyRef     = useScrollReveal()
  const faqRef     = useScrollReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 85% 40%, rgba(21,128,61,0.07) 0%, transparent 65%),
                       radial-gradient(ellipse 50% 40% at 10% 80%, rgba(230,30,42,0.04) 0%, transparent 60%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-20 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.07]"
          style={{ border: '2px solid #15803d', transform: 'translate(35%,-20%)' }} />
        <div className="absolute right-0 top-20 w-[380px] h-[380px] rounded-full pointer-events-none opacity-[0.05]"
          style={{ border: '2px solid #E61E2A', transform: 'translate(40%,-10%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(21,128,61,0.08)', color: '#15803d', border: '1px solid rgba(21,128,61,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#15803d' }} />
              Digital Marketing
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-2 mb-6 leading-[1.1]">
              Grow Your Business with<br />
              <span className="text-gradient">Smart Digital Marketing</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed mb-10 max-w-2xl">
              We combine data, creativity, and AI-driven strategies to help your brand reach the
              right audience, generate quality leads, and increase revenue.
            </p>
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl hover:-translate-y-px transition-transform duration-200 text-base"
                style={{ color: '#fff', boxShadow: '0 4px 20px rgba(230,30,42,0.4)' }}
              >
                Get Free Marketing Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy font-semibold rounded-xl border-2 border-navy/20 hover:border-brand hover:text-brand hover:-translate-y-px transition-all duration-200 shadow-sm text-base"
              >
                Start Your Campaign <ArrowRight className="w-4 h-4" />
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
              At Altitude Technologies, we don't just run campaigns — we build growth engines for
              your business. Our digital marketing solutions are designed to deliver:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Globe,      label: 'Increase Visibility'  },
                { icon: Target,     label: 'Generate Leads'       },
                { icon: TrendingUp, label: 'Boost Conversions'    },
                { icon: BarChart2,  label: 'Maximise ROI'         },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-xl px-4 py-4 text-sm font-semibold text-navy flex flex-col items-center gap-2"
                  style={{ background: 'rgba(220,252,231,0.4)', border: '1px solid rgba(134,239,172,0.3)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#15803d' }} />
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
            <span className="section-label justify-center">What We Do</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Our Digital Marketing Services
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
              Our Marketing Approach
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">A proven 5-step process from strategy to measurable results.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={step} className="glass-card rounded-2xl p-7 card-lift fade-up relative overflow-hidden group"
                style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="absolute top-4 right-5 font-display font-black text-5xl select-none leading-none transition-colors duration-300 text-navy/[0.05] group-hover:text-brand">{step}</span>
                <div className="absolute top-7 left-0 w-1 h-8 rounded-r-full bg-brand/20" />
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-display font-bold text-navy text-base mb-1.5">{title}</h3>
                <p className="text-navy/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools ── */}
      <MarketingTechSection techRef={techRef} />

      {/* ── Impact ── */}
      <section className="py-20 bg-white" ref={impactRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center">Results</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Results You Can Expect
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
      <section className="py-20" ref={industryRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center">Industries</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
            {INDUSTRIES.map(({ icon: Icon, label }, i) => (
              <div key={label} className="glass-card rounded-2xl p-6 fade-up text-center card-lift"
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <p className="font-display font-bold text-navy text-sm">{label}</p>
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
            <p className="mt-4 text-white/40 max-w-md mx-auto">We build growth engines, not just campaigns.</p>
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
      <MarketingFAQSection faqRef={faqRef} />

      <CTABand />
    </>
  )
}

function MarketingTechSection({ techRef }) {
  const [active, setActive] = useState(0)
  const current = TECH[active]

  return (
    <section className="py-24 relative overflow-hidden" ref={techRef}
      style={{ background: 'linear-gradient(160deg, #fafafa 0%, #f0fdf4 50%, #f0f9ff 100%)' }}>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">Our Toolkit</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Tools & Platforms We Use</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Industry-leading platforms to power every stage of your marketing funnel.</p>
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
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: current.color }}>{current.items.length} Platforms</p>
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

function MarketingFAQSection({ faqRef }) {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 relative overflow-hidden" ref={faqRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <span className="section-label justify-center">FAQs</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">Common Questions</h2>
          <p className="text-navy/50 mt-4 max-w-md mx-auto">Everything you need to know before starting your marketing journey.</p>
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
