import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { getProductImageUrl, formatPrice } from '@/utils/helpers'

export default function ProductModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product, quantity)
    onClose()
  }

  return (
    <div className="product-modal open">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={getProductImageUrl(product)} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <span className="product-detail-category">{product.category}</span>
            <h2 className="product-detail-title">{product.name}</h2>
            <div className="product-detail-price">{formatPrice(product.price)} exc. VAT</div>
            <div className="product-detail-rating">
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <i
                    key={star}
                    className={star <= Math.round(product.rating) ? 'fas fa-star' : 'far fa-star'}
                  ></i>
                ))}
              </div>
              <span className="rating-text">{product.rating} / 5</span>
            </div>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-actions">
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                <input
                  className="quantity-input"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                />
                <button className="quantity-btn" onClick={() => setQuantity(q => q + 1)}>+</button>
              </div>
              <button className="add-to-cart-modal" onClick={handleAddToCart}>
                <i className="fas fa-shopping-basket"></i> Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
