import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Hero: main headline, short pitch, and call-to-action buttons.
 * The card on the right is decorative “dashboard” stats for visual interest.
 */
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">{t.hero.badge}</div>
          <h1>
            {t.hero.titleBefore}{' '}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">
              {t.hero.exploreFeatures}
            </a>
            <a href="#faq" className="btn btn-ghost">
              {t.hero.readFaq}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb" aria-hidden />
          <div className="hero-card">
            <div className="hero-card-header">{t.hero.cardHeader}</div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">{t.hero.statTotal}</span>
              <span className="hero-stat-value gradient-text">
                {t.hero.statTotalValue}
              </span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">{t.hero.statNetwork}</span>
              <span className="hero-stat-value">{t.hero.statNetworkValue}</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">{t.hero.statApy}</span>
              <span className="hero-stat-value">{t.hero.statApyValue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
