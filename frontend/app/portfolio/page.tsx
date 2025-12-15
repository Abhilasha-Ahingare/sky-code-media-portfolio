import { Navbar } from "@/components/navbar"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <PortfolioSection />
      </div>
      <Footer />
    </main>
  )
}
