import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * FAQ: clickable questions that expand/collapse answers (one open at a time).
 * Questions and answers are loaded from `t.faq` for the active language.
 */
export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <h2 className="section-title">{t.faq.sectionTitle}</h2>
        <p className="section-lead">{t.faq.sectionLead}</p>
        <div className="faq-wrap">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.q}
                  <svg
                    className="faq-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className="faq-a">{item.a}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
