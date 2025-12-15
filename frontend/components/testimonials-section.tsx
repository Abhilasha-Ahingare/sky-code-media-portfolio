"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Sparkles, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/professional-woman-headshot.png",
    content:
      "Sky Code Media transformed our vision into reality. Their expertise in web development and attention to detail exceeded our expectations. The team delivered a stunning platform that has significantly increased our conversions.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    image: "/professional-asian-man-headshot.png",
    content:
      "Working with Sky Code Media was an absolute pleasure. They understood our requirements perfectly and delivered a mobile app that our users love. Their communication and project management were top-notch.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthHub",
    image: "/professional-woman-latina-headshot.jpg",
    content:
      "The digital marketing strategy developed by Sky Code Media doubled our online presence within months. Their data-driven approach and creative solutions have been instrumental in our growth.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, FinanceFlow",
    image: "/professional-man-tech-headshot.jpg",
    content:
      "The team's technical expertise is remarkable. They built a secure, scalable fintech platform that handles millions of transactions. Their commitment to quality and security is unmatched.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <AnimatedSection id="testimonials" className="bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-200">Client Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient font-[var(--font-display)]">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don&#39;t just take our word for it. Here&#39;s what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-purple-500/20 p-8 md:p-12">
            {/* Quote icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-purple-500/30" />

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-500",
                  index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 absolute inset-0 translate-x-8",
                )}
              >
                <div className="text-center">
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                    &#34;{testimonial.content}&#34;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="rounded-full border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                      : "bg-gray-600 hover:bg-gray-500",
                  )}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="rounded-full border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["TechCorp", "InnovateLab", "GrowthHub", "FinanceFlow", "StartupX"].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 font-[var(--font-display)]">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
