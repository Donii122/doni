import { useState, useEffect } from 'react'

const STORAGE_KEY = 'benichem_cookie_preferences'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setPrefs(JSON.parse(saved))
    } else {
      setShowBanner(true)
    }
  }, [])

  const savePrefs = (newPrefs) => {
    setPrefs(newPrefs)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs))
    setShowBanner(false)
    setShowModal(false)
  }

  const acceptAll = () => savePrefs({ necessary: true, analytics: true, marketing: true })
  const rejectAll = () => savePrefs({ necessary: true, analytics: false, marketing: false })

  if (!showBanner && !showModal) return null

  return (
    <>
      {showBanner && !showModal && (
        <div className="cookie-consent">
          <div className="cc-left">
            <strong>We use cookies</strong>
            <span className="cc-text">We use cookies to improve your experience and analyse site traffic.</span>
          </div>
          <div className="cc-actions">
            <button className="btn btn-primary" onClick={acceptAll} style={{ padding: '8px 20px', fontSize: '13px' }}>Accept All</button>
            <button className="btn btn-outline" onClick={rejectAll} style={{ padding: '8px 20px', fontSize: '13px' }}>Reject All</button>
            <button className="btn btn-outline" onClick={() => setShowModal(true)} style={{ padding: '8px 20px', fontSize: '13px' }}>Manage</button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="cookie-modal open">
          <div className="cookie-modal-backdrop" onClick={() => setShowModal(false)}></div>
          <div className="cookie-modal-content">
            <button className="cookie-modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Cookie Preferences</h2>
            <p>Choose which cookies you want to allow.</p>
            <div className="cookie-list">
              <div className="cookie-item">
                <div className="cookie-item-left">
                  <h3>Necessary</h3>
                  <p>Required for the site to function properly.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked disabled />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="cookie-item">
                <div className="cookie-item-left">
                  <h3>Analytics</h3>
                  <p>Help us understand how visitors use our site.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={prefs.analytics} onChange={e => setPrefs(p => ({ ...p, analytics: e.target.checked }))} />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="cookie-item">
                <div className="cookie-item-left">
                  <h3>Marketing</h3>
                  <p>Used to deliver relevant ads and track campaigns.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" checked={prefs.marketing} onChange={e => setPrefs(p => ({ ...p, marketing: e.target.checked }))} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="cookie-modal-actions">
              <button className="btn btn-primary" onClick={() => savePrefs(prefs)}>Save Preferences</button>
              <button className="btn btn-outline" onClick={acceptAll}>Accept All</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
