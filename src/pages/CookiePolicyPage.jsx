import { Link } from 'react-router-dom'

export default function CookiePolicyPage() {
  return (
    <main className="main-content" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--navy)', fontSize: '2.5rem', letterSpacing: '2px', marginBottom: '24px' }}>Cookie Policy</h1>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>What Are Cookies?</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.</p>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Types of Cookies We Use</h2>
          <ul style={{ color: 'var(--grey)', lineHeight: 1.7, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '12px' }}><strong>Necessary Cookies:</strong> Essential for the website to function properly. These cannot be disabled.</li>
            <li style={{ marginBottom: '12px' }}><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
            <li style={{ marginBottom: '12px' }}><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>Managing Your Cookies</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>You can manage your cookie preferences at any time. Most web browsers allow you to control cookies through their settings. You can also delete cookies that have already been set.</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--navy)', marginBottom: '12px' }}>More Information</h2>
          <p style={{ color: 'var(--grey)', lineHeight: 1.7 }}>For more information about how we handle your data, please see our <Link to="/privacy" style={{ color: 'var(--blue)' }}>Privacy Policy</Link>.</p>
        </section>
      </div>
    </main>
  )
}
