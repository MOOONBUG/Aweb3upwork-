import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Features: section showcasing key features of the product.
 */
export default function Features() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <h2 className="section-title">{t.features.sectionTitle}</h2>
        <p className="section-lead">{t.features.sectionLead}</p>
        <div className="feature-grid">
          {t.features.items.map((item) => {
            const isActive = openIndex === item.id
            return (
              <div key={item.id} className={`feature-item ${isActive ? 'active' : ''}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isActive ? null : item.id)}
                  aria-expanded={isActive}
                  aria-label={t.features.items[item.id]?.title || 'Title'}
                >
                  {item.title || 'Title'}
                </button>
                <div className={`feature-body ${isActive ? 'visible' : ''}`}>
                  <p>{item.body || 'Body text'}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
