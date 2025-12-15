import { Navbar } from "@/components/navbar"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
