import { useEffect, useRef } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const STATS = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+',  label: 'Happy Clients'      },
  { value: '5+',   label: 'Years of Excellence' },
  { value: '12+',  label: 'Countries Served'   },
]

export default function Hero() {
  const heroRef = useRef(null)

  // Reveal hero elements on mount
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.fade-up')
    if (!els) return
    const timer = setTimeout(() => {
      els.forEach((el) => el.classList.add('fade-up-visible'))
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 10% 50%, rgba(230,30,42,0.06) 0%, transparent 70%),
          radial-gradient(ellipse 50% 70% at 90% 10%, rgba(13,18,48,0.05) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at 60% 90%, rgba(230,30,42,0.04) 0%, transparent 60%),
          linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)
        `,
      }}
    >
      {/* Grid texture */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-navy/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="fade-up inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand pulse-dot" />
            <span className="text-xs font-semibold text-navy/55 tracking-widest uppercase">
              Next-Gen Technology Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up [transition-delay:0.10s] font-display font-black text-5xl sm:text-6xl lg:text-7xl text-navy leading-[1.08] tracking-tight mb-6">
            Elevate Your Business<br />
            <span className="text-gradient">with Next-Gen</span><br />
            Technology
          </h1>

          {/* Subheadline */}
          <p className="fade-up [transition-delay:0.18s] text-lg sm:text-xl text-navy/55 leading-relaxed max-w-2xl mx-auto mb-10">
            We build powerful websites, intelligent applications, and AI-driven solutions
            that transform your ideas into scalable digital success.
          </p>

          {/* CTAs */}
          <div className="fade-up [transition-delay:0.26s] flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4
                         bg-brand text-white font-semibold rounded-lg text-[0.9375rem]
                         shadow-[0_4px_16px_rgba(230,30,42,0.28)]
                         hover:bg-brand-dark hover:-translate-y-px
                         hover:shadow-[0_6px_24px_rgba(230,30,42,0.38)] transition-all duration-200"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4
                         bg-transparent text-navy font-semibold rounded-lg text-[0.9375rem]
                         border border-navy/20 hover:border-navy/50 hover:bg-navy/5
                         hover:-translate-y-px transition-all duration-200"
            >
              <Calendar className="w-5 h-5" /> Book Free Consultation
            </Link>
          </div>

          {/* Stats bar */}
          <div className="fade-up [transition-delay:0.36s] glass rounded-2xl p-6 inline-grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-6 text-center">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display font-black text-3xl text-navy">
                  {value.replace('+', '')}<span className="text-brand">+</span>
                </div>
                <div className="text-xs text-navy/45 font-medium mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 pointer-events-none">
        <span className="text-[10px] text-navy font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-navy to-transparent" />
      </div>
    </section>
  )
}
