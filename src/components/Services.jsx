import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import {
  Code2, Globe, Smartphone, Cpu, Layers,
  Palette, Compass, Layout, PenTool,
  TrendingUp, Search, Share2, BarChart2, Star,
  Bot, MessageSquare, GitBranch, Brain, Zap, ArrowRight,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'Development',
    desc: 'Fast, secure, and SEO-friendly digital products built with modern frameworks.',
    accent: 'brand',
    pastel: 'rgba(254, 226, 226, 0.45)',   // soft rose
    border: 'rgba(252, 165, 165, 0.30)',
    corner: 'rgba(230, 30, 42, 0.03)',
    iconBg: 'rgba(252, 165, 165, 0.35)', iconColor: '#be123c',
    knowMore: '/services/web-development',
    items: [
      { icon: Globe,       text: 'Website Development (Static, Dynamic, E-commerce)' },
      { icon: Smartphone,  text: 'Mobile App Development (Android & iOS)'             },
      { icon: Cpu,         text: 'Custom Software Solutions'                          },
      { icon: Layers,      text: 'SaaS Product Development'                           },
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Designs that elevate user experience and increase engagement.',
    accent: 'navy',
    pastel: 'rgba(219, 234, 254, 0.45)',   // soft blue
    border: 'rgba(147, 197, 253, 0.30)',
    corner: 'rgba(13, 18, 48, 0.03)',
    iconBg: 'rgba(147, 197, 253, 0.35)', iconColor: '#1d4ed8',
    knowMore: '/services/ui-ux',
    items: [
      { icon: Compass,  text: 'User Experience Strategy'  },
      { icon: Layout,   text: 'Interface Design'           },
      { icon: PenTool,  text: 'Prototyping & Wireframing'  },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Digital Growth',
    desc: 'Data-driven strategies to grow your online presence and drive conversions.',
    accent: 'navy',
    pastel: 'rgba(220, 252, 231, 0.45)',   // soft mint
    border: 'rgba(134, 239, 172, 0.30)',
    corner: 'rgba(13, 18, 48, 0.03)',
    iconBg: 'rgba(134, 239, 172, 0.35)', iconColor: '#15803d',
    knowMore: '/services/digital-marketing',
    items: [
      { icon: Search,    text: 'SEO Optimization'          },
      { icon: Share2,    text: 'Social Media Marketing'    },
      { icon: BarChart2, text: 'Performance Marketing'     },
      { icon: Star,      text: 'Branding & Creative Design'},
    ],
  },
]

export default function Services() {
  const sectionRef = useScrollReveal()

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span className="section-label justify-center">What We Do</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
            Our Core Services
          </h2>
          <p className="text-navy/55 mt-4 max-w-xl mx-auto text-lg">
            End-to-end digital solutions engineered for performance, scale, and measurable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Standard service cards */}
          {SERVICES.map(({ icon: Icon, title, desc, pastel, border, corner, iconBg, iconColor, knowMore, items }, i) => (
            <div
              key={title}
              className={`rounded-2xl p-8 card-lift fade-up relative overflow-hidden group ${
                i === 0 ? '[transition-delay:0.10s]' : i === 1 ? '[transition-delay:0.18s]' : '[transition-delay:0.26s]'
              }`}
              style={{
                background: pastel,
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: `1px solid ${border}`,
                boxShadow: '0 4px 32px rgba(13,18,48,0.06)',
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-colors duration-300"
                style={{ background: corner }}
              />
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: iconBg }}>
                <Icon className="w-6 h-6" style={{ color: iconColor }} />
              </div>
              <h3 className="font-display font-bold text-xl text-navy mb-2">{title}</h3>
              <p className="text-navy/55 text-sm mb-6">{desc}</p>
              <ul className="space-y-2.5">
                {items.map(({ icon: ItemIcon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-navy/65">
                    <ItemIcon className="w-4 h-4 flex-shrink-0" style={{ color: iconColor }} />
                    {text}
                  </li>
                ))}
              </ul>
              {knowMore && (
                <Link
                  to={knowMore}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
                  style={{ color: iconColor }}
                >
                  Know More <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}

          {/* AI & Automation — dark highlighted card */}
          <div
            className="rounded-2xl p-8 card-lift fade-up [transition-delay:0.34s] relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0D1230 0%, #1a2050 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="absolute top-0 right-0 w-44 h-44 rounded-bl-full bg-brand/15 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full bg-white/5 pointer-events-none" />

            <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center mb-6 relative z-10 shadow-sm">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2 relative z-10">AI & Automation</h3>
            <p className="text-white/50 text-sm mb-6 relative z-10">
              Intelligent systems that automate workflows and scale your business faster.
            </p>
            <ul className="space-y-2.5 relative z-10">
              {[
                { icon: MessageSquare, text: 'AI Chatbots & Assistants'     },
                { icon: GitBranch,     text: 'Business Process Automation'  },
                { icon: Brain,         text: 'AI Marketing Systems'         },
                { icon: Zap,           text: 'Workflow Automation Tools'    },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-white/65">
                  <Icon className="w-4 h-4 text-brand flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
            <Link
              to="/ai-automation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand
                         hover:gap-3 transition-all duration-200 relative z-10"
            >
              Explore AI Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
