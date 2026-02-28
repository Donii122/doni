import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/helpers'
import '@/styles/checkout.css'

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('')
  const [formData, setFormData] = useState({
    email: '', phone: '', fullName: '', address: '', city: '', postcode: '', country: 'UK',
    cardNumber: '', cardName: '', expiryDate: '', cvv: ''
  })

  const subtotal = totalPrice
  const vat = subtotal * 0.2
  const total = subtotal + vat

  const updateField = (field, value) => {
    if (field === 'cardNumber') {
      value = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
    }
    if (field === 'expiryDate') {
      value = value.replace(/\D/g, '')
      if (value.length >= 2) value = value.substring(0, 2) + '/' + value.substring(2, 4)
    }
    if (field === 'cvv') {
      value = value.replace(/\D/g, '').substring(0, 4)
    }
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cart.length === 0) return

    const order = {
      id: 'BC-' + Date.now(),
      items: cart,
      subtotal, vat, total,
      customer: {
        email: formData.email, phone: formData.phone, fullName: formData.fullName,
        address: formData.address, city: formData.city, postcode: formData.postcode, country: formData.country
      },
      paymentMethod,
      date: new Date().toISOString()
    }
    localStorage.setItem('benichem_order', JSON.stringify(order))
    clearCart()
    navigate('/order-confirmation')
  }

  if (cart.length === 0) {
    return (
      <main className="main-content">
        <div className="empty-cart-message">
          <h2>Your cart is empty</h2>
          <p>Please add items to your cart before proceeding to checkout.</p>
          <Link to="/">Continue Shopping</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="main-content" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div className="checkout-container">
        <div className="checkout-form">
          <h2 className="section-title">Checkout</h2>
          <p style={{ marginBottom: '30px', color: '#666', textAlign: 'center' }}>Complete your purchase with secure payment</p>

          <form onSubmit={handleSubmit}>
            <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Contact Information</h3>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" placeholder="name.surname@example.com" required
                value={formData.email} onChange={e => updateField('email', e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" placeholder="+44 1234 567890" required
                value={formData.phone} onChange={e => updateField('phone', e.target.value)} />
            </div>

            <h3 style={{ margin: '30px 0 20px', color: '#2c3e50' }}>Shipping Address</h3>

            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" placeholder="Name Surname" required
                value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <input type="text" id="address" placeholder="123 Business Street" required
                value={formData.address} onChange={e => updateField('address', e.target.value)} />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input type="text" id="city" placeholder="London" required
                  value={formData.city} onChange={e => updateField('city', e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="postcode">Postcode *</label>
                <input type="text" id="postcode" placeholder="SW1A 1AA" required
                  value={formData.postcode} onChange={e => updateField('postcode', e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <select id="country" required value={formData.country} onChange={e => updateField('country', e.target.value)}>
                <option value="UK">United Kingdom</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
              </select>
            </div>

            <h3 style={{ margin: '30px 0 20px', color: '#2c3e50' }}>Payment Method</h3>

            <div className="form-group">
              <label className={`payment-method-option${paymentMethod === 'card' ? ' selected' : ''}`}>
                <input type="radio" name="paymentMethod" value="card" required
                  checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                <div style={{ flex: 1 }}>
                  <strong style={{ color: '#007cba' }}><i className="fas fa-credit-card" style={{ marginRight: '8px' }}></i>Credit/Debit Card</strong>
                  <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#666' }}>Pay securely with card</p>
                </div>
              </label>

              <label className={`payment-method-option${paymentMethod === 'cod' ? ' selected' : ''}`}>
                <input type="radio" name="paymentMethod" value="cod" required
                  checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                <div style={{ flex: 1 }}>
                  <strong style={{ color: '#28a745' }}><i className="fas fa-truck" style={{ marginRight: '8px' }}></i>Cash on Delivery</strong>
                  <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#666' }}>Pay when you receive</p>
                </div>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxLength="19" required
                    value={formData.cardNumber} onChange={e => updateField('cardNumber', e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="cardName">Name on Card *</label>
                  <input type="text" id="cardName" placeholder="Name Surname" required
                    value={formData.cardName} onChange={e => updateField('cardName', e.target.value)} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" maxLength="5" required
                      value={formData.expiryDate} onChange={e => updateField('expiryDate', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input type="text" id="cvv" placeholder="123" maxLength="4" required
                      value={formData.cvv} onChange={e => updateField('cvv', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="payment-btn">
              <i className="fas fa-lock"></i> Place Order
            </button>
            <p style={{ textAlign: 'center', marginTop: '5px', fontSize: '14px', color: '#666' }}>
              <i className="fas fa-shield-alt"></i> Your payment information is secure and encrypted
            </p>
          </form>
        </div>

        <div className="order-summary">
          <h2 className="section-title">Order Summary</h2>
          <div>
            {cart.map(item => (
              <div key={item.id} className="order-item">
                <div className="order-item-info">
                  <div className="order-item-name">{item.name}</div>
                  <div className="order-item-details">Qty: {item.quantity}</div>
                </div>
                <div className="order-item-price">{formatPrice(item.price * item.quantity)}</div>
              </div>
            ))}
          </div>
          <div className="order-totals">
            <div className="total-row">
              <span>Subtotal (exc. VAT)</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span style={{ color: '#27ae60' }}>Free</span>
            </div>
            <div className="total-row">
              <span>VAT (20%)</span>
              <span>{formatPrice(vat)}</span>
            </div>
            <div className="total-row final">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
