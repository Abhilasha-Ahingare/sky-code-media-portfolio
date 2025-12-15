import { Navbar } from "@/components/navbar"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <TestimonialsSection />
      </div>
      <Footer />
    </main>
  )
}
