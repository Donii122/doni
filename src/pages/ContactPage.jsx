import { useState } from 'react'
import { isValidEmail } from '@/utils/helpers'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValidEmail(form.email)) {
      alert('Please enter a valid email address.')
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--navy) 0%, #2a4494 50%, var(--blue) 100%)',
        color: 'white', padding: '60px 0 50px', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '2px', marginBottom: '10px' }}>Contact Us</h1>
          <p style={{ opacity: 0.9, fontSize: '1.05rem' }}>Get in touch with our team for any enquiries or support</p>
        </div>
      </section>

      <div style={{ maxWidth: '1000px', margin: '50px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '24px', fontSize: '1.6rem', letterSpacing: '1px' }}>Send Us a Message</h2>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: 'var(--green)', marginBottom: '16px', display: 'block' }}></i>
              <h3 style={{ color: 'var(--navy)', marginBottom: '10px' }}>Thank you!</h3>
              <p style={{ color: 'var(--grey)' }}>We&apos;ve received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--navy)', fontSize: '14px' }}>Full Name *</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid var(--light-grey)', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--navy)', fontSize: '14px' }}>Email *</label>
                <input type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid var(--light-grey)', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--navy)', fontSize: '14px' }}>Phone</label>
                <input type="tel" placeholder="+44 1234 567890" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid var(--light-grey)', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--navy)', fontSize: '14px' }}>Subject *</label>
                <select required value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid var(--light-grey)', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}>
                  <option value="">Select a subject</option>
                  <option value="general">General Enquiry</option>
                  <option value="product">Product Information</option>
                  <option value="order">Order Support</option>
                  <option value="technical">Technical Support</option>
                  <option value="wholesale">Wholesale / Trade</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, color: 'var(--navy)', fontSize: '14px' }}>Message *</label>
                <textarea required rows="5" placeholder="How can we help?" value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  style={{ width: '100%', padding: '12px 16px', border: '2px solid var(--light-grey)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          )}
        </div>

        <div style={{ background: 'white', padding: '32px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', marginBottom: '24px', fontSize: '1.6rem', letterSpacing: '1px' }}>Contact Information</h2>
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--blue)', marginRight: '8px' }}></i>Address</h4>
            <p style={{ color: 'var(--grey)', lineHeight: 1.6 }}>BeniChem Ltd<br />Industrial Estate<br />United Kingdom</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}><i className="fas fa-phone-alt" style={{ color: 'var(--blue)', marginRight: '8px' }}></i>Phone</h4>
            <p style={{ color: 'var(--grey)' }}>+44 (0) 1234 567890</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}><i className="fas fa-envelope" style={{ color: 'var(--blue)', marginRight: '8px' }}></i>Email</h4>
            <p style={{ color: 'var(--grey)' }}>info@benichem.co.uk</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ color: 'var(--navy)', marginBottom: '8px' }}><i className="fas fa-clock" style={{ color: 'var(--blue)', marginRight: '8px' }}></i>Office Hours</h4>
            <p style={{ color: 'var(--grey)', lineHeight: 1.6 }}>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
