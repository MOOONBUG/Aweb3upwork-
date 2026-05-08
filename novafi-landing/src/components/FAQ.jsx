import { useState } from 'react'

/**
 * FAQ: clickable questions that expand/collapse answers (one open at a time).
 */
const faqs = [
  {
    q: 'Is NovaFi a real company?',
    a: 'NovaFi is a fictional project for this demo landing page. It shows how a Web3 product story could look in React.',
  },
  {
    q: 'Do I need crypto experience?',
    a: 'The UI is designed for beginners: plain language, clear fees, and guided flows. Advanced tools are available when you are ready.',
  },
  {
    q: 'Which wallets are supported?',
    a: 'Any standard EVM wallet works (e.g. MetaMask, Rainbow, Coinbase Wallet). Hardware wallets are supported through browser providers.',
  },
  {
    q: 'Are there fees?',
    a: 'Network fees depend on chain activity. NovaFi charges a small protocol fee on certain vault strategies — always shown before you confirm.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section-padding">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <p className="section-lead">
          Quick answers about NovaFi. Tap a question to read more.
        </p>
        <div className="faq-wrap">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.q}
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
