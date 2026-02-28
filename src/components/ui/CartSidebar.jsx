import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { getProductImageUrl, formatPrice } from '@/utils/helpers'

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart()

  return (
    <div className={`cart-sidebar${isCartOpen ? ' open' : ''}`} role="dialog" aria-label="Shopping cart">
      <div className="cart-header">
        <h3>Your Basket</h3>
        <button className="close-cart" onClick={() => setIsCartOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#6b7c93', padding: '40px 0' }}>Your basket is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={getProductImageUrl(item)} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <div className="cart-item-price">{formatPrice(item.price)}</div>
                <div className="cart-item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>
                <div className="cart-item-subtotal">
                  Subtotal: {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
        <Link
          to="/checkout"
          className="checkout-btn"
          style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
          onClick={() => setIsCartOpen(false)}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
