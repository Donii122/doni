import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.')
      return
    }
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Product Categories</h4>
            <ul>
              <li><Link to="/industrial">Industrial Equipment</Link></li>
              <li><Link to="/cleaning">Cleaning Supplies</Link></li>
              <li><Link to="/professional">Professional Equipment</Link></li>
              <li><Link to="/#products">All Products</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/#categories">Categories</Link></li>
              <li><Link to="/#products">Browse Products</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Technical Support</Link></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
              <a href="#" title="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
            <div className="newsletter">
              <h5>Subscribe to our newsletter</h5>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                />
                <button type="button" onClick={handleSubscribe}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2026 BeniChem. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <a href="#">Terms of Service</a>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
