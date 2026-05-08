/**
 * Footer: brand blurb, quick links, and placeholder socials.
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              Nova<span>Fi</span>
            </div>
            <p>
              Next-generation DeFi infrastructure — fictional demo for a modern
              Web3 landing experience.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#hero">Privacy (demo)</a>
              </li>
              <li>
                <a href="#hero">Terms (demo)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} NovaFi. Demo project.</span>
          <div className="social-row">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
