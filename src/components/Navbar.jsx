import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import altitudeLogo from '../assets/Altitude-Log.svg'

const NAV_LINKS = [
  { label: 'Services',        to: '/services'       },
  { label: 'About',           to: '/about'          },
  { label: 'AI & Automation', to: '/ai-automation'  },
  { label: 'Pricing',         to: '/pricing'        },
  { label: 'Careers',         to: '/careers'        },
  { label: 'Our Work',        to: '/work'           },
  { label: 'Contact',         to: '/contact'        },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${
        scrolled ? 'shadow-[0_2px_32px_rgba(13,18,48,0.10)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center">
          <img src={altitudeLogo} alt="Altitude Technologies" className="h-10 w-auto" />
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-150 relative pb-0.5 ${
                  isActive
                    ? 'text-navy after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand after:rounded-full'
                    : 'text-navy/55 hover:text-navy'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg
                       shadow-[0_4px_16px_rgba(230,30,42,0.25)] hover:bg-brand-dark hover:-translate-y-px
                       hover:shadow-[0_6px_24px_rgba(230,30,42,0.35)] transition-all duration-200"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X    className="w-5 h-5 text-navy" />
              : <Menu className="w-5 h-5 text-navy" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 border-t border-black/5" style={{ background: 'rgba(255,255,255,0.98)' }}>
          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `py-2.5 px-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'text-navy bg-brand/8 font-semibold'
                      : 'text-navy/70 hover:text-navy hover:bg-black/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMobile}
              className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-brand text-white
                         text-sm font-semibold rounded-lg shadow-[0_4px_16px_rgba(230,30,42,0.25)]"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
