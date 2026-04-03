import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTABand() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #E61E2A 0%, #c41820 100%)' }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Ambient glow */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/8 blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-up">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
          Let&apos;s Build Something<br />Extraordinary Together
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Ready to transform your business with cutting-edge technology?
          Let&apos;s talk about your vision — the first consultation is on us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4
                       bg-white text-brand font-bold rounded-lg
                       shadow-lg hover:shadow-xl hover:bg-white/95 hover:-translate-y-0.5
                       transition-all duration-200"
          >
            Start Your Project Today <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4
                       bg-transparent text-white font-semibold rounded-lg
                       border border-white/35 hover:border-white/70 hover:bg-white/10
                       hover:-translate-y-0.5 transition-all duration-200"
          >
            <Calendar className="w-5 h-5" /> Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
