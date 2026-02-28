import { useCart } from '@/context/CartContext'
import { getProductImageUrl, formatPrice } from '@/utils/helpers'

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-image" onClick={() => onViewDetails?.(product)} style={{ cursor: 'pointer' }}>
        <img
          src={getProductImageUrl(product)}
          alt={product.name}
          loading="lazy"
        />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-details">
        <h3 className="product-title" onClick={() => onViewDetails?.(product)} style={{ cursor: 'pointer' }}>
          {product.name}
        </h3>
        <div className="product-price">{formatPrice(product.price)} exc. VAT</div>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          <i className="fas fa-shopping-basket"></i> Add to Basket
        </button>
      </div>
    </div>
  )
}
