"use client"

import { useLayoutEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "stagger"
  delay?: number
}

export function AnimatedSection({ children, className, id, animation = "fade-up", delay = 0 }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const element = sectionRef.current
      if (!element) return

      const animations: Record<string, gsap.TweenVars> = {
        "fade-up": { opacity: 0, y: 80 },
        "fade-left": { opacity: 0, x: -80 },
        "fade-right": { opacity: 0, x: 80 },
        scale: { opacity: 0, scale: 0.8 },
        stagger: { opacity: 0, y: 50 },
      }

      const fromVars = animations[animation]

      if (animation === "stagger") {
        gsap.fromTo(element.children, fromVars, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        })
      } else {
        gsap.fromTo(element, fromVars, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [animation, delay])

  return (
    <section ref={sectionRef} id={id} className={cn("py-24", className)}>
      {children}
    </section>
  )
}
