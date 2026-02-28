import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'
import ProductModal from '@/components/ui/ProductModal'

// "New Products" are the most recently added (highest IDs)
const newProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 40)

export default function NewProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [query, setQuery] = useState('')

  const displayed = useMemo(() => {
    if (!query.trim()) return newProducts
    const q = query.toLowerCase()
    return newProducts.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #2a4494 50%, var(--blue) 100%)',
        color: 'white', padding: '60px 0 50px', textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '2px', marginBottom: '10px' }}>New Products</h1>
          <p style={{ opacity: 0.9, fontSize: '1.05rem' }}>Check out our latest additions to the BeniChem range</p>
        </div>
      </section>

      <main className="main-content">
        <div className="container">
          <div className="search-bar" style={{ maxWidth: '500px', margin: '0 auto 30px' }}>
            <input type="text" placeholder="Search new products..." value={query} onChange={e => setQuery(e.target.value)} />
            <button type="button"><i className="fas fa-search"></i></button>
          </div>

          <p style={{ margin: '0 0 20px', color: 'var(--grey)' }}>
            Showing {displayed.length} new product{displayed.length !== 1 ? 's' : ''}
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
