import { useState } from 'react'

/**
 * Top navigation: logo, anchor links to page sections, and a primary CTA.
 * On small screens, links collapse into a simple full-screen menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#hero" className="logo" onClick={closeMenu}>
          Nova<span>Fi</span>
        </a>

        {/* Desktop links */}
        <nav className="nav-links" aria-label="Main">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-cta">
          <a href="#hero" className="btn btn-primary">
            Launch App
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={closeMenu}>
          Features
        </a>
        <a href="#how" onClick={closeMenu}>
          How it works
        </a>
        <a href="#roadmap" onClick={closeMenu}>
          Roadmap
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <a href="#hero" className="btn btn-primary" onClick={closeMenu}>
          Launch App
        </a>
      </div>
    </header>
  )
}
