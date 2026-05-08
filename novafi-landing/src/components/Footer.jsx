import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Footer: brand blurb, quick links, and placeholder socials.
 * Visible strings use `t.footer` and nav labels so they match the rest of the site.
 */
export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              Nova<span>Fi</span>
            </div>
            <p>{t.footer.tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.product}</h4>
            <ul>
              <li>
                <a href="#features">{t.nav.features}</a>
              </li>
              <li>
                <a href="#roadmap">{t.nav.roadmap}</a>
              </li>
              <li>
                <a href="#faq">{t.nav.faq}</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.legal}</h4>
            <ul>
              <li>
                <a href="#hero">{t.footer.privacy}</a>
              </li>
              <li>
                <a href="#hero">{t.footer.terms}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {year} NovaFi. {t.footer.copyright}
          </span>
          <div className="social-row">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              {t.footer.twitter}
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              {t.footer.discord}
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              {t.footer.github}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
