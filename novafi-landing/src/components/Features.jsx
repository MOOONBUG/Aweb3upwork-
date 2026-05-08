/**
 * Features: three highlight cards with simple SVG icons (no extra libraries).
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

const items = [
  {
    title: 'Security-first design',
    body: 'Smart contracts audited and monitored. Your keys stay in your wallet — NovaFi never custodies funds.',
    Icon: IconShield,
  },
  {
    title: 'Fast finality',
    body: 'Purpose-built rollup delivers low latency and predictable fees, so transactions feel instant.',
    Icon: IconBolt,
  },
  {
    title: 'Composable modules',
    body: 'Plug in swaps, lending, and staking through one SDK. Ship products faster with fewer integrations.',
    Icon: IconLayers,
  },
]

export default function Features() {
  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <h2 className="section-title">Why NovaFi</h2>
        <p className="section-lead">
          Everything you need to move value on-chain — without drowning in
          complexity.
        </p>
        <div className="feature-grid">
          {items.map(({ title, body, Icon }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
