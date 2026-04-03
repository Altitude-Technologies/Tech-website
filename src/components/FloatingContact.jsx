import { useState } from 'react'
import { Phone, X, MessageCircle } from 'lucide-react'

const PHONE = '917871379727'
const PHONE_DISPLAY = '+91 78713 79727'
const WA_URL = `https://wa.me/${PHONE}?text=Hi%2C%20I%27m%20interested%20in%20your%20services!`
const CALL_URL = `tel:+${PHONE}`

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Action buttons — shown when open */}
      <div
        className="flex flex-col items-end gap-3 transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {/* WhatsApp */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <span className="bg-white text-navy text-xs font-semibold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat on WhatsApp
          </span>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:-translate-y-0.5 transition-transform duration-200"
            style={{ background: '#25D366' }}
          >
            {/* WhatsApp SVG icon */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.523 5.85L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.456A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-4.98-1.358l-.357-.212-3.707.955.984-3.596-.232-.369A9.8 9.8 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
          </div>
        </a>

        {/* Call */}
        <a
          href={CALL_URL}
          className="flex items-center gap-3 group"
        >
          <span className="bg-white text-navy text-xs font-semibold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {PHONE_DISPLAY}
          </span>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:-translate-y-0.5 transition-transform duration-200"
            style={{ background: '#0D1230' }}
          >
            <Phone className="w-5 h-5 text-white" />
          </div>
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105"
        style={{
          background: open ? '#0D1230' : '#E61E2A',
          boxShadow: open
            ? '0 8px 32px rgba(13,18,48,0.35)'
            : '0 8px 32px rgba(230,30,42,0.45)',
        }}
      >
        {open
          ? <X className="w-6 h-6 text-white" />
          : <MessageCircle className="w-6 h-6 text-white" />
        }
      </button>
    </div>
  )
}
