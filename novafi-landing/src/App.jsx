import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Roadmap from './components/Roadmap.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

/**
 * NovaFi landing page — single-page layout built from section components.
 * Order: Navbar → Hero → Features → How it works → Roadmap → FAQ → Footer
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
