"use client"

import { useLayoutEffect, useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, Star, Rocket, ArrowRight, Code2, Cpu, Award } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Blob animations
      gsap.to(blob1Ref.current, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        scale: "random(0.8, 1.2)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gsap.to(blob2Ref.current, {
        x: "random(-30, 30)",
        y: "random(-30, 30)",
        scale: "random(0.9, 1.1)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      gsap.to(blob3Ref.current, {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        scale: "random(0.85, 1.15)",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      // Split text animation for headline
      const headline = headlineRef.current
      if (headline) {
        const text = headline.innerText
        headline.innerHTML = ""
        const words = text.split(" ")

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span")
          wordSpan.className = "inline-block mr-4"

          word.split("").forEach((char) => {
            const charSpan = document.createElement("span")
            charSpan.className = "inline-block char-animate"
            charSpan.innerText = char
            wordSpan.appendChild(charSpan)
          })

          headline.appendChild(wordSpan)
          if (wordIndex < words.length - 1) {
            headline.appendChild(document.createTextNode(" "))
          }
        })

        gsap.fromTo(
          ".char-animate",
          {
            opacity: 0,
            y: 100,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "back.out(1.7)",
            delay: 0.5,
          },
        )
      }

      // Subheading animation
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, delay: 1.5, ease: "power3.out" },
      )

      // Buttons animation
      gsap.fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 2,
          ease: "back.out(1.7)",
        },
      )

      // Floating icons animation
      gsap.fromTo(
        ".floating-icon",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 2.5,
          ease: "back.out(2)",
        },
      )

      // Scroll-out animation - FIXED
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          // Ensure heading doesn't disappear completely
          gsap.to(headlineRef.current, {
            opacity: Math.max(0.2, 1 - progress), // Minimum 20% opacity
            scale: Math.max(0.8, 1 - progress * 0.3), // Minimum 80% scale
            y: progress * -50, // Reduced parallax
            duration: 0.1,
          })
          gsap.to(subheadingRef.current, {
            opacity: Math.max(0.2, 1 - progress),
            y: progress * -30,
            duration: 0.1,
          })
          gsap.to(buttonsRef.current, {
            opacity: Math.max(0.2, 1 - progress),
            y: progress * -20,
            duration: 0.1,
          })
          gsap.to([blob1Ref.current, blob2Ref.current, blob3Ref.current], {
            filter: `blur(${progress * 10}px)`, // Reduced blur
            opacity: Math.max(0.3, 0.5 - progress * 0.3), // Minimum 30% opacity
            duration: 0.1,
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated background blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/40 to-violet-600/40 blur-3xl animate-glow-pulse opacity-50"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500/40 to-rose-500/40 blur-3xl animate-glow-pulse opacity-50"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          animationDelay: "2s",
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl opacity-40"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${mousePosition.y * 0.2}px))`,
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-50" />

      {/* Floating decorative icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles
          className="floating-icon absolute top-[15%] left-[10%] w-6 h-6 text-purple-400/60 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Star
          className="floating-icon absolute top-[20%] right-[15%] w-8 h-8 text-pink-400/60 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Zap
          className="floating-icon absolute bottom-[30%] left-[8%] w-7 h-7 text-violet-400/60 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Rocket
          className="floating-icon absolute bottom-[25%] right-[12%] w-6 h-6 text-fuchsia-400/60 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <Code2
          className="floating-icon absolute top-[40%] left-[5%] w-5 h-5 text-purple-300/50 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <Cpu
          className="floating-icon absolute top-[35%] right-[8%] w-5 h-5 text-pink-300/50 animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      {/* Laser lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/10 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-base text-purple-200 font-medium">Transforming Ideas Into Digital Reality</span>
          <Star className="w-4 h-4 text-pink-400" />
        </div>

        {/* Headline - FIXED: Added initial opacity */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl text-purple-100 font-semibold mb-6 leading-tight font-[var(--font-display)] opacity-100"
          style={{ perspective: "1000px" }}
        >
          Sky Code Media - Building Digital Excellence
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed font-normal opacity-100"
        >
          We specialize in cutting-edge web development, innovative mobile applications, strategic digital marketing,
          and comprehensive branding solutions. Our expert team combines creativity with technology to deliver
          exceptional digital experiences that elevate your brand and drive measurable business growth.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 opacity-100">
          <Button
            size="lg"
            className="group relative px-8 py-6 text-base font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 border-0 rounded-full glow-purple transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-6 text-base font-medium bg-transparent border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 rounded-full transition-all duration-300 hover:scale-105 text-white"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Explore Our Work
            </span>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "200+", label: "Projects Successfully Delivered", icon: Rocket },
            { number: "75+", label: "Satisfied Global Clients", icon: Star },
            { number: "8+", label: "Years of Industry Experience", icon: Award },
            { number: "24/7", label: "Dedicated Support Team", icon: Zap },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  )
}