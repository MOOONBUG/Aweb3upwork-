import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * How it works: three numbered steps in plain language.
 * Text is read from `t.howItWorks` for the active locale.
 */
export default function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how" className="section-padding">
      <div className="container">
        <h2 className="section-title">{t.howItWorks.sectionTitle}</h2>
        <p className="section-lead">{t.howItWorks.sectionLead}</p>
        <div className="steps">
          {t.howItWorks.steps.map((step, index) => (
            <div key={step.id} className="step">
              <div className="step-num">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
