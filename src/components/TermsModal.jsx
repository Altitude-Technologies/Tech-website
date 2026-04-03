import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function TermsModal({ onClose }) {
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
            <h2 className="font-display font-black text-xl text-navy tracking-tight">Terms of Service</h2>
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
            Welcome to Altitude Technologies. By accessing our website or using our services,
            you agree to the following terms.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>
              By using our website, you agree to comply with these Terms of Service.
              If you do not agree, please do not use our services.
            </p>
          </Section>

          <Section title="2. Services">
            <p>Altitude Technologies provides:</p>
            <List items={[
              'Website Development',
              'Mobile App Development',
              'Software Solutions',
              'AI & Automation Services',
              'Digital Marketing',
            ]} />
          </Section>

          <Section title="3. User Responsibilities">
            <p>You agree:</p>
            <List items={[
              'To provide accurate information',
              'Not to use our services for illegal activities',
              'Not to attempt unauthorized access to our systems',
            ]} />
          </Section>

          <Section title="4. Payments & Pricing">
            <List items={[
              'All payments must be made as per agreed terms',
              'Advance payments may be required',
              'Failure to pay may result in service suspension',
            ]} />
          </Section>

          <Section title="5. Intellectual Property">
            <List items={[
              'All content, designs, and code created by Altitude Technologies remain our property until full payment is completed',
              'After full payment, ownership may be transferred as agreed',
            ]} />
          </Section>

          <Section title="6. Project Timelines">
            <List items={[
              'Timelines depend on project scope and client cooperation',
              'Delays in client response may affect delivery time',
            ]} />
          </Section>

          <Section title="7. Limitation of Liability">
            <p>Altitude Technologies is not liable for:</p>
            <List items={['Business losses', 'Data loss', 'Third-party service failures']} />
          </Section>

          <Section title="8. Termination">
            <p>We reserve the right to terminate services if:</p>
            <List items={['Terms are violated', 'Payments are not made', 'Misuse of services occurs']} />
          </Section>

          <Section title="9. Third-Party Services">
            <p>
              We may use third-party tools/services. We are not responsible for their performance or issues.
            </p>
          </Section>

          <Section title="10. Changes to Terms">
            <p>
              We may update these Terms at any time. Continued use of services means acceptance of updated terms.
            </p>
          </Section>

          <Section title="11. Governing Law">
            <p>These terms are governed by the laws of India.</p>
          </Section>

          <Section title="12. Contact Information">
            <div className="space-y-1">
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
