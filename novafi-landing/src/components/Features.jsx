import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Features: three highlight cards with simple SVG icons (no extra libraries).
 * Copy comes from `t.features` so it follows the active language.
 */
function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Matches each translation item `id` to its icon (same order as English copy). */
const iconsById = {
  security: IconShield,
  speed: IconBolt,
  modules: IconLayers,
}

export default function Features() {
  const { t } = useLanguage()

  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <h2 className="section-title">{t.features.sectionTitle}</h2>
        <p className="section-lead">{t.features.sectionLead}</p>
        <div className="feature-grid">
          {t.features.items.map((item) => {
            const Icon = iconsById[item.id]
            return (
              <article key={item.id} className="feature-card">
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
