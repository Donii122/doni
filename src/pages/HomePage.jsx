import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import ProductModal from '@/components/ui/ProductModal'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const carouselRef = useRef(null)

  const bestSellers = useMemo(() =>
    [...products].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 10),
    []
  )

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products
    const q = query.toLowerCase()
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  }, [query])

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 320, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to BeniChem</h1>
            <p className="hero-subtitle">
              Your trusted supplier of industrial equipment, cleaning supplies and
              professional equipment. Quality products at competitive prices with expert support.
            </p>
            <div className="hero-buttons">
              <a href="#products" className="btn btn-primary">Shop Products</a>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-lead">Professional services and support to help your business run smoothly.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-tag"></i></div>
              <h3>Competitive Pricing</h3>
              <p>Quality products at trade prices. Volume and bulk discounts available for businesses.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-box-open"></i></div>
              <h3>Flexible Packaging</h3>
              <p>Private label and bespoke packaging options for your brand and business needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-file-alt"></i></div>
              <h3>CLP &amp; Data Sheets</h3>
              <p>Compliant safety data sheets and labelling for all chemical products.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><i className="fas fa-headset"></i></div>
              <h3>Expert Support</h3>
              <p>Technical advice and product selection help whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="quick-categories" id="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-cards">
            <Link to="/industrial" className="category-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="category-icon"><i className="fas fa-industry"></i></div>
              <h3>Industrial Equipment</h3>
              <p>Professional industrial equipment for heavy-duty applications</p>
              <span className="category-count">Browse Industrial</span>
            </Link>
            <Link to="/cleaning" className="category-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="category-icon"><i className="fas fa-spray-can"></i></div>
              <h3>Cleaning Supplies</h3>
              <p>Professional cleaning chemicals and equipment for all applications</p>
              <span className="category-count">Browse Cleaning</span>
            </Link>
            <Link to="/professional" className="category-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="category-icon"><i className="fas fa-tools"></i></div>
              <h3>Professional Equipment</h3>
              <p>Heavy-duty professional equipment for commercial and industrial use</p>
              <span className="category-count">Browse Professional</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bestsellers-section">
        <div className="container">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-lead">Our most popular products loved by customers.</p>
          <div className="bestsellers-carousel" ref={carouselRef}>
            {bestSellers.map(p => (
              <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} />
            ))}
          </div>
          <div className="carousel-nav">
            <button onClick={() => scrollCarousel(-1)} aria-label="Previous">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => scrollCarousel(1)} aria-label="Next">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose BeniChem */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose BeniChem</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-truck"></i>
              <h3>Fast Shipping</h3>
              <p>Reliable 2-3 working day delivery so you get what you need, when you need it.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-headset"></i>
              <h3>Expert Support</h3>
              <p>Product selection and technical advice from our experienced team.</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Quality Guarantee</h3>
              <p>All products meet industry standards with full warranty and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <div className="container">
          <h2>Get Social &amp; Share</h2>
          <p>Follow us and share your results with #BeniChem</p>
          <div className="social-icons">
            <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="#" title="TikTok"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </section>

      {/* All Products */}
      <main className="main-content" id="products">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '16px' }}>All Products</h2>
          <div className="search-bar" style={{ maxWidth: '500px', margin: '0 auto 30px' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          {query && (
            <div className="search-results-header">
              <h2>{filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;</h2>
            </div>
          )}
          <div className="products-grid">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} />
            ))}
          </div>
        </div>
      </main>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  )
}
