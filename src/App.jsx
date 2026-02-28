import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'
import CookieConsent from '@/components/ui/CookieConsent'
import ScrollToTop from '@/components/ui/ScrollToTop'

import HomePage from '@/pages/HomePage'
import IndustrialPage from '@/pages/IndustrialPage'
import CleaningPage from '@/pages/CleaningPage'
import ProfessionalPage from '@/pages/ProfessionalPage'
import CheckoutPage from '@/pages/CheckoutPage'
import ContactPage from '@/pages/ContactPage'
import NewProductsPage from '@/pages/NewProductsPage'
import PrivacyPage from '@/pages/PrivacyPage'
import CookiePolicyPage from '@/pages/CookiePolicyPage'
import OrderConfirmationPage from '@/pages/OrderConfirmationPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/industrial" element={<IndustrialPage />} />
            <Route path="/cleaning" element={<CleaningPage />} />
            <Route path="/professional" element={<ProfessionalPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/new-products" element={<NewProductsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  )
}
