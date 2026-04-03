import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function PrivacyModal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(13,18,48,0.55)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden flex flex-col"
        style={{
          background: 'rgba(255,255,255,0.97)',
          boxShadow: '0 24px 80px rgba(13,18,48,0.22)',
          border: '1px solid rgba(255,255,255,0.9)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-navy/8 flex-shrink-0">
          <div>
            <h2 className="font-display font-black text-xl text-navy tracking-tight">Privacy Policy</h2>
            <p className="text-navy/45 text-xs mt-0.5">Effective Date: 30.03.2026</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-navy/8 transition-colors"
          >
            <X className="w-4 h-4 text-navy/60" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-8 py-6 space-y-6 text-sm text-navy/70 leading-relaxed">

          <p>
            Welcome to Altitude Technologies. Your privacy is important to us. This Privacy Policy explains
            how we collect, use, and protect your information when you visit our website.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <SubSection title="a. Personal Information">
              <List items={['Name', 'Email Address', 'Phone Number', 'Company Name']} />
            </SubSection>
            <SubSection title="b. Non-Personal Information">
              <List items={['Browser type', 'IP address', 'Device information', 'Pages visited']} />
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <List items={[
              'Provide and improve our services',
              'Respond to inquiries and support requests',
              'Send updates, promotions, or service-related communication',
              'Analyze website performance and user behavior',
            ]} />
          </Section>

          <Section title="3. Cookies & Tracking Technologies">
            <p>Our website may use cookies to:</p>
            <List items={[
              'Enhance user experience',
              'Track website traffic',
              'Understand user preferences',
            ]} />
            <p className="mt-2">You can disable cookies in your browser settings.</p>
          </Section>

          <Section title="4. Data Protection">
            <p>
              We implement appropriate security measures to protect your personal data.
              However, no online platform is 100% secure.
            </p>
          </Section>

          <Section title="5. Sharing of Information">
            <p>We do not sell or rent your personal data. We may share information with:</p>
            <List items={['Trusted service providers', 'Legal authorities (if required by law)']} />
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for their privacy practices.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <List items={['Access your data', 'Request correction or deletion', 'Withdraw consent']} />
            <p className="mt-2">
              To request this, contact us at:{' '}
              <a href="mailto:your@email.com" className="text-brand hover:underline">your@email.com</a>
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions, contact us:</p>
            <div className="mt-2 space-y-1">
              <p className="font-semibold text-navy">Altitude Technologies</p>
              <p>📧 Email: <a href="mailto:your@email.com" className="text-brand hover:underline">your@email.com</a></p>
              <p>📞 Phone: [your phone number]</p>
              <p>📍 Address: [your address]</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-display font-bold text-navy text-base mb-2">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mt-2">
      <p className="font-semibold text-navy/80 mb-1">{title}</p>
      {children}
    </div>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-1 mt-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}
