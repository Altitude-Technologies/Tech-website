import { useScrollReveal } from '../hooks/useScrollReveal'
import { GraduationCap, Activity, Building2, ShoppingBag, Rocket, Briefcase } from 'lucide-react'

const INDUSTRIES = [
  { icon: GraduationCap, label: 'Education',   accent: true  },
  { icon: Activity,      label: 'Healthcare',  accent: false },
  { icon: Building2,     label: 'Real Estate', accent: true  },
  { icon: ShoppingBag,   label: 'E-commerce',  accent: false },
  { icon: Rocket,        label: 'Startups',    accent: true  },
  { icon: Briefcase,     label: 'Corporate',   accent: false },
]

const DELAYS = [
  '[transition-delay:0.06s]', '[transition-delay:0.12s]', '[transition-delay:0.18s]',
  '[transition-delay:0.24s]', '[transition-delay:0.30s]', '[transition-delay:0.36s]',
]

const FLOAT_DELAYS = ['0s', '0.4s', '0.8s', '1.2s', '1.6s', '2.0s']

export default function Industries() {
  const sectionRef = useScrollReveal()

  return (
    <section id="industries" ref={sectionRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-up">
          <span className="section-label justify-center">Our Reach</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
            Industries We Serve
          </h2>
          <p className="text-navy/55 mt-4 max-w-lg mx-auto">
            Delivering tailored digital solutions across diverse sectors — from lean startups
            to enterprise corporations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map(({ icon: Icon, label, accent }, i) => (
            <div
              key={label}
              className={`glass-card rounded-2xl p-6 text-center card-lift fade-up ${DELAYS[i]} ${i % 2 === 0 ? 'float-up' : 'float-down'}`}
              style={{ animationDelay: FLOAT_DELAYS[i] }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                accent ? 'bg-brand/10' : 'bg-navy/8'
              }`}>
                <Icon className={`w-6 h-6 ${accent ? 'text-brand' : 'text-navy'}`} />
              </div>
              <span className="font-medium text-sm text-navy">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
