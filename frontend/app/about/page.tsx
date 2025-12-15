import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
