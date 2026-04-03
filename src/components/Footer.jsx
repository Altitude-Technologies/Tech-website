import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Link2, Code2 } from 'lucide-react'
import altitudeLogo from '../assets/Altitude-Log.svg'
import PrivacyModal from './PrivacyModal'
import TermsModal from './TermsModal'

const SERVICES_LINKS = [
  { label: 'Web Development',   to: '/services/web-development'    },
  { label: 'Mobile Apps',       to: '/services/mobile-app'         },
  { label: 'UI/UX Design',      to: '/services/ui-ux'              },
  { label: 'AI & Automation',   to: '/ai-automation'               },
  { label: 'Digital Marketing', to: '/services/digital-marketing'  },
]

const COMPANY_LINKS = [
  { label: 'About Us',          to: '/about'   },
  { label: 'Our Work',          to: '/work'    },
  { label: 'Pricing',           to: '/pricing' },
  { label: 'Contact',           to: '/contact' },
  { label: 'Free Consultation', to: '/contact' },
]

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/55" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const SOCIAL = [
  { icon: ExternalLink,  href: '#',                                          label: 'Twitter / X' },
  { icon: Link2,         href: '#',                                          label: 'LinkedIn'    },
  { icon: InstagramIcon, href: 'https://www.instagram.com/altitudetechind/', label: 'Instagram'  },
  { icon: Code2,         href: '#',                                          label: 'GitHub'      },
]

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms,   setShowTerms]   = useState(false)

  return (
    <footer style={{ background: '#0D1230' }}>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms   && <TermsModal   onClose={() => setShowTerms(false)}   />}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* ── Brand ── */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5">
              <img src={altitudeLogo} alt="Altitude Technologies" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Building the next generation of digital products — powered by AI, designed for scale,
              and built for businesses that mean business.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <Icon className="w-4 h-4 text-white/55" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Services ── */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Services</h5>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h5>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Altitude Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => setShowPrivacy(true)} className="text-white/25 text-xs hover:text-white/55 transition-colors">Privacy Policy</button>
            <button onClick={() => setShowTerms(true)}   className="text-white/25 text-xs hover:text-white/55 transition-colors">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  )
}
