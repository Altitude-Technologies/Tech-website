import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

const SERVICES_OPTIONS = [
  { value: '',           label: 'Select a service...'      },
  { value: 'web',        label: 'Web Development'           },
  { value: 'app',        label: 'Mobile App Development'    },
  { value: 'ai',         label: 'AI & Automation'           },
  { value: 'design',     label: 'UI/UX Design'              },
  { value: 'marketing',  label: 'Digital Marketing'         },
  { value: 'other',      label: 'Other'                     },
]

const CONTACT_INFO = [
  { icon: Phone,  label: 'Phone / WhatsApp', value: '+91 78713 79727',          href: 'tel:+917871379727'                        },
  { icon: Mail,   label: 'Email',            value: 'altitudetechind@gmail.com', href: 'mailto:altitudetechind@gmail.com'         },
  { icon: MapPin, label: 'Location',         value: 'Remote-First · Worldwide',  href: null                                       },
]

const INPUT_BASE = `w-full px-4 py-3 rounded-xl text-sm text-navy placeholder-navy/30
  border border-black/10 bg-white/80 focus:outline-none
  focus:ring-2 focus:ring-brand/30 focus:border-brand/50 transition-all`

export default function Contact({ hideHeader = false }) {
  const sectionRef = useScrollReveal()
  const [status,   setStatus]   = useState('idle')  // idle | loading | sent
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call — replace with real endpoint
    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', service: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#F8FAFB' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        {!hideHeader && (
          <div className="text-center mb-16 fade-up">
            <span className="section-label justify-center">Get in Touch</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-navy tracking-tight mt-4">
              Start Your Project
            </h2>
            <p className="text-navy/55 mt-4 max-w-lg mx-auto">
              Tell us about your goals and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 fade-up [transition-delay:0.08s]">
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col">
              <h3 className="font-display font-bold text-xl text-navy mb-8">Contact Information</h3>

              <div className="space-y-6 flex-1">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <div className="text-xs text-navy/40 font-medium uppercase tracking-wide mb-1">{label}</div>
                      {href
                        ? <a href={href} className="text-navy font-medium text-sm hover:text-brand transition-colors">{value}</a>
                        : <span className="text-navy font-medium text-sm">{value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 pt-6 border-t border-black/8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-navy">Currently accepting new projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-3 fade-up [transition-delay:0.18s]">
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-navy/55 uppercase tracking-wide mb-2">
                      Full Name
                    </label>
                    <input
                      type="text" id="name" name="name" required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={INPUT_BASE}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-navy/55 uppercase tracking-wide mb-2">
                      Email Address
                    </label>
                    <input
                      type="email" id="email" name="email" required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={INPUT_BASE}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="service" className="block text-xs font-semibold text-navy/55 uppercase tracking-wide mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service" name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${INPUT_BASE} cursor-pointer appearance-none`}
                  >
                    {SERVICES_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-xs font-semibold text-navy/55 uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4} required
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${INPUT_BASE} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'sent'}
                  className={`w-full flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-lg
                    text-white transition-all duration-200 ${
                      status === 'sent'
                        ? 'bg-green-600 shadow-[0_4px_16px_rgba(22,163,74,0.25)]'
                        : status === 'loading'
                        ? 'bg-brand/70 cursor-wait'
                        : 'bg-brand shadow-[0_4px_16px_rgba(230,30,42,0.25)] hover:bg-brand-dark hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(230,30,42,0.35)]'
                    }`}
                >
                  {status === 'sent' ? (
                    <><CheckCircle className="w-5 h-5" /> Message Sent!</>
                  ) : status === 'loading' ? (
                    <>Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
