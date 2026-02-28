import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/utils/helpers'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { totalItems, totalPrice, setIsCartOpen } = useCart()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <>
      {/* Promo Bar */}
      <div className="promo-bar">
        <div className="container">
          <div className="promo-bar-content">
            <span><i className="fas fa-truck"></i> Free delivery on orders over £65</span>
            <span><i className="fas fa-clock"></i> 2-3 working day delivery</span>
            <span><i className="fas fa-phone-alt"></i> Expert support available</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header-top">
          <div className="container">
            <div className="header-top-content">
              <Link to="/" className="logo">
                <img
                  loading="lazy"
                  src="https://tse4.mm.bing.net/th/id/OIP.U_VcHSF9y-ucte7Oc5bB5gHaGq?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="BeniChem Logo"
                />
                <h1>BeniChem</h1>
              </Link>
              <div className="header-actions">
                <div className="cart-info">
                  <div className="cart-total-display">{formatPrice(totalPrice)}</div>
                  <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
                    <i className="fas fa-shopping-basket"></i>
                    <span className="cart-count">{totalItems}</span>
                  </div>
                </div>
                <div className="user-actions">
                  <button
                    className={`menu-toggle${menuOpen ? ' open' : ''}`}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <span className="hamburger" aria-hidden="true">
                      <span></span><span></span><span></span>
                    </span>
                    <span className="sr-only">Open menu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <div className="container">
            <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                  Products <i className="fas fa-chevron-down"></i>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="dropdown-column">
                      <h3>Industrial Equipment</h3>
                      <ul>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Air Fresheners</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Couplings &amp; Housings</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Electric Motors</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Electricals</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Low Pressure Hose</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Pressure Switches</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Petrol Engine Pressure Washers</Link></li>
                        <li><Link to="/industrial" onClick={() => setMenuOpen(false)}>Silicones</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-column">
                      <h3>Cleaning Supplies</h3>
                      <ul>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Chemicals</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Trigger Guns</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Triggers and Lances</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Unloader Valves</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Vacuums &amp; Spares</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Filters</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Fuel Nozzles</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Jet Wash Hose Assemblies</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Jetwash Nozzles</Link></li>
                        <li><Link to="/cleaning" onClick={() => setMenuOpen(false)}>Lances</Link></li>
                      </ul>
                    </div>
                    <div className="dropdown-column">
                      <h3>Professional Equipment</h3>
                      <ul>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Pressure Washer Trolleys &amp; Spares</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Pump Spares</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Reduction Gearboxes</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Staff Uniform</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Jetwash Pumps</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Tanks Frames &amp; Holders</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Hydraulic Adaptors</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Interpump Spares</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Accessories</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Interpumps</Link></li>
                        <li><Link to="/professional" onClick={() => setMenuOpen(false)}>Polish and Mopping Machines</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/new-products" className="nav-link" onClick={() => setMenuOpen(false)}>New Products</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
