import { Navbar } from "@/components/navbar"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <BlogSection />
      </div>
      <Footer />
    </main>
  )
}
