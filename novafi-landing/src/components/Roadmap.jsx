/**
 * Roadmap: fictional quarterly milestones for the NovaFi story.
 */
const phases = [
  {
    label: 'Q1 2026',
    title: 'Foundation',
    bullets: ['Public testnet', 'Wallet SDK alpha', 'Community grants'],
  },
  {
    label: 'Q2 2026',
    title: 'Growth',
    bullets: ['Mainnet launch', 'Liquidity mining', 'Partner integrations'],
  },
  {
    label: 'Q3 2026',
    title: 'Scale',
    bullets: ['Cross-chain bridges', 'Institutional APIs', 'Mobile app beta'],
  },
  {
    label: 'Q4 2026',
    title: 'Governance',
    bullets: ['DAO treasury', 'Token vote live', 'Research roadmap 2027'],
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap section-padding">
      <div className="container">
        <h2 className="section-title">Roadmap</h2>
        <p className="section-lead">
          A transparent path from launch to community-owned protocol.
        </p>
        <div className="roadmap-list">
          {phases.map((phase) => (
            <article key={phase.label} className="roadmap-item">
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
