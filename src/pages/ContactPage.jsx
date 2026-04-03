import Contact from '../components/Contact'
import { useRevealOnMount } from '../hooks/useRevealOnMount'

export default function ContactPage() {
  const headerRef = useRevealOnMount()

  return (
    <>
      {/* ── Page Header ── */}
      <section
        ref={headerRef}
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 80%, rgba(230,30,42,0.05) 0%, transparent 70%),
                       linear-gradient(180deg, #F8FAFB 0%, #fff 100%)`,
        }}
      >
        <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto fade-up">
            <span className="section-label justify-center mb-4">Let&apos;s Talk</span>
            <h1 className="font-display font-black text-5xl sm:text-6xl text-navy tracking-tight mt-4 mb-6">
              Start Your Project<br />
              <span className="text-gradient">Today</span>
            </h1>
            <p className="text-navy/60 text-xl leading-relaxed">
              Tell us about your goals and we&apos;ll get back to you within 24 hours.
              First consultation is always free.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form (reused component, no inner header) ── */}
      <Contact hideHeader />
    </>
  )
}
