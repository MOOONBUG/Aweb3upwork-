/**
 * Hero: main headline, short pitch, and call-to-action buttons.
 * The card on the right is decorative “dashboard” stats for visual interest.
 */
export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">● Mainnet-ready preview</div>
          <h1>
            DeFi infrastructure that feels{' '}
            <span className="gradient-text">effortless</span>
          </h1>
          <p className="hero-lead">
            NovaFi connects wallets, liquidity, and yield in one secure layer.
            Built for builders and everyday users who want Web3 without the
            friction.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">
              Explore features
            </a>
            <a href="#faq" className="btn btn-ghost">
              Read FAQ
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orb" aria-hidden />
          <div className="hero-card">
            <div className="hero-card-header">Portfolio snapshot</div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">Total value</span>
              <span className="hero-stat-value gradient-text">$42,180</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">Network</span>
              <span className="hero-stat-value">NovaFi L2</span>
            </div>
            <div className="hero-stat-row">
              <span className="hero-stat-label">APY (avg.)</span>
              <span className="hero-stat-value">8.4%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
