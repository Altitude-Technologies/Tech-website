import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import HomePage    from './pages/HomePage'
import AboutPage   from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import AIPage      from './pages/AIPage'
import WorkPage    from './pages/WorkPage'
import ContactPage from './pages/ContactPage'
import WebDevPage    from './pages/WebDevPage'
import MobileAppPage   from './pages/MobileAppPage'
import SoftwareDevPage from './pages/SoftwareDevPage'
import UiUxPage from './pages/UiUxPage'
import DigitalMarketingPage from './pages/DigitalMarketingPage'
import PricingPage from './pages/PricingPage'
import FloatingContact from './components/FloatingContact'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"              element={<HomePage />}    />
          <Route path="/about"         element={<AboutPage />}   />
          <Route path="/services"      element={<ServicesPage />}/>
          <Route path="/ai-automation" element={<AIPage />}      />
          <Route path="/work"          element={<WorkPage />}    />
          <Route path="/contact"       element={<ContactPage />} />
          <Route path="/services/web-development"    element={<WebDevPage />}    />
          <Route path="/services/mobile-app"         element={<MobileAppPage />}   />
          <Route path="/services/software"           element={<SoftwareDevPage />} />
          <Route path="/services/ui-ux"              element={<UiUxPage />}        />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/pricing"                    element={<PricingPage />}          />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
