import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <main className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2.5rem', letterSpacing: '2px', marginBottom: '24px' }}>Privacy Policy</h1>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Information We Collect</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>We collect information you provide directly to us, such as when you place an order, create an account, subscribe to our newsletter, or contact us. This may include your name, email address, postal address, phone number, and payment information.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>How We Use Your Information</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>We use the information we collect to process transactions, send you order confirmations, respond to your inquiries, and improve our services. We may also use your information to send promotional communications with your consent.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Cookies &amp; Tracking</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>We use cookies and similar tracking technologies to track activity on our website and hold certain information. See our <Link to="/cookie-policy" style={{ color: 'var(--blue)' }}>Cookie Policy</Link> for more details.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Your Rights</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>You have the right to access, correct, or delete your personal data. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Data Sharing &amp; Retention</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>We do not sell your personal data to third parties. We may share information with service providers who assist us in operating our website and conducting our business. We retain your data only for as long as necessary to fulfill the purposes outlined in this policy.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Contact Us</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>If you have questions about this privacy policy, please <Link to="/contact" style={{ color: 'var(--blue)' }}>contact us</Link>.</p>
        </section>
      </div>
    </main>
  )
}
