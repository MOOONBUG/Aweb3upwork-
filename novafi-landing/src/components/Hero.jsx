import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Hero: main landing page hero section.
 */
export default function Hero() {
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">{t.hero.badge}</div>
          <h1>
            {t.hero.titleBefore}{' '}
            <span className="highlight">{t.hero.titleHighlight}</span>{' '}
            {t.hero.titleAfter}
          </h1>
          <p className="lead">{t.hero.lead}</p>
          <a href="#features" className="btn btn-primary">
            {t.hero.exploreFeatures}
          </a>
          <a href="#faq" className="btn btn-secondary">
            {t.hero.readFaq}
          </a>
        </div>
        <div className="hero-image">
          <img src="/src/assets/hero.png" alt="Hero Image" />
        </div>
      </div>
    </section>
  )
}
