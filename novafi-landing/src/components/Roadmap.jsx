import { useLanguage } from '../context/LanguageContext.jsx'

/**
 * Roadmap: fictional quarterly milestones for the NovaFi story.
 * Labels and bullets come from `t.roadmap`.
 */
export default function Roadmap() {
  const { t } = useLanguage()

  return (
    <section id="roadmap" className="roadmap section-padding">
      <div className="container">
        <h2 className="section-title">{t.roadmap.sectionTitle}</h2>
        <p className="section-lead">{t.roadmap.sectionLead}</p>
        <div className="roadmap-list">
          {t.roadmap.phases.map((phase) => (
            <article key={phase.id} className="roadmap-item">
              <div className="roadmap-phase">{phase.label}</div>
              <div>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
