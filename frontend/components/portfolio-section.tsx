"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Sparkles, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = ["All", "Web Apps", "Mobile", "E-commerce", "Branding", "UI/UX"]

const projects = [
  {
    title: "FinTech Dashboard Pro",
    category: "Web Apps",
    description:
      "A comprehensive financial management platform featuring real-time analytics, portfolio tracking, and advanced reporting capabilities for enterprise clients.",
    image: "/fintech-dashboard-dark-mode-purple.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
  },
  {
    title: "HealthCare Connect",
    category: "Mobile",
    description:
      "Full-featured mobile application for patient management, appointment scheduling, telemedicine consultations, and health record management.",
    image: "/healthcare-mobile-app-purple-theme.jpg",
    tags: ["React Native", "Firebase", "AI/ML", "HIPAA"],
  },
  {
    title: "Luxury Fashion Store",
    category: "E-commerce",
    description:
      "Premium e-commerce platform for international luxury fashion brand with advanced filtering, AR try-on, and personalized recommendations.",
    image: "/luxury-ecommerce-website-dark-elegant.jpg",
    tags: ["Next.js", "Stripe", "Sanity CMS", "AR"],
  },
  {
    title: "ProjectFlow SaaS",
    category: "Web Apps",
    description:
      "Enterprise project management and collaboration tool designed for distributed teams with real-time updates and AI-powered insights.",
    image: "/saas-project-management-dashboard-neon.jpg",
    tags: ["Vue.js", "GraphQL", "AWS", "AI"],
  },
  {
    title: "QuickBite Delivery",
    category: "Mobile",
    description:
      "On-demand food delivery application with real-time GPS tracking, smart routing, payment integration, and customer rating system.",
    image: "/food-delivery-app-interface-purple.jpg",
    tags: ["Flutter", "Node.js", "MongoDB", "Maps API"],
  },
  {
    title: "TechVision AI Branding",
    category: "Branding",
    description:
      "Complete brand identity design and strategy for innovative AI startup, including logo, visual system, and marketing collateral.",
    image: "/tech-startup-branding-modern-purple.jpg",
    tags: ["Figma", "Illustrator", "Motion Design", "3D"],
  },
  {
    title: "EduLearn Platform",
    category: "Web Apps",
    description:
      "Interactive online learning platform with video courses, live sessions, progress tracking, and certification management for educators.",
    image: "/education-platform-dashboard-modern.jpg",
    tags: ["React", "Next.js", "Stripe", "Video API"],
  },
  {
    title: "FitTrack Wellness",
    category: "Mobile",
    description:
      "Comprehensive fitness and wellness tracking app with workout plans, nutrition guides, progress analytics, and social features.",
    image: "/fitness-tracking-app-sleek-purple.jpg",
    tags: ["Swift", "Kotlin", "HealthKit", "Firebase"],
  },
  {
    title: "NeoBank Dashboard",
    category: "UI/UX",
    description:
      "Modern banking interface design with focus on user experience, accessibility, and innovative financial management features.",
    image: "/banking-app-ui-design-futuristic.jpg",
    tags: ["Figma", "Design System", "User Testing", "Prototyping"],
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <AnimatedSection id="portfolio" className="bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200 font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-gradient font-[var(--font-display)]">
            Featured Success Stories
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-normal">
            Explore our diverse portfolio of successful projects that showcase our expertise across various industries.
            Each project represents our commitment to excellence, innovation, and delivering measurable results for our
            clients.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white glow-purple"
                  : "text-gray-400 hover:text-white hover:bg-white/10",
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="rounded-full bg-purple-500/80 hover:bg-purple-500 backdrop-blur-sm">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                  <Button size="icon" className="rounded-full bg-pink-500/80 hover:bg-pink-500 backdrop-blur-sm">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-medium text-purple-400 mb-2">{project.category}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-14">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full px-8 py-6 text-base font-medium glow-purple transition-all hover:scale-105">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
