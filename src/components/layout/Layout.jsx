import Navbar from './Navbar'
import Footer from './Footer'
import CartSidebar from '@/components/ui/CartSidebar'
import { useCart } from '@/context/CartContext'

export default function Layout({ children }) {
  const { notification } = useCart()

  return (
    <>
      <Navbar />
      <CartSidebar />
      {children}
      <Footer />
      {notification && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          background: 'var(--navy)',
          color: 'white',
          padding: '14px 24px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          zIndex: 9999,
          fontSize: '14px',
          fontWeight: 600,
          animation: 'modalSlideIn 0.3s ease-out',
        }}>
          <i className="fas fa-check-circle" style={{ marginRight: '8px', color: 'var(--green)' }}></i>
          {notification}
        </div>
      )}
    </>
  )
}
