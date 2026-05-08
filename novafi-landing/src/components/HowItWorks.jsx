/**
 * How it works: three numbered steps in plain language.
 */
const steps = [
  {
    title: 'Connect your wallet',
    body: 'Use any popular EVM wallet. NovaFi reads balances without moving assets.',
  },
  {
    title: 'Choose a strategy',
    body: 'Pick curated vaults or route liquidity manually — fees are shown upfront.',
  },
  {
    title: 'Earn & withdraw',
    body: 'Rewards accrue continuously. Exit anytime with transparent settlement.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="section-padding">
      <div className="container">
        <h2 className="section-title">How it works</h2>
        <p className="section-lead">
          Three steps from zero to yield. No jargon required.
        </p>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
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
