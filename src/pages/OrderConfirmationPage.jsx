import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/utils/helpers'

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('benichem_order')
    if (saved) setOrder(JSON.parse(saved))
  }, [])

  if (!order) {
    return (
      <main className="main-content" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2 style={{ color: 'var(--navy)', marginBottom: '16px' }}>No order found</h2>
        <p style={{ color: 'var(--grey)', marginBottom: '24px' }}>It looks like you haven&apos;t placed an order yet.</p>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </main>
    )
  }

  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <main className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <i className="fas fa-check-circle" style={{ fontSize: '4rem', color: 'var(--green)', marginBottom: '16px', display: 'block' }}></i>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2.5rem', letterSpacing: '2px', marginBottom: '12px' }}>Order Confirmed!</h1>
        <p style={{ color: 'var(--grey)', fontSize: '1.1rem' }}>Thank you for your order. We&apos;ve sent a confirmation to {order.customer?.email}</p>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
        <h3 style={{ color: 'var(--navy)', marginBottom: '20px', fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>Order Details</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div>
            <strong style={{ color: 'var(--navy)' }}>Order Number</strong>
            <p style={{ color: 'var(--blue)', fontWeight: 700 }}>{order.id}</p>
          </div>
          <div>
            <strong style={{ color: 'var(--navy)' }}>Estimated Delivery</strong>
            <p style={{ color: 'var(--grey)' }}>{estimatedDelivery}</p>
          </div>
          <div>
            <strong style={{ color: 'var(--navy)' }}>Payment Method</strong>
            <p style={{ color: 'var(--grey)' }}>{order.paymentMethod === 'card' ? 'Credit/Debit Card' : 'Cash on Delivery'}</p>
          </div>
          <div>
            <strong style={{ color: 'var(--navy)' }}>Shipping To</strong>
            <p style={{ color: 'var(--grey)' }}>{order.customer?.fullName}<br />{order.customer?.address}, {order.customer?.city} {order.customer?.postcode}</p>
          </div>
        </div>

        <h4 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Items</h4>
        {order.items?.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--light-grey)' }}>
            <div>
              <strong>{item.name}</strong>
              <span style={{ color: 'var(--grey)', marginLeft: '8px' }}>x{item.quantity}</span>
            </div>
            <span style={{ color: 'var(--blue)', fontWeight: 700 }}>{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}

        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '2px solid var(--blue)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Subtotal</span><span>{formatPrice(order.subtotal)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>VAT (20%)</span><span>{formatPrice(order.vat)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 700, color: 'var(--blue)', marginTop: '12px' }}>
            <span>Total</span><span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    </main>
  )
}
