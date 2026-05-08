import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Top navigation: logo, anchor links, language switcher, and primary CTA.
 * On small screens, section links + CTA move into a full-screen drawer.
 */
export default function Navbar() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          Nova<span>Fi</span>
        </a>

        {/* Desktop / tablet: in-page anchors */}
        <nav className="nav-links" aria-label={t.nav.mainNav}>
          <a href="#features">{t.nav.features}</a>
          <a href="#how">{t.nav.howItWorks}</a>
          <a href="#roadmap">{t.nav.roadmap}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>

        {/* Language + primary CTA + mobile menu trigger */}
        <div className="nav-actions">
          <LanguageSwitcher />

          <div className="nav-cta">
            <a href="#hero" className="btn btn-primary">
              {t.nav.launchApp}
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-label={t.nav.toggleMenu}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay: same links as desktop, translated */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <LanguageSwitcher />
        <a href="#features" onClick={closeMenu}>
          {t.nav.features}
        </a>
        <a href="#how" onClick={closeMenu}>
          {t.nav.howItWorks}
        </a>
        <a href="#roadmap" onClick={closeMenu}>
          {t.nav.roadmap}
        </a>
        <a href="#faq" onClick={closeMenu}>
          {t.nav.faq}
        </a>
        <a href="#hero" className="btn btn-primary" onClick={closeMenu}>
          {t.nav.launchApp}
        </a>
      </div>
    </header>
  )
}
