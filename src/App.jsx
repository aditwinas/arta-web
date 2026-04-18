import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ManagementSection from './components/ManagementSection'
import InvestorSection from './components/InvestorSection'
import PortfolioSection from './components/PortfolioSection'
import TeamSection from './components/TeamSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <ManagementSection />
        <InvestorSection />
        <PortfolioSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
