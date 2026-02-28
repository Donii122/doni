import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { products, PROFESSIONAL_CATEGORIES } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import ProductModal from '@/components/ui/ProductModal'

const professionalProducts = products.filter(p => PROFESSIONAL_CATEGORIES.includes(p.category))

export default function ProfessionalPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [query, setQuery] = useState('')

  const displayed = useMemo(() => {
    let filtered = activeCategory === 'All'
      ? professionalProducts
      : professionalProducts.filter(p => p.category === activeCategory)
    if (query.trim()) {
      const q = query.toLowerCase()
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }
    return filtered
  }, [activeCategory, query])

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="page-header-content">
            <nav className="breadcrumb">
              <Link to="/">Home</Link> / <span>Professional Equipment</span>
            </nav>
            <h1>Professional Equipment</h1>
            <p>Heavy-duty professional equipment for commercial and industrial use.</p>
          </div>
        </div>
      </div>

      <main className="main-content">
        <div className="container">
          <div className="search-bar" style={{ maxWidth: '500px', margin: '0 auto 30px' }}>
            <input
              type="text"
              placeholder="Search Professional Equipment..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button"><i className="fas fa-search"></i></button>
          </div>

          <div className="category-filters">
            <button
              className={activeCategory === 'All' ? 'active' : ''}
              onClick={() => setActiveCategory('All')}
            >All</button>
            {PROFESSIONAL_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >{cat}</button>
            ))}
          </div>

          <p style={{ margin: '20px 0', color: 'var(--grey)' }}>
            Showing {displayed.length} product{displayed.length !== 1 ? 's' : ''}
          </p>

          <div className="products-grid">
            {displayed.map(p => (
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
