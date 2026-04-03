import { Link } from 'react-router-dom'
import { useRevealOnMount } from '../hooks/useRevealOnMount'
import { useScrollReveal }  from '../hooks/useScrollReveal'
import CTABand from '../components/CTABand'
import {
  CheckCircle2, ArrowRight, Star, Zap, Globe, ShoppingCart,
  Cpu, Settings, Plus, Shield, Headphones, Gift, CreditCard,
  TrendingUp, Lock, BarChart2,
} from 'lucide-react'

const PACKAGES = [
  {
    id: 'starter',
    badge: 'Starter',
    badgeColor: '#15803d',
    badgeBg: 'rgba(220,252,231,0.6)',
    badgeBorder: 'rgba(134,239,172,0.4)',
    icon: Globe,
    iconBg: 'rgba(134,239,172,0.35)',
    iconColor: '#15803d',
    pastel: 'rgba(220,252,231,0.25)',
    border: 'rgba(134,239,172,0.30)',
    accent: '#15803d',
    best: false,
    bestFor: 'Individuals, Startups & Small Businesses',
    price: '₹15,000',
    priceMax: '₹30,000',
    features: [
      'Up to 5 Pages (Home, About, Services, Contact)',
      'Mobile Responsive Design',
      'Advanced UI/UX Design',
      'Contact Form Integration',
      'Basic SEO Setup',
      '1 Year Free Domain & Hosting',
      '1 Month Free Support',
    ],
    highlight: ['1 Year Free Domain & Hosting', '1 Month Free Support'],
  },
  {
    id: 'business',
    badge: 'Business',
    badgeColor: '#1d4ed8',
    badgeBg: 'rgba(219,234,254,0.6)',
    badgeBorder: 'rgba(147,197,253,0.4)',
    icon: TrendingUp,
    iconBg: 'rgba(147,197,253,0.35)',
    iconColor: '#1d4ed8',
    pastel: 'rgba(219,234,254,0.25)',
    border: 'rgba(147,197,253,0.30)',
    accent: '#1d4ed8',
    best: false,
    bestFor: 'Growing Companies & Brands',
    price: '₹30,000',
    priceMax: '₹75,000',
    features: [
      'Up to 10–15 Pages',
      'Advanced UI/UX Design',
      'Speed Optimization',
      'On-Page SEO Optimization',
      'Blog Integration',
      'WhatsApp / Chat Integration',
      '1 Year Free Domain & Hosting',
      '2 Months Free Support',
    ],
    highlight: ['1 Year Free Domain & Hosting', '2 Months Free Support'],
  },
  {
    id: 'premium',
    badge: 'Premium',
    badgeColor: '#E61E2A',
    badgeBg: 'rgba(254,226,226,0.6)',
    badgeBorder: 'rgba(252,165,165,0.4)',
    icon: Star,
    iconBg: 'rgba(252,165,165,0.35)',
    iconColor: '#be123c',
    pastel: 'rgba(254,226,226,0.30)',
    border: 'rgba(252,165,165,0.40)',
    accent: '#E61E2A',
    best: true,
    bestFor: 'Enterprises & High-End Brands',
    price: '₹75,000',
    priceMax: '₹2,50,000+',
    features: [
      'Unlimited Pages',
      'Custom UI/UX Design (Figma-based)',
      'Advanced Animations & Interactions',
      'API Integrations',
      'Performance Optimization',
      'SEO + Analytics Setup',
      '1 Year Free Domain & Hosting',
      '3 Months Free Support',
    ],
    highlight: ['1 Year Free Domain & Hosting', '3 Months Free Support'],
  },
  {
    id: 'ecommerce',
    badge: 'E-Commerce',
    badgeColor: '#92400e',
    badgeBg: 'rgba(254,243,199,0.6)',
    badgeBorder: 'rgba(252,211,77,0.4)',
    icon: ShoppingCart,
    iconBg: 'rgba(252,211,77,0.35)',
    iconColor: '#92400e',
    pastel: 'rgba(254,243,199,0.25)',
    border: 'rgba(252,211,77,0.30)',
    accent: '#92400e',
    best: false,
    bestFor: 'Online Stores & Product-Based Businesses',
    price: '₹50,000',
    priceMax: '₹3,00,000+',
    features: [
      'Product Management System',
      'Payment Gateway Integration',
      'Cart & Checkout System',
      'Inventory Management',
      'Order Tracking',
      'Security Optimization',
      '3 Months Free Support',
    ],
    highlight: ['3 Months Free Support'],
  },
  {
    id: 'custom',
    badge: 'Custom App',
    badgeColor: '#6d28d9',
    badgeBg: 'rgba(243,232,255,0.6)',
    badgeBorder: 'rgba(196,181,253,0.4)',
    icon: Cpu,
    iconBg: 'rgba(196,181,253,0.35)',
    iconColor: '#6d28d9',
    pastel: 'rgba(243,232,255,0.25)',
    border: 'rgba(196,181,253,0.30)',
    accent: '#6d28d9',
    best: false,
    bestFor: 'SaaS, CRM & Automation Platforms',
    price: '₹1,50,000',
    priceMax: '₹10,00,000+',
    features: [
      'Fully Custom Development',
      'Admin Dashboard',
      'User Authentication System',
      'API Integrations',
      'AI / Automation Features',
      'Scalable Architecture',
      'Dedicated Support',
    ],
    highlight: ['Dedicated Support'],
  },
]

const ADDONS = [
  { icon: BarChart2,  label: 'SEO Optimization',                  price: '₹10,000 – ₹50,000'       },
  { icon: Settings,   label: 'Monthly Maintenance',               price: '₹3,000 – ₹15,000 / mo'   },
  { icon: Zap,        label: 'Content Writing',                   price: '₹2,000 – ₹10,000'         },
  { icon: Star,       label: 'UI/UX Design Only',                 price: '₹10,000 – ₹60,000'        },
  { icon: Globe,      label: 'Extra Hosting (High Traffic)',      price: '₹5,000 – ₹25,000 / year'  },
]

const WHY = [
  { icon: Globe,     label: 'Global Standard Development'      },
  { icon: Zap,       label: 'Fast & Performance-Optimized'     },
  { icon: TrendingUp,label: 'Conversion-Focused Design'        },
  { icon: Lock,      label: 'Secure & Scalable Solutions'      },
  { icon: Gift,      label: 'Free Domain & Hosting (1 Year)'   },
  { icon: Headphones,label: 'Dedicated Support Team'           },
]

const PAYMENT = [
  { pct: '50%', label: 'Advance to Start Project',    color: '#E61E2A'  },
  { pct: '30%', label: 'After Design Approval',        color: '#1d4ed8'  },
  { pct: '20%', label: 'Before Final Delivery',        color: '#15803d'  },
]

export default function PricingPage() {
  const headerRef  = useRevealOnMount()
  const packRef    = useScrollReveal()
  const addonsRef  = useScrollReveal()
  const whyRef     = useScrollReveal()
  const payRef     = useScrollReveal()

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 85% 40%, rgba(230,30,42,0.06) 0%, transparent 65%),
                       radial-gradient(ellipse 50% 40% at 10% 80%, rgba(13,18,48,0.04) 0%, transparent 60%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-20 w-[520px] h-[520px] rounded-full pointer-events-none opacity-[0.06]"
          style={{ border: '2px solid #E61E2A', transform: 'translate(35%,-20%)' }} />
        <div className="absolute right-0 top-20 w-[360px] h-[360px] rounded-full pointer-events-none opacity-[0.04]"
          style={{ border: '2px solid #0D1230', transform: 'translate(40%,-10%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(230,30,42,0.08)', color: '#E61E2A', border: '1px solid rgba(230,30,42,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-brand" />
              Transparent Pricing
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-2 mb-6 leading-[1.1]">
              Simple, Honest<br />
              <span className="text-gradient">Website Packages</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              No hidden costs. No surprises. Choose a plan that fits your business and let us build something extraordinary together.
            </p>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl text-white text-base hover:-translate-y-px transition-transform duration-200"
              style={{ boxShadow: '0 4px 20px rgba(230,30,42,0.4)' }}
            >
              Get a Free Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="py-20 bg-white" ref={packRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 fade-up">
            <span className="section-label justify-center">Our Packages</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Website Packages
            </h2>
            <p className="text-navy/50 mt-4 max-w-lg mx-auto">Every package includes free domain & hosting for the first year.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map(({ id, badge, badgeColor, badgeBg, badgeBorder, icon: Icon, iconBg, iconColor, pastel, border, accent, best, bestFor, price, priceMax, features, highlight }, i) => (
              <div key={id}
                className={`rounded-2xl p-7 card-lift fade-up relative overflow-hidden flex flex-col ${best ? 'ring-2' : ''}`}
                style={{
                  background: pastel,
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  border: best ? `2px solid ${accent}` : `1px solid ${border}`,
                  boxShadow: best ? `0 8px 40px ${accent}20` : '0 4px 32px rgba(13,18,48,0.06)',
                  transitionDelay: `${(i % 3) * 0.07}s`,
                  ...(best ? { ringColor: accent } : {}),
                }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40)` }} />

                {/* Most Popular badge */}
                {best && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: accent }}>
                    Most Popular
                  </div>
                )}

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconBg }}>
                    <Icon className="w-5 h-5" style={{ color: iconColor }} />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-1"
                      style={{ background: badgeBg, color: badgeColor, border: `1px solid ${badgeBorder}` }}>
                      {badge}
                    </span>
                    <p className="text-navy/50 text-xs leading-snug">{bestFor}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-black text-3xl text-navy">{price}</span>
                    <span className="text-navy/40 text-sm font-medium">– {priceMax}</span>
                  </div>
                  <p className="text-navy/40 text-xs mt-1">One-time project cost</p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1 mb-7">
                  {features.map((f) => {
                    const isHighlight = highlight.includes(f)
                    return (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        {isHighlight
                          ? <Gift className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                          : <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: iconColor }} />
                        }
                        <span className={isHighlight ? 'font-semibold' : 'text-navy/65'}
                          style={isHighlight ? { color: accent } : {}}>
                          {f}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-px"
                  style={best
                    ? { background: accent, color: '#fff', boxShadow: `0 4px 16px ${accent}40` }
                    : { background: `${accent}12`, color: accent, border: `1px solid ${accent}30` }
                  }
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section className="py-20" ref={addonsRef} style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #fff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center">Extras</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Add-On Services
            </h2>
            <p className="text-navy/50 mt-4 max-w-md mx-auto">Enhance your package with these optional add-ons.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ADDONS.map(({ icon: Icon, label, price }, i) => (
              <div key={label} className="glass-card rounded-2xl px-5 py-4 fade-up card-lift flex items-center gap-4"
                style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-sm leading-snug">{label}</p>
                  <p className="text-brand font-semibold text-xs mt-0.5">{price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Terms ── */}
      <section className="py-20 bg-white" ref={payRef}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center">Payment</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Payment Terms
            </h2>
            <p className="text-navy/50 mt-4">Simple milestone-based payments — no upfront full payment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 fade-up">
            {PAYMENT.map(({ pct, label, color }, i) => (
              <div key={label} className="rounded-2xl p-8 text-center relative overflow-hidden card-lift"
                style={{ background: `${color}08`, border: `1px solid ${color}25`, transitionDelay: `${i * 0.08}s` }}>
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}40)` }} />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${color}15` }}>
                  <CreditCard className="w-6 h-6" style={{ color }} />
                </div>
                <p className="font-display font-black text-5xl mb-2" style={{ color }}>{pct}</p>
                <p className="font-semibold text-navy text-sm">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl p-5 fade-up text-center"
            style={{ background: 'rgba(230,30,42,0.04)', border: '1px solid rgba(230,30,42,0.12)' }}>
            <p className="text-navy/60 text-sm leading-relaxed">
              Free domain & hosting applies for <strong className="text-navy">1 year only</strong> — renewal charges applicable from the 2nd year.
              Pricing may vary based on custom requirements, integrations, and complexity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-20" ref={whyRef} style={{ background: 'linear-gradient(135deg, #0D1230 0%, #1a2050 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 fade-up">
            <span className="section-label justify-center" style={{ color: 'rgba(230,30,42,0.9)' }}>Why Us</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mt-4">Why Choose Altitude?</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {WHY.map(({ icon: Icon, label }, i) => (
              <div key={label} className="rounded-2xl px-4 py-5 fade-up text-center"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', transitionDelay: `${i * 0.07}s` }}>
                <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <p className="text-white/80 text-xs font-semibold leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
